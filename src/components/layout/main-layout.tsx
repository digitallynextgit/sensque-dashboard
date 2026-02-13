"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  requiredRole?: 'admin' | 'user' | 'moderator';
}

export function MainLayout({ children, className, requiredRole }: MainLayoutProps) {
  // const { sidebarOpen } = useSidebar();

  return (
    <ProtectedRoute requiredRole={requiredRole}>
      <div className="min-h-screen bg-background">
        {/* Desktop Layout */}
        <div className="hidden lg:flex h-screen">
          {/* Sidebar - Fixed width on desktop */}
          <div className="flex-shrink-0">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            <Header />

            <main className={cn("flex-1 overflow-auto bg-muted/30", className)}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6"
              >
                {children}
              </motion.div>
            </main>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden min-h-screen flex flex-col">
          {/* Sidebar Overlay */}
          <Sidebar />

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className={cn("flex-1 overflow-auto bg-muted/30", className)}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 space-y-6 pb-safe"
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}