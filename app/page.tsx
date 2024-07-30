
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/component/footer"
import Link from "next/link"
import Header from "./_components/Header"
import HeroSection from "./_components/HeroSection"
import AboutMe from "./_components/AboutMe"
import SampleProjects from "./_components/SampleProjects"
import WebLang from "./_components/WebLang"
import Contact from "./_components/Contact"
import ProjectsPosts from "./_components/ProjectsPosts"

export default function Homepage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutMe />
      <SampleProjects />
      <WebLang />
      <ProjectsPosts/>
      <Contact />
      <Footer />
    </div>
  )
}



