import { motion } from "framer-motion"

function Skills() {
  const sections = [
    {
      title: "Operating Systems",
      items: [
        "Linux (Ubuntu)",
        "Linux Administration",
        "File Systems",
        "Permissions",
        "Mounting Drives",
        "Troubleshooting",
        "Networking Fundamentals",
        "Terminal Workflows"
      ]
    },

    {
      title: "Containers & Orchestration",
      items: [
        "Docker",
        "Docker Compose",
        "Docker Hub",
        "Multi-stage Docker Builds",
        "Volumes",
        "Persistent Volumes",
        "Container Networking",
        "Kubernetes",
        "kubectl",
        "Helm",
        "ConfigMaps",
        "Secrets"
      ]
    },

    {
      title: "Kubernetes Concepts",
      items: [
        "Pods",
        "Deployments",
        "ReplicaSets",
        "Services",
        "Namespaces",
        "Scaling",
        "Self-Healing",
        "Rolling Updates",
        "Rollbacks",
        "Liveness Probes",
        "Readiness Probes",
        "Resource Limits",
        "Helm Charts"
      ]
    },

    {
      title: "Frontend Development",
      items: [
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
      items: [
        "PostgreSQL",
        "REST APIs"
      ]
    },

    {
      title: "Version Control & CI/CD",
      items: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "CI/CD Concepts",
        "YAML"
      ]
    },

    {
      title: "Infrastructure & Automation",
      items: [
        "Terraform",
        "Ansible",
        "Jenkins"
      ]
    },

    {
      title: "Cloud & Monitoring",
      items: [
        "AWS",
        "Prometheus",
        "Grafana"
      ]
    },

    {
      title: "Deployment & Web Servers",
      items: [
        "Nginx",
        "Render",
        "Production Deployments"
      ]
    }
  ]

  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-24">
            Technologies I Build With.
          </h2>

        </motion.div>

        {/* Categories */}

        <div className="space-y-24">

          {sections.map((section) => (

            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-b border-gray-800 pb-16"
            >

              <div className="grid lg:grid-cols-2 gap-12">

                {/* Left */}

                <div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {section.title}
                  </h3>

                </div>

                {/* Right */}

                <div className="flex flex-wrap gap-4">

                  {section.items.map((item) => (

                    <motion.div
                      key={item}
                      whileHover={{
                        y: -5
                      }}
                      className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-white/[0.03]
                      border
                      border-gray-800
                      text-gray-300
                      hover:border-gray-500
                      hover:text-white
                      transition
                      "
                    >

                      {item}

                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills
