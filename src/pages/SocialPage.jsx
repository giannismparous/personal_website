import ContactSection from '../components/ContactSection'
import PostCard from '../components/PostCard'
import ReelsCarousel from '../components/ReelsCarousel'
import Reveal from '../components/Reveal'
import { posts as basePosts, reels as baseReels, socialProfile } from '../data/socialContent'
import { formatMessage, useLocalizedSocialContent, useTranslation } from '../i18n'

function InstagramIcon() {
  return (
    <svg className="contact-pill-svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
    </svg>
  )
}

export default function SocialPage() {
  const t = useTranslation()
  const { profile, reels, posts } = useLocalizedSocialContent(baseReels, basePosts)

  return (
    <article className="social-page">
      <header className="social-hero">
        <Reveal as="p" className="social-lede" delay={0}>
          {profile.tagline}
        </Reveal>
        <Reveal delay={80} className="social-hero-cta-wrap">
          <a
            className="contact-pill social-follow-pill"
            href={socialProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            <span>{formatMessage(t.lifestyle.follow, { handle: socialProfile.handle })}</span>
            <span className="contact-pill-icon" aria-hidden="true">
              ↗
            </span>
          </a>
        </Reveal>
      </header>

      <section className="social-section" aria-labelledby="social-reels-heading">
        <Reveal as="h2" id="social-reels-heading" className="social-section-heading" delay={0}>
          {t.lifestyle.sections.reels}
        </Reveal>
        <ReelsCarousel reels={reels} />
      </section>

      <section className="social-section" aria-labelledby="social-posts-heading">
        <Reveal as="h2" id="social-posts-heading" className="social-section-heading" delay={0}>
          {t.lifestyle.sections.posts}
        </Reveal>
        <div className="social-posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} item={post} />
          ))}
        </div>
      </section>

      <ContactSection />
    </article>
  )
}
