'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.08)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4 px-5 py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">CONTACT US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Ready to start your fencing project? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group flex items-start space-x-4 p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c5162a] to-[#e63946] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground text-lg font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c5162a] to-[#e63946] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-lg font-medium">contact@securefence.com</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c5162a] to-[#e63946] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-lg font-medium">Serving clients internationally</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-border/50 shadow-modern hover:shadow-float transition-all duration-300">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-background/80 h-14 text-base rounded-xl border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-background/80 h-14 text-base rounded-xl border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  className="bg-background/80 h-14 text-base rounded-xl border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-background/80 resize-none text-base rounded-xl border-border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow text-white h-14 text-base font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] border-0"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
