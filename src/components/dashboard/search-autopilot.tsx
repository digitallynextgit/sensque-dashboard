"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SearchAutopilot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl overflow-hidden shadow-lg h-64"
      style={{
        backgroundImage: "url('/auto-card.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
        {/* Header Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">SensuQ Autopilot</h2>
          <p className="text-white/90 text-sm leading-relaxed max-w-md">
            SensuQ&apos;s advanced artificial intelligence capabilities 
            elevate your testing processes, providing unparalleled 
            insights, automation
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-start">
          <Button 
            variant="secondary" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-4 py-2 rounded-lg"
          >
            Explore Auto Pilot
          </Button>
        </div>
      </div>
    </motion.div>
  );
}