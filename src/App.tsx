import AboutMe from "./components/AboutMe"
import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import MySkillsSection from "./components/MySkillsSection"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"

function App() {

  return (
    <main className="box-border text-white w-screen h-screen flex flex-collg:pb-0 overflow-x-hidden">
      <Navbar aboutMe="#aboutMe" skills="#skills" projects="#projects" contact="#contact" className="px-5 py-10" />

      <section className="w-full h-full">
        <HeroSection className="pt-26 lg:pt-30" />

        <AboutMe id="aboutMe" className="pt-5 lg:pt-10" />

        <MySkillsSection id="skills" className="pt-16 lg:pt-18" />

        <ProjectsSection id="projects" className="pt-16 lg:pt-22" />

        <ContactSection id="contact" className="pt-22 lg:pt-26" />
      </section>
    </main>
  )
}

export default App
