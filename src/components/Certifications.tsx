import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import certCSA from "@/assets/cert-csa.png";
import certCAD from "@/assets/cert-cad.png";
import certWipro from "@/assets/cert-wipro.png";

const Certifications = () => {
  const certifications = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      date: "April 2025",
      certNumber: "26976298",
      image: certCSA,
      description: "Core platform knowledge including incident, problem, change management, and service catalog configuration",
      skills: ["Platform Administration", "ITSM", "Service Catalog", "Workflow Management"]
    },
    {
      title: "ServiceNow Certified Application Developer (CAD)",
      issuer: "ServiceNow",
      date: "July 2025",
      certNumber: "27274040",
      image: certCAD,
      description: "Advanced application development including scripting, integrations, and custom application building",
      skills: ["Application Development", "Scripting", "Integration", "Scoped Applications"]
    },
    {
      title: "Java Full Stack Development",
      issuer: "Wipro TalentNext",
      date: "May 2024 – Sep 2024",
      certNumber: "Verified",
      image: certWipro,
      description: "Comprehensive full-stack development training covering Java, frontend frameworks, and modern web technologies",
      skills: ["Java", "ReactJS", "Spring Boot", "REST APIs", "Database Management"]
    },
    {
      title: "CS50P: Introduction to Programming with Python",
      issuer: "HarvardX",
      date: "2024",
      certNumber: "Verified",
      image: null,
      description: "Python programming fundamentals, data structures, and problem-solving techniques",
      skills: ["Python", "Problem Solving", "Data Structures", "Algorithms"]
    },
    {
      title: "ServiceNow Global Certification Preparation",
      issuer: "Smartbridge",
      date: "April 2025",
      certNumber: "Internship Completion",
      image: null,
      description: "Hands-on training on ServiceNow platform modules and certification preparation",
      skills: ["ServiceNow Platform", "ITSM", "Module Configuration", "Best Practices"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating technical expertise and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card border-primary/20 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {cert.image && (
                <div className="relative h-48 bg-gradient-to-br from-card to-muted overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                    {cert.certNumber && (
                      <p className="text-xs text-muted-foreground">
                        Certification No: {cert.certNumber}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="border-primary/30 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
