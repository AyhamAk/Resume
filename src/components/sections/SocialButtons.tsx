"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { name: "GitHub", icon: Github, href: personalInfo.github, variant: "outline" as const },
  { name: "LinkedIn", icon: Linkedin, href: personalInfo.linkedin, variant: "outline" as const },
  { name: "Email", icon: Mail, href: `mailto:${personalInfo.email}`, variant: "outline" as const },
];

export function SocialButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button variant={social.variant} size="lg" asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5 mr-2" />
                {social.name}
              </a>
            </Button>
          </motion.div>
        );
      })}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Button variant="default" size="lg" asChild>
          <a href="/cv.pdf" download>
            <Download className="h-5 w-5 mr-2" />
            Download CV
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
