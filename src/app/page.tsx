import Image from "next/image";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main >
      <About />
     
      <Skills/>
      <Project/>
      <Contact/>
    </main>
  );
}
