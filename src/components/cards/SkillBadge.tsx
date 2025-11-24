"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  level: number;
  index?: number;
}

export function SkillBadge({ name, level, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <Badge
        variant="secondary"
        className="px-4 py-2 text-sm font-medium cursor-default hover:bg-primary/20 transition-colors"
      >
        {name}
      </Badge>
      <div className="absolute bottom-0 left-0 h-1 bg-primary/30 rounded-full overflow-hidden w-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
          className="h-full bg-primary"
        />
      </div>
    </motion.div>
  );
}
