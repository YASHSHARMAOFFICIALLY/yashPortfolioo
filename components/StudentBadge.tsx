"use client";
import Link from "next/link";

export default function StudentBadge() {
  return (
    <Link
      href="https://topmate.io/yash_sharma177/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block text-pink-400 hover:text-white transition-colors"
    >
      <span className="relative z-10">Need guidance</span>
      {/* Micro animation underline effect */}
      <span className="absolute -bottom-0.5 left-0 w-0 h-[0.5px] bg-pink-400/60 group-hover:w-full transition-all duration-300 ease-out"></span>
      {/* Hover tooltip */}
      <span className="absolute bottom-full left-0 mb-2 px-2 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        for students
      </span>
    </Link>
  );
}