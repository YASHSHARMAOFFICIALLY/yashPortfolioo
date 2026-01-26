import { Project } from "@/data/project";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({project,index=0}:ProjectCardProps){
    const themes = [
    { text: "text-cyan-400", hover: "hover:text-cyan-300" },
    { text: "text-violet-400", hover: "hover:text-violet-300" },
    { text: "text-amber-400", hover: "hover:text-amber-300" },
    { text: "text-emerald-400", hover: "hover:text-emerald-300" },
    { text: "text-pink-500", hover: "hover:text-pink-400" }
    ]
    const theme = themes[index%themes.length] || themes[0]
    return (
        <div className="group flex flex-col gap-5">
            <div className="relative w-full aspect-video bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-neutral-900">
                    <img
                        src={project.bgimage}
                        alt={project.Name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-normal text-white  mb-1">
                {project.Name}
                </h3>
                    {project.Technologies && (
                    <p className={`text-xs ${theme.text} font-figtree mb-3`}>
                    {project.Technologies.join(" / ")}
                    </p>
                     )}
                          <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                              {project.Description}
        </p>
        <div className="flex gap-4 text-xs font-medium">
          <Link
            href={project.LinkGit}
            className={`flex items-center gap-1.5 opacity-90 ${theme.text} ${theme.hover} transition-colors`}
          >
            <ExternalLink className="w-3.5 h-3.5" /> Live Preview
          </Link>
          <Link
            href={project.Repo}
            target="_blank"
            className={`flex items-center gap-1.5 opacity-90 ${theme.text} ${theme.hover} transition-colors`}
            // className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-500 transition-colors cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" /> Repo Url
          </Link>
        </div> 
            </div>
        </div>
    )
}