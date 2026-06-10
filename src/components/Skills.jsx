import { motion } from "framer-motion"

function Skills() {

  const categories = [
    {
      title: "Operating Systems",
      skills: [
        "Linux (Ubuntu)",
        "Linux Administration",
        "File Systems",
        "Permissions",
        "Troubleshooting",
        "Networking Fundamentals"
      ]
    },

    {
      title: "Containers & Orchestration",
      skills: [
        "Docker",
        "Docker Compose",
        "Docker Hub",
        "Kubernetes",
        "Helm",
        "Container Networking",
        "Persistent Volumes",
        "ConfigMaps",
        "Secrets"
      ]
    },

    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design"
      ]
    },

    {
      title: "Backend & Databases",
      skills: [
        "PostgreSQL",
        "REST APIs"
      ]
    },

    {
      title: "DevOps & Automation",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "CI/CD Concepts",
        "YAML"
      ]
    },

    {
      title: "Web Servers & Deployment",
      skills: [
        "Nginx",
        "Render",
        "Multi-stage Docker Builds"
      ]
    }
  ]

  return (
    <section
      id="skills"
      className="py-32 border-t border-gray-800"
    >

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-gray-200"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{
                y: -10
              }}
              className="
              bg-white/[0.03]
              border border-gray-800
              rounded-3xl
              p-8
              hover:border-gray-500
              transition
              duration-300
              "
            >

              <h3 className="text-3xl text-white mb-8">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <div
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-black
                    border
                    border-gray-700
                    text-gray-300
                    hover:border-gray-400
                    hover:text-white
                    transition
                    "
                  >
                    {skill}
                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills
