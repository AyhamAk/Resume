export type GuideSection = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export type Message = {
  id: string;
  text: string;
  section: GuideSection;
  trigger: 'scroll' | 'hover' | 'time' | 'manual';
  duration: number;
};

export type GuideState = {
  currentSection: GuideSection;
  currentMessage: string | null;
  isVisible: boolean;
  hasInteracted: boolean;
  messageQueue: Message[];
  cursorPosition: { x: number; y: number };
  characterRotation: number;
};
