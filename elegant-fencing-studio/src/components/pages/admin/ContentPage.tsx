import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

const ContentPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground">Content Management</h1>
        <p className="text-muted-foreground mt-2">Manage website content and pages</p>
      </div>

      <Tabs defaultValue="hero" className="space-y-4">
        <TabsList>
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="about">About Us</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section Content</CardTitle>
              <CardDescription>Update the main hero section text and images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Title</Label>
                <Input
                  id="hero-title"
                  defaultValue="High Security Fencing and Gates to Secure High Value Assets"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-description">Description</Label>
                <Textarea
                  id="hero-description"
                  rows={4}
                  defaultValue="With over 160 years of expertise, SRK FENCE provides tailored, high security fencing solutions..."
                />
              </div>
              <Button className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Us Content</CardTitle>
              <CardDescription>Manage the about us section content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="about-title">Title</Label>
                <Input id="about-title" defaultValue="About SRK FENCE" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="about-content">Content</Label>
                <Textarea id="about-content" rows={8} defaultValue="Our story..." />
              </div>
              <Button className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Services Content</CardTitle>
              <CardDescription>Update services information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="services-title">Title</Label>
                <Input id="services-title" defaultValue="Our Services" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="services-description">Description</Label>
                <Textarea id="services-description" rows={4} defaultValue="We offer..." />
              </div>
              <Button className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="footer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Footer Content</CardTitle>
              <CardDescription>Manage footer information and links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="footer-description">Description</Label>
                <Textarea
                  id="footer-description"
                  rows={4}
                  defaultValue="Leading manufacturer and supplier of high-quality fencing systems..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="footer-address">Address</Label>
                <Textarea
                  id="footer-address"
                  rows={3}
                  defaultValue="SRK FENCE Industries, Industrial Area, Phase 1, Mumbai, Maharashtra 400001, India"
                />
              </div>
              <Button className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentPage;

