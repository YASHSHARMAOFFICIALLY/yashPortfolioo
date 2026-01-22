import type { Metadata } from "next";
import { Geist, Geist_Mono,Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Sharma | Full Stack Developer | BuildWithYash",
  description: "BuildWithYash is the personal Portfolio of Yash Sharma,a full Stack developer building modern Web application using React,Next.js and Node.js",
  verification: {
    google: "google3be555600dce57c0", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${figtree.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
