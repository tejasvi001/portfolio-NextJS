"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.3
      }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </motion.div>
  );
} 