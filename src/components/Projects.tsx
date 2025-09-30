import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Incident Management Implementation",
      duration: "May 2024 – Jul 2024",
      platform: "ServiceNow",
      description: "Engineered and deployed comprehensive Incident Management system with automated ticket routing and KPI dashboards",
      technologies: ["ServiceNow", "Business Rules", "Client Scripts", "SLAs", "GlideRecord"],
      achievements: [
        "Automated ticket routing reducing manual effort",
        "Developed dashboards for KPIs and resolution trend analysis",
        "Implemented SLA tracking and escalation workflows"
      ],
      github: "https://github.com/Tillu223"
    },
    {
      title: "Change Management Process Automation",
      duration: "Apr 2024 – Jun 2024",
      platform: "ServiceNow",
      description: "Developed risk-based approval workflows using CAB processes and Change Calendar for comprehensive change control",
      technologies: ["ServiceNow", "CAB", "Change Calendar", "CI Mapping", "RBAC"],
      achievements: [
        "Implemented compliance via CI mapping and policy rules",
        "Created risk-based approval workflows",
        "Configured role-based access control for security"
      ],
      github: "https://github.com/Tillu223"
    },
    {
      title: "Problem Management Setup",
      duration: "Mar 2024 – Apr 2024",
      platform: "ServiceNow",
      description: "Implemented Root Cause Analysis workflows and automated incident-problem linking for proactive issue prevention",
      technologies: ["ServiceNow", "RCA", "Knowledge Management", "Flow Designer"],
      achievements: [
        "Automated incident-problem linking",
        "Created Knowledge Articles for issue resolution",
        "Built dashboards for trend analysis and prevention"
      ],
      github: "https://github.com/Tillu223"
    },
    {
      title: "Onboarding Application (Scoped App)",
      duration: "Feb 2024 – Mar 2024",
      platform: "ServiceNow",
      description: "Developed a scalable employee onboarding application with automated provisioning and workflow management",
      technologies: ["ServiceNow", "Flow Designer", "Script Includes", "Service Catalog", "Notifications"],
      achievements: [
        "Automated user provisioning workflows",
        "Configured role-based notifications",
        "Built using scoped application architecture"
      ],
      github: "https://github.com/Tillu223"
    },
    {
      title: "Advanced E-Commerce Platform",
      duration: "Aug 2024 – Nov 2024",
      platform: "Full-Stack",
      description: "Designed and optimized e-commerce platform with ML-powered product recommendations and automated payment systems",
      technologies: ["ReactJS", "Redux", "Node.js", "MongoDB", "Machine Learning", "CSS Flexbox"],
      achievements: [
        "Reduced page load times by 25%",
        "Implemented ML-based product recommendations",
        "Optimized database queries reducing response time by 15%",
        "Developed responsive UI with modern design patterns"
      ],
      github: "https://github.com/Tillu223"
    },
    {
      title: "Travel Booking System",
      duration: "2024",
      platform: "Full-Stack",
      description: "Created dynamic travel booking platform with end-to-end integration and secure transaction handling",
      technologies: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
      achievements: [
        "Improved database performance by 15%",
        "Applied security frameworks for transaction safety",
        "End-to-end booking workflow implementation"
      ],
      github: "https://github.com/Tillu223"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions showcasing technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-primary/20 card-hover animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{project.duration}</p>
                  <Badge variant="outline" className="border-primary/50">{project.platform}</Badge>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary/10" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
