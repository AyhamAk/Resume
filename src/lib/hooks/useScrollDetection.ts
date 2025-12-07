'use client';

import { useState, useEffect } from 'react';
import type { GuideSection } from '../guideTypes';

export function useScrollDetection() {
  const [currentSection, setCurrentSection] = useState<GuideSection>('hero');

  useEffect(() => {
    const sections: GuideSection[] = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    // Initial check (wrapped in setTimeout to run after hydration)
    const timeoutId = setTimeout(() => handleScroll(), 0);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return currentSection;
}
