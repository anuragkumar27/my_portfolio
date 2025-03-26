import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SquigglyUnderline from "./ui/squiggly-underline";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-heading text-foreground">
            <SquigglyUnderline>About Me</SquigglyUnderline>
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
            <div className="relative">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl shadow-xl bg-white p-4">
                <defs>
                  <linearGradient id="coding-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C63FF" />
                    <stop offset="100%" stopColor="#4ECDC4" />
                  </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" rx="5" fill="white" stroke="#eee" strokeWidth="1" />
                <rect x="15" y="15" width="70" height="10" rx="2" fill="#f0f0f0" />
                <circle cx="20" cy="20" r="2" fill="#FF6B6B" />
                <circle cx="25" cy="20" r="2" fill="#FFD166" />
                <circle cx="30" cy="20" r="2" fill="#4ECDC4" />
                <path d="M20 35 H 80" stroke="#eee" strokeWidth="1" />
                <path d="M20 40 H 70" stroke="#eee" strokeWidth="1" />
                <path d="M20 45 H 60" stroke="#eee" strokeWidth="1" />
                <path d="M25 55 H 40" stroke="#6C63FF" strokeWidth="2" />
                <path d="M45 55 H 65" stroke="#FF6B6B" strokeWidth="2" />
                <path d="M25 65 H 50" stroke="#4ECDC4" strokeWidth="2" />
                <path d="M55 65 H 75" stroke="#6C63FF" strokeWidth="2" />
                <path d="M25 75 H 35" stroke="#FF6B6B" strokeWidth="2" />
                <path d="M40 75 H 55" stroke="#4ECDC4" strokeWidth="2" />
                <path d="M60 75 H 80" stroke="#6C63FF" strokeWidth="2" />
                <path d="M15 90 L 25 80" stroke="#eee" strokeWidth="1" />
                <path d="M20 90 L 30 80" stroke="#eee" strokeWidth="1" />
                <path d="M25 90 L 35 80" stroke="#eee" strokeWidth="1" />
                <path d="M75 80 L 85 90" stroke="#eee" strokeWidth="1" />
                <path d="M70 80 L 80 90" stroke="#eee" strokeWidth="1" />
                <path d="M65 80 L 75 90" stroke="#eee" strokeWidth="1" />
              </svg>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl z-[-1]"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="font-handwritten text-secondary text-2xl">Who am I?</p>
              <p className="text-foreground/80 leading-relaxed">
                I'm a Computer Science Engineering student at Kalinga Institute of Industrial Technology, passionate about creating innovative solutions through technology. With a strong foundation in programming and a knack for problem-solving, I enjoy tackling challenges that combine hardware and software elements.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My journey in tech has led me to explore various domains including IoT, web development, and machine learning. I'm particularly interested in developing solutions that have tangible impacts on everyday life, like my Multipurpose QR Code Scanner using ESP32-CAM and the WanderNest Accommodation Platform.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me reading about the latest tech trends, gaming, or exploring new technologies to expand my skill set.
              </p>
              
              <div className="pt-4">
                <Button variant="outline" className="py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-primary">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
