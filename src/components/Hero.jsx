import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import Aurora from "./Aurora"

function Hero() {
  return (
    <section className="h-screen flex items-center relative overflow-hidden">
    <Aurora />

      {/* Background glow */}

      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-gray-400/5 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >

        <p className="text-gray-400 text-xl mb-5">
          Hello, I'm
        </p>

        <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
          Essa
        </h1>

        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">

          Junior Developer and DevOps Wizard 🧙‍♂️ building
          containerized applications with React, Docker,
          Linux, and modern deployment tools while continuously
          expanding my cloud-native skillset.

        </p>

        <div className="flex flex-wrap gap-5 mt-12">

          <a
            href="#projects"
            className="bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="https://github.com/ahessa"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-700 px-7 py-4 rounded-2xl hover:border-white hover:text-white transition duration-300"
          >
            GitHub
            
          </a>

          <a
            href="/Ahmed-Essa-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-700 px-7 py-4 rounded-2xl hover:border-white hover:text-white transition duration-300"
          >
            Download CV
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero
