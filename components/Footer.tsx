import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-figtree text-neutral-500 lg:pl-12">
      <div className="flex items-center gap-1">
        <span>© 2025 Developed with</span>
        <Heart className="w-3 h-3 text-neutral-500 fill-neutral-500" />
        <span>by Yash </span>
      </div>
    </footer>
  );
}