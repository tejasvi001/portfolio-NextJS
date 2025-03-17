"use client";

import Image from "next/image";
import Link from "next/link";
import { type Project } from "../data";
import { useState } from "react";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const handleImageError = (src: string) => {
    setImgError(prev => ({ ...prev, [src]: true }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 min-h-screen">
      <Link 
        href="/projects"
        className="inline-flex items-center text-sm mb-8 hover:text-blue-400 transition-colors"
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative h-[400px] rounded-xl overflow-hidden bg-gray-800">
          {!imgError[project.image] ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={() => handleImageError(project.image)}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-xl font-semibold">{project.title}</span>
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-400 mb-8">{project.longDescription}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Project Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-xl overflow-hidden bg-gray-800 shadow-lg"
              >
                {!imgError[screenshot] ? (
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                    onError={() => handleImageError(screenshot)}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm text-gray-400">Screenshot {index + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 