import AboutMe from "./components/AboutMe"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  return (
    <main className="box-border text-white w-screen h-screen flex flex-collg:pb-0">
      <Navbar aboutMe="#aboutMe" className="px-5 py-10" />

      <section className="w-full h-full">
        <HeroSection className="mt-26 lg:mt-30" />

        <AboutMe id="aboutMe" className="mt-5 lg:mt-10" />
      </section>
    </main>
  )
}

export default App
