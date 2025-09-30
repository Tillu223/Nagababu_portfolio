import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nurbashanagababu4@gmail.com",
      href: "mailto:nurbashanagababu4@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9346534500",
      href: "tel:+919346534500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nagababu-nurbasha",
      href: "https://www.linkedin.com/in/nagababu-nurbasha"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Tillu223",
      href: "https://github.com/Tillu223"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how I can contribute to your team's success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in">
            <Card className="p-6 bg-card border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a 
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
              <ul className="space-y-2">
                {[
                  "Full-time positions",
                  "Contract work",
                  "Consulting projects",
                  "Collaboration opportunities"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-primary/20 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input 
                  id="name"
                  placeholder="John Doe" 
                  className="bg-background border-primary/20 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="john@example.com" 
                  className="bg-background border-primary/20 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject"
                  placeholder="Job Opportunity / Project Discussion" 
                  className="bg-background border-primary/20 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project or opportunity..." 
                  className="bg-background border-primary/20 focus:border-primary min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
