import { Users, ShoppingCart, TrendingUp } from "lucide-react";
import { DashboardStat, ChartDataPoint, User } from "@/types";

// Dashboard Statistics
export const DASHBOARD_STATS: DashboardStat[] = [
  {
    id: "onboarded-users",
    title: "On-Boarded Users",
    value: "5",
    change: 25.0,
    changeType: "increase",
    icon: Users,
    color: "text-blue-600",
  },
  {
    id: "mapped-users",
    title: "Mapped Users",
    value: "2",
    change: 100.0,
    changeType: "increase",
    icon: Users,
    color: "text-green-600",
  },
  {
    id: "projects",
    title: "Projects",
    value: "3",
    change: 50.0,
    changeType: "increase",
    icon: ShoppingCart,
    color: "text-purple-600",
  },
  {
    id: "organizations",
    title: "Organizations",
    value: "2",
    change: 0.0,
    changeType: "increase",
    icon: TrendingUp,
    color: "text-orange-600",
  },
];

// Chart Data for Monthly Registered vs Mapped Users
export const REVENUE_CHART_DATA: ChartDataPoint[] = [
  { name: "Jan", value: 120, revenue: 120, expenses: 80 },
  { name: "Feb", value: 150, revenue: 150, expenses: 90 },
  { name: "Mar", value: 180, revenue: 180, expenses: 100 },
  { name: "Apr", value: 200, revenue: 200, expenses: 120 },
  { name: "May", value: 220, revenue: 220, expenses: 140 },
  { name: "Jun", value: 250, revenue: 250, expenses: 160 },
  { name: "Jul", value: 280, revenue: 280, expenses: 180 },
];

// Monthly Registered vs Mapped Users Data
export const USER_ACTIVITY_DATA: ChartDataPoint[] = [
  {
    name: "JAN",
    value: 55,
    registeredUsers: 55,
    approvedUsers: 45,
    mappedUsers: 30,
  },
  {
    name: "FEB",
    value: 70,
    registeredUsers: 70,
    approvedUsers: 65,
    mappedUsers: 45,
  },
  {
    name: "MAR",
    value: 45,
    registeredUsers: 45,
    approvedUsers: 40,
    mappedUsers: 25,
  },
  {
    name: "APR",
    value: 75,
    registeredUsers: 75,
    approvedUsers: 70,
    mappedUsers: 45,
  },
  {
    name: "MAY",
    value: 35,
    registeredUsers: 35,
    approvedUsers: 30,
    mappedUsers: 15,
  },
  {
    name: "JUN",
    value: 85,
    registeredUsers: 85,
    approvedUsers: 80,
    mappedUsers: 50,
  },
  {
    name: "JUL",
    value: 40,
    registeredUsers: 40,
    approvedUsers: 35,
    mappedUsers: 20,
  },
  {
    name: "AUG",
    value: 75,
    registeredUsers: 75,
    approvedUsers: 70,
    mappedUsers: 40,
  },
];

// Sales by Category Data
export const SALES_BY_CATEGORY: ChartDataPoint[] = [
  { name: "Electronics", value: 35, sales: 15420 },
  { name: "Clothing", value: 25, sales: 11230 },
  { name: "Books", value: 20, sales: 8940 },
  { name: "Home & Garden", value: 15, sales: 6780 },
  { name: "Sports", value: 5, sales: 2340 },
];

// Sales Distribution Data for User Activity Breakdown
export const SALES_CHART_DATA: ChartDataPoint[] = [
  { name: "Active Users", value: 60, fill: "#8884d8" },
  { name: "Inactive Users", value: 25, fill: "#82ca9d" },
  { name: "Pending Users", value: 15, fill: "#ffc658" },
];

// Mock Users Data
export const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    role: "admin",
    status: "active",
    createdAt: "2024-01-15T10:30:00Z",
    lastLogin: "2024-01-10T14:22:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    role: "user",
    status: "active",
    createdAt: "2024-01-12T09:15:00Z",
    lastLogin: "2024-01-09T16:45:00Z",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    role: "moderator",
    status: "inactive",
    createdAt: "2024-01-08T11:20:00Z",
    lastLogin: "2024-01-05T13:30:00Z",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    role: "user",
    status: "pending",
    createdAt: "2024-01-10T15:45:00Z",
  },
  {
    id: "5",
    name: "David Brown",
    email: "david.brown@example.com",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    role: "user",
    status: "active",
    createdAt: "2024-01-05T08:30:00Z",
    lastLogin: "2024-01-08T12:15:00Z",
  },
  {
    id: "6",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=32&h=32&fit=crop&crop=face",
    role: "moderator",
    status: "active",
    createdAt: "2024-01-03T14:20:00Z",
    lastLogin: "2024-01-09T10:45:00Z",
  },
];

// Recent Activities
export const RECENT_ACTIVITIES = [
  {
    id: "1",
    user: "Alex Chen",
    action: "Registered new user account",
    timestamp: "2 minutes ago",
    type: "create",
  },
  {
    id: "2",
    user: "Maria Rodriguez",
    action: "Mapped user to organization",
    timestamp: "5 minutes ago",
    type: "update",
  },
  {
    id: "3",
    user: "System Admin",
    action: "Created new project workspace",
    timestamp: "10 minutes ago",
    type: "create",
  },
];
