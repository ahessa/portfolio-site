import { motion } from "framer-motion"

function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        top-[-200px]
        left-[-100px]
        w-[700px]
        h-[500px]
        rounded-full
        bg-white/10
        blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        top-[0px]
        right-[-150px]
        w-[700px]
        h-[500px]
        rounded-full
        bg-gray-300/10
        blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -30, 60, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        bottom-[-200px]
        left-[20%]
        w-[900px]
        h-[500px]
        rounded-full
        bg-white/5
        blur-[160px]
        "
      />
    </>
  )
}

export default Aurora
