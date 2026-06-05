export const socialProfile = {
  url: 'https://www.instagram.com/giannismparous/',
  handle: 'giannismparous',
  tagline: 'The parts of life I share outside work.',
}

export const reels = [
  {
    id: 'DSDP03rjx8b',
    url: 'https://www.instagram.com/reel/DSDP03rjx8b/',
    title: 'San Francisco with my buddy',
    location: null,
    category: 'Travel · Mindset',
    thumbnail: '/pics/social/DSDP03rjx8b.jpg',
  },
  {
    id: 'DSsleaoEtd-',
    url: 'https://www.instagram.com/reel/DSsleaoEtd-/',
    title: 'Central Park with the snowmen',
    location: null,
    category: 'Travel · NYC',
    thumbnail: '/pics/social/DSsleaoEtd-.jpg',
  },
  {
    id: 'DRcmrNtj-ro',
    url: 'https://www.instagram.com/reel/DRcmrNtj-ro/',
    title: 'Berkeley day',
    location: null,
    category: 'Travel',
    thumbnail: '/pics/social/DRcmrNtj-ro.jpg',
  },
  {
    id: 'DQPN04rCTtI',
    url: 'https://www.instagram.com/reel/DQPN04rCTtI/',
    title: 'A little lost',
    location: null,
    category: 'Life',
    thumbnail: '/pics/social/DQPN04rCTtI.jpg',
  },
  {
    id: 'DPooyCckiW_',
    url: 'https://www.instagram.com/reel/DPooyCckiW_/',
    title: 'Life in California',
    location: null,
    category: 'Fitness',
    thumbnail: '/pics/social/DPooyCckiW_.jpg',
  },
]

export const posts = [
  {
    id: 'DWwgzQXjxF-',
    url: 'https://www.instagram.com/p/DWwgzQXjxF-/',
    title: 'Palms, sunshine, main-character energy',
    location: 'Beverly Hills, LA',
    description: 'Palms, sunshine, main-character energy',
    category: 'Travel',
    thumbnail: '/pics/social/DWwgzQXjxF-.jpg',
  },
  {
    id: 'DQHlYpWCSxc',
    url: 'https://www.instagram.com/p/DQHlYpWCSxc/',
    title: 'Surf town mornings',
    location: 'Pleasure Point, Santa Cruz',
    description: 'Surf town mornings',
    category: 'Travel · CA',
    thumbnail: '/pics/social/DQHlYpWCSxc.jpg',
  },
  {
    id: 'DEIDoNsMw61',
    url: 'https://www.instagram.com/p/DEIDoNsMw61/',
    title: 'When in Rome, obviously',
    location: 'Rome, Italy',
    description: 'When in Rome, obviously',
    category: 'Life',
    thumbnail: '/pics/social/DEIDoNsMw61.jpg',
  },
  {
    id: 'C-0FgI5slQ6',
    url: 'https://www.instagram.com/p/C-0FgI5slQ6/',
    title: 'Blue water therapy',
    location: 'Zakynthos, Greece',
    description: 'Blue water therapy',
    category: 'Travel · Greece',
    thumbnail: '/pics/social/C-0FgI5slQ6.jpg',
  },
  {
    id: 'Cx2er4-sAoS',
    url: 'https://www.instagram.com/p/Cx2er4-sAoS/',
    title: 'Tiles, hills, good coffee',
    location: 'Lisbon, Portugal',
    description: 'Tiles, hills, good coffee',
    category: 'Travel · Portugal',
    thumbnail: '/pics/social/Cx2er4-sAoS.jpg',
  },
  {
    id: 'CurFHAxMJxb',
    url: 'https://www.instagram.com/p/CurFHAxMJxb/',
    title: 'Hot air balloon kind of day',
    location: 'Vilnius, Lithuania',
    description: 'Hot air balloon kind of day',
    category: 'Life',
    thumbnail: '/pics/social/CurFHAxMJxb.jpg',
  },
  {
    id: 'CqDI-IcMRaA',
    url: 'https://www.instagram.com/p/CqDI-IcMRaA/',
    title: 'Huskies > humans',
    location: 'Lapland, Finland',
    description: 'Huskies > humans',
    category: 'Travel · Winter',
    thumbnail: '/pics/social/CqDI-IcMRaA.jpg',
  },
  {
    id: 'ClcNoMpMALO',
    url: 'https://www.instagram.com/p/ClcNoMpMALO/',
    title: 'Night lights and good vibes',
    location: 'Belgrade, Serbia',
    description: 'Night lights and good vibes',
    category: 'Life',
    thumbnail: '/pics/social/ClcNoMpMALO.jpg',
  },
  {
    id: 'CSuPrGDMrEY',
    url: 'https://www.instagram.com/p/CSuPrGDMrEY/',
    title: 'Summer on the island',
    location: 'Evia, Greece',
    description: 'Summer on the island',
    category: 'Travel · Greece',
    thumbnail: '/pics/social/CSuPrGDMrEY.jpg',
  },
]

export function formatCaption(item) {
  if (item.location) {
    return `${item.title} · ${item.location}`
  }
  return item.title
}

export function formatPostCaption(item) {
  return item.description
}
