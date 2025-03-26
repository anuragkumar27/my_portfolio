import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Layers, 
  Cpu, 
  Microchip, 
  Network, 
  Database, 
  Cloud, 
  Wifi 
} from "lucide-react";
import SquigglyUnderline from "./ui/squiggly-underline";
import DoodleBorder from "./ui/doodle-border";
import DoodleDivider from "./ui/doodle-divider";
import DoodleSpinner from "./ui/doodle-spinner";

export default function Skills() {
  const programmingSkills = [
    { name: "Java", level: 90, proficiency: "Fluent" },
    { name: "C", level: 75, proficiency: "Proficient" },
    { name: "Arduino", level: 75, proficiency: "Proficient" },
    { name: "Python", level: 60, proficiency: "Familiar" },
    { name: "JavaScript", level: 60, proficiency: "Familiar" },
  ];

  const frameworkSkills = [
    { name: "Node.js", level: 75, proficiency: "Proficient" },
    { name: "Express", level: 70, proficiency: "Proficient" },
    { name: "MongoDB", level: 75, proficiency: "Proficient" },
    { name: "SQL", level: 65, proficiency: "Familiar" },
    { name: "Pandas/NumPy", level: 60, proficiency: "Familiar" },
  ];

  const computerSkills = [
    { name: "Operating Systems Scheduling", icon: <Microchip className="text-accent animate-pulse" /> },
    { name: "Network Simulation", icon: <Network className="text-accent animate-pulse" /> },
    { name: "Database Management Systems", icon: <Database className="text-accent animate-pulse" /> },
    { name: "AWS Cloud Services", icon: <Cloud className="text-accent animate-pulse" /> },
    { name: "IoT Development", icon: <Wifi className="text-accent animate-pulse" /> },
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
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-heading text-foreground animate-float" style={{ animationDuration: '6s' }}>
            <SquigglyUnderline color="var(--accent)">My Skills</SquigglyUnderline>
          </h2>
          <div className="mt-6 flex justify-center">
            <p className="font-handwritten text-xl text-accent/80 max-w-md text-center animate-wiggle" style={{ animationDuration: '8s' }}>
              Here's what I've mastered along my tech journey
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
          {/* Programming Languages */}
          <motion.div variants={item}>
            <DoodleBorder>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Decorative code snippets */}
                <div className="absolute -right-4 -top-4 text-xs font-mono text-primary/20 transform rotate-12 select-none animate-pulse">
                  &lt;code&gt;<br/>
                  function()<br/>
                  {"{}"}<br/>
                  &lt;/code&gt;
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 animate-wiggle" style={{ animationDuration: '8s' }}>
                    <Code className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground">Programming Languages</h3>
                </div>
                
                <div className="space-y-4">
                  {programmingSkills.map((skill, index) => (
                    <div key={skill.name} className="animate-float" style={{ animationDuration: `${3 + index * 0.5}s` }}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="font-handwritten text-secondary">{skill.proficiency}</span>
                      </div>
                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                        <div 
                          className="h-full bg-primary/80 transition-all rounded-full flex items-center"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute right-0 top-0 h-full w-1.5 bg-primary/100 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DoodleBorder>
          </motion.div>
          
          {/* Frameworks & Libraries */}
          <motion.div variants={item}>
            <DoodleBorder>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 text-xs font-mono text-secondary/20 transform -rotate-12 select-none animate-pulse">
                  import {"{}"}<br/>
                  from 'lib'<br/>
                  export()<br/>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4 animate-wiggle" style={{ animationDuration: '9s' }}>
                    <Layers className="text-secondary text-2xl" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground">Frameworks & Libraries</h3>
                </div>
                
                <div className="space-y-4">
                  {frameworkSkills.map((skill, index) => (
                    <div key={skill.name} className="animate-float" style={{ animationDuration: `${4 + index * 0.5}s` }}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="font-handwritten text-secondary">{skill.proficiency}</span>
                      </div>
                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                        <div 
                          className="h-full bg-secondary/80 transition-all rounded-full flex items-center"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute right-0 top-0 h-full w-1.5 bg-secondary/100 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DoodleBorder>
          </motion.div>
          
          {/* Computer Skills */}
          <motion.div variants={item}>
            <DoodleBorder>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-2 right-2">
                  <DoodleSpinner size="sm" color="accent" className="opacity-30" />
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 animate-wiggle" style={{ animationDuration: '10s' }}>
                    <Cpu className="text-accent text-2xl" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground">Computer Skills</h3>
                </div>
                
                <div className="space-y-5">
                  {computerSkills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center gap-4 group hover:bg-accent/5 p-2 rounded-lg transition-colors duration-300 animate-float" 
                      style={{ animationDuration: `${5 + index * 0.5}s` }}
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <p className="text-foreground/80 group-hover:text-accent transition-colors duration-300">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DoodleBorder>
          </motion.div>
        </motion.div>
        
        <div className="mt-16">
          <DoodleDivider color="accent" />
        </div>
      </div>
    </section>
  );
}
