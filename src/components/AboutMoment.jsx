export default function AboutMoment({ src, alt, variant = 'wide', focus = 'center' }) {
  const focusStyle = { '--moment-focus': focus }

  return (
    <figure className={`about-moment about-moment--${variant}`} style={focusStyle}>
      <img
        className="about-moment-glow"
        src={src}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <img
        className="about-moment-photo"
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </figure>
  )
}
