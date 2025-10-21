import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Mobile-first responsive design with modern UI/UX principles',
      tags: ['React', 'Tailwind', 'API'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Data visualization dashboard with real-time analytics',
      tags: ['JavaScript', 'D3.js', 'Firebase'],
      link: '#'
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'REST APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AN
            </div>
            <div className="flex gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Andrew Naumann
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building beautiful, functional web experiences that make a difference
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg font-semibold transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to complex problems.
              With expertise in modern web technologies, I specialize in building responsive, user-friendly
              applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in software development has equipped me with a diverse skill set, ranging from
              front-end frameworks like React to back-end technologies and cloud infrastructure.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
            <p className="text-lg text-gray-300 mb-8 text-center">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:hello@anaumann.com" className="text-blue-400 hover:text-blue-300">
                    hello@anaumann.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/andrewnaumann" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
                    github.com/andrewnaumann
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/andrewnaumann" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/andrewnaumann
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Andrew Naumann. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
