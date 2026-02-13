"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { USER_ACTIVITY_DATA } from "@/constants/mock-data";
import { BarChart3 } from "lucide-react";

const chartConfig = {
  registeredUsers: {
    label: "Registered Users",
    color: "#fda209", // Yellow accent color for registered users
  },
  approvedUsers: {
    label: "Approved Users", 
    color: "#22d3ee", // Cyan color for approved users
  },
  mappedUsers: {
    label: "Mapped Users",
    color: "#ffb84d", // Light yellow for mapped users
  },
} satisfies ChartConfig;

export function UserActivityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg font-semibold">
              Monthly wise Registered Users Vs Mapped Users
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart
              data={USER_ACTIVITY_DATA}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                className="stroke-muted/20" 
              />
              <XAxis 
                dataKey="name" 
                className="text-xs fill-muted-foreground"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                className="text-xs fill-muted-foreground"
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar
                dataKey="registeredUsers"
                fill={chartConfig.registeredUsers.color}
                radius={[2, 2, 0, 0]}
                name="Registered Users"
              />
              <Bar
                dataKey="approvedUsers"
                fill={chartConfig.approvedUsers.color}
                radius={[2, 2, 0, 0]}
                name="Approved Users"
              />
              <Bar
                dataKey="mappedUsers"
                fill={chartConfig.mappedUsers.color}
                radius={[2, 2, 0, 0]}
                name="Mapped Users"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}