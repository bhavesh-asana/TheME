import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Bhavesh Asanabada",
  description: "Data Analyst and Web Application Developer with 1.5 years of experience comprising Deep Learning, Computer Vision, and Machine Learning, and a remarkable history of developing MERN full‐stack Web Applications. Strong willingness to exhibit my proficiency in Deep Learning and Machine Learning Algorithms in a professional environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {/* Background */}
        <div className="bg-grey-900 h-screen w-screen relative flex justify-center items-center text-white font-bree">

          <div className="absolute h-screen w-screen opacity-20">
            <h1 className="font-caveat text-3xl text-white text-center">Perception makes you more significant!</h1>
            <h1 className="font-caveat text-l text-white text-center">Strength to change, Courage to accept, and Wisdom to know</h1>
          </div>

          <div className=" w-0/6 h-4/5 grid grid-cols-10 grid-rows-3 gap-4 items-stretch object-cover absolute m-8">
            <div className="grid col-span-2 row-span-3 bg-white/10  rounded-2xl justify-center items-center align-center content-center">
              <Header />
            </div>

            <div className="grid col-span-7 row-span-3 bg-white/10 rounded-tl-2xl rounded-br-2xl p-6 overflow-y-scroll">
            {children}
            
            </div>
            <div className="grid col-span-1.5 row-span-3 bg-rose-800/50 bg-grey-900 rounded-2xl p-3 items-top text-center">
              <Navigation />
            </div>
          </div>

        </div>

        

      </body>
    </html>
  );
}
