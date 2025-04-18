import AboutMe from "./components/AboutMe"
import HeroSection from "./components/HeroSection"
import MySkillsSection from "./components/MySkillsSection"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"

function App() {

  return (
    <main className="box-border text-white w-screen h-screen flex flex-collg:pb-0 overflow-x-hidden">
      <Navbar aboutMe="#aboutMe" skills="#skills" className="px-5 py-10" />

      <section className="w-full h-full">
        <HeroSection className="mt-26 lg:mt-30" />

        <AboutMe id="aboutMe" className="mt-5 lg:mt-10" />

        <MySkillsSection id="skills" className="mt-16 lg:mt-18" />

        <ProjectsSection />
      </section>
    </main>
  )
}

export default App
