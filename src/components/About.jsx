import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-40 border-t border-gray-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
        >

          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">

            About

          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-20">

            Building Things,
            <br />
            Learning Systems.

          </h2>

        </motion.div>


        {/* Main content */}

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left side */}

          <motion.div

            initial={{
              opacity: 0,
              x: -50
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              duration: 1
            }}

          >

            <p className="text-gray-300 text-lg md:text-xl leading-loose">

              Engineer and DevOps Wizard 🧙🏻‍♂️ in progress. Turning ideas into code with software engineering, DevOps, and practical projects.

              <br />
              <br />

              My interests revolve around Linux systems,
              containerization, cloud-native technologies,
              automation and building practical applications.

              <br />
              <br />

              I enjoy understanding how software moves from
              source code to production and the infrastructure
              that powers modern applications.

            </p>

          </motion.div>


          {/* Right side */}

          <motion.div

            initial={{
              opacity: 0,
              x: 50
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              duration: 1
            }}

            className="
            bg-white/[0.03]
            border
            border-gray-800
            rounded-[40px]
            p-10
            "

          >

            <div className="space-y-10">

              <div>

                <p className="text-gray-500 mb-3">
                  Current Focus
                </p>

                <p className="text-2xl text-white">
                  Software Engineering & DevOps
                </p>

              </div>


              <div>

                <p className="text-gray-500 mb-3">
                  Favorite Technologies
                </p>

                <p className="text-2xl text-white">
                  Linux • Docker • Kubernetes • React
                </p>

              </div>


              <div>

                <p className="text-gray-500 mb-3">
                  Philosophy
                </p>

                <p className="text-2xl text-white">
                  Learn by Building
                </p>

              </div>


              <div>

                <p className="text-gray-500 mb-3">
                  Current Mission
                </p>

                <p className="text-2xl text-white">
                  Becoming a DevOps Engineer
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About
