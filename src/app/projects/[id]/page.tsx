import { projects } from '../data';
import { notFound } from 'next/navigation';
import { ProjectDetails } from './ProjectDetails';
import { PageTransition } from '@/components/page-transition';
import { use } from 'react';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <ProjectDetails project={project} />
    </PageTransition>
  );
} 