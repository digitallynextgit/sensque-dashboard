"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { type ThemeProviderProps as NextThemesProviderProps } from "next-themes";

interface ThemeProviderProps extends NextThemesProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    setMounted(true);

    // Force dark mode - ignore localStorage and system preferences
    const forcedTheme = "dark";

    if (theme !== forcedTheme) {
      setTheme(forcedTheme);
    }

    // Apply theme to document
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(forcedTheme);

    // No need to listen for system theme changes since we're forcing dark mode
  }, [setTheme, theme]);

  useEffect(() => {
    if (!mounted) return;

    // Apply dark theme to document (forced)
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("dark");

    // Add CSS custom properties for smooth transitions
    root.style.setProperty(
      "--theme-transition",
      "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    );
  }, [mounted]);

  if (!mounted) {
    return (
      <NextThemesProvider
        defaultTheme="dark"
        storageKey="dashboard-storage"
        {...props}
      >
        <div className="min-h-screen bg-background">{children}</div>
      </NextThemesProvider>
    );
  }

  return (
    <NextThemesProvider
      defaultTheme="dark"
      storageKey="dashboard-storage"
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="min-h-screen transition-colors duration-300"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </NextThemesProvider>
  );
}