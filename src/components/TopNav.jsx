import { Link, useLocation, useNavigate } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import NavMeta from './NavMeta'
import ThemeToggle from './ThemeToggle'
import { useTranslation } from '../i18n'
import { prefetchPersonalAssets } from '../utils/prefetchPersonalAssets'

const workSectionKeys = [
  'ventures',
  'research',
  'accelerators',
  'conferences',
  'events',
  'recognition',
  'contact',
]

const workSectionHrefs = {
  ventures: '#ventures',
  research: '#research',
  accelerators: '#founder-programs',
  conferences: '#conferences',
  events: '#events',
  recognition: '#recognition',
  contact: '#contact',
}

function scrollToHash(hash) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) {
    return
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

function WorkNavDropdown({ isCurrent, onSectionClick, onWorkClick, t }) {
  return (
    <div className="nav-dropdown">
      <Link
        to="/"
        className={`nav-link${isCurrent ? ' nav-link--current' : ''}`}
        aria-current={isCurrent ? 'page' : undefined}
        onClick={(event) => {
          onWorkClick()
          event.currentTarget.blur()
        }}
      >
        {t.nav.work}
      </Link>
      <div className="nav-dropdown-panel" role="group" aria-label={t.nav.workSectionsAria}>
        {workSectionKeys.map((key, index) => (
          <a
            key={key}
            href={workSectionHrefs[key]}
            className="nav-dropdown-link"
            style={{ '--nav-dropdown-i': index }}
            onClick={(event) => {
              onSectionClick(event, workSectionHrefs[key])
              event.currentTarget.blur()
            }}
          >
            {t.nav.workSections[key]}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function TopNav({ navOpen, setNavOpen }) {
  const t = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const onPersonal = location.pathname === '/personal'
  const onLifestyle = location.pathname === '/lifestyle'
  const onWork = location.pathname === '/'

  const handleSectionNav = (event, href) => {
    event.preventDefault()
    const hash = href.startsWith('/#') ? href.slice(1) : href

    if (location.pathname !== '/') {
      navigate('/' + hash)
      setNavOpen(false)
      return
    }

    scrollToHash(hash)
    setNavOpen(false)
  }

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <div className="top-nav-start">
          <p className="brand-mark">
            <Link to="/" onClick={() => setNavOpen(false)}>
              GIANNIS
            </Link>
          </p>
          <NavMeta className="nav-meta--inline" />
        </div>
        <button
          type="button"
          className={`nav-menu-toggle${navOpen ? ' nav-menu-toggle--open' : ''}`}
          aria-expanded={navOpen}
          aria-controls="primary-navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="visually-hidden">{navOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
          <span className="nav-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav
          id="primary-navigation"
          className={`top-nav-links${navOpen ? ' top-nav-links--open' : ''}`}
          aria-label={t.nav.primaryAria}
        >
          <NavMeta className="nav-meta--drawer" />
          <WorkNavDropdown
            isCurrent={onWork}
            onWorkClick={() => setNavOpen(false)}
            onSectionClick={(event, href) => {
              handleSectionNav(event, href)
            }}
            t={t}
          />

          <Link
            to="/personal"
            className={`nav-link${onPersonal ? ' nav-link--current' : ''}`}
            onClick={() => {
              prefetchPersonalAssets()
              setNavOpen(false)
            }}
            onMouseEnter={prefetchPersonalAssets}
            onFocus={prefetchPersonalAssets}
            aria-current={onPersonal ? 'page' : undefined}
          >
            {t.nav.personal}
          </Link>

          <Link
            to="/lifestyle"
            className={`nav-link${onLifestyle ? ' nav-link--current' : ''}`}
            onClick={() => setNavOpen(false)}
            aria-current={onLifestyle ? 'page' : undefined}
          >
            {t.nav.lifestyle}
          </Link>

          <div className="nav-utility-group">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
