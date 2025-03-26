import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Code } from "lucide-react";

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
            <p className="font-handwritten text-secondary text-2xl">Hello there! I'm</p>
            <h1 className="text-5xl md:text-7xl font-heading text-foreground">
              <span className="text-primary">Anurag</span> Kumar
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
              A passionate <span className="font-medium text-primary">Computer Science Engineer</span> specializing in 
              <span className="font-medium text-secondary"> web development</span> and
              <span className="font-medium text-accent"> IoT solutions</span>
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact">
                <Button className="relative py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
              <a href="https://github.com/anuragkumar27" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/anurag-kumar03/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://leetcode.com/u/anurag_k_/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="LeetCode">
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
            <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#FF6584" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="white" stroke="url(#grad1)" strokeWidth="2" />
                <path d="M30 40 Q 40 20, 50 40 T 70 40" stroke="#6C63FF" fill="none" strokeWidth="2" />
                <path d="M30 60 Q 50 80, 70 60" stroke="#6C63FF" fill="none" strokeWidth="2" />
                <path d="M40 30 L 45 35 L 40 40" stroke="#FF6584" fill="none" strokeWidth="2" />
                <path d="M60 30 L 55 35 L 60 40" stroke="#FF6584" fill="none" strokeWidth="2" />
                <path d="M25 50 Q 35 55, 45 55 T 65 55 T 75 50" stroke="#4ECDC4" fill="none" strokeWidth="2" />
                <circle cx="35" cy="35" r="5" fill="#6C63FF" />
                <circle cx="65" cy="35" r="5" fill="#6C63FF" />
                <path d="M10 10 Q 20 15, 30 10 T 50 10 T 70 10 T 90 10" stroke="#FF6B6B22" fill="none" strokeWidth="1" />
                <path d="M10 90 Q 30 85, 50 90 T 70 90 T 90 90" stroke="#6C63FF22" fill="none" strokeWidth="1" />
                <path d="M10 50 Q 30 45, 50 50 T 70 50 T 90 50" stroke="#4ECDC422" fill="none" strokeWidth="1" />
              </svg>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-accent rounded-full opacity-20 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
