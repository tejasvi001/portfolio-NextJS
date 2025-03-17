"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useToast } from "@/hooks/use-toast";
import { useSound } from "@/hooks/use-sound";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { toast } = useToast();
  const { play: playToggleSound } = useSound();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    playToggleSound();
    
    if (newTheme === "light") {
      toast({
        title: "☀️ Light Mode Activated",
        description: "Light attracts bugs! 🐛",
        duration: 1500,
        className: "bg-white border-2",
      });
    }
  };

  if (!mounted) {
    return (
      <div className="w-[64px] h-[32px] bg-gray-200/50 dark:bg-gray-800 rounded-full p-1">
        <div className="w-[24px] h-[24px] bg-white dark:bg-gray-700 rounded-full shadow-sm" />
      </div>
    );
  }

  return (
    <button
      className="relative inline-flex h-[32px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200/50 dark:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
      onClick={handleThemeChange}
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          theme === "dark" ? "translate-x-[32px]" : "translate-x-0"
        } pointer-events-none flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-lg ring-0 transition-transform`}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-blue-500" />
        ) : (
          <Sun className="h-4 w-4 text-orange-500" />
        )}
      </span>
    </button>
  );
} 