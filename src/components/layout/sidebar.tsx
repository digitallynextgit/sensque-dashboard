"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useSidebar } from "@/store";
import { NAVIGATION_ITEMS, APP_CONFIG } from "@/constants";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen, toggleSidebar } = useSidebar();

  const sidebarVariants = {
    open: {
      width: "280px",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      width: "80px",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const mobileSidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const contentVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        animate={sidebarOpen ? "open" : "closed"}
        className={cn(
          "h-screen bg-card border-r border-border shadow-lg",
          "flex flex-col shrink-0",
          // Desktop: sticky positioning with proper spacing
          "hidden lg:flex lg:sticky lg:top-0 lg:z-auto",
          className
        )}
      >
        {/* Desktop Sidebar Content */}
        <div className="flex items-center justify-between p-4 border-b border-border min-h-[64px]">
          <AnimatePresence mode="wait">
            {sidebarOpen ? (
              <motion.div
                key="logo-full"
                variants={contentVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex items-center space-x-3"
              >
                <Image src="/logo.webp" alt={APP_CONFIG.name} width={200} height={200} className="bg-white rounded-2xl p-2" />
              </motion.div>
            ) : (
              <motion.div
                key="logo-mini"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full flex items-center justify-center mx-auto w-12 h-12"
              >
                {/* <span className="font-bold text-2xl text-primary-foreground">S</span> */}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button - Desktop */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8"
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-10 w-10" />
            ) : (
              <ChevronRight className="h-10 w-10" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link key={item.id} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-[#042d3b] hover:text-accent-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                    !sidebarOpen && "justify-center px-2"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <AnimatePresence>
                    {sidebarOpen && (
                      <motion.span
                        variants={contentVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="font-medium text-sm"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border mt-auto">
          <AnimatePresence>
            {sidebarOpen ? (
              <motion.div
                variants={contentVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="text-xs text-muted-foreground text-center"
              >
                v{APP_CONFIG.version}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-2 h-2 bg-muted rounded-full mx-auto"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <motion.aside
        variants={mobileSidebarVariants}
        animate={sidebarOpen ? "open" : "closed"}
        className={cn(
          "h-screen bg-card border-r border-border shadow-xl",
          "flex flex-col shrink-0 w-80",
          // Mobile: fixed positioning with overlay
          "fixed left-0 top-0 z-50 lg:hidden",
          className
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-border min-h-[64px]">
          <div className="flex items-center space-x-3">
            <Image src="/logo.webp" alt={APP_CONFIG.name} width={200} height={200} className="bg-white rounded-2xl p-2" />
          </div>

          {/* Close Button - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link key={item.id} href={item.href} onClick={() => setSidebarOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Footer */}
        <div className="p-4 border-t border-border mt-auto">
          <div className="text-xs text-muted-foreground text-center">
            v{APP_CONFIG.version}
          </div>
        </div>
      </motion.aside>
    </>
  );
}