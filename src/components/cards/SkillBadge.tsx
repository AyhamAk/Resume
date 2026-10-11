"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  index?: number;
}

export function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <Badge
        variant="secondary"
        className="px-3 py-1.5 text-sm font-medium cursor-default hover:bg-primary/20 hover:text-primary transition-colors"
      >
        {name}
      </Badge>
    </motion.div>
  );
}
