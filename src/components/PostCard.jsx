import { useState } from 'react'
import { formatPostCaption } from '../data/socialContent'
import { mediaById } from '../data/socialMedia'
import { formatMessage, useTranslation } from '../i18n'

export default function PostCard({ item }) {
  const t = useTranslation()
  const images = mediaById[item.id]?.images ?? [item.thumbnail]
  const [index, setIndex] = useState(0)
  const [thumbFailed, setThumbFailed] = useState(false)
  const hasMany = images.length > 1

  const go = (direction, event) => {
    event.preventDefault()
    event.stopPropagation()
    setIndex((current) => {
      const next = current + direction
      if (next < 0) return images.length - 1
      if (next >= images.length) return 0
      return next
    })
    setThumbFailed(false)
  }

  return (
    <article className="social-feed-item social-feed-item--post">
      <div className="social-feed-frame social-feed-frame--post">
        <span className="social-post-location">
          <svg
            className="social-post-location-icon"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          {item.location}
        </span>
        <a
          href={item.url}
          className="social-feed-media social-feed-media--post"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={formatMessage(t.a11y.openInstagram, {
            title: item.location ?? formatPostCaption(item),
          })}
        >
          {!thumbFailed ? (
            <img
              className="social-feed-thumb social-feed-thumb--cover"
              src={images[index]}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setThumbFailed(true)}
            />
          ) : (
            <div className="social-feed-fallback" aria-hidden="true" />
          )}
        </a>
        {hasMany ? (
          <>
            <button
              type="button"
              className="social-post-nav social-post-nav--prev"
              aria-label={t.a11y.previousPhoto}
              onClick={(event) => go(-1, event)}
            >
              ‹
            </button>
            <button
              type="button"
              className="social-post-nav social-post-nav--next"
              aria-label={t.a11y.nextPhoto}
              onClick={(event) => go(1, event)}
            >
              ›
            </button>
            <div className="social-post-dots" aria-hidden="true">
              {images.map((image, dotIndex) => (
                <span
                  key={image}
                  className={`social-post-dot${dotIndex === index ? ' is-active' : ''}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <p className="social-feed-caption">{formatPostCaption(item)}</p>
    </article>
  )
}
