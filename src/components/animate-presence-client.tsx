"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function AnimatePresenceClient({
  children,
  mode = "wait"
}: {
  children: React.ReactNode;
  mode?: "wait" | "sync" | "popLayout";
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode={mode} initial={false}>
      <div key={pathname} className="w-full">
        {children}
      </div>
    </AnimatePresence>
  );
} 