"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/cards/SkillBadge";
import { SocialButtons } from "@/components/sections/SocialButtons";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { personalInfo, skills } from "@/lib/data";
import {
  Code2,
  Rocket,
  Users,
  Lightbulb,
  Target,
  Heart,
  Download,
  Globe,
  MessageSquare,
} from "lucide-react";

const personalityTraits = [
  {
    icon: Code2,
    title: "Problem Solver",
    description: "I love tackling complex challenges and finding elegant solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Constantly learning new technologies and best practices",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Effective collaborator who values communication and teamwork",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinker",
    description: "Bringing innovative ideas and fresh perspectives to projects",
  },
];

const interests = [
  "AI & Machine Learning",
  "Web Development",
  "Open Source",
  "Tech Blogging",
  "Mentoring",
  "Code Reviews",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get to know more about my background, skills, and what drives me as a developer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-3xl">Who I Am</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">{personalInfo.bio}</p>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {personalInfo.languages.map((lang, index) => (
                        <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Personality Traits */}
      <AnimatedSection className="bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Defines Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalityTraits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-xl mb-2">{trait.title}</h3>
                          <p className="text-muted-foreground">{trait.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Overview */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="capitalize flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {skillList.map((skill, index) => (
                        <SkillBadge
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          index={index}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Interests & Hobbies */}
      <AnimatedSection className="bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Interests & Passions</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-base px-4 py-2 cursor-default hover:bg-primary/20 transition-colors"
                      >
                        <Heart className="h-4 w-4 mr-2 text-primary" />
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
              <CardContent className="pt-12 pb-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <MessageSquare className="h-8 w-8 text-primary" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <SocialButtons />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
