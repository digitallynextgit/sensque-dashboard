"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  Search,
  Bell,
  Settings,
  LogOut,
  User as UserIcon,
  ChevronDown
} from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { toggleSidebar } = useSidebar();
  const { user, logout } = useAuth();
  const [searchValue, setSearchValue] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{ id: string; title: string; type: string; href: string; description: string }>>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "New user registered",
      message: "John Doe has joined your organization",
      time: "2 minutes ago",
      type: "user",
      unread: true
    },
    {
      id: 2,
      title: "Project completed",
      message: "TestGen AI project has been completed successfully",
      time: "1 hour ago",
      type: "success",
      unread: true
    },
    {
      id: 3,
      title: "System maintenance",
      message: "Scheduled maintenance will begin at 2:00 AM",
      time: "3 hours ago",
      type: "warning",
      unread: false
    },
    {
      id: 4,
      title: "New feature available",
      message: "UI/UX AI tools are now available in your dashboard",
      time: "1 day ago",
      type: "info",
      unread: false
    }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      // Close search dropdown if clicking outside
      if (showSearchResults && !target.closest('.search-container')) {
        setShowSearchResults(false);
      }

      // Close notifications dropdown if clicking outside
      if (showNotifications && !target.closest('.notifications-container')) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearchResults, showNotifications]);

  const unreadCount = notifications.filter(n => n.unread).length;

  // Default search suggestions for better UX
  const defaultSuggestions = [
    { id: "1", title: "Dashboard Overview", type: "page", href: "/dashboard", description: "View your main dashboard" },
    { id: "2", title: "User Management", type: "page", href: "/users", description: "Manage users and permissions" },
    { id: "3", title: "TestGen AI", type: "feature", href: "/testgen-ai", description: "AI-powered test generation" },
    { id: "4", title: "UI/UX AI", type: "feature", href: "/uiux-ai", description: "AI-assisted design tools" },
    { id: "5", title: "AutoPilot", type: "feature", href: "/autopilot", description: "Automated testing workflows" },
    { id: "6", title: "Analytics", type: "page", href: "/analytics", description: "View detailed analytics" }
  ];

  // Mock search functionality
  const handleSearch = (query: string) => {
    setSearchValue(query);

    if (query.trim() === "") {
      setSearchResults(defaultSuggestions);
      setShowSearchResults(true);
      return;
    }

    // Mock search results - in a real app, this would be an API call
    const mockResults = [
      { id: "1", title: "Dashboard Overview", type: "page", href: "/dashboard", description: "View your main dashboard" },
      { id: "2", title: "User Management", type: "page", href: "/users", description: "Manage users and permissions" },
      { id: "3", title: "Settings", type: "page", href: "/settings", description: "Application settings" },
      { id: "4", title: "TestGen AI", type: "feature", href: "/testgen-ai", description: "AI-powered test generation" },
      { id: "5", title: "UI/UX AI", type: "feature", href: "/uiux-ai", description: "AI-assisted design tools" },
      { id: "6", title: "GenAI Testing", type: "feature", href: "/genai-testing", description: "Generative AI testing tools" },
      { id: "7", title: "AutoPilot", type: "feature", href: "/autopilot", description: "Automated testing workflows" },
    ].filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(mockResults);
    setShowSearchResults(mockResults.length > 0);
  };

  const handleSearchFocus = () => {
    if (searchValue.trim() === "") {
      setSearchResults(defaultSuggestions);
    }
    setShowSearchResults(true);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Search */}
          <div className="relative hidden md:block search-container">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
              className="w-64 pl-10 pr-4 bg-muted/50 border-0 focus-visible:ring-1"
            />

            {/* Search Results Dropdown */}
            {showSearchResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto"
              >
                {searchResults.length === 0 ? (
                  <div className="px-4 py-3 text-sm text-muted-foreground">
                    No results found
                  </div>
                ) : (
                  searchResults.map((result) => (
                    <a
                      key={result.id}
                      href={result.href}
                      className="block px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0"
                      onClick={() => {
                        setShowSearchResults(false);
                        setSearchValue("");
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${result.type === 'feature' ? 'bg-accent' : 'bg-primary'
                          }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{result.title}</p>
                          <p className="text-xs text-muted-foreground">{result.description}</p>
                          <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-muted rounded-full capitalize">
                            {result.type}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          {/* Mobile Search Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>



          {/* Notifications */}
          <div className="relative notifications-container">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground rounded-full border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-medium">{unreadCount}</span>
                </motion.div>
              )}
            </Button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-lg shadow-lg py-2 z-50 max-h-96 overflow-y-auto"
              >
                <div className="px-4 py-2 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Notifications</h3>
                    {unreadCount > 0 && (
                      <span className="text-xs text-muted-foreground">
                        {unreadCount} unread
                      </span>
                    )}
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-accent/10 transition-colors border-b border-border last:border-b-0 ${notification.unread ? 'bg-accent/5' : ''
                        }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${notification.type === 'success' ? 'bg-accent' :
                            notification.type === 'warning' ? 'bg-yellow-500' :
                              notification.type === 'user' ? 'bg-primary-500' :
                                'bg-gray-500'
                          }`}></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{notification.title}</p>
                            {notification.unread && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-2 border-t border-border">
                  <button className="text-xs text-primary hover:underline">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 px-3"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar} alt={user?.name} className="object-contain bg-white" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  {user?.name?.charAt(0) || <UserIcon className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.role}</p>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-full mt-2 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50"
              >
                <div className="px-4 py-2">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>

                <Separator />

                <div className="py-1">
                  <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                    <UserIcon className="h-4 w-4 mr-3" />
                    Profile
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-accent/10 transition-colors">
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </button>
                </div>

                <Separator />

                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign out
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-6 pb-4">
        <div className="relative search-container">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => searchValue && setShowSearchResults(true)}
            onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
            className="w-full pl-10 pr-4 bg-muted/50 border-0 focus-visible:ring-1"
          />

          {/* Mobile Search Results Dropdown */}
          {showSearchResults && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto"
            >
              {searchResults.map((result) => (
                <a
                  key={result.id}
                  href={result.href}
                  className="block px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0"
                  onClick={() => {
                    setShowSearchResults(false);
                    setSearchValue("");
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">{result.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">{result.type}</p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}