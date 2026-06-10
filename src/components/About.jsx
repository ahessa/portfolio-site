import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-32 border-t border-gray-800"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6"
      >

        <h2 className="text-5xl font-bold mb-12 text-gray-200">
          About Me
        </h2>

        <div className="bg-white/[0.03] border border-gray-800 rounded-3xl p-10">

          <p className="text-gray-400 text-xl leading-loose">

            I love Coding, and making Memories🤘🏻.

            My focus is on Linux systems, containerization,
            modern web development, and infrastructure technologies.

            I enjoy troubleshooting systems, building practical
            projects, and understanding how applications move
            from code to production.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="border border-gray-800 rounded-2xl p-6">

              <h3 className="text-3xl text-white font-bold mb-2">
                Linux
              </h3>

              <p className="text-gray-500">
                Ubuntu, troubleshooting and administration
              </p>

            </div>

            <div className="border border-gray-800 rounded-2xl p-6">

              <h3 className="text-3xl text-white font-bold mb-2">
                Docker
              </h3>

              <p className="text-gray-500">
                Containers, Compose and deployment
              </p>

            </div>

            <div className="border border-gray-800 rounded-2xl p-6">

              <h3 className="text-3xl text-white font-bold mb-2">
                Helm and Kubernetes
              </h3>

              <p className="text-gray-500">
                Containers organization and orchestration
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default About
