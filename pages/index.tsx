import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Header from "../components/Header";
import { IntroFacts } from "@/components/Hero";
import Hero from "@/components/Hero";
const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [introFacts, setIntroFacts] = useState<IntroFacts>({
    'name': 'Samuel D. Egemba',
    'role': 'Software Engineer'
  })
  return (
    <div className="bg-[#000f80] text-orange-500 h-screen">
      <head>
        <title> Samuel Egemba - Software Developer</title>
      </head>
      <Header />
      {/*hero section*/}
      <section id="hero">
        <Hero name={introFacts.name} role={introFacts.role} />
      </section>
    </div>
  );
}
