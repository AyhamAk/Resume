'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface AIOrbProps {
  cursorPosition: { x: number; y: number };
  progress: number;
  onClick?: () => void;
  isActive?: boolean;
}

export function AIOrb({ cursorPosition, progress, onClick, isActive = false }: AIOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [gridRotation, setGridRotation] = useState(0);
  const [scanlinePosition, setScanlinePosition] = useState(0);

  // Get colors based on progress
  const getColors = (progress: number) => {
    if (progress < 20) return { primary: '#3b82f6', secondary: '#60a5fa', glow: 'rgba(59, 130, 246, 0.4)' }; // blue
    if (progress < 40) return { primary: '#a855f7', secondary: '#c084fc', glow: 'rgba(168, 85, 247, 0.4)' }; // purple
    if (progress < 60) return { primary: '#ec4899', secondary: '#f472b6', glow: 'rgba(236, 72, 153, 0.4)' }; // pink
    if (progress < 80) return { primary: '#f43f5e', secondary: '#fb7185', glow: 'rgba(244, 63, 94, 0.4)' }; // rose
    return { primary: '#22c55e', secondary: '#4ade80', glow: 'rgba(34, 197, 94, 0.4)' }; // green
  };

  const colors = getColors(progress);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800);
    onClick?.();
  };

  // Cursor tracking
  useEffect(() => {
    if (!orbRef.current) return;
    const rect = orbRef.current.getBoundingClientRect();
    const orbX = rect.left + rect.width / 2;
    const orbY = rect.top + rect.height / 2;
    const angle = Math.atan2(cursorPosition.y - orbY, cursorPosition.x - orbX) * (180 / Math.PI);
    setRotation(angle);
  }, [cursorPosition]);

  // Auto-rotate grid (3D effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setGridRotation(prev => (prev + (isClicked || isActive ? 2 : 0.5)) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isClicked, isActive]);

  // Scanline animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition(prev => (prev + 2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={orbRef} className="relative">
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Main holographic orb container */}
        <motion.button
          onClick={handleClick}
          className="w-20 h-20 md:w-20 md:h-20 rounded-full relative overflow-hidden cursor-pointer"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${colors.primary}40, ${colors.secondary}20, transparent)`,
            backdropFilter: 'blur(8px)',
            border: `2px solid ${colors.primary}60`,
            boxShadow: `0 0 30px ${colors.glow}, inset 0 0 20px ${colors.glow}`
          }}
          animate={
            isClicked
              ? {
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    `0 0 30px ${colors.glow}`,
                    `0 0 60px ${colors.primary}, 0 0 90px ${colors.glow}`,
                    `0 0 30px ${colors.glow}`
                  ]
                }
              : {}
          }
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="AI Guide - Holographic Interface"
        >
          {/* 3D Grid layers (Back to front for depth) */}
          <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
            {/* Background layer (furthest) */}
            <motion.div
              className="absolute inset-0"
              style={{
                transform: `rotateY(${gridRotation * 0.3}deg) rotateX(${rotation * 0.1}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-20">
                {/* Circular grid */}
                {[...Array(6)].map((_, i) => (
                  <circle
                    key={`bg-circle-${i}`}
                    cx="40"
                    cy="40"
                    r={10 + i * 8}
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="0.5"
                    opacity={0.3}
                  />
                ))}
                {/* Radial lines */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = 40 + Math.cos(angle) * 35;
                  const y = 40 + Math.sin(angle) * 35;
                  return (
                    <line
                      key={`bg-line-${i}`}
                      x1="40"
                      y1="40"
                      x2={x}
                      y2={y}
                      stroke={colors.primary}
                      strokeWidth="0.5"
                      opacity={0.2}
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Middle layer (rotating faster) */}
            <motion.div
              className="absolute inset-0"
              style={{
                transform: `rotateY(${gridRotation * 0.6}deg) rotateX(${rotation * 0.2}deg) scale(0.9)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-40">
                {/* Hexagonal pattern */}
                {[...Array(3)].map((_, ring) =>
                  [...Array(6)].map((_, i) => {
                    const angle = (i * 60 * Math.PI) / 180 + (ring % 2 ? 30 : 0);
                    const radius = 15 + ring * 10;
                    const x = 40 + Math.cos(angle) * radius;
                    const y = 40 + Math.sin(angle) * radius;
                    return (
                      <motion.circle
                        key={`mid-hex-${ring}-${i}`}
                        cx={x}
                        cy={y}
                        r="3"
                        fill={colors.secondary}
                        opacity={0.6}
                        animate={{
                          opacity: isClicked || isActive ? [0.6, 1, 0.6] : 0.6,
                          scale: isClicked || isActive ? [1, 1.3, 1] : 1
                        }}
                        transition={{
                          duration: 0.5,
                          delay: (ring * 6 + i) * 0.05,
                          repeat: isClicked || isActive ? Infinity : 0
                        }}
                      />
                    );
                  })
                )}
              </svg>
            </motion.div>

            {/* Front layer (fastest rotation) */}
            <motion.div
              className="absolute inset-0"
              style={{
                transform: `rotateY(${gridRotation}deg) rotateX(${rotation * 0.3}deg) scale(0.8)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-60">
                {/* Core geometric pattern */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const x = 40 + Math.cos(angle) * 20;
                  const y = 40 + Math.sin(angle) * 20;
                  return (
                    <g key={`front-${i}`}>
                      <motion.line
                        x1="40"
                        y1="40"
                        x2={x}
                        y2={y}
                        stroke={colors.primary}
                        strokeWidth="1"
                        opacity={0.8}
                        animate={{
                          opacity: isClicked || isActive ? [0.8, 1, 0.8] : 0.8
                        }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.05,
                          repeat: isClicked || isActive ? Infinity : 0
                        }}
                      />
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="2"
                        fill={colors.primary}
                        animate={{
                          scale: isClicked || isActive ? [1, 1.5, 1] : 1,
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          repeat: Infinity
                        }}
                      />
                    </g>
                  );
                })}

                {/* Central core */}
                <motion.circle
                  cx="40"
                  cy="40"
                  r="8"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="2"
                  animate={{
                    r: isClicked || isActive ? [8, 12, 8] : [8, 9, 8],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity
                  }}
                />
                <circle cx="40" cy="40" r="4" fill={colors.primary} opacity="0.9" />
                <circle cx="40" cy="40" r="2" fill="white" opacity="0.9" />
              </svg>
            </motion.div>

            {/* Data stream particles (parallax effect) */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const speed = 0.5 + (i % 3) * 0.3; // Different speeds for depth
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    background: colors.secondary,
                    boxShadow: `0 0 4px ${colors.primary}`
                  }}
                  animate={{
                    x: [0, Math.cos(angle + gridRotation * 0.01) * 35],
                    y: [0, Math.sin(angle + gridRotation * 0.01) * 35],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 2 / speed,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Holographic scanlines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute w-full h-0.5"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.primary}80, transparent)`,
                  top: `${scanlinePosition}%`,
                  boxShadow: `0 0 8px ${colors.primary}`
                }}
              />
            </div>

            {/* Glitch effect on click */}
            {isClicked && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0, 0.2, 0],
                  x: [0, 2, -2, 1, 0],
                  y: [0, -1, 1, -1, 0]
                }}
                transition={{ duration: 0.4 }}
                style={{
                  background: `linear-gradient(45deg, ${colors.primary}40, ${colors.secondary}40)`,
                  mixBlendMode: 'screen'
                }}
              />
            )}

            {/* Corner markers (holographic UI) */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => {
              const positions = {
                'top-left': 'top-1 left-1',
                'top-right': 'top-1 right-1',
                'bottom-left': 'bottom-1 left-1',
                'bottom-right': 'bottom-1 right-1'
              };
              return (
                <motion.div
                  key={pos}
                  className={`absolute ${positions[pos as keyof typeof positions]} w-2 h-2`}
                  style={{
                    borderTop: pos.includes('top') ? `1px solid ${colors.primary}` : 'none',
                    borderBottom: pos.includes('bottom') ? `1px solid ${colors.primary}` : 'none',
                    borderLeft: pos.includes('left') ? `1px solid ${colors.primary}` : 'none',
                    borderRight: pos.includes('right') ? `1px solid ${colors.primary}` : 'none'
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: ['top-left', 'bottom-right'].includes(pos) ? 0 : 1
                  }}
                />
              );
            })}
          </div>

          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${colors.primary}40`,
              boxShadow: `0 0 20px ${colors.glow}`
            }}
            animate={{
              scale: isClicked || isActive ? [1, 1.05, 1] : 1,
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: isClicked || isActive ? 0.3 : 2,
              repeat: Infinity
            }}
          />
        </motion.button>

        {/* Orbiting holographic data nodes (outside orb) */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const orbitRadius = 45;
          return (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-2 h-2"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: -4,
                marginTop: -4
              }}
              animate={{
                x: [
                  Math.cos(angle + gridRotation * 0.02) * orbitRadius * 0.8,
                  Math.cos(angle + gridRotation * 0.02) * orbitRadius,
                  Math.cos(angle + gridRotation * 0.02) * orbitRadius * 0.8
                ],
                y: [
                  Math.sin(angle + gridRotation * 0.02) * orbitRadius * 0.8,
                  Math.sin(angle + gridRotation * 0.02) * orbitRadius,
                  Math.sin(angle + gridRotation * 0.02) * orbitRadius * 0.8
                ],
                opacity: [0.4, 0.9, 0.4],
                scale: isClicked ? [1, 1.8, 1] : [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: colors.primary,
                  boxShadow: `0 0 8px ${colors.primary}, 0 0 4px ${colors.secondary}`
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
