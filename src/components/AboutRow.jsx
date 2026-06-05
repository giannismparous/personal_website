import { usePhotoAmbience } from '../hooks/usePhotoAmbience'
import { useReveal } from '../hooks/useReveal'

export default function AboutRow({
  side = 'left',
  paletteSrc,
  paletteSrcSecondary,
  media,
  children,
  className = '',
}) {
  const [rowRef, rowVisible] = useReveal({ rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  const textLeft = side === 'left'
  const anchor = textLeft ? '86%' : '14%'
  const sources = [paletteSrc, paletteSrcSecondary].filter(Boolean)
  const ambientStyle = usePhotoAmbience(sources.length ? sources : null, anchor, rowVisible)

  return (
    <section
      ref={rowRef}
      className={`about-row${textLeft ? ' about-row--text-left' : ' about-row--text-right'}`}
      style={ambientStyle}
    >
      <div
        className={`about-prose about-reveal-text${rowVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      >
        {children}
      </div>
      <div className={`about-row-media about-reveal-media${rowVisible ? ' is-visible' : ''}`}>
        {media}
      </div>
    </section>
  )
}
