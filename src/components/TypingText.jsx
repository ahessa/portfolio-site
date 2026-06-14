import { useEffect, useState } from "react"

function TypingText() {

  const technologies = [
    "Linux",
    "Docker",
    "Kubernetes",
    "React",
    "PostgreSQL"
  ]

  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {

    let index = 0

    const interval = setInterval(() => {

      if (index < technologies.length) {

        setVisibleItems(prev => [
          ...prev,
          technologies[index]
        ])

        index++

      }
      else {

        clearInterval(interval)

      }

    }, 700)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="mt-16">

      <p className="text-gray-500 mb-6">

        $ technologies

      </p>

      <div className="space-y-3 text-gray-300">

        {visibleItems.map((tech) => (

          <p key={tech}>
            {tech}
          </p>

        ))}

        <span className="animate-pulse text-white">
          █
        </span>

      </div>

    </div>

  )

}

export default TypingText
