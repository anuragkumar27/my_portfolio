import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SquigglyUnderline from "./ui/squiggly-underline";
import DoodleBorder from "./ui/doodle-border";
import DoodleDivider from "./ui/doodle-divider";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-heading text-foreground animate-float" style={{animationDuration: '5s'}}>
            <SquigglyUnderline color="var(--secondary)">About Me</SquigglyUnderline>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative animate-float" style={{animationDuration: '7s'}}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl shadow-xl bg-white p-4">
                <defs>
                  <linearGradient id="coding-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#4ECDC4" />
                  </linearGradient>
                  <pattern id="doodle-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M0 10 Q 5 5, 10 10 T 20 10" stroke="#4ECDC4" strokeWidth="0.5" fill="none" />
                  </pattern>
                </defs>
                
                {/* Code editor background with doodle pattern */}
                <rect x="10" y="10" width="80" height="80" rx="5" fill="white" stroke="url(#coding-grad)" strokeWidth="1" strokeDasharray="3,2" />
                <rect x="10" y="10" width="80" height="80" rx="5" fill="url(#doodle-lines)" fillOpacity="0.1" />
                
                {/* Editor top bar */}
                <rect x="15" y="15" width="70" height="10" rx="2" fill="#f0f0f0" className="animate-pulse" />
                <circle cx="20" cy="20" r="2" fill="#FF6B6B" className="animate-pulse" />
                <circle cx="25" cy="20" r="2" fill="#FFD166" className="animate-blink" />
                <circle cx="30" cy="20" r="2" fill="#4ECDC4" className="animate-bounce" style={{animationDuration: '2s'}} />
                
                {/* Code lines */}
                <path d="M20 35 H 80" stroke="#eee" strokeWidth="1" />
                <path d="M20 40 H 70" stroke="#eee" strokeWidth="1" />
                <path d="M20 45 H 60" stroke="#eee" strokeWidth="1" />
                <path d="M25 55 H 40" stroke="#6C63FF" strokeWidth="2" className="animate-pulse" />
                <path d="M45 55 H 65" stroke="#FF6B6B" strokeWidth="2" className="animate-blink" />
                <path d="M25 65 H 50" stroke="#4ECDC4" strokeWidth="2" className="animate-pulse" />
                <path d="M55 65 H 75" stroke="#6C63FF" strokeWidth="2" className="animate-blink" />
                <path d="M25 75 H 35" stroke="#FF6B6B" strokeWidth="2" className="animate-pulse" />
                <path d="M40 75 H 55" stroke="#4ECDC4" strokeWidth="2" className="animate-blink" />
                <path d="M60 75 H 80" stroke="#6C63FF" strokeWidth="2" className="animate-pulse" />
                
                {/* Doodle code brackets and symbols */}
                <path d="M15 75 C 12 72, 10 70, 12 65 C 14 60, 12 55, 10 52" stroke="#FF6B6B" fill="none" strokeWidth="1" strokeDasharray="2,1" className="animate-wiggle" style={{animationDuration: '10s'}} />
                <path d="M85 75 C 88 72, 90 70, 88 65 C 86 60, 88 55, 90 52" stroke="#FF6B6B" fill="none" strokeWidth="1" strokeDasharray="2,1" className="animate-wiggle" style={{animationDuration: '8s'}} />
                
                {/* Animated typing cursor */}
                <rect x="80" y="75" width="2" height="8" fill="#6C63FF">
                  <animate 
                    attributeName="opacity" 
                    values="1;0;1" 
                    dur="1s" 
                    repeatCount="indefinite" 
                  />
                </rect>
                
                {/* Doodle decoration elements */}
                <circle cx="85" cy="35" r="3" fill="#FFD166" className="animate-pulse" />
                <path d="M82 30 L 88 30 L 85 25 Z" stroke="#4ECDC4" strokeWidth="1" fill="none" className="animate-bounce" style={{animationDuration: '3s'}} />
              </svg>
              
              {/* Doodle border effect */}
              <svg 
                className="absolute -bottom-4 -right-4 w-full h-full z-[-1]" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect 
                  x="5" 
                  y="5" 
                  width="90" 
                  height="90" 
                  rx="5" 
                  fill="none" 
                  stroke="var(--primary)" 
                  strokeWidth="2" 
                  strokeDasharray="5,3" 
                  className="animate-wiggle"
                  style={{transformOrigin: 'center', animationDuration: '15s'}}
                />
                <circle cx="5" cy="5" r="2" fill="var(--secondary)" className="animate-pulse" />
                <circle cx="95" cy="5" r="2" fill="var(--secondary)" className="animate-bounce" />
                <circle cx="5" cy="95" r="2" fill="var(--secondary)" className="animate-pulse" />
                <circle cx="95" cy="95" r="2" fill="var(--secondary)" className="animate-bounce" />
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DoodleBorder>
              <div className="space-y-6 p-2">
                <p className="font-handwritten text-secondary text-2xl animate-wiggle inline-block" style={{animationDuration: '7s'}}>
                  Who am I?
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  I'm a <span className="font-medium text-primary animate-pulse">Computer Science Engineering student</span> at Kalinga Institute of Industrial Technology, passionate about creating innovative solutions through technology. With a strong foundation in programming and a knack for problem-solving, I enjoy tackling challenges that combine hardware and software elements.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  My journey in tech has led me to explore various domains including 
                  <span className="font-medium text-accent animate-float inline-block"> IoT</span>, 
                  <span className="font-medium text-primary animate-float inline-block" style={{animationDelay: '0.5s'}}> web development</span>, and
                  <span className="font-medium text-secondary animate-float inline-block" style={{animationDelay: '1s'}}> machine learning</span>. 
                  I'm particularly interested in developing solutions that have tangible impacts on everyday life, like my Multipurpose QR Code Scanner using ESP32-CAM and the WanderNest Accommodation Platform.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  When I'm not coding, you'll find me reading about the latest tech trends, gaming, or exploring new technologies to expand my skill set.
                </p>
                
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-primary animate-bounce"
                    style={{animationDuration: '4s'}}
                  >
                    <Download className="mr-2 h-4 w-4 animate-bounce" style={{animationDuration: '2s'}} /> 
                    Download Resume
                  </Button>
                </div>
              </div>
            </DoodleBorder>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <DoodleDivider color="secondary" />
        </div>
      </div>
    </section>
  );
}
