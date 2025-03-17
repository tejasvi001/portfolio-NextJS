"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function TransitionOverlay() {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`fixed inset-0 z-50 ${
        theme === "dark" ? "bg-black" : "bg-background"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
} 