"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-black text-white">
      <div className="content-wrapper flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl group">
          <span className="inline-flex flex-col h-[1.5em] overflow-hidden">
            <span className="animate-text-slide-up">Tejasvi</span>
          </span>
          <span className="inline-flex flex-col h-[1.5em] overflow-hidden ml-2">
            <span className="animate-text-slide-up animation-delay-300">Y</span>
          </span>
          <span className="inline-flex flex-col h-[1.5em] overflow-hidden ml-2">
            <span className="animate-text-slide-up animation-delay-600">Vermani</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80 relative py-1",
                isActive(item.href)
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                  : "text-white/60"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="outline"
            className="ml-2 border-2 hover:bg-accent"
            asChild
          >
            <Link href="/resume/Tejasvi_Resume.pdf" target="_blank">
              Resume
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-black">
          <div className="content-wrapper py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white/80 relative py-1",
                  isActive(item.href)
                    ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                    : "text-white/60"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-2 hover:bg-accent w-full"
              asChild
            >
              <Link href="/resume/Tejasvi_Resume.pdf" target="_blank">
                Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
} 