"use client";

import dynamic from 'next/dynamic';
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ComponentType } from 'react';

export function createClientPage(importCallback: () => Promise<ComponentType>) {
  return dynamic(importCallback, {
    loading: () => <LoadingSpinner />,
    ssr: false
  });
} 