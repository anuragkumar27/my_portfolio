import { ReactNode } from 'react';

interface SquigglyUnderlineProps {
  children: ReactNode;
  color?: string;
}

export default function SquigglyUnderline({ children, color = "#FF6B6B" }: SquigglyUnderlineProps) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        className="absolute left-0 bottom-[-10px] w-full h-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='10' viewBox='0 0 100 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 10 2.5, 20 5 T 40 5 T 60 5 T 80 5 T 100 5' stroke='${encodeURIComponent(color)}' fill='none' stroke-width='3'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 10px",
          backgroundRepeat: "repeat-x"
        }}
      ></span>
    </span>
  );
}
