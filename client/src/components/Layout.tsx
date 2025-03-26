import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="custom-cursor min-h-screen flex flex-col bg-background" 
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 50 Q 25 25, 30 50 T 40 50 T 50 50 T 60 50 T 70 50' stroke='%236C63FF22' fill='none' stroke-width='1'/%3E%3Cpath d='M30 70 Q 35 45, 40 70 T 50 70 T 60 70 T 70 70 T 80 70' stroke='%234ECDC422' fill='none' stroke-width='1'/%3E%3Cpath d='M10 30 Q 15 15, 20 30 T 30 30 T 40 30 T 50 30 T 60 30' stroke='%23FF6B6B22' fill='none' stroke-width='1'/%3E%3C/svg%3E")` 
      }}
    >
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
