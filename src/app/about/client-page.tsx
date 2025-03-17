"use client";

import dynamic from 'next/dynamic';
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const AboutContent = dynamic(
  () => import('@/components/about-content'),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
);

export default function AboutClientPage() {
  return <AboutContent />;
} 