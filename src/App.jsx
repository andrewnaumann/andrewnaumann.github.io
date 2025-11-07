import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')


  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-warm-gray">
        <div className="max-w-content mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-heading font-semibold text-charcoal tracking-tight">
              Andrew Naumann
            </div>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-heading font-medium text-charcoal hover:text-sage transition-colors duration-300"
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
      <section id="home" className="min-h-screen flex items-center px-8 pt-24">
        <div className="max-w-content mx-auto w-full">
          <div className="max-w-reading">
            <h1 className="text-5xl md:text-6xl font-heading font-semibold mb-6 text-charcoal leading-tight">
              Andrew Naumann
            </h1>
            <p className="text-2xl md:text-3xl font-body text-sage mb-8 leading-relaxed">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-lg font-body text-medium-gray mb-12 leading-relaxed">
              Building thoughtful, functional web experiences with attention to detail and a focus on user needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="px-8 py-3 bg-sage text-cream font-heading font-medium rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-sage text-sage font-heading font-medium rounded-md hover:bg-sage hover:text-cream transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-white">
        <div className="max-w-reading mx-auto">
          <h2 className="text-4xl font-heading font-semibold mb-8 text-charcoal">About Me</h2>
          <div className="border-l-4 border-terracotta pl-8">
            <p className="text-lg font-body text-charcoal mb-6 leading-relaxed">
              I'm a developer with a love for creating elegant solutions to complex problems.
              With expertise in modern web technologies, I specialize in building responsive, user-friendly
              applications that deliver exceptional experiences.
            </p>
            <p className="text-lg font-body text-charcoal mb-6 leading-relaxed">
              My journey in software development has equipped me with a diverse skill set, ranging from
              front-end frameworks like React to back-end technologies and cloud infrastructure.
            </p>
            <p className="text-lg font-body text-charcoal leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-heading font-semibold mb-8 text-charcoal text-center">Get In Touch</h2>
          <div className="bg-white border border-warm-gray rounded-md p-12">
            <p className="text-lg font-body text-charcoal mb-12 text-center leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free to reach out.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 border border-warm-gray rounded-md hover:border-terracotta transition-colors duration-300">
                <div className="w-12 h-12 bg-sage rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-heading font-medium text-medium-gray mb-1">Email</p>
                  <a href="mailto:hello@anaumann.com" className="font-body text-slate hover:text-sage transition-colors duration-300">
                    hello@anaumann.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 border border-warm-gray rounded-md hover:border-terracotta transition-colors duration-300">
                <div className="w-12 h-12 bg-slate rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-heading font-medium text-medium-gray mb-1">GitHub</p>
                  <a href="https://github.com/andrewnaumann" className="font-body text-slate hover:text-sage transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    github.com/andrewnaumann
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 border border-warm-gray rounded-md hover:border-terracotta transition-colors duration-300">
                <div className="w-12 h-12 bg-slate rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-heading font-medium text-medium-gray mb-1">LinkedIn</p>
                  <a href="https://linkedin.com/in/andrew-naumann" className="font-body text-slate hover:text-sage transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/andrewnaumann
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-warm-gray py-12 px-8 bg-white">
        <div className="max-w-content mx-auto text-center">
          <p className="font-body text-medium-gray">&copy; {new Date().getFullYear()} Andrew Naumann. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
