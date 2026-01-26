import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { ProjectsData } from "@/data/project";

export default function ProjectsPage() {
  const uiuxProjects = ProjectsData.filter((p) => p.category === "uiux");
  const fullstackProjects = ProjectsData.filter(
    (p) => p.category === "fullstack"
  );
  return(
    <div className="bg-background text-neutral-300 font-figtree antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Navbar />
     

        {/* Full Stack Section */}
        {fullstackProjects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-pink-500"></span>
              Full-Stack Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {fullstackProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + uiuxProjects.length} />
              ))}
            </div>
          </section>
        )}
        {uiuxProjects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-pink-500"></span>
              UI-UX Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {uiuxProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        )}
         <Contact />
        <Footer />
    </div>
  )
}
