import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ContactSection from '../components/ContactSection'
import RichParagraph from '../components/RichParagraph'
import { useTranslation } from '../i18n'
import { prefetchPersonalAssets } from '../utils/prefetchPersonalAssets'

function HomeListItem({
  place,
  date,
  title,
  description,
  tags,
  href,
  revealIndex = 0,
  kickerClassName = 'credential-kicker',
  titleClassName = 'credential-card-title',
  descClassName = 'credential-card-desc',
}) {
  const titleContent = href ? (
    <a href={href} className="home-list-title-link" target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  ) : (
    title
  )

  return (
    <Reveal
      as="article"
      className="home-list-item credential-card"
      delay={60 + revealIndex * 55}
      style={{ '--reveal-delay': `${60 + revealIndex * 55}ms` }}
    >
      <div className="home-list-head">
        <span className="home-list-chevron" aria-hidden="true" />
        {place || date ? (
          <p className={kickerClassName}>
            <span className="home-list-meta">
              {place ? <span className="home-list-place">{place}</span> : null}
              {date ? <span className="home-list-date">{date}</span> : null}
            </span>
          </p>
        ) : null}
      </div>
      <h3 className={titleClassName}>{titleContent}</h3>
      {description ? <p className={descClassName}>{description}</p> : null}
      {tags?.length ? (
        <div className="tag-row">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
    </Reveal>
  )
}

function CredentialBento({ items, layout = 'grid' }) {
  const gridClass =
    layout === 'stack'
      ? 'credential-bento credential-bento--stack'
      : layout === 'events'
        ? 'credential-bento credential-bento--events'
        : 'credential-bento'

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <HomeListItem
          key={`${item.place}-${item.title}`}
          place={item.place}
          date={item.date}
          title={item.title}
          description={item.detail ?? item.description}
          href={item.href}
          revealIndex={index}
        />
      ))}
    </div>
  )
}

function ProjectGrid({ items, sectionKey }) {
  return (
    <div className="project-grid project-grid--large">
      {items.map((project, index) => (
        <HomeListItem
          key={`${sectionKey}-${project.title}`}
          place={project.place}
          date={project.date}
          title={project.title}
          description={project.description}
          tags={project.tags}
          href={project.href}
          revealIndex={index}
          kickerClassName="project-type"
          titleClassName="project-card-title"
          descClassName="project-card-desc"
        />
      ))}
    </div>
  )
}

export default function HomePage() {
  const t = useTranslation()

  return (
    <div className="home-page">
      <section className="hero" id="top">
        <Reveal className="hero-head-text" delay={80}>
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
        </Reveal>
        <Reveal className="hero-head-photo" delay={140}>
          <div className="profile-image-frame">
            <img src="/pics/profile.png" alt={t.a11y.profileAlt} className="profile-image" />
          </div>
        </Reveal>

        <Reveal className="hero-panel" delay={200}>
          <Reveal className="hero-bio-section" delay={240}>
            <RichParagraph className="hero-bio" parts={t.home.heroBio1.parts} />
          </Reveal>

          <Reveal className="hero-bio-section" delay={320}>
            <RichParagraph className="hero-bio" parts={t.home.heroBio2.parts} />
          </Reveal>

          <Reveal className="hero-about-link-wrap" delay={400}>
            <Link
              className="hero-about-link"
              to="/personal"
              onMouseEnter={prefetchPersonalAssets}
              onFocus={prefetchPersonalAssets}
            >
              {t.home.readFullStory}
              <span aria-hidden> →</span>
            </Link>
          </Reveal>
        </Reveal>
      </section>

      <section className="content-block section-ventures" id="ventures">
        <Reveal as="h2" delay={0}>
          {t.home.sections.ventures.title}
        </Reveal>
        <ProjectGrid items={t.home.ventureProjects} sectionKey="v" />
      </section>

      <section className="content-block section-research" id="research">
        <Reveal as="p" className="section-label" delay={0}>
          {t.home.sections.research.label}
        </Reveal>
        <Reveal as="h2" delay={60}>
          {t.home.sections.research.title}
        </Reveal>
        <ProjectGrid items={t.home.researchProjects} sectionKey="r" />
      </section>

      <section className="content-block section-founder-programs" id="founder-programs">
        <Reveal as="p" className="section-label" delay={0}>
          {t.home.sections.founderPrograms.label}
        </Reveal>
        <Reveal as="h2" className="credential-section-heading" delay={60}>
          {t.home.sections.founderPrograms.title}
        </Reveal>
        <CredentialBento items={t.home.founderProgramItems} layout="grid" />
      </section>

      <section className="content-block section-conferences" id="conferences">
        <Reveal as="p" className="section-label" delay={0}>
          {t.home.sections.conferences.label}
        </Reveal>
        <Reveal as="h2" className="credential-section-heading" delay={60}>
          {t.home.sections.conferences.title}
        </Reveal>
        <CredentialBento items={t.home.conferenceItems} layout="events" />
      </section>

      <section className="content-block section-events" id="events">
        <Reveal as="p" className="section-label" delay={0}>
          {t.home.sections.events.label}
        </Reveal>
        <Reveal as="h2" className="credential-section-heading" delay={60}>
          {t.home.sections.events.title}
        </Reveal>
        <CredentialBento items={t.home.eventItems} layout="events" />
      </section>

      <section className="content-block section-recognition" id="recognition">
        <Reveal as="p" className="section-label" delay={0}>
          {t.home.sections.recognition.label}
        </Reveal>
        <Reveal as="h2" className="credential-section-heading" delay={60}>
          {t.home.sections.recognition.title}
        </Reveal>
        <CredentialBento items={t.home.recognitionItems} layout="stack" />
      </section>

      <ContactSection />
    </div>
  )
}
