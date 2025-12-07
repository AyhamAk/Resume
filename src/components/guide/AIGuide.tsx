'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AIOrb } from './AIOrb';
import { SpeechBubble } from './SpeechBubble';
import { RatingModal } from './RatingModal';
import { ChatWindow } from './ChatWindow';
import { useCursorTracking } from '@/lib/hooks/useCursorTracking';
import { useScrollDetection } from '@/lib/hooks/useScrollDetection';
import { useGuideDialogue } from '@/lib/hooks/useGuideDialogue';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

const CLICK_MESSAGES = [
  "Nice to see you exploring! 🎉",
  "Curious about my work? Keep scrolling!",
  "Want to know more? Check out my projects!",
  "Love the enthusiasm! 💫",
  "You're doing great! Keep going!",
  "Enjoying the tour? There's more below!",
];

const PROGRESS_MESSAGES: Record<number, string> = {
  25: "You're 25% through my portfolio!",
  50: "Halfway there! You're doing great! 🎯",
  75: "Almost done! 75% explored!",
  100: "You've seen it all! Amazing! 🎉",
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIGuide() {
  const cursorPosition = useCursorTracking();
  const currentSection = useScrollDetection();
  const currentMessage = useGuideDialogue(currentSection);
  const progress = useScrollProgress();
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [customMessage, setCustomMessage] = useState<string | null>(null);
  const [showRating, setShowRating] = useState(false);
  const [shownProgressMessages, setShownProgressMessages] = useState<Set<number>>(new Set());
  const [hasAskedRating, setHasAskedRating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Chat state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showClickMeHint, setShowClickMeHint] = useState(false);

  // Set mounted flag to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-open chat on first visit with a slight delay
  useEffect(() => {
    if (!mounted || hasAutoOpened) return;

    // Check if user has seen the chat before
    const hasSeenChat = localStorage.getItem('portfolio-chat-seen');

    if (!hasSeenChat) {
      // Wait 2 seconds after page load, then open chat
      const timer = setTimeout(() => {
        setIsChatOpen(true);
        setChatMessages([{
          role: 'assistant',
          content: "Hi! 👋 I'm Ayham's AI assistant. Ask me anything about his skills, projects, or experience!"
        }]);
        setHasAutoOpened(true);
        localStorage.setItem('portfolio-chat-seen', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // If they've seen the chat before, show a "Click me!" hint
      const hintTimer = setTimeout(() => {
        setShowClickMeHint(true);
        // Hide the hint after 5 seconds
        setTimeout(() => setShowClickMeHint(false), 5000);
      }, 3000);

      return () => clearTimeout(hintTimer);
    }
  }, [mounted, hasAutoOpened]);

  // Check localStorage for rating status on mount (only after client-side hydration)
  useEffect(() => {
    if (!mounted) return;
    const rated = localStorage.getItem('portfolio-rated');
    if (rated) {
      setHasAskedRating(true);
    }
  }, [mounted]);

  // Show progress messages
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    for (const milestone of milestones) {
      if (progress >= milestone && !shownProgressMessages.has(milestone)) {
        setCustomMessage(PROGRESS_MESSAGES[milestone]);
        setShownProgressMessages(prev => new Set(prev).add(milestone));
        setIsBubbleVisible(true);

        setTimeout(() => setCustomMessage(null), 4000);
        break;
      }
    }
  }, [progress, shownProgressMessages]);

  // Show rating after user has explored 80% and hasn't rated yet
  useEffect(() => {
    if (progress >= 80 && !hasAskedRating && !showRating) {
      const timeout = setTimeout(() => {
        setShowRating(true);
      }, 3000); // Wait 3 seconds after reaching 80%
      return () => clearTimeout(timeout);
    }
  }, [progress, hasAskedRating, showRating]);

  // Handle orb click - now toggles chat
  const handleOrbClick = () => {
    // Rating modal has priority
    if (showRating) return;

    // Hide the hint when user clicks
    setShowClickMeHint(false);

    if (isChatOpen) {
      setIsChatOpen(false);
    } else {
      setIsChatOpen(true);
      // Initialize with welcome message if first time (and not auto-opened)
      if (chatMessages.length === 0) {
        setChatMessages([{
          role: 'assistant',
          content: "Hi! 👋 I'm Ayham's AI assistant. Ask me anything about his skills, projects, or experience!"
        }]);
      }
    }
  };

  // Handle sending chat messages
  const handleSendMessage = async (userMessage: string) => {
    const newMessages: Message[] = [...chatMessages, { role: 'user', content: userMessage }];
    setChatMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await response.json();

      if (data.success) {
        setChatMessages([...newMessages, { role: 'assistant', content: data.message }]);
      } else {
        setChatMessages([...newMessages, {
          role: 'assistant',
          content: data.error || "Sorry, I encountered an error. Please try again."
        }]);
      }
    } catch (error) {
      console.error('[AIGuide] Chat error:', error);
      setChatMessages([...newMessages, {
        role: 'assistant',
        content: "Connection error. Please check your internet and try again."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle rating
  const handleRate = (rating: number) => {
    localStorage.setItem('portfolio-rated', 'true');
    localStorage.setItem('portfolio-rating', rating.toString());
    setHasAskedRating(true);

    // Keep thank you message visible for 3 seconds, then hide rating modal
    setTimeout(() => {
      setShowRating(false);
    }, 3000);
  };

  // Determine which message to show
  const displayMessage = customMessage || currentMessage;

  // Reset bubble visibility when new message appears
  if (displayMessage && !isBubbleVisible && !showRating) {
    setIsBubbleVisible(true);
  }

  // Keyboard support: Escape key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && currentMessage && isBubbleVisible) {
        setIsBubbleVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentMessage, isBubbleVisible]);

  // Don't render until after hydration to prevent mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50" role="complementary" aria-label="AI Guide">
      {/* Screen reader announcements */}
      {displayMessage && (
        <div className="sr-only" role="status" aria-live="polite">
          {displayMessage}
        </div>
      )}

      <AnimatePresence mode="wait">
        {isChatOpen ? (
          <ChatWindow
            key="chat"
            messages={chatMessages}
            onSendMessage={handleSendMessage}
            onClose={() => setIsChatOpen(false)}
            isTyping={isTyping}
          />
        ) : showRating ? (
          <RatingModal
            key="rating"
            onRate={handleRate}
            onDismiss={() => {
              setShowRating(false);
              setHasAskedRating(true);
              localStorage.setItem('portfolio-rated', 'true');
            }}
          />
        ) : (
          displayMessage && isBubbleVisible && (
            <SpeechBubble
              key="message"
              message={displayMessage}
              onDismiss={() => setIsBubbleVisible(false)}
            />
          )
        )}
      </AnimatePresence>

      {/* Click Me Hint */}
      <AnimatePresence>
        {showClickMeHint && !isChatOpen && !showRating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-24 right-0 pointer-events-none"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="glass px-4 py-2 rounded-full border-2 border-primary/40 shadow-lg"
              >
                <p className="text-sm font-medium text-foreground whitespace-nowrap">
                  💬 Click me to chat!
                </p>
              </motion.div>
              {/* Arrow pointing to orb */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 glass rotate-45 border-r-2 border-b-2 border-primary/40" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AIOrb
        cursorPosition={cursorPosition}
        progress={progress}
        onClick={handleOrbClick}
        isActive={!!displayMessage || showRating || isChatOpen}
      />
    </div>
  );
}
