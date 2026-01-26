"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname();
    const links = [
        {href:"/",label:"Home",color:"hover:text-cyan-400",active:"text-cyan-400"},
        
        {href:"/projects",label:"Projects",color:"hover:text-cyan-400",active:"text-cyan-400"},

    ]
    return (
        <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm font-light font-figtree z-50 relative">
            <Link href="/" className="hover:opacity-80 transition-opacity">
          
      </Link>
      <div className="flex gap-8 backdrop-blur-md bg-background/50 px-6 py-2">
      {links.map((link)=>{
        return (
            <Link
            key = {link.href}
            href={link.href}
            className={`transition-colors ${
              pathname === link.href ? link.active : `text-neutral-500 ${link.color}`
            }`}
          >
            {link.label}
            </Link>
        )
      })}
         </div>
        </nav>
    );

}