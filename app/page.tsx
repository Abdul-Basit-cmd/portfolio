// app/page.tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { SideWork } from "@/components/sections/SideWork";
import { LookingFor } from "@/components/sections/LookingFor";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <SideWork />
        <LookingFor />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}