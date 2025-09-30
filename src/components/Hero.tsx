import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(190,90%,55%,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Nurbasha Nagababu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              ServiceNow Developer & Full-Stack Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Certified ServiceNow Application Developer (CAD) and System Administrator (CSA) 
              specializing in ITSM implementation, workflow automation, and full-stack development. 
              Passionate about building scalable, secure solutions that drive business impact.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <a href="/Nagababu_Nurbasha_Resume.pdf" download className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/Tillu223" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nagababu-nurbasha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:nurbashanagababu4@gmail.com"
                className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-glow-pulse" />
              <img 
                src={profileImage} 
                alt="Nurbasha Nagababu" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
