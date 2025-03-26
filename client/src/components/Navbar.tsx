import { useState, useEffect } from "react";
import { Link } from "wouter";
import SquigglyUnderline from "./ui/squiggly-underline";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-heading text-primary">
            <SquigglyUnderline>AK</SquigglyUnderline>
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="font-medium text-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full absolute top-full left-0 shadow-md py-4 px-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="font-medium text-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: 'smooth'
                  });
                  closeMenu();
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
