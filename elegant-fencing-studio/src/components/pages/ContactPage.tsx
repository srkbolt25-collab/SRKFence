'use client';

import { useEffect, useState } from "react";
import HeroBannerSlider from "@/components/HeroBannerSlider";
import { UNUSED_BANNERS_SLIDES } from "@/lib/unusedHeroBanners";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Users, ShoppingCart, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quickQuoteOptions = [
  "Chain Link Fence Quote",
  "GI Chain Link Fence Quote",
  "PVC Coated Chain Link Fence Quote",
  "Welded Mesh Fence Quote",
  "Anti-Climb Fence Quote",
  "Temporary Fence Quote",
  "PVC Hoarding Fence Quote",
  "Barbed Wire Quote",
  "Razor Wire Quote",
  "Installation Quote",
];

const projectCountries = [
  { label: "United Arab Emirates", shortLabel: "UAE", value: "UAE", iso: "AE", phoneCode: "+971", timeZones: ["Asia/Dubai"] },
  { label: "Qatar", shortLabel: "Qatar", value: "Qatar", iso: "QA", phoneCode: "+974", timeZones: ["Asia/Qatar"] },
  { label: "Saudi Arabia", shortLabel: "Saudi Arabia", value: "Saudi Arabia", iso: "SA", phoneCode: "+966", timeZones: ["Asia/Riyadh"] },
  { label: "Bahrain", shortLabel: "Bahrain", value: "Bahrain", iso: "BH", phoneCode: "+973", timeZones: ["Asia/Bahrain"] },
  { label: "Kuwait", shortLabel: "Kuwait", value: "Kuwait", iso: "KW", phoneCode: "+965", timeZones: ["Asia/Kuwait"] },
  { label: "Oman", shortLabel: "Oman", value: "Oman", iso: "OM", phoneCode: "+968", timeZones: ["Asia/Muscat"] },
  { label: "Iraq", shortLabel: "Iraq", value: "Iraq", iso: "IQ", phoneCode: "+964", timeZones: ["Asia/Baghdad"] },
  { label: "Jordan", shortLabel: "Jordan", value: "Jordan", iso: "JO", phoneCode: "+962", timeZones: ["Asia/Amman"] },
];

const getCountryByIso = (iso?: string | null) => {
  if (!iso) return null;
  return projectCountries.find((country) => country.iso.toLowerCase() === iso.toLowerCase()) || null;
};

const getCountryByTimeZone = () => {
  try {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return projectCountries.find((country) => country.timeZones.includes(userTimeZone)) || null;
  } catch {
    return null;
  }
};

const quoteChecklist = [
  "Project type and site location",
  "Fence height and running meters",
  "Mesh opening and wire diameter",
  "Material or coating requirement",
  "Post, gate and accessory requirement",
  "Supply-only or installation scope",
  "Timeline, drawings, BOQ or site notes",
  "Delivery country and city",
];

const salesTeam = [
  { name: "Vikram Singh", position: "BDM", email: "bdm@srkmetals.com", phone: "", department: "Sales" },
  { name: "Sandeep Kumar", position: "Sales Executive", email: "sandeep@srkmetals.com", phone: "", department: "Sales" },
  { name: "Ravi", position: "Sales Executive", email: "Sales@srkmetals.com", phone: "", department: "Sales" },
  { name: "Kalyan Singh", position: "Sales Manager", email: "kalyan@srkmetals.com", phone: "", department: "Sales" },
  { name: "Ms Navjeet Kaur", position: "Assist. Sales Manager", email: "asm@srkmetals.com", phone: "", department: "Sales" },
];

const purchaseTeam = [
  { name: "Pawan Kumar", position: "Purchase Head", email: "procurement@srkmetals.com", phone: "", department: "Purchase" },
  { name: "Sunil Kumar", position: "Purchase Assistant", email: "purchase@srkmetals.com", phone: "", department: "Purchase" },
];

const contactInfo = {
  phone: "+971 58 660 0183",
  phoneSecondary: "+971 52 216 0874",
  emails: ["info@srkfencing.com", "Sales@srkmetals.com"],
  whatsapp: "+971586600183",
  address:
    "Sharjah Publication City (SPC), City Center - E311 - opposite Al Zahia - Muwaileh Commercial - Al Zahia - Sharjah - United Arab Emirates",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sharjah%20Publication%20City%20(SPC)%2C%20City%20Center%20-%20E311%20-%20opposite%20Al%20Zahia%20-%20Muwaileh%20Commercial%20-%20Al%20Zahia%20-%20Sharjah%20-%20United%20Arab%20Emirates",
  mapLocation:
    "https://www.google.com/maps?q=Sharjah%20Publication%20City%20(SPC)%2C%20City%20Center%20-%20E311%20-%20opposite%20Al%20Zahia%20-%20Muwaileh%20Commercial%20-%20Al%20Zahia%20-%20Sharjah%20-%20United%20Arab%20Emirates&z=17&output=embed",
};

