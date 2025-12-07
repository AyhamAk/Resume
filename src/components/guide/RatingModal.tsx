'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, X } from 'lucide-react';
import { useState } from 'react';

interface RatingModalProps {
  onRate: (rating: number) => void;
  onDismiss: () => void;
}

export function RatingModal({ onRate, onDismiss }: RatingModalProps) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRate = (rating: number) => {
    setSelectedRating(rating);
    setTimeout(() => {
      onRate(rating);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-full right-0 mb-4 w-80"
    >
      <Card className="glass p-6 relative">
        {/* Close button */}
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
          aria-label="Dismiss rating"
        >
          <X className="w-4 h-4" />
        </button>

        {!selectedRating ? (
          <>
            {/* Question */}
            <h3 className="text-lg font-semibold mb-2">How's my portfolio?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your feedback means a lot! Even just one star helps.
            </p>

            {/* Star rating */}
            <div className="flex gap-2 justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRate(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= (hoveredStar || 0)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                </button>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-2"
          >
            <div className="flex gap-1 justify-center mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= selectedRating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <p className="text-lg font-semibold mb-1">Thank you!</p>
            <p className="text-sm text-muted-foreground">
              I appreciate your feedback! 🙏
            </p>
          </motion.div>
        )}

        {/* Arrow tail */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card rotate-45 border-r border-b border-border" />
      </Card>
    </motion.div>
  );
}
