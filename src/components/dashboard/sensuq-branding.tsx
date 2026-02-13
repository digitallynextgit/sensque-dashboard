"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function SensuQBranding() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-6 shadow-lg h-64 flex flex-col justify-between"
    >
      {/* Header Section */}
      <main className="flex flex-col lg:flex-row justify-between h-full">
        <div className="lg:w-1/2 w-full">
          <p className="text-muted-foreground text-sm mb-2">
            Built by Advent Global Solutions Inc
          </p>
          <h2 className="text-foreground text-2xl font-bold mb-4">
            SensuQ Dashboard
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Crafted with precision and innovation, this solution is brought to
            you by Advent Global Solutions Inc., a leading provider of cutting-edge
            technology and strategic services.
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex justify-end items-center lg:w-1/2 w-full">
          <Image src="/logo.webp" alt="SensuQ Logo" width={1200} height={100} className="w-48 h-16 bg-contain bg-white rounded-2xl p-3" />
        </div>
      </main>
    </motion.div>
  );
}