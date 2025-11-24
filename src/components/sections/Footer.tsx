"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { name: "GitHub", icon: Github, href: personalInfo.github },
  { name: "LinkedIn", icon: Linkedin, href: personalInfo.linkedin },
  { name: "Email", icon: Mail, href: `mailto:${personalInfo.email}` },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              Ayham Klaani
            </motion.div>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer & AI Engineer
            </p>
            <p className="text-sm text-muted-foreground">
              Building innovative solutions with modern technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using
              Next.js, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
