import { useEffect, useState } from "react"

import BootScreen from "./components/BootScreen"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
const [loading, setLoading] = useState(true)

useEffect(() => {

  const timer = setTimeout(() => {

    setLoading(false)

  }, 3000)

  return () => clearTimeout(timer)

}, [])
  return (

  <>

    {loading ? (

      <BootScreen />

    ) : (

      <div className="bg-black text-white min-h-screen">

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>

    )}

  </>

)
}

export default App
