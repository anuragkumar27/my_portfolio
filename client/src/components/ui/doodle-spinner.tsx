import { cn } from "@/lib/utils";
import React from "react";

interface DoodleSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent";
  className?: string;
}

export default function DoodleSpinner({ 
  size = "md", 
  color = "primary", 
  className 
}: DoodleSpinnerProps) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  
  const colorMap = {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
    accent: "stroke-accent"
  };
  
  return (
    <div className={cn(sizeMap[size], className, "relative")}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin w-full h-full"
        style={{ animationDuration: "3s" }}
      >
        {/* Irregular spinner shape with doodle style */}
        <path
          d="M50 10 
             C60 10, 70 15, 80 20 
             S90 30, 90 50 
             S85 70, 75 80 
             S60 90, 50 90 
             S30 85, 20 80 
             S10 70, 10 50 
             S15 30, 25 20 
             S40 10, 50 10"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          className={colorMap[color]}
          strokeDasharray="10,5"
        />
        
        {/* Animated dots */}
        <circle 
          cx="50" 
          cy="10" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0s" }}
        />
        <circle 
          cx="80" 
          cy="20" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0.1s" }}
        />
        <circle 
          cx="90" 
          cy="50" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0.2s" }}
        />
        <circle 
          cx="80" 
          cy="80" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0.3s" }}
        />
        <circle 
          cx="50" 
          cy="90" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0.4s" }}
        />
        <circle 
          cx="20" 
          cy="80" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0.5s" }}
        />
        <circle 
          cx="10" 
          cy="50" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0.6s" }}
        />
        <circle 
          cx="20" 
          cy="20" 
          r="4" 
          className={`fill-${color} animate-bounce`}
          style={{ animationDelay: "0.7s" }}
        />
        
        {/* Center doodle face */}
        <g className="animate-wiggle" style={{ transformOrigin: "center", animationDuration: "5s" }}>
          <circle cx="50" cy="50" r="15" fill="white" stroke={`var(--${color})`} strokeWidth="2" />
          <circle cx="43" cy="45" r="3" className={`fill-${color}`} />
          <circle cx="57" cy="45" r="3" className={`fill-${color}`} />
          <path 
            d="M43 55 Q 50 60, 57 55" 
            fill="none" 
            strokeWidth="2" 
            strokeLinecap="round"
            className={colorMap[color]} 
          />
        </g>
      </svg>
    </div>
  );
}