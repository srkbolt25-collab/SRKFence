'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem("admin_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { apiClient } = await import("@/lib/api");
      const response = await apiClient.login(email, password);
      
      if (response.token && response.user) {
        const userData: User = {
          id: response.user.id,
          email: response.user.email,
          name: response.user.name,
        };
        setUser(userData);
        localStorage.setItem("admin_user", JSON.stringify(userData));
        localStorage.setItem("admin_token", response.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      // Fallback to demo authentication if API is not available
      if (email === "admin@srkfence.com" && password === "admin123") {
        const userData: User = {
          id: "1",
          email: email,
          name: "Admin User",
        };
        setUser(userData);
        localStorage.setItem("admin_user", JSON.stringify(userData));
        return true;
      }
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

