import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Send, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Heart, 
  School, 
  Home
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import SquigglyUnderline from "./ui/squiggly-underline";
import DoodleBorder from "./ui/doodle-border";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. I will get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const interests = ["Reading", "Gaming", "Tech Trends", "Advancements"];
  const interestColors = ["accent", "primary", "secondary", "foreground"];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-heading text-foreground">
            <SquigglyUnderline>Get In Touch</SquigglyUnderline>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <DoodleBorder>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block font-medium text-foreground mb-2">Your Name</label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full border-2 border-primary/20 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block font-medium text-foreground mb-2">Your Email</label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full border-2 border-primary/20 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block font-medium text-foreground mb-2">Your Message</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={5} 
                      className="w-full border-2 border-primary/20 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Hello Anurag, I'd like to discuss..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </DoodleBorder>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading text-foreground mb-6 flex items-center">
                  <MapPin className="text-primary mr-3" />
                  Location
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <School className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">School Address:</h4>
                      <p className="text-foreground/70">KIIT University, Patia, Bhubaneswar, 751024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Home className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Permanent Address:</h4>
                      <p className="text-foreground/70">UCIL Colony Turamdih, Jamshedpur, Jharkhand, 832107</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading text-foreground mb-6 flex items-center">
                  <Send className="text-secondary mr-3" />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-secondary" />
                    </div>
                    <a href="mailto:kranurag2004@gmail.com" className="text-foreground hover:text-primary transition-colors duration-300">
                      kranurag2004@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-secondary" />
                    </div>
                    <a href="tel:+919263614983" className="text-foreground hover:text-primary transition-colors duration-300">
                      +91 9263614983
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-secondary" />
                    </div>
                    <a href="https://www.linkedin.com/in/anurag-kumar03/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                      linkedin.com/in/anurag-kumar03
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="text-secondary" />
                    </div>
                    <a href="https://github.com/anuragkumar27" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                      github.com/anuragkumar27
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading text-foreground mb-6 flex items-center">
                  <Heart className="text-accent mr-3" />
                  Interests
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, i) => (
                    <span 
                      key={interest} 
                      className={`px-4 py-2 bg-${interestColors[i]}/10 text-${interestColors[i]} font-body rounded-full`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
