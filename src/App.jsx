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
            Problem Solver | M365 Admin | Builder of Things
            </p>
            <p className="text-lg font-body text-medium-gray mb-12 leading-relaxed">
            Making technology work for people, not the other way around
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
              I've been teaching myself to build things with code for about 15 years now - web development, various stacks, and more recently iOS apps and AI tooling. My day job is M365 administration, which is mostly translating between "what the technology does" and "what people actually need."
            </p>
            <p className="text-lg font-body text-charcoal mb-6 leading-relaxed">
              No CS degree here. I'm not going to be the most technically impressive person in any given room, but I'm pretty good at making complicated stuff make sense, working with non-technical teams, and shipping things that actually work instead of things that just sound good.
            </p>
            <p className="text-lg font-body text-charcoal mb-6 leading-relaxed">
              I've been genuinely interested in AI lately - less the hype, more the "okay but how do we actually use this at work" side of it. I built an alcohol tracking app that syncs with HealthKit, I run a home lab on Proxmox, and I'm always poking at something new.
            </p>
            <p className="text-lg font-body text-charcoal leading-relaxed">
              When I'm not at a keyboard: golf (always trying to get better), gym, craft beer, cooking, and hanging out with friends.
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
