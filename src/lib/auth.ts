import { AuthUser, LoginCredentials } from "@/types";

// Default users stored in the app
const DEFAULT_USERS: (AuthUser & { password: string })[] = [
  {
    id: "1",
    username: "admin",
    password: "admin123",
    email: "admin@sensuq.com",
    role: "admin",
    name: "Admin User",
    avatar: "/logo.webp",
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  },
  {
    id: "2",
    username: "user",
    password: "user123",
    email: "user@sensuq.com",
    role: "user",
    name: "Regular User",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    username: "moderator",
    password: "mod123",
    email: "moderator@sensuq.com",
    role: "moderator",
    name: "Moderator User",
    createdAt: new Date().toISOString(),
  },
];

// Local storage keys
const STORAGE_KEYS = {
  USERS: "sensuq_users",
  CURRENT_USER: "sensuq_current_user",
  AUTH_TOKEN: "sensuq_auth_token",
} as const;

// Initialize users in localStorage if not exists
export const initializeUsers = (): void => {
  if (typeof window === "undefined") return;

  const existingUsers = localStorage.getItem(STORAGE_KEYS.USERS);
  if (!existingUsers) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
  }
};

// Get all users from localStorage
export const getUsers = (): (AuthUser & { password: string })[] => {
  if (typeof window === "undefined") return DEFAULT_USERS;

  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : DEFAULT_USERS;
};

// Save users to localStorage
export const saveUsers = (users: (AuthUser & { password: string })[]): void => {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

// Authenticate user
export const authenticateUser = (
  credentials: LoginCredentials,
): AuthUser | null => {
  const users = getUsers();
  const user = users.find(
    (u) =>
      u.username === credentials.username &&
      u.password === credentials.password,
  );

  if (user) {
    // Update last login
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, lastLogin: new Date().toISOString() } : u,
    );
    saveUsers(updatedUsers);

    // Remove password from returned user object
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return { ...userWithoutPassword, lastLogin: new Date().toISOString() };
  }

  return null;
};

// Save current user session
export const saveCurrentUser = (user: AuthUser): void => {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  localStorage.setItem(
    STORAGE_KEYS.AUTH_TOKEN,
    `token_${user.id}_${Date.now()}`,
  );
};

// Get current user session
export const getCurrentUser = (): AuthUser | null => {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

  if (user && token) {
    return JSON.parse(user);
  }

  return null;
};

// Clear current user session
export const clearCurrentUser = (): void => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
};

// Register new user
export const registerUser = (
  userData: Omit<AuthUser, "id" | "createdAt" | "lastLogin"> & {
    password: string;
  },
): AuthUser | null => {
  const users = getUsers();

  // Check if username or email already exists
  const existingUser = users.find(
    (u) => u.username === userData.username || u.email === userData.email,
  );

  if (existingUser) {
    return null; // User already exists
  }

  // Create new user
  const newUser: AuthUser & { password: string } = {
    ...userData,
    id: `user_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  // Save to localStorage
  const updatedUsers = [...users, newUser];
  saveUsers(updatedUsers);

  // Return user without password
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);

  return !!(token && user);
};

// Get auth token
export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
};
