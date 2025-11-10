import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="text-sm font-semibold text-secondary">CONTACT US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your fencing project? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-card border border-border hover:shadow-elegant transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <Phone className="w-8 h-8 text-secondary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-card border border-border hover:shadow-elegant transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <Mail className="w-8 h-8 text-secondary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-lg">contact@securefence.com</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-card border border-border hover:shadow-elegant transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <MapPin className="w-8 h-8 text-secondary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-lg">Serving clients internationally</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 p-8 rounded-2xl bg-gradient-card border border-border shadow-elegant">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-background h-12 text-base rounded-xl border-border focus:ring-secondary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-background h-12 text-base rounded-xl border-border focus:ring-secondary"
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  className="bg-background h-12 text-base rounded-xl border-border focus:ring-secondary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-background resize-none text-base rounded-xl border-border focus:ring-secondary"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-accent hover:shadow-glow text-secondary-foreground h-12 text-base rounded-xl"
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
