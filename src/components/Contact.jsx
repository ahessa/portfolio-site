import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="py-40 border-t border-gray-900"
    >

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-gray-500 text-lg mb-4">
            Get In Touch
          </p>

          <h2 className="text-6xl md:text-7xl font-bold text-white mb-24">
            Contact
          </h2>

        </motion.div>


        <motion.div

          initial={{
            opacity: 0,
            y: 50
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

          className="
          rounded-[40px]
          border
          border-gray-800
          bg-white/[0.03]
          overflow-hidden
          "

        >

          {/* terminal bar */}

          <div className="
          flex
          items-center
          gap-3
          px-8
          py-5
          border-b
          border-gray-800
          ">

            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <div className="w-3 h-3 rounded-full bg-gray-500" />
            <div className="w-3 h-3 rounded-full bg-gray-400" />

            <p className="ml-6 text-gray-500">
              terminal
            </p>

          </div>


          {/* terminal content */}

          <div className="p-12 space-y-8 text-xl">

            <div>

              <p className="text-gray-500">$ whoami</p>

              <p className="text-white mt-3">
                Ahmed Essa
              </p>

            </div>


            <div>

              <p className="text-gray-500">$ current_focus</p>

              <p className="text-white mt-3">
                Software Engineering
                <br />
                DevOps Engineering
              </p>

            </div>


            <div>

              <p className="text-gray-500">$ technologies</p>

              <p className="text-white mt-3">
                Linux Docker Kubernetes React PostgreSQL Git
              </p>

            </div>


            <div>

              <p className="text-gray-500">$ status</p>

              <p className="text-white mt-3">
                Building projects every day.
              </p>

            </div>

          </div>

        </motion.div>


        {/* buttons */}

        <div className="flex flex-wrap gap-6 mt-16">

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
            href="mailto:a.essa3@hotmail.com"
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
            Email
          </a>


          <a
            href="/Ahmed-Essa-CV.pdf"
            target="_blank"
            rel="noreferrer"
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
            Download CV
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact
