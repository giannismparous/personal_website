import { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'Ventures', href: '#ventures' },
  { label: 'Research', href: '#research' },
  { label: 'Accelerators', href: '#founder-programs' },
  { label: 'Events', href: '#events' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
]

const recognitionItems = [
  {
    kicker: 'Grad speech',
    title: 'Valedictorian — AUEB',
    detail:
      'Delivered the valedictorian address. Top of cohort in Computer Science at Athens University of Economics and Business.',
  },
  {
    kicker: 'Scholarship',
    title: 'Huawei Seeds for the Future',
    detail: 'Selected for the international cohort focused on emerging tech, innovation, and entrepreneurship.',
    href: 'https://www.huawei.com/minisite/seeds-for-the-future/index.html',
  },
]

const founderProgramItems = [
  {
    kicker: 'Germany',
    title: 'Let’s Startup — Erasmus+',
    detail: 'Hamburg — international startup intensive: market research, product and UX for scalable systems, pitching.',
    href: null,
  },
  {
    kicker: 'Greece',
    title: 'Startab',
    detail:
      'Corallia pre-accelerator (Athena RC): agile MVP, sales, fundraising, and live pitches — free program for ages 18–35.',
    href: 'https://startab.gr/en/home/',
  },
]

const eventItems = [
  {
    kicker: 'Conference',
    title: 'RSA Conference 2026',
    detail:
      'Mar 23–26, 2026 · Moscone Center, San Francisco — security industry conference: sessions, expo, and community.',
    href: 'https://www.rsaconference.com/',
  },
  {
    kicker: 'Research',
    title: 'Bay Area Crypto Day',
    detail:
      'Nov 2025 · UC Berkeley — Simons Institute / Melvin Calvin Lab. One-day cryptography research workshop (Bay Area series).',
    href: 'https://sites.google.com/view/bayareacryptoday/2025-nov',
  },
  {
    kicker: 'Hackathon',
    title: 'Smallest.ai Voice Hacksprint',
    detail: 'Feb 2025 · San Francisco, full-day voice AI build, hosted by Smallest.ai.',
    href: 'https://smallest.ai/',
  },
  {
    kicker: 'Research',
    title: 'Olympia Research Summit',
    detail:
      'May 29–30, 2025 · Athens — Athena Research Center summit on next-generation data, systems, and AI; Greek and international researchers.',
    href: 'https://olympiasummit.athenarc.gr/',
  },
]

function LocationPinIcon() {
  return (
    <svg
      className="hero-location-icon"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 21s-7-4.5-7-10a7 7 0 1 1 14 0c0 5.5-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.65" />
    </svg>
  )
}

function CredentialBento({ items, layout = 'grid' }) {
  const gridClass =
    layout === 'stack'
      ? 'credential-bento credential-bento--stack'
      : layout === 'events'
        ? 'credential-bento credential-bento--events'
        : 'credential-bento'

  return (
    <div className={gridClass}>
      {items.map((item) => {
        const key = `${item.kicker}-${item.title}`
        const body = (
          <>
            <p className="credential-kicker">{item.kicker}</p>
            <h3 className="credential-card-title">{item.title}</h3>
            <p className="credential-card-desc">{item.detail}</p>
          </>
        )
        if (item.href) {
          return (
            <a
              key={key}
              href={item.href}
              className="credential-card credential-card--link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {body}
            </a>
          )
        }
        return (
          <article key={key} className="credential-card">
            {body}
          </article>
        )
      })}
    </div>
  )
}

const ventureProjects = [
  {
    title: 'SimasiaAI',
    type: 'Co-founder · Jan 2025',
    description:
      'AI tutor for Greek high school: personalized notes, exams and grading, study plans, and instructor-style explanations — built to widen access beyond expensive private tutoring.',
    tags: ['Co-founder', 'AI', 'RAG'],
    href: 'https://simasiaai.gr/',
  },
  {
    title: 'HermesView',
    type: 'Co-founder · Nov 2023',
    description:
      'Luxury dining: VR venue previews before you book, with real-time availability, reservations, and integrations with existing booking platforms.',
    tags: ['Co-founder', 'VR', 'Real-time'],
    href: 'https://www.instagram.com/hermes_view/',
  },
]

