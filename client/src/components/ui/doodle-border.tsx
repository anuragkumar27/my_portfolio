import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface DoodleBorderProps {
  children: ReactNode;
}

export default function DoodleBorder({ children }: DoodleBorderProps) {
  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="animate-wiggle">
        {children}
      </div>
      <div 
        className="absolute top-[-5px] left-[-5px] right-[-5px] bottom-[-5px] border-2 border-primary rounded-[15px] z-[-1]"
        style={{ filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" }}
      ></div>
    </motion.div>
  );
}
