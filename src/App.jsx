function App() {
  return (
    <div>
      <section className="hero">
        <h1>TEE</h1>
        <p>Linux • Docker • React • IT</p>

        <button>View Projects</button>
      </section>

      <section className="about">
        <h2>About Me</h2>

        <p>
          I’m building my skills in Linux, Docker, React,
          and web development while creating real projects.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>React + Docker portfolio deployed online.</p>
        </div>

        <div className="card">
          <h3>Linux Journey</h3>
          <p>Ubuntu setup, networking, partitions, troubleshooting.</p>
        </div>
      </section>
    </div>
  )
}

export default App
