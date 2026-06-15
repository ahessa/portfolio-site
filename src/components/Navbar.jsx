import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-gray-200 tracking-wide">
          TEE
        </h1>

        {/* Desktop menu */}

        <div className="hidden md:flex gap-8 text-gray-400">

          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-white transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

        {/* Mobile menu button */}

        <button

          className="
          md:hidden
          text-3xl
          text-gray-300
          "

          onClick={() => setMenuOpen(!menuOpen)}

        >

          ☰

        </button>

      </div>


      {/* Mobile dropdown */}

      {

        menuOpen && (

          <div className="md:hidden border-t border-gray-800 bg-black/90">

            <div className="flex flex-col px-6 py-6 gap-6 text-gray-400">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </a>

            </div>

          </div>

        )

      }

    </nav>

  )

}

export default Navbar
