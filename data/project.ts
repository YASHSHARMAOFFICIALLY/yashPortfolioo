export interface Project {
  id: number;
  Name: string;
  Description: string;
  bgimage: string;
  bgDarkImage: string;
  LinkGit: string;
  category: "uiux" | "fullstack" | "freelance" | "general";
  Technologies?: string[];
}

export const ProjectsData :Project[] = [
    {
        id:1,
        Name: "Solana HD Wallet",
        Description:"HD Wallet is a secure multi-chain HD wallet generator supporting Solana, — create, view, and manage your keys locally with a clean and modern UI.",
        bgimage:"/assets/walletlight.png",
        bgDarkImage:"/assests/walletdark.png",
        LinkGit:"hdwallet-nu.vercel.app",
        category: "fullstack",
        Technologies:["Nextjs", "Tailwind"],
    },
    {
        id:2,
        Name:"paytmm-clone",
        Description:"A finance application like Paytm where user can create their own account, send money to other person then the money will be deducted from their wallet and will credit to other people wallet ",
        bgimage:"/assets/paytm.png",
        bgDarkImage:"/assests/paytm.png",
        LinkGit:"https://paytm-clonee.vercel.app/",
        category:"fullstack",
        Technologies:["Vite","Tailwind"]
    },
        {
        id:3,
        Name:"Betana-Bite",
        Description:"Fully Function e-commerce website with complete payment integration made specially for Betana Bite a snacks brand",
        bgimage:"/assets/Betana.png",
        bgDarkImage:"/assets/Betana.png",
        LinkGit:"https://betana-bite.vercel.app",
        category:"fullstack",
        Technologies:["Nextjs", "Tailwind"],
    },
   
]