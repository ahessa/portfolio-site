function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/70 border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-gray-200 tracking-wide">
          AE
        </h1>

        <div className="hidden md:flex gap-8 text-gray-400">

          <a
            href="#about"
            className="hover:text-white transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-white transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-white transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
