import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Bell,
  Search,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Bot,
  BookOpen,
  Palette,
  TestTube,
  Plane
} from "lucide-react";

// Navigation items for sidebar
export const NAVIGATION_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "testgen-ai",
    label: "SensuQ TestGen AI",
    href: "/testgen-ai",
    icon: Bot,
  },
  {
    id: "userstory-ai",
    label: "SensuQ UserStory AI",
    href: "/userstory-ai",
    icon: BookOpen,
  },
  {
    id: "uiux-ai",
    label: "SensuQ UI/UX AI",
    href: "/uiux-ai",
    icon: Palette,
  },
  {
    id: "genai-testing",
    label: "SensuQ GenAI Testing",
    href: "/genai-testing",
    icon: TestTube,
  },
  {
    id: "autopilot",
    label: "SensuQ AutoPilot",
    href: "/autopilot",
    icon: Plane,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

// Export all icons for easy access
export const ICONS = {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  Search,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  Upload,
  RefreshCw,
};

// App constants
export const APP_CONFIG = {
  name: "SensuQ",
  description: "Modern SensuQ dashboard platform",
  version: "1.0.0",
};

// Theme constants
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

// Animation durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;