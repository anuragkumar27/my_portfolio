import { cn } from "@/lib/utils";
import React from "react";

interface DoodleDividerProps {
  className?: string;
  color?: "primary" | "secondary" | "accent";
  animated?: boolean;
}

export default function DoodleDivider({ 
  className, 
  color = "primary",
  animated = true
}: DoodleDividerProps) {
  const colorMap = {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
    accent: "stroke-accent"
  };
  
  return (
    <div className={cn("w-full py-6 flex justify-center", className)}>
      <svg 
        viewBox="0 0 300 30" 
        xmlns="http://www.w3.org/2000/svg" 
        className={cn("w-full max-w-3xl", animated && "animate-wiggle")}
        style={{ animationDuration: "15s" }}
      >
        {/* Main wavy line */}
        <path 
          d="M0 15 
             C10 5, 20 25, 30 15 
             S40 5, 50 15 
             S60 25, 70 15 
             S80 5, 90 15 
             S100 25, 110 15 
             S120 5, 130 15 
             S140 25, 150 15 
             S160 5, 170 15 
             S180 25, 190 15 
             S200 5, 210 15 
             S220 25, 230 15 
             S240 5, 250 15 
             S260 25, 270 15 
             S280 5, 290 15 
             S300 25, 300 15"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          className={colorMap[color]}
          strokeDasharray={animated ? "0" : "4,2"}
        />
        
        {/* Decorative elements */}
        <circle 
          cx="30" 
          cy="15" 
          r="3" 
          className={`fill-${color}`} 
        />
        <circle 
          cx="90" 
          cy="15" 
          r="3" 
          className={`fill-${color}`} 
        />
        <circle 
          cx="150" 
          cy="15" 
          r="3" 
          className={`fill-${color}`} 
        />
        <circle 
          cx="210" 
          cy="15" 
          r="3" 
          className={`fill-${color}`} 
        />
        <circle 
          cx="270" 
          cy="15" 
          r="3" 
          className={`fill-${color}`} 
        />
        
        {/* Decorative stars */}
        <path 
          d="M60 5 L62 10 L67 10 L63 13 L65 18 L60 15 L55 18 L57 13 L53 10 L58 10 Z" 
          className={`fill-${color} opacity-50`} 
        />
        <path 
          d="M180 5 L182 10 L187 10 L183 13 L185 18 L180 15 L175 18 L177 13 L173 10 L178 10 Z" 
          className={`fill-${color} opacity-50`} 
        />
        
        {/* Tiny decorative elements */}
        <path 
          d="M120 5 L122 7 L120 9 L118 7 Z" 
          className={`fill-${color} opacity-30`} 
        />
        <path 
          d="M240 5 L242 7 L240 9 L238 7 Z" 
          className={`fill-${color} opacity-30`} 
        />
      </svg>
    </div>
  );
}