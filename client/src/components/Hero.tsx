import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Code } from "lucide-react";
import SquigglyUnderline from "@/components/ui/squiggly-underline";
import DoodleBorder from "@/components/ui/doodle-border";
import DoodleDivider from "@/components/ui/doodle-divider";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-handwritten text-secondary text-2xl animate-wiggle inline-block" style={{animationDuration: '6s'}}>
              Hello there! I'm
            </p>
            
            <h1 className="text-5xl md:text-7xl font-heading text-foreground">
              <span className="text-primary relative">
                <SquigglyUnderline color="var(--primary)">Anurag</SquigglyUnderline>
              </span>{" "}
              Kumar
            </h1>
            
            <DoodleBorder>
              <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
                A passionate <span className="font-medium text-primary animate-bounce inline-block">Computer Science Engineer</span> specializing in 
                <span className="font-medium text-secondary animate-float inline-block"> web development</span> and
                <span className="font-medium text-accent animate-blink inline-block"> IoT solutions</span>
              </p>
            </DoodleBorder>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact">
                <Button className="relative py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-bounce" style={{animationDuration: '4s'}}>
                  <span className="relative z-10">Get In Touch</span>
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-primary">
                  See My Work
                </Button>
              </a>
            </div>
            
            <div className="pt-6 flex gap-5 justify-center md:justify-start">
              <a href="https://github.com/anuragkumar27" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-125" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/anurag-kumar03/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-125" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://leetcode.com/u/anurag_k_/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 hover:scale-125" aria-label="LeetCode">
                <Code className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center pb-10 md:pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float" style={{animationDuration: '8s'}}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#FF6584" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ECDC4" />
                    <stop offset="100%" stopColor="#6C63FF" />
                  </linearGradient>
                  <pattern id="doodle-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1" fill="#FF6584" />
                    <circle cx="15" cy="15" r="1" fill="#6C63FF" />
                    <path d="M0 10 Q 5 5, 10 10 T 20 10" stroke="#4ECDC4" strokeWidth="0.5" fill="none" />
                  </pattern>
                </defs>
                
                {/* Doodle background */}
                <rect x="5" y="5" width="90" height="90" rx="45" ry="45" fill="white" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,3" className="animate-wiggle" style={{transformOrigin: 'center', animationDuration: '20s'}} />
                <circle cx="50" cy="50" r="40" fill="url(#doodle-pattern)" opacity="0.1" />
                
                {/* Doodle character */}
                <circle cx="50" cy="50" r="30" fill="white" stroke="#6C63FF" strokeWidth="2" strokeDasharray="2,1" />
                
                {/* Character face */}
                <circle cx="40" cy="40" r="5" fill="#6C63FF" className="animate-blink">
                  <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="40" r="5" fill="#6C63FF" className="animate-blink">
                  <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
                </circle>
                
                {/* Animated smile */}
                <path d="M35 55 Q 50 70, 65 55" stroke="#6C63FF" fill="none" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="d" 
                    values="M35 55 Q 50 70, 65 55; M35 60 Q 50 65, 65 60; M35 55 Q 50 70, 65 55" 
                    dur="5s" 
                    repeatCount="indefinite" />
                </path>
                
                {/* Doodle glasses */}
                <circle cx="40" cy="40" r="8" stroke="#FF6584" strokeWidth="2" fill="none" />
                <circle cx="60" cy="40" r="8" stroke="#FF6584" strokeWidth="2" fill="none" />
                <path d="M48 40 L 52 40" stroke="#FF6584" strokeWidth="2" />

                {/* Doodle accessories */}
                <path d="M30 25 Q 35 10, 50 20 T 70 25" stroke="url(#grad2)" fill="none" strokeWidth="2" className="animate-wiggle" style={{transformOrigin: 'center', animationDuration: '12s'}} />
                <path d="M20 40 Q 10 50, 20 60" stroke="#FF6584" fill="none" strokeWidth="2" strokeDasharray="2,2" className="animate-wiggle" style={{transformOrigin: 'center', animationDuration: '15s'}} />
                <path d="M80 40 Q 90 50, 80 60" stroke="#FF6584" fill="none" strokeWidth="2" strokeDasharray="2,2" className="animate-wiggle" style={{transformOrigin: 'center', animationDuration: '18s'}} />
                
                {/* Tech elements */}
                <path d="M75 20 L 85 20 L 85 30 L 75 30 Z" stroke="#4ECDC4" strokeWidth="1" fill="none" className="animate-bounce" style={{transformOrigin: 'center', animationDuration: '4s'}} />
                <path d="M78 23 L 82 23 M 78 27 L 82 27" stroke="#4ECDC4" strokeWidth="1" />
                <path d="M15 70 L 25 70 L 20 80 Z" stroke="#6C63FF" strokeWidth="1" fill="none" className="animate-bounce" style={{transformOrigin: 'center', animationDuration: '3s'}} />
                <path d="M15 75 L 25 75" stroke="#6C63FF" strokeWidth="1" />
                
                {/* Animated code brackets */}
                <path d="M80 70 L 85 75 L 80 80" stroke="#FF6584" strokeWidth="1.5" fill="none">
                  <animate attributeName="d" 
                    values="M80 70 L 85 75 L 80 80; M79 70 L 84 75 L 79 80; M80 70 L 85 75 L 80 80" 
                    dur="3s" 
                    repeatCount="indefinite" />
                </path>
                <path d="M70 70 L 65 75 L 70 80" stroke="#FF6584" strokeWidth="1.5" fill="none">
                  <animate attributeName="d" 
                    values="M70 70 L 65 75 L 70 80; M71 70 L 66 75 L 71 80; M70 70 L 65 75 L 70 80" 
                    dur="3s" 
                    repeatCount="indefinite" />
                </path>
              </svg>
              
              {/* Ambient decorations */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-accent rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute top-1/4 right-0 w-10 h-10 bg-primary rounded-full opacity-10 animate-ping"></div>
              <div className="absolute bottom-1/3 left-0 w-8 h-8 bg-secondary rounded-full opacity-10 animate-ping"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <DoodleDivider color="primary" />
        </div>
      </div>
    </section>
  );
}
