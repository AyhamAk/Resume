"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Reset to "All" when component mounts to avoid stale state
  useEffect(() => {
    setSelectedCategory("All");
  }, []);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Debug: Log if projects are empty
  if (projects.length === 0) {
    console.warn("No projects loaded!");
  }

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
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A collection of my work showcasing expertise in AI automation, web development,
              and enterprise solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                No projects found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
