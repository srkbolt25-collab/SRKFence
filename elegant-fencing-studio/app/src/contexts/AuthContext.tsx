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
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    // Force fresh login on every visit/reload.
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
    setUser(null);
    setIsAuthLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Always start with a clean auth state before creating a new session.
    setUser(null);
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");

    const allowedEmail = "admin657706@srkfence.com";
    const allowedPassword = "Srk@657706!92";

    if (email.trim().toLowerCase() !== allowedEmail || password !== allowedPassword) {
      return false;
    }

    const userData: User = {
      id: "admin-657706",
      email: allowedEmail,
      name: "Admin User",
    };

    // In-memory auth only (no token/localStorage persistence).
    setUser(userData);
    return true;
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

