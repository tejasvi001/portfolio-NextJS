"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  demo?: string;
}

export function ProjectCard({ title, description, tags, image, link, demo }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group h-full"
    >
      <div className="h-full bg-card border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <Button asChild variant="default" size="sm">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            {demo && (
              <Button asChild variant="outline" size="sm">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 