"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu2,IconX } from "@tabler/icons-react";
export default function Navbar(){
    const pathname = usePathname();
    const[open,setopen]=useState(false)
    const links = [
        {href:"/",label:"Home",color:"hover:text-cyan-400",active:"text-cyan-400"},   
        {href:"/projects",label:"Projects",color:"hover:text-cyan-400",active:"text-cyan-400"},
    ]
    return (
        <nav className="  w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm font-light font-figtree z-50 relative">
            <Link href="/" className="hover:opacity-80 transition-opacity">
      </Link>
      <div className="hidden md:flex gap-8 backdrop-blur-md bg-background/50 px-6 py-2">
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
        <button className="md:hidden text-neutral-600 z-[110]" onClick={() => setopen(!open)}>
        {open ? <IconX className=" hidden size-6 dark:text-white" /> : <IconMenu2 className="size-6 text-white" />}
        </button>
          {open && (
          <> 
          <div 
             className="fixed inset-0 bg-black/50 z-90 backdrop-blur-sm" 
             onClick={() => setopen(false)} 
              />
             <div className="fixed inset-y-0 left-0 w-[70%] sm:w-[50%] bg-neutral-90 z-100 shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-900">
          <div className="flex flex-col gap-2 mt-8 -ml-5 w-full">
            {links.map((link, index) => { 
              const isActive = pathname === link.href;
    return (
      <Link
        key={index}
        href={link.href}
        onClick={() => setopen(false)}
        
        className={`text-l font-bold transition-all duration-200 px-4 py-3 rounded-md  ${
          isActive 
            ? "bg-white text-black " // The "Highlight Square"
            : "text-white hover:bg-neutral-800"
        }`}
      >
        {link.label}
      </Link>
    );
  })}
</div>
      <button 
        className="absolute top-5 right-5 text-white" 
        onClick={() => setopen(false)}
      >
        <IconX className="size-4" />
      </button>
    </div>
  </>
)}
        </nav>
    );

}