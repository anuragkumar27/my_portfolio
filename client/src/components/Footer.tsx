import { Github, Linkedin, Code, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading mb-2">Anurag Kumar</h2>
            <p className="text-background/70">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/anuragkumar27" target="_blank" rel="noopener noreferrer" className="text-background hover:text-accent transition-colors duration-300" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/anurag-kumar03/" target="_blank" rel="noopener noreferrer" className="text-background hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://leetcode.com/u/anurag_k_/" target="_blank" rel="noopener noreferrer" className="text-background hover:text-accent transition-colors duration-300" aria-label="LeetCode">
              <Code className="h-5 w-5" />
            </a>
            <a href="mailto:kranurag2004@gmail.com" className="text-background hover:text-accent transition-colors duration-300" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50">© {currentYear} Anurag Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
