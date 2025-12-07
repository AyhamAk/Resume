'use client';

import { useState, useEffect } from 'react';
import type { GuideSection } from '../guideTypes';

export function useGuideDialogue(currentSection: GuideSection) {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [shownMessages, setShownMessages] = useState<Set<string>>(new Set());

  const messages: Record<GuideSection, string> = {
    hero: "Welcome! Let me guide you through my work.",
    about: "Get to know me better here.",
    skills: "Here are the technologies I work with.",
    projects: "Check out what I've built.",
    experience: "See my professional journey.",
    contact: "Let's connect!"
  };

  useEffect(() => {
    const messageKey = currentSection;

    // Don't show same message twice
    if (shownMessages.has(messageKey)) return;

    const message = messages[currentSection];
    if (message) {
      setCurrentMessage(message);
      setShownMessages(prev => new Set(prev).add(messageKey));

      // Hide after 4 seconds
      const timeout = setTimeout(() => setCurrentMessage(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [currentSection]);

  return currentMessage;
}
