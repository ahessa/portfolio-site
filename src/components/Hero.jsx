import { motion } from "framer-motion"
import AuroraV2 from "./AuroraV2"
import TypingText from "./TypingText"

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 md:pt-0">

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
	px-6
	sm:px-8
	max-w-7xl
	mx-auto
	"
      >

        {/* Small title */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
		text-gray-500
		tracking-[0.15em]
		sm:tracking-[0.3em]
		uppercase
		text-xs
		sm:text-sm
		mb-6
		"
        >
          Software Engineer •  DevOps
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
		text-6xl
		sm:text-7xl
		md:text-[8rem]
		lg:text-[10rem]
		xl:text-[12rem]
		font-black
		leading-none
		mb-8
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
		text-base
		sm:text-lg
		md:text-xl
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

        <div
	  className="
	  flex
	  flex-col
	  sm:flex-row
	  justify-center
	  gap-4
	  mt-14
	  w-full
	  sm:w-auto
	  "
	>

          <a
            href="#projects"
            className="
            bg-white
            text-black
            px-6 sm:px-6
            py-4
            rounded-2xl
            font-semibold
            hover:scale-105
            transition
            w-full
		sm:w-auto
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
            px-6 sm:px-6
            py-4
            rounded-2xl
            text-gray-300
            hover:border-white
            hover:text-white
            transition
            w-full
sm:w-auto
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
            px-6 sm:px-6
            py-4
            rounded-2xl
            text-gray-300
            hover:border-white
            hover:text-white
            transition
            w-full
sm:w-auto
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
