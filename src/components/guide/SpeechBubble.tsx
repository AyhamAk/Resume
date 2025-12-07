'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

interface SpeechBubbleProps {
  message: string;
  onDismiss: () => void;
}

export function SpeechBubble({ message, onDismiss }: SpeechBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-full right-0 mb-4 w-72"
    >
      <Card className="glass p-4 relative">
        {/* Close button */}
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
          aria-label="Dismiss message"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Message text */}
        <p className="text-sm text-foreground pr-6">
          {message}
        </p>

        {/* Arrow tail */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card rotate-45 border-r border-b border-border" />
      </Card>
    </motion.div>
  );
}
