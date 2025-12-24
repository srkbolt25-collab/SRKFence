'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Package, MessageSquare, DollarSign, Activity, ShoppingCart, Loader2, Eye, Save } from "lucide-react";
import { apiClient } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const DashboardPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalTestimonials: 0,
    totalEnquiries: 0,
    pendingEnquiries: 0,
  });
  const [recentEnquiries, setRecentEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [metadata, setMetadata] = useState({
    metaTitle: "",
    metaDescription: "",
  });
  const [savingMetadata, setSavingMetadata] = useState(false);

  useEffect(() => {
    loadDashboardData();
    // Load saved metadata from localStorage
    try {
      const saved = localStorage.getItem('siteMetadata');
      if (saved) {
        setMetadata(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading metadata:', error);
    }
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load products
      const productsResponse = await apiClient.getProducts();
      const totalProducts = productsResponse.products?.length || 0;

      // Load testimonials
      const testimonialsResponse = await apiClient.getTestimonials();
      const totalTestimonials = testimonialsResponse.testimonials?.length || 0;

      // Load RFQ enquiries
      const rfqResponse = await apiClient.getRFQs();
      const allEnquiries = rfqResponse.rfqs || [];
      const totalEnquiries = allEnquiries.length;
      const pendingEnquiries = allEnquiries.filter((e: any) => e.status === 'Pending').length;
      
      // Get recent 5 enquiries
      const recent = allEnquiries.slice(0, 5);

      setStats({
        totalProducts,
        totalTestimonials,
        totalEnquiries,
        pendingEnquiries,
      });
      setRecentEnquiries(recent);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    {
      title: "Total Products",
      value: stats.totalProducts.toString(),
      change: "+12%",
      icon: Package,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Testimonials",
      value: stats.totalTestimonials.toString(),
      change: "+8%",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Total Enquiries",
      value: stats.totalEnquiries.toString(),
      change: `${stats.pendingEnquiries} Pending`,
      icon: ShoppingCart,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+23%",
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const recentActivities = [
    { id: 1, action: "New testimonial added", time: "2 minutes ago", type: "testimonial" },
    { id: 2, action: "Product updated", time: "15 minutes ago", type: "product" },
    { id: 3, action: "User registered", time: "1 hour ago", type: "user" },
    { id: 4, action: "Content updated", time: "2 hours ago", type: "content" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                    <span className="text-2xl font-bold">-</span>
                  </div>
                ) : (
                  <>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      {stat.title === "Total Enquiries" ? (
                        <>
                          <span className="text-orange-500">{stat.change}</span>
                        </>
                      ) : (
                        <>
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-green-500">{stat.change}</span>
                          <span>from last month</span>
                        </>
                      )}
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Activities */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Enquiries</CardTitle>
            <CardDescription>Latest request for quotations</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center h-[300px]">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : recentEnquiries.length === 0 ? (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No enquiries yet</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentEnquiries.map((enquiry) => (
                      <TableRow key={enquiry.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{enquiry.fullName}</p>
                            <p className="text-sm text-muted-foreground">{enquiry.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>{enquiry.companyName}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{enquiry.totalItems} items</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={enquiry.status === 'Pending' ? 'default' : 'secondary'}
                            className={
                              enquiry.status === 'Pending'
                                ? 'bg-orange-100 text-orange-800'
                                : 'bg-green-100 text-green-800'
                            }
                          >
                            {enquiry.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {enquiry.submittedAt
                            ? format(new Date(enquiry.submittedAt), 'MMM dd, yyyy')
                            : 'N/A'}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push(`/admin/enquiries/${enquiry.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="flex justify-end pt-2">
                  <Button
                    variant="outline"
                    onClick={() => router.push('/admin/enquiries')}
                  >
                    View All Enquiries
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Site Metadata Management */}
      <Card>
        <CardHeader>
          <CardTitle>Site Metadata (SEO)</CardTitle>
          <CardDescription>Manage meta title and description for the website</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={async (e) => {
            e.preventDefault();
            setSavingMetadata(true);
            try {
              // Store in localStorage for now (can be replaced with API call later)
              localStorage.setItem('siteMetadata', JSON.stringify(metadata));
              toast({
                title: "Success",
                description: "Site metadata saved successfully",
              });
            } catch (error) {
              toast({
                title: "Error",
                description: "Failed to save metadata",
                variant: "destructive",
              });
            } finally {
              setSavingMetadata(false);
            }
          }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="metaTitle">Meta Title</Label>
              <Input
                id="metaTitle"
                value={metadata.metaTitle}
                onChange={(e) => setMetadata({ ...metadata, metaTitle: e.target.value })}
                placeholder="Enter site meta title (50-60 characters recommended)"
              />
              <p className="text-xs text-muted-foreground">
                Recommended: 50-60 characters. Used for search engine results and browser titles.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea
                id="metaDescription"
                value={metadata.metaDescription}
                onChange={(e) => setMetadata({ ...metadata, metaDescription: e.target.value })}
                placeholder="Enter site meta description (150-160 characters recommended)"
                rows={3}
              />
              <p className="text-xs text-muted-foreground">
                Recommended: 150-160 characters. Used for search engine results.
              </p>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={savingMetadata}
                className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
              >
                {savingMetadata ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Metadata
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Link href="/admin/products">
              <button className="w-full p-4 rounded-lg border border-border hover:bg-muted transition-colors text-left">
                <Package className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-semibold">Add New Product</h3>
                <p className="text-sm text-muted-foreground">Create a new product listing</p>
              </button>
            </Link>
            <Link href="/admin/testimonials">
              <button className="w-full p-4 rounded-lg border border-border hover:bg-muted transition-colors text-left">
                <MessageSquare className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-semibold">Manage Testimonials</h3>
                <p className="text-sm text-muted-foreground">View and edit testimonials</p>
              </button>
            </Link>
            <Link href="/admin/enquiries">
              <button className="w-full p-4 rounded-lg border border-border hover:bg-muted transition-colors text-left">
                <ShoppingCart className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-semibold">View Enquiries</h3>
                <p className="text-sm text-muted-foreground">Manage RFQ submissions</p>
              </button>
            </Link>
            <Link href="/admin/users">
              <button className="w-full p-4 rounded-lg border border-border hover:bg-muted transition-colors text-left">
                <Users className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-semibold">User Management</h3>
                <p className="text-sm text-muted-foreground">Manage user accounts</p>
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
