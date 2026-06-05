import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve('public/pics')
const IMAGE_RE = /\.(jpe?g|png)$/i

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
    } else if (IMAGE_RE.test(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

function maxEdgeFor(filePath) {
  const base = path.basename(filePath).toLowerCase()
  if (base.startsWith('profile.')) {
    return 640
  }
  return 1200
}

async function compress(filePath) {
  const before = (await fs.stat(filePath)).size
  const meta = await sharp(filePath).metadata()
  const maxEdge = maxEdgeFor(filePath)
  const needsResize = Math.max(meta.width ?? 0, meta.height ?? 0) > maxEdge
  const ext = path.extname(filePath).toLowerCase()
  const tempPath = `${filePath}.tmp`

  let pipeline = sharp(filePath).rotate()

  if (needsResize) {
    pipeline = pipeline.resize({
      width: maxEdge,
      height: maxEdge,
      fit: 'inside',
      withoutEnlargement: true,
    })
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({
      quality: 84,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:4:4',
    })
  } else if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: false,
    })
  }

  await pipeline.toFile(tempPath)
  const after = (await fs.stat(tempPath)).size

  if (after >= before) {
    await fs.unlink(tempPath)
    return { filePath, before, after: before, skipped: true }
  }

  await fs.rename(tempPath, filePath)
  return { filePath, before, after, skipped: false }
}

const files = await walk(ROOT)
const results = []

for (const file of files) {
  results.push(await compress(file))
}

const saved = results.reduce((sum, row) => sum + Math.max(0, row.before - row.after), 0)

for (const row of results) {
  const rel = path.relative(process.cwd(), row.filePath)
  const beforeKb = (row.before / 1024).toFixed(1)
  const afterKb = (row.after / 1024).toFixed(1)
  const tag = row.skipped ? 'kept' : 'saved'
  console.log(`${tag.padEnd(5)} ${beforeKb.padStart(8)} KB -> ${afterKb.padStart(8)} KB  ${rel}`)
}

console.log(`\nTotal saved: ${(saved / 1024).toFixed(1)} KB`)
