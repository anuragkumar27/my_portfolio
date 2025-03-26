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
    { name: "Operating Systems Scheduling", icon: <Microchip className="text-accent" /> },
    { name: "Network Simulation", icon: <Network className="text-accent" /> },
    { name: "Database Management Systems", icon: <Database className="text-accent" /> },
    { name: "AWS Cloud Services", icon: <Cloud className="text-accent" /> },
    { name: "IoT Development", icon: <Wifi className="text-accent" /> },
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
          <h2 className="inline-block text-4xl font-heading text-foreground">
            <SquigglyUnderline>My Skills</SquigglyUnderline>
          </h2>
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
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Code className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground">Programming Languages</h3>
                </div>
                
                <div className="space-y-4">
                  {programmingSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="font-handwritten text-secondary">{skill.proficiency}</span>
                      </div>
                      <Progress value={skill.level} className="h-2.5 bg-gray-200" indicatorClassName="bg-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </DoodleBorder>
          </motion.div>
          
          {/* Frameworks & Libraries */}
          <motion.div variants={item}>
            <DoodleBorder>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Layers className="text-secondary text-2xl" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground">Frameworks & Libraries</h3>
                </div>
                
                <div className="space-y-4">
                  {frameworkSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="font-handwritten text-secondary">{skill.proficiency}</span>
                      </div>
                      <Progress value={skill.level} className="h-2.5 bg-gray-200" indicatorClassName="bg-secondary" />
                    </div>
                  ))}
                </div>
              </div>
            </DoodleBorder>
          </motion.div>
          
          {/* Computer Skills */}
          <motion.div variants={item}>
            <DoodleBorder>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Cpu className="text-accent text-2xl" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground">Computer Skills</h3>
                </div>
                
                <div className="space-y-5">
                  {computerSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {skill.icon}
                      </div>
                      <p className="text-foreground/80">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DoodleBorder>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
