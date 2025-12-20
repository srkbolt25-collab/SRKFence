'use client';

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroFence from "@/assets/hero-fence.jpg";
import { Phone, Mail, MapPin, MessageCircle, Users, ShoppingCart, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Team members data
const salesTeam = [
  {
    name: "Rajesh Kumar",
    position: "Sales Manager",
    email: "rajesh.kumar@srkfence.com",
    phone: "+91-9876543210",
    department: "Sales",
  },
  {
    name: "Priya Sharma",
    position: "Senior Sales Executive",
    email: "priya.sharma@srkfence.com",
    phone: "+91-9876543211",
    department: "Sales",
  },
  {
    name: "Amit Patel",
    position: "Sales Executive",
    email: "amit.patel@srkfence.com",
    phone: "+91-9876543212",
    department: "Sales",
  },
];

const purchaseTeam = [
  {
    name: "Sunil Reddy",
    position: "Purchase Manager",
    email: "sunil.reddy@srkfence.com",
    phone: "+91-9876543213",
    department: "Purchase",
  },
  {
    name: "Neha Gupta",
    position: "Purchase Executive",
    email: "neha.gupta@srkfence.com",
    phone: "+91-9876543214",
    department: "Purchase",
  },
];

// Contact information
const contactInfo = {
  phone: "+971 52 216 0874",
  phoneSecondary: "+971 52 848 9775",
  emails: [
    "sales@srkfencing.com",
    "bdm@srkfencing.com",
    "info@srkfencing.com",
    "Sales@srkmetals.com",
  ],
  whatsapp: "+971522160874",
  address: "SRK FENCE Industries, Industrial Area, Phase 1, Mumbai, Maharashtra 400001, India",
  mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123456789!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjUiTiA3MsKwNTInMzkuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Quote Request",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Quote Request Submitted",
        description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "Quote Request",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch with Our Team"
        description="Contact our sales or purchase team for inquiries, quotes, and support. We're here to help with all your fencing needs."
        backgroundImage={heroFence}
        variant="contrast"
      />

      {/* Phone / Email Section */}
      <section className="bg-background py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Phone className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Phone</CardTitle>
                    <CardDescription>Call us for immediate assistance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href={`tel:${contactInfo.phone}`} className="block text-lg font-semibold text-primary hover:underline">
                  {contactInfo.phone}
                </a>
                <a href={`tel:${contactInfo.phoneSecondary}`} className="block text-lg font-semibold text-primary hover:underline">
                  {contactInfo.phoneSecondary}
                </a>
              </CardContent>
            </Card>

            <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Mail className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Email</CardTitle>
                    <CardDescription>Send us an email anytime</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {contactInfo.emails.map((email, index) => (
                  <a key={index} href={`mailto:${email}`} className="block text-lg font-semibold text-primary hover:underline">
                    {email}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section - Sales & Purchase */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact our dedicated sales and purchase teams for all your fencing needs
            </p>
          </div>

          {/* Sales Team */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Sales Team</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {salesTeam.map((member, idx) => (
                <Card key={idx} className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Purchase Team */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                <ShoppingCart className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Purchase Team</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
              {purchaseTeam.map((member, idx) => (
                <Card key={idx} className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Quote Request */}
      <section className="bg-gradient-subtle py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Quote Request</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Request a Quote</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you with a customized quote
            </p>
          </div>

          <Card className="border border-border bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91-9876543210"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name (optional)"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="Quote Request">Quote Request</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details / Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements, location, dimensions, and any specific needs..."
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow text-white h-12"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Quote Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WhatsApp Button & Location Map */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* WhatsApp Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                  <MessageCircle className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">WhatsApp Us</h3>
                  <p className="text-muted-foreground">Chat with us directly on WhatsApp</p>
                </div>
              </div>
              <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Get instant responses to your queries. Click the button below to start a conversation with our team.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white h-14 text-base font-semibold"
                  >
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20SRK%20FENCE,%20I%20would%20like%20to%20inquire%20about%20your%20fencing%20solutions.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    WhatsApp: {contactInfo.whatsapp}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Location Map */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                  <MapPin className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Our Location</h3>
                  <p className="text-muted-foreground">Visit us at our office</p>
                </div>
              </div>
              <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-foreground font-medium mb-2">Address:</p>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      src={contactInfo.mapLocation}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SRK FENCE Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

