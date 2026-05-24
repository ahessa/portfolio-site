function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-cyan-400">
            TEE
          </h1>

          <div className="flex gap-6 text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex items-center">

        <div className="max-w-6xl mx-auto px-6">

          <p className="text-cyan-400 mb-4 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-6">
            TEE
          </h1>

          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            Linux enthusiast and aspiring developer learning
            React, Docker, networking, and modern web development
            while building real-world projects.
          </p>

          <div className="mt-10 flex gap-4">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="border border-slate-700 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="py-32 border-t border-slate-800"
      >

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            About Me
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            I’m transitioning deeper into technology by building projects
            with Linux, Docker, React, GitHub, and modern deployment tools.
            I enjoy troubleshooting systems, learning infrastructure,
            and creating polished web experiences.
          </p>

        </div>

      </section>

      {/* Skills */}
      <section className="py-32 border-t border-slate-800">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-14 text-cyan-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Linux",
              "Docker",
              "React",
              "Git & GitHub",
              "Networking",
              "Web Development"
            ].map((skill) => (

              <div
                key={skill}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-semibold">
                  {skill}
                </h3>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-32 border-t border-slate-800"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-14 text-cyan-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

              <h3 className="text-2xl font-bold mb-4">
                React Portfolio
              </h3>

              <p className="text-slate-400 mb-6">
                Personal portfolio built with React, Tailwind CSS,
                Docker, and deployed online with Render.
              </p>

              <a
                href="#"
                className="text-cyan-400 hover:underline"
              >
                View Project →
              </a>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

              <h3 className="text-2xl font-bold mb-4">
                Linux Learning Journey
              </h3>

              <p className="text-slate-400 mb-6">
                Ubuntu setup, mounting drives, troubleshooting,
                networking, Docker, and Linux terminal workflows.
              </p>

              <a
                href="#"
                className="text-cyan-400 hover:underline"
              >
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 border-t border-slate-800"
      >

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Contact
          </h2>

          <p className="text-slate-400 text-lg mb-6">
            Interested in working together or connecting?
          </p>

          <div className="flex gap-6">

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:youremail@example.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App
