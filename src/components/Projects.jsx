import { motion } from "framer-motion"

function Projects() {

  const projects = [

    {
      title: "Containerized React Portfolio",

      description:
        "A modern portfolio built with React, Tailwind CSS, Framer Motion and Docker. Containerized with a production multi-stage build and deployed automatically through Render.",

      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Docker",
        "Nginx",
        "Render"
      ],

      github: "https://github.com/ahessa",

      demo: "https://tee-portfolio-y63l.onrender.com/"
    },

    {
      title: "Tourism Website Platform",

      description:
        "Full-stack tourism platform backed by PostgreSQL and Docker Compose. Explored persistent storage, container networking and deployment workflows.",

      technologies: [
        "PostgreSQL",
        "Docker Compose",
        "Volumes",
        "Networking"
      ],

      github: "#",

      demo: "#"
    },

    {
      title: "Linux Administration Lab",

      description:
        "Hands-on Ubuntu environment covering permissions, mounting drives, file systems, NTFS repair and troubleshooting.",

      technologies: [
        "Linux",
        "Ubuntu",
        "Permissions",
        "Networking"
      ],

      github: "#",

      demo: "#"
    },

    {
      title: "Docker & Kubernetes Labs",

      description:
        "Built containers and explored Kubernetes concepts including deployments, services, ConfigMaps, Secrets and Helm charts.",

      technologies: [
        "Docker",
        "Kubernetes",
        "Helm",
        "ConfigMaps",
        "Secrets"
      ],

      github: "#",

      demo: "#"
    }

  ]

  return (

    <section
      id="projects"
      className="py-40 border-t border-gray-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">

            Projects

          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-24">

            Selected Work.

          </h2>

        </motion.div>

        {/* Projects */}

        <div className="space-y-24">

          {

            projects.map((project) => (

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
                  duration: 1
                }}

                whileHover={{
                  y: -8
                }}

                className="
                rounded-[40px]
                border
                border-gray-800
                bg-white/[0.03]
                p-8
                md:p-14
                "

              >

                <div className="grid lg:grid-cols-2 gap-16">

                  {/* Left */}

                  <div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">

                      {project.title}

                    </h3>

                    <p className="text-gray-400 text-lg leading-loose">

                      {project.description}

                    </p>

                  </div>

                  {/* Right */}

                  <div className="flex flex-col justify-between">

                    <div className="flex flex-wrap gap-4">

                      {

                        project.technologies.map((tech) => (

                          <div

                            key={tech}

                            className="
                            px-5
                            py-3
                            rounded-2xl
                            bg-black
                            border
                            border-gray-800
                            text-gray-300
                            hover:border-gray-500
                            hover:text-white
                            transition
                            "

                          >

                            {tech}

                          </div>

                        ))

                      }

                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 mt-12">

                      <a

                        href={project.github}

                        target="_blank"

                        rel="noreferrer"

                        className="
                        border
                        border-gray-700
                        px-7
                        py-4
                        rounded-2xl
                        text-gray-300
                        hover:border-white
                        hover:text-white
                        transition
                        text-center
                        "

                      >

                        GitHub

                      </a>

                      <a

                        href={project.demo}

                        target="_blank"

                        rel="noreferrer"

                        className="
                        bg-white
                        text-black
                        px-7
                        py-4
                        rounded-2xl
                        font-semibold
                        hover:scale-105
                        transition
                        text-center
                        "

                      >

                        Live Demo

                      </a>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  )

}

export default Projects
