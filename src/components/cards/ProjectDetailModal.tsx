'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  features?: string[];
  github?: string;
  demo?: string;
  category: string;
}

export function ProjectDetailModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  technologies,
  features = [],
  github,
  demo,
  category
}: ProjectDetailModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-background border-2 border-primary/20 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Image header */}
                {image && (
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      unoptimized={image.endsWith('.gif')}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="backdrop-blur-sm text-base px-4 py-1">
                        {category}
                      </Badge>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    {title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Features */}
                  {features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                    {github && (
                      <Button asChild size="lg" variant="outline">
                        <a href={github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {demo && (
                      <Button asChild size="lg">
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="ghost" size="lg" onClick={onClose}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
