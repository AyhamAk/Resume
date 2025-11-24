"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceTimelineProps {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  index?: number;
}

export function ExperienceTimeline({
  title,
  company,
  location,
  period,
  type,
  description,
  technologies,
  index = 0,
}: ExperienceTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-full bg-primary"
        />
      </div>

      {/* Timeline dot */}
      <div className="absolute left-0 top-8 -translate-x-1/2 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          className="w-4 h-4 rounded-full bg-primary border-4 border-background"
        />
      </div>

      <div className="md:ml-8 mb-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div className="flex-1">
                <CardTitle className="text-xl mb-1">{title}</CardTitle>
                <CardDescription className="text-base font-semibold text-primary">
                  {company}
                </CardDescription>
              </div>
              <Badge variant="secondary">{type}</Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {description.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + idx * 0.1 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
