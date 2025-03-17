"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import Loader from "@/components/loader";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/page-transition";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresenceClient } from "@/components/animate-presence-client";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="flex-1 relative z-30">
            <AnimatePresenceClient>
              <PageTransition>{children}</PageTransition>
            </AnimatePresenceClient>
          </main>
          <Footer />
          <Toaster />
        </>
      )}
    </ThemeProvider>
  );
} 