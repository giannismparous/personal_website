import { useMemo } from 'react'
import { useLocale } from '../context/LocaleContext'
import el from './el'
import en from './en'
import es from './es'
import pt from './pt'

const messages = { en, el, es, pt }

export function useTranslation() {
  const { locale } = useLocale()
  return useMemo(() => messages[locale] ?? messages.en, [locale])
}

export function formatMessage(template, vars = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '')
}

export function getLocalizedSocialContent(locale, baseReels, basePosts) {
  const t = messages[locale] ?? messages.en

  return {
    profile: t.lifestyle.profile,
    reels: baseReels.map((item) => ({
      ...item,
      title: t.lifestyle.reels[item.id]?.title ?? item.title,
      description: t.lifestyle.reels[item.id]?.description,
    })),
    posts: basePosts.map((item) => ({
      ...item,
      location: t.lifestyle.posts[item.id]?.location ?? item.location,
      description: t.lifestyle.posts[item.id]?.description ?? item.description,
      title: t.lifestyle.posts[item.id]?.description ?? item.title,
    })),
  }
}

export function useLocalizedSocialContent(baseReels, basePosts) {
  const { locale } = useLocale()
  return useMemo(
    () => getLocalizedSocialContent(locale, baseReels, basePosts),
    [locale, baseReels, basePosts],
  )
}
