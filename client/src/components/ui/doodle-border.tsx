import React, { ReactNode } from "react";

interface DoodleBorderProps {
  children: ReactNode;
}

export default function DoodleBorder({ children }: DoodleBorderProps) {
  return (
    <div className="relative p-1">
      {/* Top-left corner */}
      <svg
        className="absolute top-0 left-0 w-12 h-12 transform -translate-x-3 -translate-y-3 overflow-visible"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38 38 C32 36, 25 35, 20 20 C15 5, 10 5, 2 2"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-wiggle"
          style={{ transformOrigin: 'center', animationDuration: '10s' }}
        />
        <circle cx="2" cy="2" r="2" fill="var(--primary)" />
      </svg>

      {/* Top-right corner */}
      <svg
        className="absolute top-0 right-0 w-12 h-12 transform translate-x-3 -translate-y-3 overflow-visible"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 38 C8 36, 15 35, 20 20 C25 5, 30 5, 38 2"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-wiggle"
          style={{ transformOrigin: 'center', animationDuration: '12s' }}
        />
        <circle cx="38" cy="2" r="2" fill="var(--primary)" />
      </svg>

      {/* Bottom-left corner */}
      <svg
        className="absolute bottom-0 left-0 w-12 h-12 transform -translate-x-3 translate-y-3 overflow-visible"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38 2 C32 4, 25 5, 20 20 C15 35, 10 35, 2 38"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-wiggle"
          style={{ transformOrigin: 'center', animationDuration: '9s' }}
        />
        <circle cx="2" cy="38" r="2" fill="var(--primary)" />
      </svg>

      {/* Bottom-right corner */}
      <svg
        className="absolute bottom-0 right-0 w-12 h-12 transform translate-x-3 translate-y-3 overflow-visible"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2 C8 4, 15 5, 20 20 C25 35, 30 35, 38 38"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-wiggle"
          style={{ transformOrigin: 'center', animationDuration: '11s' }}
        />
        <circle cx="38" cy="38" r="2" fill="var(--primary)" />
      </svg>

      {/* The actual content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}