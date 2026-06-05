import { useEffect, useState } from 'react'
import { useLocale } from '../context/LocaleContext'
import { useTranslation } from '../i18n'

const TIME_ZONES = [
  { id: 'sf', timeZone: 'America/Los_Angeles', labelKey: 'location', current: true },
  { id: 'athens', timeZone: 'Europe/Athens', labelKey: 'locationAthens', current: false },
]

function getLocaleTag(locale) {
  if (locale === 'el') return 'el-GR'
  if (locale === 'es') return 'es-ES'
  if (locale === 'pt') return 'pt-PT'
  return 'en-US'
}

function formatLocalTime(date, locale, timeZone) {
  return new Intl.DateTimeFormat(getLocaleTag(locale), {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(date)
}

function formatAllTimes(date, locale) {
  return Object.fromEntries(
    TIME_ZONES.map(({ id, timeZone }) => [id, formatLocalTime(date, locale, timeZone)]),
  )
}

function MetaRow({ time, label, current }) {
  return (
    <div className={`nav-meta-row${current ? ' nav-meta-row--current' : ' nav-meta-row--inactive'}`}>
      <span className="nav-meta-time">{time}</span>
      <span className="nav-meta-location">
        <span className={current ? 'nav-meta-here' : 'nav-meta-away'} aria-hidden="true" />
        {label}
      </span>
    </div>
  )
}

export default function NavMeta({ className = '' }) {
  const { locale } = useLocale()
  const t = useTranslation()
  const [times, setTimes] = useState(() => formatAllTimes(new Date(), locale))

  useEffect(() => {
    const tick = () => setTimes(formatAllTimes(new Date(), locale))
    tick()
    const interval = window.setInterval(tick, 30_000)
    return () => window.clearInterval(interval)
  }, [locale])

  const currentZone = TIME_ZONES.find((zone) => zone.current) ?? TIME_ZONES[0]
  const otherZones = TIME_ZONES.filter((zone) => !zone.current)

  return (
    <div
      className={`nav-meta nav-meta-dropdown${className ? ` ${className}` : ''}`}
      aria-label={t.meta.ariaLabel}
    >
      <div className="nav-meta-trigger">
        <MetaRow
          time={times[currentZone.id]}
          label={t.meta[currentZone.labelKey]}
          current
        />
      </div>

      {otherZones.length > 0 ? (
        <div className="nav-meta-panel" role="group" aria-label={t.meta.otherLocationsAria}>
          {otherZones.map((zone, index) => (
            <div
              key={zone.id}
              className="nav-meta-row nav-meta-row--inactive"
              style={{ '--nav-meta-i': index }}
            >
              <span className="nav-meta-time">{times[zone.id]}</span>
              <span className="nav-meta-location">
                <span className="nav-meta-away" aria-hidden="true" />
                {t.meta[zone.labelKey]}
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
