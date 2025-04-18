import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  return (
    <main className="box-border text-white w-screen h-screen flex flex-collg:pb-0">
      <Navbar className="px-5 py-10" />

      <HeroSection className="mt-26 lg:mt-30" />
    </main>
  )
}

export default App
