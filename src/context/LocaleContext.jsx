import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'site-locale'

const LocaleContext = createContext(null)

const LOCALES = ['en', 'el', 'es', 'pt']

function getInitialLocale() {
  if (typeof window === 'undefined') {
    return 'en'
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LOCALES.includes(stored)) {
      return stored
    }
  } catch {
    // ignore
  }
  const { lang } = document.documentElement
  return LOCALES.includes(lang) ? lang : 'en'
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const toggleLocale = () => {
    setLocale((current) => {
      const index = LOCALES.indexOf(current)
      return LOCALES[(index + 1) % LOCALES.length]
    })
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
