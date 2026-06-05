import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../context/LocaleContext'
import { useTranslation } from '../i18n'

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'el', label: 'ΕΛ', name: 'Ελληνικά' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
]

export default function LanguageToggle({ className = '' }) {
  const { locale, setLocale } = useLocale()
  const t = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0]

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      className={`language-dropdown${open ? ' language-dropdown--open' : ''}${className ? ` ${className}` : ''}`}
    >
      <button
        type="button"
        className="language-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.a11y.selectLanguage}: ${current.name}`}
        onClick={() => setOpen((value) => !value)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M3 12h18M12 3c2.8 3.1 4.3 6.4 4.5 9-.2 2.6-1.7 5.9-4.5 9-2.8-3.1-4.3-6.4-4.5-9 .2-2.6 1.7-5.9 4.5-9Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="language-toggle-label">{current.label}</span>
      </button>

      <ul className="language-dropdown-panel" role="listbox" aria-label={t.a11y.selectLanguage}>
        {LANGUAGES.map((lang, index) => (
          <li key={lang.code} role="none">
            <button
              type="button"
              role="option"
              aria-selected={locale === lang.code}
              className={`language-dropdown-option${
                locale === lang.code ? ' language-dropdown-option--current' : ''
              }`}
              style={{ '--language-dropdown-i': index }}
              onClick={() => {
                setLocale(lang.code)
                setOpen(false)
              }}
            >
              <span className="language-dropdown-option-label">{lang.label}</span>
              <span className="language-dropdown-option-name">{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
