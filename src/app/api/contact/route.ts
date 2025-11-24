import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Send an email using a service like SendGrid, AWS SES, or Resend
    // 2. Store the message in a database
    // 3. Send a notification to your email/Slack/Discord

    // For demonstration purposes, we'll just log it and return success
    console.log("Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Simulate a delay to make it feel realistic
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you soon."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
