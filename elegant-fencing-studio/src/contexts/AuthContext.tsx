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
  isAuthLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    // Restore auth only when both user and token are present.
    const storedUser = localStorage.getItem("admin_user");
    const storedToken = localStorage.getItem("admin_token");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch {
        localStorage.removeItem("admin_user");
        localStorage.removeItem("admin_token");
      }
    } else {
      localStorage.removeItem("admin_user");
      localStorage.removeItem("admin_token");
    }

    setIsAuthLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Always start with a clean auth state before creating a new session.
    setUser(null);
    setToken(null);
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");

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
        setToken(response.token);
        localStorage.setItem("admin_user", JSON.stringify(userData));
        localStorage.setItem("admin_token", response.token);
        return true;
      }

      localStorage.removeItem("admin_user");
      localStorage.removeItem("admin_token");
      return false;
    } catch (error) {
      console.error("Login error:", error);
      localStorage.removeItem("admin_user");
      localStorage.removeItem("admin_token");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user && !!token,
        isAuthLoading,
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