const ContactPage = () => {
  const { toast } = useToast();
  const defaultCountry = projectCountries[0];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: defaultCountry.phoneCode,
    phone: "",
    country: defaultCountry.value,
    company: "",
    subject: "Quote Request",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const setDetectedCountry = (country: (typeof projectCountries)[number] | null) => {
      if (!country || !isMounted) return;
      setFormData((prev) => ({
        ...prev,
        country: country.value,
        phoneCode: country.phoneCode,
      }));
    };

    fetch("/api/geo", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        const detected = getCountryByIso(data?.countryCode) || getCountryByTimeZone();
        setDetectedCountry(detected);
      })
      .catch(() => {
        setDetectedCountry(getCountryByTimeZone());
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "country") {
      const selectedCountry = projectCountries.find((country) => country.value === value);
      setFormData((prev) => ({
        ...prev,
        country: value,
        phoneCode: selectedCountry?.phoneCode || prev.phoneCode,
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Quote Request Submitted",
        description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phoneCode: formData.phoneCode,
        phone: "",
        country: formData.country,
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
      <HeroBannerSlider slides={UNUSED_BANNERS_SLIDES} altPrefix="Contact banner" />

      <section className="border-b border-border bg-background py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">Contact Us</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Request a Fencing Quote for UAE & GCC Projects
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Share your fencing requirement or start a WhatsApp chat for a quick project quote.
          </p>
        </div>
      </section>

      {/* Priority Quote + WhatsApp Section */}
      <section id="quote-form" className="relative overflow-hidden border-b border-border bg-gradient-subtle py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.05)_0%,transparent_50%)]" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Fast Quote Request</span>
            </div>
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Tell Us What You Need</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Fill the form or contact us directly on WhatsApp for a faster fencing quotation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
            <Card className="border border-border bg-background/95 shadow-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <CardDescription>
                  Share your project location, fence length, height, coating and installation requirement.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 md:p-8 md:pt-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="h-12" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="country">Project Country *</Label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {projectCountries.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company name optional" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-3">
                      <select
                        id="phoneCode"
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleInputChange}
                        required
                        aria-label="Phone country code"
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {projectCountries.map((country) => (
                          <option key={`${country.iso}-${country.phoneCode}`} value={country.phoneCode}>
                            {country.phoneCode} {country.shortLabel}
                          </option>
                        ))}
                      </select>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Enter phone number" required className="h-12" />
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
                      placeholder="Tell us your project location, fence length, height, mesh opening, coating, gates and installation scope..."
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-gradient-to-r from-[#c5162a] to-[#e63946] text-white hover:shadow-glow" size="lg">
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

            <div className="space-y-5">
              <Card className="border border-border bg-background shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] shadow-glow">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">WhatsApp Us</CardTitle>
                      <CardDescription>Fastest way to start your quote</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    Send your fence length, height, site location and product type on WhatsApp. Our team will guide you quickly.
                  </p>
                  <Button asChild size="lg" className="h-12 w-full bg-[#25D366] text-white hover:bg-[#20BA5A]">
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20SRK%20FENCE,%20I%20would%20like%20a%20fencing%20quotation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <p className="mt-3 text-center text-sm text-muted-foreground">{contactInfo.whatsapp}</p>
                </CardContent>
              </Card>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <Card className="border border-border bg-background">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
                      <Phone className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Call Us</h3>
                      <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="mt-2 block font-semibold text-primary hover:underline">Main: {contactInfo.phone}</a>
                      <a href={`tel:${contactInfo.phoneSecondary.replace(/[^0-9+]/g, '')}`} className="block font-semibold text-primary hover:underline">Quick Support: {contactInfo.phoneSecondary}</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border bg-background">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
                      <Mail className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email</h3>
                      {contactInfo.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} className="mt-2 block font-semibold text-primary hover:underline">
                          {email}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Guidance Section */}
      <section className="border-b border-border bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
            <Card className="border border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">What to Include in Your Fencing Quote</CardTitle>
                <CardDescription>
                  These details help our team prepare a faster and more accurate fencing quotation.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {quoteChecklist.map((item) => (
                  <div key={item} className="rounded-md bg-muted px-3 py-2 font-semibold">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Quote Options</CardTitle>
                <CardDescription>
                  Choose a product or service. Select the GCC market inside the form.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {quickQuoteOptions.map((option) => (
                  <a key={option} href="#quote-form" className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                    {option}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Team</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Meet Our Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Contact our dedicated sales and purchase teams for fencing supply, quotation and project coordination.
            </p>
          </div>

          <div className="mb-14">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Sales Team</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {salesTeam.map((member) => (
                <Card key={member.name} className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
                <ShoppingCart className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Purchase Team</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {purchaseTeam.map((member) => (
                <Card key={member.name} className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
              <MapPin className="h-7 w-7 text-secondary-foreground" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground">Our Location</h3>
              <p className="text-muted-foreground">Visit us at our office</p>
            </div>
          </div>

          <Card className="border border-border bg-background">
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="mb-2 font-medium text-foreground">Address:</p>
                <p className="text-muted-foreground">{contactInfo.address}</p>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  src={contactInfo.mapLocation}
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SRK FENCE Location"
                />
              </div>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
