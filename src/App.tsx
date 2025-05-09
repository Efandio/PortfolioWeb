import AboutMe from "./components/AboutMe"
import ContactSection from "./components/ContactSection"
import FooterSection from "./components/FooterSection"
import HeroSection from "./components/HeroSection"
import MySkillsSection from "./components/MySkillsSection"
// import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"

function App() {

  return (
    <main className="box-border text-white w-screen h-screen flex flex-collg:pb-0 overflow-x-hidden scroll-smooth bg-gradient-to-b from-black to-[#448A9D]">
      {/* <Navbar aboutMe="#aboutMe" skills="#skills" projects="#projects" contact="#contact" hero="#hero" className="px-5 py-2" /> */}

      <section className="w-full h-full">
        <HeroSection id="hero" className="pt-26 lg:pt-30" />

        <AboutMe id="aboutMe" className="pt-5 lg:pt-10" />

        <MySkillsSection id="skills" className="pt-16 lg:pt-18" />

        <ProjectsSection id="projects" className="pt-16 lg:pt-22" />

        <ContactSection id="contact" className="pt-22 lg:pt-26 pb-20 lg:pb-28" />

        <FooterSection />
      </section>
    </main>
  )
}

export default App
