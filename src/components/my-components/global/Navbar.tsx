"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialDialog from "./SocialDialog";

const kodemonoFont = Inter({
  subsets: ["latin"],
  weight: "500",
});

interface LinkItemProps {
  title: string;
  url: string;
  disabled: boolean;
  isActive: boolean; 
}


function LinkItem({ title, url, disabled, isActive }: LinkItemProps) {
  const baseStyles = "text-xs px-3 py-1 transition-colors rounded-full";

  if (disabled) {
    return (
      <span 
        aria-disabled="true"
        className={`${baseStyles} text-zinc-400 bg-zinc-200/20 cursor-not-allowed`}
      >
        {title}
      </span>
    );
  }

  return (
    <Link 
      href={url} 
      aria-label={title} 
      className={`${baseStyles} cursor-pointer ${
        isActive 
          ? "bg-blue-500 text-white" 
          : "hover:bg-blue-500 hover:text-white text-zinc-700" 
      }`}
    >
      {title}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname(); 

  return (
    <div className={`w-full p-1 px-4 flex justify-between items-center ${kodemonoFont.className}`}>
      <div className="w-52 uppercase">Dávid Papp</div>
      <div className="border border-zinc-300 rounded-full bg-zinc-300/10 p-1 flex items-center gap-1">
        
        <LinkItem 
          title="About" 
          url="/" 
          disabled={false} 
          isActive={pathname === "/"} 
        />
        
        <LinkItem 
          title="Projects" 
          url="/projects" 
          disabled={false} 
          isActive={pathname === "/projects"} 
        />
        
        <LinkItem 
          title="Soon" 
          url="/soon" 
          disabled={true} 
          isActive={pathname === "/soon"} 
        />
        
      </div>
      <div className="w-52 flex justify-end">
        <SocialDialog />
      </div>
    </div>
  );
}