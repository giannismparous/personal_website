import fs from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { posts, reels } from '../src/data/socialContent.js'

const OUT_DIR = path.resolve('public/pics/social')
const MEDIA_OUT = path.resolve('src/data/socialMedia.js')
const USER_AGENT = 'facebookexternalhit/1.1'

function extractOgImage(html) {
  const match =
    html.match(/property="og:image" content="([^"]+)"/) ||
    html.match(/property='og:image' content='([^']+)'/)
  return match?.[1]?.replace(/&amp;/g, '&') ?? null
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT, Accept: 'text/html' },
    redirect: 'follow',
  })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return response.text()
}

async function fetchOgImage(url) {
  const html = await fetchHtml(url)
  const imageUrl = extractOgImage(html)
  if (!imageUrl) throw new Error('No og:image found')
  return imageUrl
}

async function fetchReel(id, url) {
  const imageUrl = await fetchOgImage(url)
  const imageResponse = await fetch(imageUrl)
  const buffer = Buffer.from(await imageResponse.arrayBuffer())
  await fs.writeFile(path.join(OUT_DIR, `${id}.jpg`), buffer)
  return [`/pics/social/${id}.jpg`]
}

async function fetchPostImages(id, url) {
  const images = []
  const hashes = new Set()
  let index = 1

  while (index <= 10) {
    const pageUrl = index === 1 ? url : `${url.split('?')[0]}?img_index=${index}`
    let imageUrl
    try {
      imageUrl = await fetchOgImage(pageUrl)
    } catch {
      break
    }

    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) break
    const buffer = Buffer.from(await imageResponse.arrayBuffer())
    const hash = createHash('sha1').update(buffer).digest('hex')
    if (hashes.has(hash)) break
    hashes.add(hash)

    const fileName = images.length === 0 ? `${id}.jpg` : `${id}_${images.length + 1}.jpg`
    await fs.writeFile(path.join(OUT_DIR, fileName), buffer)
    images.push(`/pics/social/${fileName}`)
    index += 1
  }

  if (!images.length) throw new Error('No images found')
  return images
}

await fs.mkdir(OUT_DIR, { recursive: true })

const mediaById = {}
for (const reel of reels) {
  mediaById[reel.id] = { images: await fetchReel(reel.id, reel.url) }
  console.log(`reel ${reel.id}`)
}
for (const post of posts) {
  mediaById[post.id] = { images: await fetchPostImages(post.id, post.url) }
  console.log(`post ${post.id} (${mediaById[post.id].images.length})`)
}

await fs.writeFile(MEDIA_OUT, `export const mediaById = ${JSON.stringify(mediaById, null, 2)}\n`)
console.log('done')
