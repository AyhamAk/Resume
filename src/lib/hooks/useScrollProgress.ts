'use client';

import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate progress percentage (0-100)
      const totalScrollable = documentHeight - windowHeight;
      const currentProgress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    // Initial check (wrapped in setTimeout to run after hydration)
    const timeoutId = setTimeout(() => handleScroll(), 0);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
}
