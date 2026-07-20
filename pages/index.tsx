import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { IntroFacts } from "@/components/Hero";
import Hero from "@/components/Hero";
import BackgroundCogs from "@/components/BackgroundCircles";t
import MeetSamuel from "@/components/MeetSamuel";
import Skills from "@/components/Skills";
const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [introFacts, setIntroFacts] = useState<IntroFacts>({
    'name': 'Samuel Egemba',
    'role': 'end-to-end Product Engineer'
  })
  return (
    <>
      <Head>
        <title>Samuel Egemba - Software Developer</title>
      </Head>
      <div className="relative min-h-screen bg-[#000f80] text-orange-500">
        <div className="relative z-10">
          <Header />
          {/*hero section*/}
          <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-center"
          >
            <BackgroundCogs />
            <div className="relative z-10">
              <Hero name={introFacts.name} role={introFacts.role} />
            </div>
          </section>
          {/*meet samuel section*/}
          <section id="meet" className="flex min-h-screen items-center py-20">
            <MeetSamuel />
          </section>
          {/*skills & experience section*/}
          <section id="skills" className="flex min-h-screen items-center py-20">
            <Skills />
          </section>
        </div>
      </div>
    </>
  );
}
