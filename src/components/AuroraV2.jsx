import { motion } from "framer-motion"

function AuroraV2() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* Aurora Layer 1 */}

      <motion.div
        animate={{
          x: [-150, 100, -150],
          rotate: [0, 8, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        top-[10%]
        left-[-30%]
        w-[2400px]
        h-[180px]
        bg-gradient-to-r
        from-transparent
        via-white/30
        to-transparent
        blur-[100px]
        "
      />

      {/* Aurora Layer 2 */}

      <motion.div
        animate={{
          x: [100, -100, 100],
          rotate: [0, -15, 0],
          opacity: [0.08, 0.2, 0.08]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        top-[40%]
        left-[-25%]
        w-[2600px]
        h-[220px]
        bg-gradient-to-r
        from-transparent
        via-gray-200/30
        to-transparent
        blur-[140px]
        "
      />

      {/* Aurora Layer 3 */}

      <motion.div
        animate={{
          x: [-80, 120, -80],
          rotate: [0, 18, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        bottom-[10%]
        left-[-35%]
        w-[2800px]
        h-[250px]
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        blur-[180px]
        "
      />

      {/* Main Halo */}

      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        top-[20%]
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-white/20
        blur-[180px]
        "
      />

      {/* Liquid Glass Reflection */}

      <motion.div
        animate={{
          x: [-1200, 1800]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="
        absolute
        top-0
        h-full
        w-[500px]
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/[0.08]
        to-transparent
        blur-3xl
        "
      />

      {/* Breathing brightness */}

      <motion.div
        animate={{
          opacity: [0.02, 0.06, 0.02]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-white/10
        via-transparent
        to-transparent
        "
      />

      {/* Top light beam */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-white/[0.08]
        via-transparent
        to-black
        "
      />

      {/* Cinematic vignette */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_30%,black_100%)]
        "
      />

    </div>
  )
}

export default AuroraV2
