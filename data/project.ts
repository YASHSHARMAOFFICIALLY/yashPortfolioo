export interface Project {
  id: number;
  Name: string;
  Description: string;
  bgimage: string;
  bgDarkImage: string;
  LinkGit: string;
  category: "uiux" | "fullstack" | "freelance" | "general";
  Technologies?: string[];
  Repo:string;
}

export const ProjectsData :Project[] = [
    {
        id:6,
        Name:"Argoya Assam",
        Description:"A Health Application which used to Detect Anemia through Questinoarie without Lab test also it show you nearby hospital around you so that you dont have to search ",
        bgimage:"/assets/assam.png",
        bgDarkImage:"/assets/assam.png",
        LinkGit:"https://hackathon-beta-steel.vercel.app/",
        category:"fullstack",
        Technologies:["Nextjs", "Tailwind"],
        Repo:"none",
    },
    
    {
        id:1,
        Name:"paytmm-clone",
        Description:"A finance application like Paytm where user can create their own account, send money to other person then the money will be deducted from their wallet and will credit to other people wallet ",
        bgimage:"/assets/paytm.png",
        bgDarkImage:"/assests/paytm.png",
        LinkGit:"https://paytm-clonee.vercel.app/",
        category:"fullstack",
        Technologies:["Vite","Tailwind"],
        Repo:"https://github.com/YASHSHARMAOFFICIALLY/paytmm_clone",
    },
        {
        id:3,
        Name:"Betana-Bite",
        Description:"Fully Function e-commerce website with complete payment integration made specially for Betana Bite a snacks brand",
        bgimage:"/assets/Betana.png",
        bgDarkImage:"/assets/Betana.png",
        LinkGit:"https://betana-bite.vercel.app",
        Repo:"https://github.com/YASHSHARMAOFFICIALLY/Betana-Bite",
        category:"fullstack",
        Technologies:["Nextjs", "Tailwind"],
    },
    {
     id:4,
        Name:"Finta Hero-Section Clone ",
        Description:"A high-fidelity clone of the Finta hero section, built as a practice project to master Tailwind CSS and responsive web design.",
        bgimage:"/assets/Finta.png",
        bgDarkImage:"/assets/Finta.png",
        LinkGit:"finta-clone-xi.vercel.app",
        category:"uiux",
        Technologies:["Tailwind"],
        Repo:"https://github.com/YASHSHARMAOFFICIALLY/Finta_clone-",
    },
    {
        id:2,
        Name: "Solana HD Wallet",
        Description:"HD Wallet is a secure multi-chain HD wallet generator supporting Solana, — create, view, and manage your keys locally with a clean and modern UI.",
        bgimage:"/assets/walletlight.png",
        bgDarkImage:"/assests/walletdark.png",
        Repo:"https://github.com/YASHSHARMAOFFICIALLY/Solana-Wallet",
        LinkGit:"https://hdwallet-nu.vercel.app",
        category: "fullstack",
        Technologies:["Nextjs", "Tailwind"],
    },
    {
     id:5,
        Name:"ElevenLab Hero-Section Clone ",
        Description:"A high-fidelity clone of the ElevenLab hero section, built as a practice project to master Tailwind CSS and responsive web design.",
        bgimage:"/assets/Elevenlab.png",
        bgDarkImage:"/assets/Elevenlab.png",
        LinkGit:"https://webdev-bootcamp-47be.vercel.app/",
        category:"uiux",
        Technologies:["Tailwind"],
        Repo:"https://webdev-bootcamp-47be.vercel.app"
    },

   
]