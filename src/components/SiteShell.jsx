import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TopNav from './TopNav'
import { prefetchPersonalAssets } from '../utils/prefetchPersonalAssets'

export default function SiteShell({ children }) {
  const [navOpen, setNavOpen] = useState(false)
  const [dustParticles, setDustParticles] = useState([])
  const particleIdRef = useRef(0)
  const lastEmitRef = useRef(0)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== '/') {
      return undefined
    }

    const schedulePrefetch = () => prefetchPersonalAssets()

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(schedulePrefetch, { timeout: 1800 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(schedulePrefetch, 700)
    return () => window.clearTimeout(timeoutId)
  }, [location.pathname])

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      }
    }
  }, [location])

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

  return (
    <>
      <TopNav navOpen={navOpen} setNavOpen={setNavOpen} />

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

        <main key={location.pathname} className="route-view">
          {children}
        </main>
      </div>
    </>
  )
}
