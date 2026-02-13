import { LucideIcon } from "lucide-react";

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user" | "moderator";
  status: "active" | "inactive" | "pending";
  createdAt: string;
  lastLogin?: string;
}

// Dashboard stats types
export interface DashboardStat {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  icon: LucideIcon;
  color: string;
}

// Chart data types
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

// Theme types
export type Theme = "light" | "dark";

// Store types
export interface AppStore {
  // Sidebar state
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Theme state
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  // User session
  user: User | null;
  setUser: (user: User | null) => void;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Table types
export interface TableColumn<T = Record<string, unknown>> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
}

export interface TableAction<T = Record<string, unknown>> {
  label: string;
  icon: LucideIcon;
  onClick: (row: T) => void;
  variant?: "default" | "destructive";
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "select" | "textarea" | "switch";
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
}

// Authentication types
export interface AuthUser {
  id: string;
  username: string;
  email: string;
  role: "admin" | "user" | "moderator";
  name: string;
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  register: (userData: Omit<AuthUser, 'id' | 'createdAt' | 'lastLogin'> & { password: string }) => Promise<boolean>;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}