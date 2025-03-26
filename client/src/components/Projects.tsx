import { motion } from "framer-motion";
import { QrCode, Home, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SquigglyUnderline from "./ui/squiggly-underline";
import DoodleBorder from "./ui/doodle-border";

export default function Projects() {
  const projects = [
    {
      title: "Multipurpose QR Code Scanner",
      description: "IoT-enabled QR code scanner with real-time notifications through Telegram Bot API and automated data uploads to remote servers.",
      icon: <QrCode className="text-primary" />,
      tags: ["ESP32-CAM", "Telegram Bot API", "C", "Wi-Fi"],
      tagColors: ["primary", "secondary", "accent", "foreground"]
    },
    {
      title: "WanderNest Booking Platform",
      description: "Airbnb-like full-stack web application for streamlining accommodation booking and property management for small-scale property owners.",
      icon: <Home className="text-secondary" />,
      tags: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
      tagColors: ["primary", "secondary", "accent", "foreground"]
    },
    {
      title: "Diabetes Detection System",
      description: "Machine learning-based system for predicting diabetes risk using models like Random Forest and SVM with enhanced accuracy.",
      icon: <Heart className="text-accent" />,
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      tagColors: ["primary", "secondary", "accent", "foreground"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-heading text-foreground">
            <SquigglyUnderline>My Projects</SquigglyUnderline>
          </h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <DoodleBorder>
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 group-hover:scale-110 transition-transform duration-300">
                      <defs>
                        <linearGradient id={`proj-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6C63FF" />
                          <stop offset="100%" stopColor={index === 0 ? "#FF6B6B" : index === 1 ? "#4ECDC4" : "#FFD166"} />
                        </linearGradient>
                      </defs>
                      {index === 0 && (
                        <>
                          <rect x="25" y="25" width="50" height="50" rx="5" fill="white" stroke="#6C63FF" strokeWidth="2" />
                          <path d="M35 35 L65 35 L65 65 L35 65 Z" stroke="#6C63FF" strokeWidth="2" fill="none" />
                          <path d="M40 40 L40 60 L60 60 L60 40 Z" stroke="#FF6B6B" strokeWidth="2" fill="none" />
                          <path d="M45 45 L55 45 L55 55 L45 55 Z" stroke="#4ECDC4" strokeWidth="2" fill="none" />
                          <circle cx="50" cy="50" r="2" fill="#6C63FF" />
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <path d="M30 60 L50 30 L70 60 Z" fill="white" stroke="#FF6B6B" strokeWidth="2" />
                          <rect x="40" y="50" width="20" height="15" fill="white" stroke="#6C63FF" strokeWidth="2" />
                          <rect x="45" y="55" width="5" height="5" fill="#4ECDC4" />
                          <rect x="50" y="55" width="5" height="10" fill="#4ECDC4" />
                          <path d="M45 42 Q 50 35, 55 42" stroke="#6C63FF" fill="none" strokeWidth="2" />
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <circle cx="50" cy="50" r="20" fill="white" stroke="#FF6B6B" strokeWidth="2" />
                          <path d="M40 50 L45 55 L60 40" stroke="#4ECDC4" strokeWidth="2" fill="none" />
                          <path d="M35 65 Q 50 75, 65 65" stroke="#6C63FF" fill="none" strokeWidth="2" />
                          <path d="M35 35 Q 50 25, 65 35" stroke="#6C63FF" fill="none" strokeWidth="2" />
                        </>
                      )}
                    </svg>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-heading text-foreground">{project.title}</h3>
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {project.icon}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className={`bg-${project.tagColors[i]}/10 text-${project.tagColors[i]} hover:bg-${project.tagColors[i]}/20`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-6">
                      {project.description}
                    </p>
                    
                    <a href="#" className="font-handwritten text-primary text-lg hover:text-secondary transition-colors duration-300">
                      See details →
                    </a>
                  </div>
                </div>
              </DoodleBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
