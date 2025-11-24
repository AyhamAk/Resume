"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
  category,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              unoptimized={image.endsWith('.gif')}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/20">
                {title.charAt(0)}
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="secondary" className="backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          {github && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {demo && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
