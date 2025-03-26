import { motion } from "framer-motion";
import { QrCode, Home, Heart, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SquigglyUnderline from "./ui/squiggly-underline";
import DoodleBorder from "./ui/doodle-border";
import DoodleDivider from "./ui/doodle-divider";

export default function Projects() {
  const projects = [
    {
      title: "Multipurpose QR Code Scanner",
      description: "IoT-enabled QR code scanner with real-time notifications through Telegram Bot API and automated data uploads to remote servers.",
      icon: <QrCode className="text-primary animate-pulse" />,
      tags: ["ESP32-CAM", "Telegram Bot API", "C", "Wi-Fi"],
      tagColors: ["primary", "secondary", "accent", "foreground"],
      color: "#6C63FF",
      delay: 0
    },
    {
      title: "WanderNest Booking Platform",
      description: "Airbnb-like full-stack web application for streamlining accommodation booking and property management for small-scale property owners.",
      icon: <Home className="text-secondary animate-pulse" />,
      tags: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
      tagColors: ["primary", "secondary", "accent", "foreground"],
      color: "#FF6B6B",
      delay: 0.1
    },
    {
      title: "Diabetes Detection System",
      description: "Machine learning-based system for predicting diabetes risk using models like Random Forest and SVM with enhanced accuracy.",
      icon: <Heart className="text-accent animate-pulse" />,
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      tagColors: ["primary", "secondary", "accent", "foreground"],
      color: "#4ECDC4",
      delay: 0.2
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
          <h2 className="inline-block text-4xl font-heading text-foreground animate-float" style={{ animationDuration: '7s' }}>
            <SquigglyUnderline color="var(--primary)">My Projects</SquigglyUnderline>
          </h2>
          <div className="mt-6 flex justify-center">
            <p className="font-handwritten text-xl text-primary/80 max-w-md text-center animate-wiggle" style={{ animationDuration: '9s' }}>
              Check out some of the cool stuff I've built!
            </p>
          </div>
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
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                    {/* Background doodle pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <pattern id={`doodle-pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="5" cy="5" r="1" fill={project.color} />
                          <circle cx="15" cy="15" r="1" fill={project.color} />
                          <path d="M0 10 Q 5 5, 10 10 T 20 10" stroke={project.color} strokeWidth="0.5" fill="none" />
                        </pattern>
                        <rect width="100" height="100" fill={`url(#doodle-pattern-${index})`} />
                      </svg>
                    </div>
                    
                    {/* Project icon/illustration */}
                    <svg 
                      viewBox="0 0 100 100" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-full h-32 group-hover:scale-110 transition-transform duration-300 animate-float" 
                      style={{ animationDuration: `${5 + index}s` }}
                    >
                      <defs>
                        <linearGradient id={`proj-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6C63FF" />
                          <stop offset="100%" stopColor={index === 0 ? "#FF6B6B" : index === 1 ? "#4ECDC4" : "#FFD166"} />
                        </linearGradient>
                      </defs>
                      
                      {index === 0 && (
                        <>
                          <rect 
                            x="25" y="25" width="50" height="50" rx="5" 
                            fill="white" 
                            stroke="url(#proj-grad-0)" 
                            strokeWidth="2" 
                            className="animate-pulse"
                          />
                          <path 
                            d="M35 35 L65 35 L65 65 L35 65 Z" 
                            stroke="#6C63FF" 
                            strokeWidth="2" 
                            fill="none" 
                            className="animate-wiggle"
                            style={{ animationDuration: '10s' }}
                          />
                          <path 
                            d="M40 40 L40 60 L60 60 L60 40 Z" 
                            stroke="#FF6B6B" 
                            strokeWidth="2" 
                            fill="none" 
                            className="animate-wiggle"
                            style={{ animationDuration: '12s' }}
                          />
                          <path 
                            d="M45 45 L55 45 L55 55 L45 55 Z" 
                            stroke="#4ECDC4" 
                            strokeWidth="2" 
                            fill="none" 
                            className="animate-wiggle"
                            style={{ animationDuration: '14s' }}
                          />
                          <circle 
                            cx="50" cy="50" r="2" 
                            fill="#6C63FF" 
                            className="animate-pulse"
                          />
                          {/* QR points animation */}
                          <circle cx="42" cy="42" r="1.5" fill="#6C63FF" className="animate-blink" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                          <circle cx="58" cy="42" r="1.5" fill="#6C63FF" className="animate-blink" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                          <circle cx="42" cy="58" r="1.5" fill="#6C63FF" className="animate-blink" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                          <circle cx="58" cy="58" r="1.5" fill="#6C63FF" className="animate-blink" style={{ animationDuration: '3s', animationDelay: '2s' }} />
                        </>
                      )}
                      
                      {index === 1 && (
                        <>
                          <path 
                            d="M30 60 L50 30 L70 60 Z" 
                            fill="white" 
                            stroke="url(#proj-grad-1)" 
                            strokeWidth="2" 
                            className="animate-wiggle"
                            style={{ transformOrigin: 'center', animationDuration: '15s' }}
                          />
                          <rect 
                            x="40" y="50" width="20" height="15" 
                            fill="white" 
                            stroke="#6C63FF" 
                            strokeWidth="2"
                          />
                          <rect 
                            x="45" y="55" width="5" height="5" 
                            fill="#4ECDC4" 
                            className="animate-pulse"
                          />
                          <rect 
                            x="50" y="55" width="5" height="10" 
                            fill="#4ECDC4" 
                            className="animate-pulse"
                            style={{ animationDelay: '0.5s' }}
                          />
                          <path 
                            d="M45 42 Q 50 35, 55 42" 
                            stroke="#FF6B6B" 
                            fill="none" 
                            strokeWidth="2" 
                            className="animate-pulse"
                          />
                          {/* Smoke from chimney */}
                          <path 
                            d="M47 34 Q 45 31, 47 28 Q 49 25, 47 22" 
                            stroke="#6C63FF" 
                            strokeWidth="1" 
                            fill="none" 
                            strokeDasharray="2,1"
                            className="animate-float"
                            style={{ transformOrigin: 'bottom', animationDuration: '4s' }}
                          />
                          <path 
                            d="M53 34 Q 55 31, 53 28 Q 51 25, 53 22" 
                            stroke="#6C63FF" 
                            strokeWidth="1" 
                            fill="none" 
                            strokeDasharray="2,1"
                            className="animate-float"
                            style={{ transformOrigin: 'bottom', animationDuration: '5s', animationDelay: '0.5s' }}
                          />
                        </>
                      )}
                      
                      {index === 2 && (
                        <>
                          <circle 
                            cx="50" cy="50" r="20" 
                            fill="white" 
                            stroke="url(#proj-grad-2)" 
                            strokeWidth="2" 
                            className="animate-pulse"
                          />
                          <path 
                            d="M40 50 L45 55 L60 40" 
                            stroke="#4ECDC4" 
                            strokeWidth="2" 
                            fill="none" 
                            className="animate-pulse"
                          />
                          <path 
                            d="M35 65 Q 50 75, 65 65" 
                            stroke="#6C63FF" 
                            fill="none" 
                            strokeWidth="2" 
                            className="animate-pulse"
                            style={{ animationDelay: '0.5s' }}
                          />
                          <path 
                            d="M35 35 Q 50 25, 65 35" 
                            stroke="#6C63FF" 
                            fill="none" 
                            strokeWidth="2" 
                            className="animate-pulse"
                            style={{ animationDelay: '1s' }}
                          />
                          {/* Heartbeat line */}
                          <path 
                            d="M20 50 L35 50 L40 40 L45 60 L50 40 L55 60 L60 50 L80 50" 
                            stroke="#FF6B6B" 
                            strokeWidth="1" 
                            fill="none" 
                            className="animate-pulse"
                            style={{ animationDuration: '2s' }}
                          />
                        </>
                      )}
                    </svg>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    {/* Doodle decorations */}
                    <div className="absolute -bottom-2 -right-2">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M5 20 Q 10 15, 15 20 T 25 20 T 35 20" 
                          stroke={project.color} 
                          strokeWidth="1" 
                          strokeDasharray="3,2" 
                          fill="none" 
                          opacity="0.5"
                          className="animate-wiggle"
                          style={{ animationDuration: '10s' }}
                        />
                      </svg>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className={`bg-${project.tagColors[i]}/10 text-${project.tagColors[i]} hover:bg-${project.tagColors[i]}/20 animate-float`}
                          style={{ animationDuration: `${3 + i * 0.5}s`, animationDelay: `${project.delay + i * 0.1}s` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-6">
                      {project.description}
                    </p>
                    
                    <a 
                      href="#" 
                      className="font-handwritten text-primary text-lg hover:text-secondary transition-colors duration-300 flex items-center group/link"
                    >
                      <span className="group-hover/link:underline">See details</span>
                      <ExternalLink className="ml-1 h-4 w-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </DoodleBorder>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16">
          <DoodleDivider color="primary" />
        </div>
      </div>
    </section>
  );
}
