import path from 'node:path'
import sharp from 'sharp'

const profilePath = path.resolve('public/pics/profile.png')
const publicDir = path.resolve('public')

async function createCircularIcon(size, outputName) {
  const radius = size / 2
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="#fff"/></svg>`,
  )

  await sharp(profilePath)
    .resize(size, size, { fit: 'cover', position: 'center' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(path.join(publicDir, outputName))
}

await createCircularIcon(32, 'favicon.png')
await createCircularIcon(180, 'apple-touch-icon.png')

console.log('Generated circular favicon.png and apple-touch-icon.png')
