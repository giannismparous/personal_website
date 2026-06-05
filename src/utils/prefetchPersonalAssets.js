export const personalPhotoSources = [
  '/pics/about/departure.png',
  '/pics/about/graduation.jpg',
  '/pics/about/startup.jpg',
  '/pics/about/research.jpg',
  '/pics/about/handstand.jpg',
  '/pics/about/travel-balloon.jpg',
  '/pics/about/travel-sled.jpg',
]

let personalAssetsPrefetched = false

export function prefetchPersonalAssets() {
  if (personalAssetsPrefetched) {
    return
  }
  personalAssetsPrefetched = true

  personalPhotoSources.forEach((src) => {
    const img = new Image()
    img.decoding = 'async'
    img.src = src
  })
}
