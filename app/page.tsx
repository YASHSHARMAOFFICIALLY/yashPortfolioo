import Contact from "@/components/Contact";
import ContributionGraph from "@/components/ContributionGraph";
import FeaturedProjects from "@/components/FeatureProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ToolsMarquee from "@/components/ToolsMarque";

export default function Home(){
  return(
    <div className="bg-background text-neutral-500 font-figtree antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
       <div className="fixed top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
       <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20 hidden lg:block"
        style={{ height: "4000px" }}
      >
        <path
          d="M 180 0 V 4000"
          stroke="#333"
          strokeWidth="1"
          fill="none"
        ></path>
        <path
          className="beam-path"
          d="M 180 0 V 4000"
          stroke="url(#beam-grad)"
          strokeWidth="2"
          fill="none"
        ></path>
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent"></stop>
            <stop offset="50%" stopColor="#ec4899"></stop>
            <stop offset="100%" stopColor="transparent"></stop>
          </linearGradient>
        </defs>
      </svg>

    <Navbar/>
    <main className="w-full max-w-6xl mx-auto px-6 pb-12 relative">
      <Hero/>
      <ToolsMarquee/>
      <ContributionGraph/>
      <FeaturedProjects/>
      <Contact/>
      <Footer/>

    </main>
    </div>
  )
}