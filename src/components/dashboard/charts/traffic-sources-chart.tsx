"use client";

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { BarChart3 } from "lucide-react";

const trafficSourcesData = [
  { name: "Organizations", value: 35, fill: "#0891b2" },
  { name: "Projects", value: 45, fill: "#06b6d4" },
  { name: "Users", value: 20, fill: "#fda209" },
];

const chartConfig = {
  organizations: {
    label: "Organizations",
    color: "#0891b2",
  },
  projects: {
    label: "Projects",
    color: "#06b6d4",
  },
  users: {
    label: "Users",
    color: "#fda209",
  },
} satisfies ChartConfig;

export function TrafficSourcesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className=""
    >
      <Card className="bg-card/50 backdrop-blur-sm h-[22vw]">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2 text-foreground">
            <BarChart3 className="h-5 w-5 text-cyan-500" />
            Traffic Sources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficSourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {trafficSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Percentage']}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Custom Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {trafficSourcesData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm text-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}