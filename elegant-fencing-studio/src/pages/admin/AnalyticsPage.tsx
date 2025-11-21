import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Track your website performance and metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5%</div>
            <p className="text-xs text-muted-foreground">-2.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3m 24s</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
          <TabsTrigger value="pages">Top Pages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>Website traffic and visitor statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Chart visualization would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Organic Search</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "65%" }} />
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Direct</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "20%" }} />
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Social Media</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "10%" }} />
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Referral</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "5%" }} />
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages on your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["/", "/products", "/contact", "/why-us"].map((page, index) => (
                  <div key={page} className="flex items-center justify-between">
                    <span className="font-mono text-sm">{page}</span>
                    <span className="text-sm text-muted-foreground">{1000 - index * 150} views</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPage;

