import { useEffect, useRef, useState } from 'react'
import { formatCaption } from '../data/socialContent'
import { mediaById } from '../data/socialMedia'
import { formatMessage, useTranslation } from '../i18n'

function ReelCard({ item }) {
  const t = useTranslation()
  const [thumbFailed, setThumbFailed] = useState(false)
  const images = mediaById[item.id]?.images ?? [item.thumbnail]
  const imageSrc = images[0]

  return (
    <article className="social-feed-item social-feed-item--reel social-feed-item--carousel">
      <a
        href={item.url}
        className="social-feed-frame"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={formatMessage(t.a11y.openInstagram, { title: item.title })}
      >
        <div className="social-feed-media social-feed-media--reel">
          {!thumbFailed ? (
            <img
              className="social-feed-thumb social-feed-thumb--cover"
              src={imageSrc}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setThumbFailed(true)}
            />
          ) : (
            <div className="social-feed-fallback" aria-hidden="true" />
          )}
        </div>
      </a>
      <p className="social-feed-caption">{item.description ?? formatCaption(item)}</p>
    </article>
  )
}

export default function ReelsCarousel({ reels }) {
  const t = useTranslation()
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const syncButtons = () => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    setCanPrev(track.scrollLeft > 4)
    setCanNext(track.scrollLeft < maxScroll - 4)
  }

  useEffect(() => {
    syncButtons()
    window.addEventListener('resize', syncButtons)
    return () => window.removeEventListener('resize', syncButtons)
  }, [])

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.social-feed-item--carousel')
    const gap = 16
    const amount = (card?.getBoundingClientRect().width ?? 220) + gap
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
    window.setTimeout(syncButtons, 320)
  }

  return (
    <div className="social-carousel">
      <button
        type="button"
        className="social-carousel-btn social-carousel-btn--prev"
        aria-label={t.a11y.previousReels}
        disabled={!canPrev}
        onClick={() => scrollByCard(-1)}
      >
        ‹
      </button>
      <div ref={trackRef} className="social-carousel-track" onScroll={syncButtons} role="list">
        {reels.map((reel) => (
          <ReelCard key={reel.id} item={reel} />
        ))}
      </div>
      <button
        type="button"
        className="social-carousel-btn social-carousel-btn--next"
        aria-label={t.a11y.nextReels}
        disabled={!canNext}
        onClick={() => scrollByCard(1)}
      >
        ›
      </button>
    </div>
  )
}
