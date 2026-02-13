'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, AuthUser, LoginCredentials } from '@/types';
import {
  authenticateUser,
  clearCurrentUser,
  getCurrentUser,
  initializeUsers,
  registerUser,
  saveCurrentUser,
} from '@/lib/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize users and check for existing session
    initializeUsers();
    
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setIsAuthenticated(true);
    }
    
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const authenticatedUser = authenticateUser(credentials);
      
      if (authenticatedUser) {
        setUser(authenticatedUser);
        setIsAuthenticated(true);
        saveCurrentUser(authenticatedUser);
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    clearCurrentUser();
  };

  const register = async (
    userData: Omit<AuthUser, 'id' | 'createdAt' | 'lastLogin'> & { password: string }
  ): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const newUser = registerUser(userData);
      
      if (newUser) {
        setUser(newUser);
        setIsAuthenticated(true);
        saveCurrentUser(newUser);
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false; // User already exists
      }
    } catch (error) {
      console.error('Registration error:', error);
      setIsLoading(false);
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};