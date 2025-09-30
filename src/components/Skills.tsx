import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Code2, 
  Workflow, 
  Globe, 
  Server, 
  GitBranch,
  Shield,
  Layout
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Workflow,
      title: "ServiceNow Platform",
      color: "text-primary",
      skills: [
        "Incident Management",
        "Problem Management",
        "Change Management",
        "Service Catalog",
        "Knowledge Management",
        "Flow Designer",
        "IntegrationHub",
        "Business Rules",
        "Client Scripts",
        "UI Policies",
        "Script Includes",
        "GlideRecord",
        "ACLs"
      ]
    },
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-secondary",
      skills: [
        "JavaScript (ES6)",
        "Java (v17)",
        "Python",
        "C++",
        "SQL",
        "TypeScript"
      ]
    },
    {
      icon: Globe,
      title: "Frontend Technologies",
      color: "text-primary",
      skills: [
        "ReactJS",
        "Angular",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
        "Flexbox"
      ]
    },
    {
      icon: Server,
      title: "Backend & APIs",
      color: "text-secondary",
      skills: [
        "Node.js",
        "REST APIs",
        "GraphQL",
        "Spring Framework",
        "Hibernate",
        "Express.js"
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-primary",
      skills: [
        "MySQL",
        "MS SQL",
        "MongoDB",
        "Schema Design",
        "Query Optimization"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      color: "text-secondary",
      skills: [
        "Git",
        "Jenkins",
        "CI/CD",
        "Version Control",
        "Power BI"
      ]
    },
    {
      icon: Shield,
      title: "Methodologies & Practices",
      color: "text-primary",
      skills: [
        "Agile (Scrum)",
        "ITIL v4",
        "SDLC",
        "Secure Coding",
        "Code Reviews",
        "Unit Testing",
        "Risk Management"
      ]
    },
    {
      icon: Layout,
      title: "Soft Skills",
      color: "text-secondary",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Adaptability",
        "Critical Thinking",
        "Communication",
        "Resilience"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-primary/20 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