const researchProjects = [
  {
    title: 'Privacy-Preserving Messaging',
    type: 'Metadata · messaging',
    description:
      'PhD work toward practical private communication — metadata-aware designs that can survive real deployment constraints.',
    tags: ['Privacy', 'UCSC'],
    href: 'https://en.wikipedia.org/wiki/Traffic_analysis',
  },
  {
    title: 'TENeMP Real-Time Systems',
    type: 'Low-latency · media',
    description:
      'Research assistant at AUEB MMLab: WebRTC and GStreamer pipelines in C, SFU-style media paths, and measured latency for telepresence music. Co-authored IWCMC work on network music beyond 4G.',
    tags: ['WebRTC', 'GStreamer', 'Paper'],
    href: 'https://mmlab-aueb.github.io/tenemp-site/',
  },
]

const emailLinks = [
  { kind: 'Academic', address: 'ibarous@ucsc.edu' },
  { kind: 'Personal', address: 'giannismparous@gmail.com' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/giannis-mparous-9b438986/',
    icon: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/giannismparous', icon: 'github' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/giannismparous/',
    icon: 'instagram',
  },
]

function SocialIcon({ name }) {
  const common = {
    className: 'contact-pill-svg',
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  }

  if (name === 'linkedin') {
    return (
      <svg {...common}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }

  if (name === 'github') {
    return (
      <svg {...common}>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 22.092 24 17.592 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg {...common}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg {...common}>
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67ZM22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    )
  }

  return null
}

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
  const [navOpen, setNavOpen] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState(null)
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

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 699px)')
    const closeIfDesktop = () => {
      if (!mq.matches) {
        setNavOpen(false)
      }
    }
    mq.addEventListener('change', closeIfDesktop)
    closeIfDesktop()
    return () => mq.removeEventListener('change', closeIfDesktop)
  }, [])

  useEffect(() => {
    if (!navOpen) {
      return
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setNavOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navOpen])

  useEffect(() => {
    if (!copyFeedback) {
      return undefined
    }
    const id = window.setTimeout(() => setCopyFeedback(null), 2800)
    return () => window.clearTimeout(id)
  }, [copyFeedback])

  const handleCopyEmail = async (address) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopyFeedback({ ok: true, address })
    } catch {
      setCopyFeedback({ ok: false, address })
    }
  }

  useEffect(() => {
    if (!navOpen) {
      return
    }
    const mq = window.matchMedia('(max-width: 699px)')
    if (!mq.matches) {
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [navOpen])

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

  const onNavLinkClick = (event, href) => {
    handleNavClick(event, href)
    setNavOpen(false)
  }

  return (
    <>
      <header className="top-nav">
        <div className="top-nav-inner">
          <p className="brand-mark">
            <a
              href="#top"
              onClick={(e) => {
                handleNavClick(e, '#top')
                setNavOpen(false)
              }}
            >
              GIANNIS
            </a>
          </p>
          <button
            type="button"
            className={`nav-menu-toggle${navOpen ? ' nav-menu-toggle--open' : ''}`}
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="visually-hidden">{navOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="nav-menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <nav
            id="primary-navigation"
            className={`top-nav-links${navOpen ? ' top-nav-links--open' : ''}`}
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                onClick={(e) => onNavLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

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

        <main>
        <section className="hero" id="top">
          <div className="hero-head-text reveal delay-1">
            <p className="eyebrow">Founder • Builder • Researcher</p>
            <h1>I live where deep research meets real-world value.</h1>
          </div>
          <div className="hero-head-photo reveal delay-1">
            <img src="/pics/profile.JPG" alt="Giannis profile portrait" className="profile-image" />
            <p className="hero-location">
              <LocationPinIcon />
              <span>San Jose, California</span>
            </p>
          </div>

          <div className="hero-panel reveal delay-2">
            <p className="hero-bio">
              Hi, I&apos;m Giannis (<span lang="el">Γιάννης</span>), 24, from Greece. I like building things
              that ship and getting deep into hard systems problems. I co-founded{' '}
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
              (Nov 2023), and I&apos;m currently a{' '}
              <a
                className="profile-inline-link"
                href="#ventures"
                onClick={(e) => handleNavClick(e, '#ventures')}
              >
                passive shareholder
              </a>{' '}
              in both. Before my startup experience I worked with 100+ clients, shipping real products. I
              studied CS at{' '}
              <a
                className="profile-inline-link"
                href="https://www.aueb.gr/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                AUEB
              </a>
              , spent part of that time at{' '}
              <a
                className="profile-inline-link"
                href="https://www.vu.lt/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vilnius University
              </a>
              , and now I&apos;m doing my PhD at{' '}
              <a
                className="profile-inline-link"
                href="https://www.soe.ucsc.edu/departments/computer-science-and-engineering/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UC Santa Cruz
              </a>
              , focusing on{' '}
              <a
                className="profile-inline-link"
                href="https://en.wikipedia.org/wiki/Oblivious_RAM"
                target="_blank"
                rel="noopener noreferrer"
              >
                oblivious computation
              </a>{' '}
              in the{' '}
              <a
                className="profile-inline-link"
                href="https://www.torproject.org/about/overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                anonymous communication
              </a>{' '}
              space. I&apos;m also figuring out how AI fits in there.
            </p>
            <p className="hero-bio hero-bio-follow">
              My mornings start with espresso, and I take that seriously. I read a lot, but only things that
              actually pull me in — business, psychology, tech, self-improvement, and sometimes history. When
              I&apos;m not working, I&apos;m usually outside with friends, by the sea or on a hike. I&apos;ve
              been doing calisthenics for seven years now, and I share that side of me on{' '}
              <a
                className="profile-inline-link"
                href="https://www.instagram.com/giannismparous/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{' '}
              too, mostly to inspire people to raise their standards. I&apos;m also the kind of uncle who
              disappears for a while and comes back with stories people actually want to hear. I speak Greek,
              English, Spanish, and Portuguese.
            </p>
          </div>
        </section>

        <section className="content-block section-ventures reveal delay-3" id="ventures">
          <h2>Ventures</h2>
          <ProjectGrid
            items={ventureProjects}
            sectionKey="v"
            hoveredKey={hoveredKey}
            setHoveredKey={setHoveredKey}
          />
        </section>

        <section className="content-block section-research reveal delay-3" id="research">
          <p className="section-label">Research</p>
          <h2>From the PhD</h2>
          <ProjectGrid
            items={researchProjects}
            sectionKey="r"
            hoveredKey={hoveredKey}
            setHoveredKey={setHoveredKey}
          />
        </section>

        <section className="content-block section-founder-programs reveal delay-4" id="founder-programs">
          <p className="section-label">Founder programs</p>
          <h2 className="credential-section-heading">Accelerator programs</h2>
          <CredentialBento items={founderProgramItems} layout="grid" />
        </section>

        <section className="content-block section-events reveal delay-4" id="events">
          <p className="section-label">Events</p>
          <h2 className="credential-section-heading">Conferences and hackathons</h2>
          <CredentialBento items={eventItems} layout="events" />
        </section>

        <section className="content-block section-recognition reveal delay-4" id="recognition">
          <p className="section-label">Recognition</p>
          <h2 className="credential-section-heading">Honors and awards</h2>
          <CredentialBento items={recognitionItems} layout="stack" />
        </section>

        <section className="content-block section-contact reveal delay-4" id="contact">
          <p className="section-label">Contact</p>
          <h2>Open to serious conversations and meaningful builds.</h2>
          <p>
            Email is best for a direct line. I like projects with real technical depth and clear user value.
          </p>
          <p className="contact-tap-hint">Tap an email to copy it to your clipboard.</p>
          <div className="contact-links-wrap">
            <div className="contact-links contact-links--email">
              {emailLinks.map((item) => (
                <button
                  key={item.address}
                  type="button"
                  className="contact-pill contact-pill--email"
                  onClick={() => handleCopyEmail(item.address)}
                  aria-label={`Copy ${item.kind.toLowerCase()} email ${item.address} to clipboard`}
                >
                  <SocialIcon name="mail" />
                  <span className="contact-pill-stack">
                    <span className="contact-pill-kind">{item.kind}</span>
                    <span className="contact-pill-address">{item.address}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="contact-links contact-links--social">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="contact-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon name={item.icon} />
                  <span>{item.label}</span>
                  <span className="contact-pill-icon" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        </main>
      </div>

      {copyFeedback?.ok ? (
        <div className="copy-toast copy-toast--success" role="status" aria-live="polite">
          <span className="copy-toast-check" aria-hidden="true">
            ✓
          </span>
          <div className="copy-toast-body">
            <span className="copy-toast-title">Copied to clipboard</span>
            <span className="copy-toast-email">{copyFeedback.address}</span>
          </div>
        </div>
      ) : null}
      {copyFeedback && !copyFeedback.ok ? (
        <div className="copy-toast copy-toast--error" role="alert" aria-live="assertive">
          <div className="copy-toast-body">
            <span className="copy-toast-title">Could not copy automatically</span>
            <span className="copy-toast-email copy-toast-email--muted">{copyFeedback.address}</span>
            <span className="copy-toast-hint">Select the address on the card, or try again.</span>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default App
