import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "KKR & KSR Institute of Technology & Sciences",
      location: "India",
      duration: "March 2021 – August 2025 (Expected)",
      grade: "CGPA: 7.2/10",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Web Technologies",
        "Cloud Computing",
        "Agile Methodologies"
      ]
    },
    {
      degree: "Board of Intermediate Education",
      field: "Science",
      institution: "Sri Pratibha Junior College",
      location: "India",
      duration: "April 2018 – May 2020",
      grade: "Marks: 929/1000",
      coursework: []
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-primary/20 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    {edu.degree}
                    {edu.field && <span className="text-primary"> in {edu.field}</span>}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-3">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {edu.grade}
                    </span>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span 
                            key={courseIndex} 
                            className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
