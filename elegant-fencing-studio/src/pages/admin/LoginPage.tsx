'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Mail, Shield } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1c43] via-[#122456] to-[#183067] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.1)_0%,transparent_50%)]" />
      <Card className="w-full max-w-md relative z-10 shadow-2xl border-white/20 bg-white/95 backdrop-blur-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center shadow-glow">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-extrabold">Admin Login</CardTitle>
          <CardDescription className="text-base">
            Enter your credentials to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@srkfence.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow text-white font-bold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>Demo Credentials:</p>
              <p className="font-mono">admin@srkfence.com / admin123</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;

