import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

interface AppState {
  // Sidebar state
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Theme state
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;

  // User state
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Sidebar state - responsive default: open on desktop, closed on mobile
      sidebarOpen: typeof window !== "undefined" ? window.innerWidth >= 1024 : true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      // Theme state
      theme: "light",
      setTheme: (theme) => {
        set({ theme });
        
        // Apply theme to document if we're on the client
        if (typeof window !== "undefined") {
          const root = window.document.documentElement;
          root.classList.remove("light", "dark");
          root.classList.add(theme);
          
          // Add smooth transition
          root.style.setProperty(
            "--theme-transition",
            "background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          );
        }
      },
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === "light" ? "dark" : "light";
        get().setTheme(newTheme);
      },

      // User state
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "dashboard-storage",
      skipHydration: true,
      partialize: (state) => ({
        theme: state.theme,
        sidebarOpen: state.sidebarOpen,
        user: state.user,
      }),
    }
  )
);

// Initialize theme on client side
export const useThemeInitializer = () => {
  if (typeof window !== "undefined") {
    const store = useAppStore.getState();
    const storedTheme = localStorage.getItem("dashboard-storage");
    
    if (storedTheme) {
      try {
        const parsed = JSON.parse(storedTheme);
        if (parsed.state?.theme) {
          store.setTheme(parsed.state.theme);
        }
      } catch (error) {
        console.warn("Failed to parse stored theme:", error);
      }
    }
  }
};

// Selectors for better performance with proper caching
export const useSidebar = () => {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen);
  const setSidebarOpen = useAppStore((state) => state.setSidebarOpen);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  
  return { sidebarOpen, setSidebarOpen, toggleSidebar };
};

export const useTheme = () => {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  
  return { theme, setTheme, toggleTheme };
};

export const useUser = () => {
  const user = useAppStore((state) => state.user);
  const setUser = useAppStore((state) => state.setUser);
  
  return { user, setUser };
};