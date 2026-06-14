import { motion } from "framer-motion"
import AuroraV2 from "./AuroraV2"
import TypingText from "./TypingText"

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      <AuroraV2 />

      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1.5
        }}
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        text-center
        px-8
        "
      >

        {/* Small title */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          text-gray-500
          tracking-[0.5em]
          uppercase
          text-sm
          mb-8
          "
        >
          Software Engineer • DevOps Engineer
        </motion.p>


        {/* Name */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 2
          }}
          className="
          text-[6rem]
          md:text-[10rem]
          lg:text-[12rem]
          font-black
          leading-none
          mb-10
          bg-gradient-to-b
          from-white
          via-gray-300
          to-gray-600
          text-transparent
          bg-clip-text
          "
        >
          ESSA
        </motion.h1>


        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
          text-gray-400
          text-xl
          leading-relaxed
          max-w-2xl
          "
        >
          Building containerized applications and learning modern
          cloud-native technologies one project at a time.
        </motion.p>


        {/* Technologies */}

        <TypingText />


        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-16">

          <a
            href="#projects"
            className="
            bg-white
            text-black
            px-8
            py-4
            rounded-2xl
            font-semibold
            hover:scale-105
            transition
            "
          >
            View Projects
          </a>

          <a
            href="https://github.com/ahessa"
            target="_blank"
            rel="noreferrer"
            className="
            border
            border-gray-700
            px-8
            py-4
            rounded-2xl
            text-gray-300
            hover:border-white
            hover:text-white
            transition
            "
          >
            GitHub
          </a>

          <a
            href="/Ahmed-Essa-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
            border
            border-gray-700
            px-8
            py-4
            rounded-2xl
            text-gray-300
            hover:border-white
            hover:text-white
            transition
            "
          >
            Download CV
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero
