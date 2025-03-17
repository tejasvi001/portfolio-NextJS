import { projects } from './data';
import Link from 'next/link';
import Image from 'next/image';
import { PageTransition } from "@/components/page-transition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 