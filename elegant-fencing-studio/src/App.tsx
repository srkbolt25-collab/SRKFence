import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import WhyUsPage from "./pages/WhyUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ProductsPage from "./pages/admin/ProductsPage";
import TestimonialsPage from "./pages/admin/TestimonialsPage";
import ContentPage from "./pages/admin/ContentPage";
import UsersPage from "./pages/admin/UsersPage";
import AnalyticsPage from "./pages/admin/AnalyticsPage";
import SettingsPage from "./pages/admin/SettingsPage";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={<Navigate to="/admin/dashboard" replace />}
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <DashboardPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <ProductsPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/testimonials"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <TestimonialsPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/content"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <ContentPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <UsersPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AnalyticsPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <SettingsPage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
