import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "JSL Travels",
    role: "Technical Support & Optimization Intern",
    location: "India",
    duration: "January 2024 – March 2024",
    responsibilities: [
      "Identified and resolved non-conformance issues in workflows, reducing discrepancies by 20%",
      "Conducted QA on technical processes, minimizing programming bugs and ensuring audit readiness",
      "Maintained detailed documentation to support compliance and scalability",
      "Collaborated with cross-functional teams to troubleshoot issues, ensuring timely resolutions",
      "Delivered web-based support solutions, improving customer workflows and reducing ticket resolution time",
      "Enhanced technical processes and best practices, enabling scalability and system performance improvements"
    ],
    achievements: [
      "Reduced operational discrepancies by 20%",
      "Improved system efficiency by 15%",
      "Maintained 40% system uptime and reliability"
    ]
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience in technical support and process optimization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-primary/20 card-hover animate-fade-in-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
                <p className="text-xl text-primary mb-3">{experience.company}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
