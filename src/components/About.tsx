import { Card } from "@/components/ui/card";
import { Code, Zap, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Proficient in ServiceNow platform, Java, JavaScript, React, and modern web technologies"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Achieved 25% faster ticket resolution and 30% efficiency boost through automation"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Experienced in Agile teams, delivering secure solutions aligned with business goals"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "ServiceNow CAD & CSA certified with proven expertise in ITSM implementation"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turning complex business requirements into elegant technical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-primary/20 card-hover animate-slide-in">
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Highly motivated and certified ServiceNow Application Developer (CAD) and System 
              Administrator (CSA) with experience in full-stack development and ITSM implementation. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in designing, developing, and maintaining high-quality, scalable, and 
              testable ServiceNow applications. My expertise includes automating workflows, resolving 
              programming bugs, and optimizing performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Adept at working collaboratively within Agile teams to deliver secure solutions 
              aligned with business objectives. Passionate about leveraging technology to drive 
              meaningful business impact.
            </p>
          </Card>

          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
