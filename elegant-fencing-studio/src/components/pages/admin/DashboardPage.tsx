import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Package, MessageSquare, DollarSign, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "24",
    change: "+12%",
    icon: Package,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Testimonials",
    value: "18",
    change: "+8%",
    icon: MessageSquare,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+23%",
    icon: Users,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+15%",
    icon: DollarSign,
    color: "from-orange-500 to-orange-600",
  },
];

const recentActivities = [
  { id: 1, action: "New testimonial added", time: "2 minutes ago", type: "testimonial" },
  { id: 2, action: "Product updated", time: "15 minutes ago", type: "product" },
  { id: 3, action: "User registered", time: "1 hour ago", type: "user" },
  { id: 4, action: "Content updated", time: "2 hours ago", type: "content" },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
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
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">{stat.change}</span>
                  <span>from last month</span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Activities */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Monthly statistics and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Chart visualization would go here</p>
              </div>
            </div>
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

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <button className="p-4 rounded-lg border border-border hover:bg-muted transition-colors text-left">
              <Package className="h-6 w-6 mb-2 text-primary" />
              <h3 className="font-semibold">Add New Product</h3>
              <p className="text-sm text-muted-foreground">Create a new product listing</p>
            </button>
            <button className="p-4 rounded-lg border border-border hover:bg-muted transition-colors text-left">
              <MessageSquare className="h-6 w-6 mb-2 text-primary" />
              <h3 className="font-semibold">Manage Testimonials</h3>
              <p className="text-sm text-muted-foreground">View and edit testimonials</p>
            </button>
            <button className="p-4 rounded-lg border border-border hover:bg-muted transition-colors text-left">
              <Users className="h-6 w-6 mb-2 text-primary" />
              <h3 className="font-semibold">User Management</h3>
              <p className="text-sm text-muted-foreground">Manage user accounts</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;

