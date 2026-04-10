import { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

const ventureProjects = [
  {
    title: 'SimasiaAI',
    type: 'Co-founder · Jan 2025',
    description:
      'SimasiaEdu — an AI assistant for high school: materials, grading, study plans, explanations, and interactive learning.',
    tags: ['Co-founder', 'AI', 'Strategy'],
    href: 'https://simasiaai.gr/',
  },
  {
    title: 'HermesView',
    type: 'Co-founder · Nov 2023',
    description:
      'Luxury reservations with VR venue previews — explore a space before you book.',
    tags: ['Co-founder', 'VR', 'UX'],
    href: 'https://www.instagram.com/hermes_view/',
  },
]

const researchProjects = [
  {
    title: 'Privacy-Preserving Messaging',
    type: 'Metadata · messaging',
    description:
      'Private messaging that hides metadata while staying practical enough to deploy.',
    tags: ['Privacy', 'Security'],
    href: 'https://www.torproject.org/about/overview/',
  },
  {
    title: 'TENeMP Real-Time Systems',
    type: 'Low-latency · media',
    description:
      'WebRTC and GStreamer pipelines in C — signaling, real-time media, measured end-to-end.',
    tags: ['WebRTC', 'GStreamer', 'C'],
    href: 'https://mmlab-aueb.github.io/tenemp-site/',
  },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/giannis-mparous-9b438986/' },
  { label: 'GitHub', href: 'https://github.com/giannismparous' },
  { label: 'Instagram', href: 'https://www.instagram.com/giannismparous/' },
]

function ProjectGrid({ items, sectionKey, hoveredKey, setHoveredKey }) {
  return (
    <div className="project-grid project-grid--large">
      {items.map((project, index) => {
        const cardKey = `${sectionKey}-${index}`
        const isInteractive = Boolean(project.href)
        const cardClass = `project-card${isInteractive ? ' project-card--clickable' : ''} ${
          hoveredKey === cardKey ? 'active' : ''
        }`.trim()

        const body = (
          <>
            <p className="project-type">{project.type}</p>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-desc">{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </>
        )

        if (isInteractive) {
          return (
            <a
              key={project.title}
              href={project.href}
              className={cardClass}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: ${project.href} (opens in new tab)`}
              onMouseEnter={() => setHoveredKey(cardKey)}
              onMouseLeave={() => setHoveredKey(null)}
              onFocus={() => setHoveredKey(cardKey)}
              onBlur={() => setHoveredKey(null)}
            >
              {body}
            </a>
          )
        }

        return (
          <article
            key={project.title}
            className={cardClass}
            onMouseEnter={() => setHoveredKey(cardKey)}
            onMouseLeave={() => setHoveredKey(null)}
          >
            {body}
          </article>
        )
      })}
    </div>
  )
}

function App() {
  const [hoveredKey, setHoveredKey] = useState(null)
  const [dustParticles, setDustParticles] = useState([])
  const particleIdRef = useRef(0)
  const lastEmitRef = useRef(0)

  useEffect(() => {
    const particleLifeMs = 900
    const emitGapMs = 24

    const onMove = (event) => {
      const now = performance.now()
      if (now - lastEmitRef.current < emitGapMs) {
        return
      }
      lastEmitRef.current = now

      const nextParticles = Array.from({ length: 2 }, () => {
        const id = particleIdRef.current++
        return {
          id,
          born: now,
          x: event.clientX + (Math.random() * 10 - 5),
          y: event.clientY + (Math.random() * 6 - 3),
          drift: Math.random() * 10 - 5,
          fall: 26 + Math.random() * 22,
          size: 1.6 + Math.random() * 2.1,
          life: particleLifeMs + Math.random() * 240,
        }
      })

      setDustParticles((prev) => [...prev.slice(-120), ...nextParticles])
    }

    const cleanup = window.setInterval(() => {
      const cutoff = performance.now() - (particleLifeMs + 300)
      setDustParticles((prev) => prev.filter((particle) => particle.born > cutoff))
    }, 220)

    window.addEventListener('mousemove', onMove)
    return () => {
      window.clearInterval(cleanup)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    if (!dustParticles.length) {
      return
    }
    const timeout = window.setTimeout(() => {
      setDustParticles((prev) => prev.slice(-120))
    }, 1400)
    return () => window.clearTimeout(timeout)
  }, [dustParticles])

  const handleNavClick = (event, href) => {
    if (!href.startsWith('#')) {
      return
    }
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) {
      return
    }
    event.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div className="site-shell">
      {dustParticles.map((particle) => (
        <span
          key={particle.id}
          className="dust-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            '--dust-drift': `${particle.drift}px`,
            '--dust-fall': `${particle.fall}px`,
            animationDuration: `${particle.life}ms`,
          }}
        />
      ))}

      <div className="background-glow glow-one" />

      <header className="top-nav reveal">
        <p className="brand-mark">
          <a href="#top" onClick={(e) => handleNavClick(e, '#top')}>
            GIANNIS
          </a>
        </p>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-lead reveal delay-1">
            <p className="eyebrow">Founder • Builder • Engineer • Researcher</p>
            <h1>I live where deep research meets real-world value.</h1>
            <p className="hero-copy">
              Not pitch-deck talk — products shipped, systems built, and a PhD backing the hard problems.
              I care about ideas that hold up in code and in practice: privacy, performance, and things
              people actually use.
            </p>
          </div>

          <div className="hero-panel reveal delay-2">
            <div className="hero-panel-stack">
              <p className="hero-bio">
                Co-founded{' '}
                <a
                  className="profile-inline-link"
                  href="https://simasiaai.gr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SimasiaAI
                </a>{' '}
                (Jan 2025) and{' '}
                <a
                  className="profile-inline-link"
                  href="https://www.instagram.com/hermes_view/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HermesView
                </a>{' '}
                (Nov 2023). I am currently a{' '}
                <a
                  className="profile-inline-link"
                  href="#ventures"
                  onClick={(e) => handleNavClick(e, '#ventures')}
                >
                  passive shareholder
                </a>
                . I did my{' '}
                <a
                  className="profile-inline-link"
                  href="https://en.wikipedia.org/wiki/Undergraduate_education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  undergraduate studies
                </a>{' '}
                in{' '}
                <a
                  className="profile-inline-link"
                  href="https://en.wikipedia.org/wiki/Computer_science"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Computer Science
                </a>{' '}
                at{' '}
                <a
                  className="profile-inline-link"
                  href="https://www.aueb.gr/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AUEB
                </a>{' '}
                and{' '}
                <a
                  className="profile-inline-link"
                  href="https://www.vu.lt/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vilnius University
                </a>
                , and I am now pursuing{' '}
                <a
                  className="profile-inline-link"
                  href="https://www.soe.ucsc.edu/departments/computer-science-and-engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  a PhD at UC Santa Cruz
                </a>{' '}
                focused on{' '}
                <a
                  className="profile-inline-link"
                  href="https://en.wikipedia.org/wiki/Oblivious_RAM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  oblivious computation
                </a>
                .
              </p>
              <div className="stats-grid stats-grid--hero" aria-label="Highlights">
                <article>
                  <h3>100+ projects shipped</h3>
                  <p>
                    Freelance and student work before UCSC — sites, tools, and client systems that actually
                    shipped, not classroom demos.
                  </p>
                </article>
                <article>
                  <h3>PhD · UC Santa Cruz</h3>
                  <p>
                    Baskin School of Engineering — graduate researcher building rigorous systems at the
                    boundary of cryptography and real machines.
                  </p>
                </article>
              </div>
            </div>
            <div className="hero-panel-photo">
              <img src="/pics/profile.JPG" alt="Giannis profile portrait" className="profile-image" />
            </div>
          </div>
        </section>

        <section className="content-block reveal delay-3" id="about">
          <p className="section-label">About</p>
          <h2>Both sides, on purpose</h2>
          <p>
            I keep building and research in the same loop — shipping teaches constraints; depth teaches what
            is actually true.
          </p>
        </section>

        <section className="content-block section-ventures reveal delay-4" id="ventures">
          <p className="section-label">Ventures</p>
          <h2>Ventures</h2>
          <ProjectGrid
            items={ventureProjects}
            sectionKey="v"
            hoveredKey={hoveredKey}
            setHoveredKey={setHoveredKey}
          />
        </section>

        <section className="content-block section-research reveal delay-4" id="research">
          <p className="section-label">Research</p>
          <h2>From the PhD</h2>
          <ProjectGrid
            items={researchProjects}
            sectionKey="r"
            hoveredKey={hoveredKey}
            setHoveredKey={setHoveredKey}
          />
        </section>

        <section className="content-block reveal delay-4" id="contact">
          <p className="section-label">Contact</p>
          <h2>Open to serious conversations and meaningful builds.</h2>
          <p>
            Reach me on LinkedIn or GitHub. I am always interested in projects with real technical depth
            and clear user value.
          </p>
          <div className="contact-links">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="contact-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{item.label}</span>
                <span className="contact-pill-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
