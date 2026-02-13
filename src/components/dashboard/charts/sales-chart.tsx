"use client";

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { SALES_BY_CATEGORY } from "@/constants/mock-data";

const chartConfig = {
  books: {
    label: "Books",
    color: "hsl(var(--chart-1))",
  },
  clothing: {
    label: "Clothing",
    color: "hsl(var(--chart-2))",
  },
  homeGarden: {
    label: "Home & Garden",
    color: "hsl(var(--chart-3))",
  },
  sports: {
    label: "Sports",
    color: "hsl(var(--chart-4))",
  },
  electronics: {
    label: "Electronics",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Sales by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <PieChart>
              <Pie
                data={SALES_BY_CATEGORY}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(props: { name: string; percent: number }) => {
                  const { name, percent } = props;
                  return `${name} ${(percent * 100).toFixed(0)}%`;
                }}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {SALES_BY_CATEGORY.map((entry, index) => {
                  const configKey = Object.keys(chartConfig)[index % Object.keys(chartConfig).length];
                  return (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`var(--color-${configKey})`} 
                    />
                  );
                })}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}