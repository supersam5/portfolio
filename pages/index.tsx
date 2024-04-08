import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Header from "../components/Header";
const inter = Inter({ subsets: ["latin"] });
type HeaderProps = {
  name : string;
  role: string;
};


export default function Home() {
  const [introFacts, setIntroFacts] = useState<HeaderProps>({
    'name': 'Samuel D. Egemba',
    'role': 'Software Engineer'
  })
  return (
    
    <div className="text-red-500">
      <head>
        <title>{introFacts.name} {introFacts.role}</title>
      </head>
      <Header />
      <h1>Hello I'm {introFacts.name}</h1>
      <h2>I'm an awesome {introFacts.role}</h2>
    </div>
  );
}
