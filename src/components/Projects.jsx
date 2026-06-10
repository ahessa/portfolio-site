import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Containerized React Portfolio",
      year: "2026",
      description:
        "Modern portfolio built with React, Tailwind CSS, Docker and Nginx. Deployed automatically with Render using a production multi-stage Docker build.",
      technologies: [
        "React",
        "Tailwind",
        "Framer Motion",
        "Docker",
        "Nginx",
        "Render"
      ]
    },

    {
      title: "Tourism Website Platform",
      year: "2026",
      description:
        "Full-stack tourism platform backed by PostgreSQL and Docker Compose. Explored container networking, persistent storage and deployment workflows.",
      technologies: [
        "PostgreSQL",
        "Docker Compose",
        "Volumes",
        "Networking"
      ]
    },

    {
      title: "Linux Administration Lab",
      year: "2026",
      description:
        "Hands-on Ubuntu environment covering file systems, mounting drives, permissions, networking and troubleshooting.",
      technologies: [
        "Ubuntu",
        "Linux",
        "Permissions",
        "Networking"
      ]
    },

    {
      title: "Docker & Kubernetes Labs",
      year: "2025",
      description:
        "Built containers, volumes and networks while exploring deployments, services, ConfigMaps, Secrets and Helm charts.",
      technologies: [
        "Docker",
        "Kubernetes",
        "Helm",
        "ConfigMaps",
        "Secrets"
      ]
    }

  ]

  return (

    <section
      id="projects"
      className="py-40 border-t border-gray-900"
    >

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-gray-500 text-lg mb-4">
            Selected Work
          </p>

          <h2 className="text-6xl md:text-7xl font-bold text-white mb-24">
            Projects & Labs
          </h2>

        </motion.div>

        <div className="space-y-12">

          {projects.map((project, index) => (

            <motion.div

              key={project.title}

              initial={{
                opacity: 0,
                y: 60
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}

              whileHover={{
                y: -8
              }}

              className="
              relative
              overflow-hidden
              rounded-[40px]
              border border-gray-800
              bg-white/[0.03]
              p-12
              transition
              duration-500
              hover:border-gray-600
              "

            >

              {/* background glow */}

              <div className="
              absolute
              top-0
              right-0
              h-60
              w-60
              rounded-full
              bg-white/[0.02]
              blur-3xl
              " />



              <div className="relative z-10">

                <div className="flex justify-between items-center mb-8">

                  <h3 className="text-4xl text-white font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-lg">
                    {project.year}
                  </p>

                </div>


                <p className="
                text-gray-400
                leading-loose
                text-lg
                max-w-4xl
                mb-10
                ">
                  {project.description}
                </p>


                <div className="
                flex
                flex-wrap
                gap-3
                mb-10
                ">

                  {project.technologies.map((tech) => (

                    <div

                      key={tech}

                      className="
                      px-5
                      py-2
                      rounded-full
                      border
                      border-gray-700
                      text-gray-300
                      bg-black
                      hover:border-gray-500
                      transition
                      "

                    >

                      {tech}

                    </div>

                  ))}

                </div>


                <div className="flex gap-5">

                  <button className="
                  border
                  border-gray-700
                  px-6
                  py-3
                  rounded-2xl
                  text-gray-300
                  hover:border-white
                  hover:text-white
                  transition
                  ">
                    GitHub
                  </button>


                  <button className="
                  bg-white
                  text-black
                  px-6
                  py-3
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition
                  ">
                    Live Demo
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default Projects
