import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildSystemPrompt } from "@/lib/chatContext";

// Rate limiting: Track requests per IP
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per minute
const RATE_WINDOW = 60 * 1000; // 1 minute in milliseconds

// Maximum message length to prevent abuse
const MAX_MESSAGE_LENGTH = 500;
const MAX_CONVERSATION_LENGTH = 10; // Keep last 10 messages only

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Simple rate limiting implementation
 * Returns true if rate limit exceeded
 */
function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);

  if (!record || now > record.resetTime) {
    // New window
    requestCounts.set(identifier, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true; // Rate limit exceeded
  }

  record.count++;
  return false;
}

/**
 * Sanitize user input to prevent injection attacks
 */
function sanitizeInput(text: string): string {
  return text
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, MAX_MESSAGE_LENGTH); // Enforce max length
}


export async function POST(request: Request) {
  try {
    // 1. Validate API key
    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      console.error("[Chat API] GOOGLE_GEMINI_API_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "AI service is temporarily unavailable" },
        {
          status: 503,
          headers: {
            'X-Content-Type-Options': 'nosniff',
          }
        }
      );
    }

    // 2. Rate limiting (using IP or a fallback identifier)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

    if (checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a moment and try again." },
        {
          status: 429,
          headers: {
            'X-Content-Type-Options': 'nosniff',
            'Retry-After': '60'
          }
        }
      );
    }

    // 3. Parse and validate request body
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { success: false, error: "Messages are required" },
        {
          status: 400,
          headers: {
            'X-Content-Type-Options': 'nosniff',
          }
        }
      );
    }

    // 4. Validate and sanitize the latest message
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || lastMessage.role !== 'user' || !lastMessage.content) {
      return NextResponse.json(
        { success: false, error: "Invalid message format" },
        {
          status: 400,
          headers: {
            'X-Content-Type-Options': 'nosniff',
          }
        }
      );
    }

    const sanitizedContent = sanitizeInput(lastMessage.content);

    if (sanitizedContent.length === 0) {
      return NextResponse.json(
        { success: false, error: "Message cannot be empty" },
        {
          status: 400,
          headers: {
            'X-Content-Type-Options': 'nosniff',
          }
        }
      );
    }

    // 5. Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", // Available free tier model
    });

    // 6. Build the full prompt with system context and conversation
    const systemPrompt = buildSystemPrompt();
    const conversationHistory = messages
      .slice(-MAX_CONVERSATION_LENGTH)
      .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n\n');

    const fullPrompt = `${systemPrompt}\n\n---\n\nConversation:\n${conversationHistory}`;

    // 7. Send message to Gemini
    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const aiMessage = response.text();

    // 8. Return successful response
    return NextResponse.json(
      {
        success: true,
        message: aiMessage
      },
      {
        headers: {
          'X-Content-Type-Options': 'nosniff',
        }
      }
    );

  } catch (error: unknown) {
    // Enhanced error logging for debugging
    console.error("[Chat API] Full error:", error);
    if (error instanceof Error) {
      console.error("[Chat API] Error message:", error.message);
      console.error("[Chat API] Error stack:", error.stack);
    }

    // Check for specific Gemini API errors
    if (error instanceof Error) {
      if (error.message.includes('API key') || error.message.includes('API_KEY')) {
        return NextResponse.json(
          { success: false, error: "AI service configuration error" },
          { status: 503 }
        );
      }
      if (error.message.includes('quota') || error.message.includes('rate limit') || error.message.includes('429')) {
        return NextResponse.json(
          { success: false, error: "Service temporarily busy. Please try again in a moment." },
          { status: 429 }
        );
      }
      if (error.message.includes('model') || error.message.includes('not found')) {
        return NextResponse.json(
          { success: false, error: "AI model unavailable. Please try again later." },
          { status: 503 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { success: false, error: "Failed to get AI response. Please try again." },
      {
        status: 500,
        headers: {
          'X-Content-Type-Options': 'nosniff',
        }
      }
    );
  }
}
