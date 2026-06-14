import { motion } from "framer-motion"

function BootScreen() {

  const lines = [
    "Initializing kernel...",
    "Loading containers...",
    "Starting services...",
    "Mounting volumes...",
    "Welcome."
  ]

  return (

    <div
      className="
      fixed
      inset-0
      bg-black
      z-[100]
      flex
      items-center
      justify-center
      "
    >

      <div className="space-y-8">

        {lines.map((line, index) => (

          <motion.div

            key={line}

            initial={{
              opacity: 0,
              x: -15
            }}

            animate={{
              opacity: 1,
              x: 0
            }}

            transition={{
              delay: index * 0.3
            }}

            className="
            text-2xl
            text-gray-400
            "

          >

            {line}

          </motion.div>

        ))}

      </div>

    </div>

  )

}

export default BootScreen
