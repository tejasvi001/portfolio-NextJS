"use client";

import { Github, Linkedin, Twitter, Globe, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/tejasvi001",
      hoverColor: "hover:text-[#333] dark:hover:text-[#fff]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/tejasvi-vermani",
      hoverColor: "hover:text-[#0077B5]"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/tejasvi6039",
      hoverColor: "hover:text-[#1DA1F2]"
    },
    {
      name: "Codolio",
      icon: Globe,
      url: "https://codolio.com/profile/tejasvi_001",
      hoverColor: "hover:text-primary"
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/tejasvi_001",
      hoverColor: "hover:text-[#FFA116]"
    }
  ];

  return (
    <>
      <Separator className="w-full" />
      <footer className="w-full bg-background text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold mb-3">Let&apos;s work together.</h2>
            <p className="text-lg text-foreground/80 mb-6">
              I&apos;m available for Consultancy & Freelancing.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-background text-foreground hover:bg-accent relative overflow-hidden group px-8 py-4 h-auto border-2 hover:border-primary transition-all duration-300"
            >
              <Link href="/contact" className="font-semibold text-lg flex items-center gap-2 transition-transform group-hover:translate-x-1">
                SAY HELLO
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>

            <div className="flex justify-center gap-8 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${link.hoverColor}`}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 text-sm text-foreground/60">
              <p>© {new Date().getFullYear()} Built by <span className="font-semibold text-foreground">Tejasvi Vermani</span></p>
              <p className="mt-2 flex items-center justify-center gap-1">
                Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> using Next.js
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 