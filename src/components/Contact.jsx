import { motion } from "framer-motion"

function Contact() {

  const commands = [

    {
      command: "$ whoami",
      output: "Ahmed Essa"
    },

    {
      command: "$ current_focus",
      output: "Software Engineering & DevOps"
    },

    {
      command: "$ favorite_tools",
      output: "Linux • Docker • Kubernetes • React"
    },

    {
      command: "$ status",
      output: "Building projects every day."
    }

  ]

  return (

    <section
      id="contact"
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

            Contact

          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-24">

            Let's Connect.

          </h2>

        </motion.div>


        {/* Terminal */}

        <motion.div

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

          className="
          rounded-[40px]
          border
          border-gray-800
          bg-white/[0.03]
          overflow-hidden
          "

        >

          {/* Top Bar */}

          <div className="border-b border-gray-800 px-8 py-5 flex gap-3">

            <div className="w-3 h-3 rounded-full bg-gray-500"></div>

            <div className="w-3 h-3 rounded-full bg-gray-500"></div>

            <div className="w-3 h-3 rounded-full bg-gray-500"></div>

          </div>


          {/* Terminal Body */}

          <div className="p-8 md:p-14 space-y-12">

            {

              commands.map((item) => (

                <div key={item.command}>

                  <p className="text-white text-xl mb-4">

                    {item.command}

                  </p>

                  <p className="text-gray-400 text-lg leading-relaxed">

                    {item.output}

                  </p>

                </div>

              ))

            }

            {/* Cursor */}

            <div className="text-white text-2xl animate-pulse">

              █

            </div>


            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-5 pt-8">

              <a

		  href="https://github.com/ahessa"

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

		  href="https://www.linkedin.com/in/ahmedessa3/"

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

		  LinkedIn

		</a>


		<a

		  href="mailto:your@email.com"

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

		  Email Me

		</a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )

}

export default Contact
