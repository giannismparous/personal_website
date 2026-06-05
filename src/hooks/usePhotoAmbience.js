import { useEffect, useState } from 'react'

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function sampleEdgeColor(img) {
  const canvas = document.createElement('canvas')
  const size = 48
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) {
    return null
  }
  ctx.drawImage(img, 0, 0, size, size)
  const { data, width, height } = ctx.getImageData(0, 0, size, size)

  const samples = []
  const pick = (x, y) => {
    const i = (y * width + x) * 4
    samples.push([data[i], data[i + 1], data[i + 2]])
  }

  for (let x = 0; x < width; x += 1) {
    pick(x, 0)
    pick(x, height - 1)
  }
  for (let y = 0; y < height; y += 1) {
    pick(0, y)
    pick(width - 1, y)
  }

  const avg = samples.reduce(
    (acc, [r, g, b]) => [acc[0] + r, acc[1] + g, acc[2] + b],
    [0, 0, 0],
  )
  const n = samples.length
  return `rgb(${Math.round(avg[0] / n)}, ${Math.round(avg[1] / n)}, ${Math.round(avg[2] / n)})`
}

export function usePhotoAmbience(sources, anchor = '75%', active = true) {
  const [style, setStyle] = useState({ '--ambient-anchor': anchor })
  const sourceKey = Array.isArray(sources) ? sources.join('|') : sources

  useEffect(() => {
    if (!active) {
      return undefined
    }

    const srcList = (Array.isArray(sources) ? sources : [sources]).filter(Boolean)
    if (!srcList.length) {
      return undefined
    }

    let cancelled = false

    const run = async () => {
      try {
        const { getPaletteSync } = await import('colorthief')
        const colors = []

        for (const src of srcList) {
          const img = await loadImage(src)
          if (cancelled) {
            return
          }

          const edge = sampleEdgeColor(img)
          const palette = getPaletteSync(img, { colorCount: 3, quality: 8, colorSpace: 'rgb' })
          if (edge) {
            colors.push(edge)
          }
          if (palette?.length) {
            colors.push(palette[0].css(), palette[1]?.css() ?? palette[0].css())
          }
        }

        if (cancelled || !colors.length) {
          return
        }

        setStyle({
          '--ambient-a': colors[0],
          '--ambient-b': colors[1] ?? colors[0],
          '--ambient-c': colors[2] ?? colors[1] ?? colors[0],
          '--ambient-anchor': anchor,
        })
      } catch {
        if (!cancelled) {
          setStyle({ '--ambient-anchor': anchor })
        }
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [sourceKey, anchor, active])

  useEffect(() => {
    setStyle((current) => ({ ...current, '--ambient-anchor': anchor }))
  }, [anchor])

  return style
}
