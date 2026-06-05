import { useEffect } from 'react'
import AboutMoment from '../components/AboutMoment'
import AboutRow from '../components/AboutRow'
import ContactSection from '../components/ContactSection'
import RichParagraph from '../components/RichParagraph'
import { useReveal } from '../hooks/useReveal'
import { useTranslation } from '../i18n'
import { prefetchPersonalAssets } from '../utils/prefetchPersonalAssets'

function AboutParagraph({ block }) {
  if (typeof block === 'string') {
    return <p>{block}</p>
  }

  if (block.aside) {
    return <p className="about-aside">{block.text}</p>
  }

  if (block.chapter) {
    return <p className="about-chapter">{block.text}</p>
  }

  if (block.parts) {
    return <RichParagraph parts={block.parts} />
  }

  return null
}

function InlineRichText({ parts }) {
  return parts.map((part, index) => {
    if (part.link) {
      return (
        <a
          key={index}
          className="profile-inline-link"
          href={part.link.href}
          target={part.link.href.startsWith('#') ? undefined : '_blank'}
          rel={part.link.href.startsWith('#') ? undefined : 'noopener noreferrer'}
        >
          {part.link.label}
        </a>
      )
    }

    if (part.lang) {
      return (
        <span key={index} lang={part.lang}>
          {part.text}
        </span>
      )
    }

    return <span key={index}>{part.text}</span>
  })
}

const rowLayout = [
  { side: 'left', paletteSrc: '/pics/about/departure.png', focus: 'center 18%' },
  { side: 'right', paletteSrc: '/pics/about/graduation.jpg' },
  { side: 'left', paletteSrc: '/pics/about/startup.jpg' },
  { side: 'right', paletteSrc: '/pics/about/research.jpg' },
  {
    side: 'left',
    className: 'about-prose--life',
    paletteSrc: '/pics/about/handstand.jpg',
    variant: 'tall',
  },
  {
    side: 'right',
    className: 'about-prose--life',
    paletteSrc: '/pics/about/travel-balloon.jpg',
  },
  {
    side: 'left',
    className: 'about-prose--life',
    paletteSrc: '/pics/about/travel-sled.jpg',
  },
]

export default function AboutPage() {
  const t = useTranslation()
  const [heroRef, heroVisible] = useReveal({ threshold: 0, rootMargin: '0px' })
  const [closingRef, closingVisible] = useReveal({ rootMargin: '0px 0px -10% 0px' })

  useEffect(() => {
    prefetchPersonalAssets()
  }, [])

  return (
    <article className="about-page">
      <header ref={heroRef} className="about-hero">
        <div className={`about-reveal-text${heroVisible ? ' is-visible' : ''}`}>
          <h1 className="about-title">
            <InlineRichText parts={t.about.title.parts} />
          </h1>
        </div>
      </header>

      {t.about.rows.map((row, index) => {
        const layout = rowLayout[index]
        const imageSrc = layout.paletteSrc

        return (
          <AboutRow
            key={index}
            side={layout.side}
            className={layout.className}
            paletteSrc={layout.paletteSrc}
            media={
              <AboutMoment
                src={imageSrc}
                alt={row.imageAlt}
                focus={layout.focus}
                variant={layout.variant}
              />
            }
          >
            {row.paragraphs.map((block, paragraphIndex) => (
              <AboutParagraph key={paragraphIndex} block={block} />
            ))}
          </AboutRow>
        )
      })}

      <section ref={closingRef} className="about-section">
        <div className={`about-prose about-prose--full about-reveal-text${closingVisible ? ' is-visible' : ''}`}>
          <p className="about-closer">{t.about.closing.closer}</p>
          <p className="about-cta">
            <InlineRichText parts={t.about.closing.cta.parts} />
          </p>
        </div>
      </section>

      <ContactSection />
    </article>
  )
}
