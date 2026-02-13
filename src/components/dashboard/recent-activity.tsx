"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RECENT_ACTIVITIES } from "@/constants/mock-data";
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogIn, 
  CheckCircle,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const getActivityIcon = (type: string) => {
  switch (type) {
    case "create":
      return Plus;
    case "update":
      return Edit;
    case "delete":
      return Trash2;
    case "login":
      return LogIn;
    case "complete":
      return CheckCircle;
    default:
      return Activity;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "create":
      return "text-accent-500 bg-accent-500/10";
    case "update":
      return "text-primary-500 bg-primary-500/10";
    case "delete":
      return "text-red-500 bg-red-500/10";
    case "login":
      return "text-purple-500 bg-purple-500/10";
    case "complete":
      return "text-accent-500 bg-accent-500/10";
    default:
      return "text-muted-foreground bg-muted";
  }
};

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Card className="border-[1px] bg-card/50 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {RECENT_ACTIVITIES.map((activity, index) => {
              const Icon = getActivityIcon(activity.type);
              const colorClass = getActivityColor(activity.type);
              
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full",
                    colorClass
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}