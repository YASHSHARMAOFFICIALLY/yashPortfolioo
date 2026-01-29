import Image from "next/image";
import Link from "next/link";
import CodingStatusDot from "./CodingStatus";
import StudentBadge from "./StudentBadge";

export default function Hero(){
    return (
        <section className="flex flex-col lg:flex-row lg:items-center lg:-justify-between gap-12 mt-10">
            <div className="flex flex-col gap-8 lg:flex-1">
                <div className="  relative w-20 h-20 lg:w-28 lg:h-28 aspect-square rounded-full overflow-visible">
                    <div className="w-full h-full aspect-square rounded-full overflow-hidden border-2 border-neutral-800">
                    <Image
                    src="/assets/yashphoto.jpeg"
                    alt="yash photo "
                    fill
                    className="object-cover rounded-full"
            />
          </div>
          <CodingStatusDot />
        </div>

            <div>
                <h1 className="text-4xl lg:text-7xl font-geist font-normal tracking-tight text-white mb-4">
                    Yash Sharma 
          </h1>
          <p className="text-sm font-geist text-neutral-500 uppercase tracking-widest">
            Builder  • Full Stack Developer 
          </p>
        </div>

            <div className="max-w-3xl flex flex-col gap-6 text-lg font-light text-neutral-300 leading-relaxed">
                <p>
                  I'm a    
            <span className="text-pink-400"> Full Stack web developer</span>{" "}
            and Open Source Contributor,{" "}
            <span className="text-pink-400">I love building products</span> to solve through{" "}
            <span className="text-pink-400">code, design, and content</span>.
           
          </p>

          <div className="flex flex-col gap-1 text-base font-bold">
            <a
              href="mailto:yashsharmaofficially@gmail.com.com"
              className="text-neutral-400 hover:text-pink-400 transition-colors w-fit"
            >
              yashsharmaofficially@gmail.com
            </a>
          </div>
           <p className="flex flex-wrap items-center gap-1">
            <span className="text-pink-400 text-xl">Open to Work:</span>
            <span className="text-xl tracking-tight">Full-Time, Freelance, or Collabs.</span>
            <Link
              href="https://calendly.com/buildwithyashx"
              target="_blank"
              className="group relative inline-block text-pink-400 hover:text-white transition-colors"
            >
              <span className="relative z-10 text-xl"> Let's talk</span>
              {/* Micro animation underline effect */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[0.5px] bg-pink-400/60 group-hover:w-full transition-all duration-300 ease-out"></span>
              {/* Hover tooltip */}
              <span className="absolute bottom-full left-0 mb-2 px-2 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                for clients
              </span>
            </Link>

            {/* Student Badge */}
            {/* <StudentBadge /> */}
          </p>
        </div>
      </div>

      {/* Right Side - Large Image */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:shrink-0">
        <div className="relative w-72 xl:w-80 aspect-3/4">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 via-purple-500/10 to-transparent rounded-3xl blur-2xl"></div>

          {/* Image Container */}
          <div className=" relative w-full h-full rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm">
            <Image
              src="/assets/yashphoto.jpeg"
              alt="Yash Sharma"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          </div>
            </div>
        </section>
    )
}