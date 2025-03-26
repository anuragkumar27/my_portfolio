import { motion } from "framer-motion";
import { 
  GraduationCap, 
  School, 
  Award, 
  Cloud 
} from "lucide-react";
import SquigglyUnderline from "./ui/squiggly-underline";

export default function Education() {
  const education = [
    {
      year: "2022 - Present",
      institution: "Kalinga Institute of Industrial Technology",
      degree: "B.Tech in Computer Science and Engineering",
      grade: "CGPA: 8.56",
      additional: "3rd Year, 6th Semester",
      icon: <GraduationCap />,
      color: "primary"
    },
    {
      year: "2022",
      institution: "Atomic Energy Central School, Jadugoda",
      degree: "Higher Secondary (12th), CBSE",
      grade: "Percentage: 74%",
      additional: "",
      icon: <School />,
      color: "secondary"
    },
    {
      year: "2020",
      institution: "Atomic Energy Central School, Turamdih",
      degree: "Secondary (10th), CBSE",
      grade: "Percentage: 83.6%",
      additional: "",
      icon: <School />,
      color: "accent"
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Foundations",
      provider: "AWS Training & Certification",
      description: "Foundational understanding of AWS services, cloud security, scalability, and cost management.",
      icon: <Cloud className="text-primary" />,
      color: "primary"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      provider: "AWS Training & Certification",
      description: "Expertise in designing and deploying scalable, secure, and high-performance cloud solutions on AWS.",
      icon: <Cloud className="text-secondary" />,
      color: "secondary"
    },
    {
      title: "AICTE EduSkill Virtual Internship in Cloud – AWS",
      provider: "Oct 2024 – Dec 2024",
      description: "Hands-on skills in AWS services and cloud infrastructure management through a virtual internship program.",
      icon: <Cloud className="text-accent" />,
      color: "accent"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-heading text-foreground">
            <SquigglyUnderline>Education & Certifications</SquigglyUnderline>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Education Timeline */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-heading text-foreground mb-8 flex items-center">
              <GraduationCap className="text-primary mr-3" />
              Education Timeline
            </h3>
            
            <motion.div 
              className="relative border-l-4 border-primary pl-8 ml-4 space-y-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div key={index} className="relative" variants={item}>
                  <div className={`absolute -left-[2.7rem] w-10 h-10 bg-${edu.color} text-white rounded-full flex items-center justify-center`}>
                    {edu.icon}
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="font-handwritten text-secondary text-lg">{edu.year}</div>
                    <h4 className="text-xl font-heading text-foreground mb-2">{edu.institution}</h4>
                    <p className="text-foreground/70 mb-2">{edu.degree}</p>
                    <p className="text-primary font-medium">{edu.grade}</p>
                    {edu.additional && <p className="text-foreground/70 mt-2">{edu.additional}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Certifications */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-heading text-foreground mb-8 flex items-center">
              <Award className="text-secondary mr-3" />
              Certifications
            </h3>
            
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-${cert.color}`}
                  variants={item}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-heading text-foreground">{cert.title}</h4>
                    <div className={`w-10 h-10 bg-${cert.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                      {cert.icon}
                    </div>
                  </div>
                  <p className="text-foreground/70 mt-3">
                    {cert.description}
                  </p>
                  <p className="font-handwritten text-secondary text-lg mt-2">{cert.provider}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
