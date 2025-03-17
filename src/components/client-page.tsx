"use client";

import dynamic from 'next/dynamic';
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export function createClientPage(importCallback: () => Promise<any>) {
  return dynamic(importCallback, {
    loading: () => <LoadingSpinner />,
    ssr: false
  });
} 