import React, { ReactNode } from "react";

interface SquigglyUnderlineProps {
  children: ReactNode;
  color?: string;
}

export default function SquigglyUnderline({ children, color = "#FF6B6B" }: SquigglyUnderlineProps) {
  return (
    <span className="relative inline-block">
      {/* The text content */}
      <span className="relative z-10">{children}</span>
      
      {/* The squiggly underline */}
      <svg
        width="100%"
        height="10"
        className="absolute bottom-0 left-0 animate-wiggle"
        style={{ 
          transformOrigin: 'center',
          animationDuration: '7s',
          zIndex: 1
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,3 
             Q5,6 10,3 
             T20,3 
             T30,3 
             T40,3 
             T50,3 
             T60,3 
             T70,3 
             T80,3 
             T90,3 
             T100,3 
             T110,3 
             T120,3 
             T130,3 
             T140,3 
             T150,3
             T160,3
             T170,3
             T180,3
             T190,3
             T200,3
             T210,3
             T220,3
             T230,3
             T240,3
             T250,3"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}