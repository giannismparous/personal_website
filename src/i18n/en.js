export default {
  nav: {
    work: 'Work',
    personal: 'Personal',
    lifestyle: 'Lifestyle',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryAria: 'Primary',
    workSectionsAria: 'Work sections',
    workSections: {
      ventures: 'Ventures',
      research: 'Research',
      accelerators: 'Accelerators',
      conferences: 'Conferences',
      events: 'Events',
      recognition: 'Recognition',
      contact: 'Contact',
    },
  },

  meta: {
    ariaLabel: 'Current location and time',
    otherLocationsAria: 'Other locations',
    location: 'San Francisco, California',
    locationAthens: 'Athens, Greece',
  },

  a11y: {
    switchToGreek: 'Switch to Greek',
    switchToEnglish: 'Switch to English',
    switchToSpanish: 'Switch to Spanish',
    switchToPortuguese: 'Switch to Portuguese',
    selectLanguage: 'Select language',
    profileAlt: 'Giannis profile portrait',
    openInstagram: 'Open on Instagram: {title}',
    copyEmail: 'Copy {kind} email {address} to clipboard',
    previousReels: 'Previous reels',
    nextReels: 'Next reels',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
  },

  home: {
    eyebrow: 'Founder • Builder • Researcher',
    title: 'I live where deep research meets real-world value.',
    heroBio1: {
      parts: [
        { text: "Hi, I'm Giannis (" },
        { lang: 'el', text: 'Γιάννης' },
        {
          text: '), 24, from Greece. I like building things that ship and getting deep into hard systems problems. I co-founded ',
        },
        { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
        { text: ' (Jan 2025) and ' },
        { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
        {
          text: ' (Nov 2023). Before my startup experience I worked with 100+ clients on Upwork and Fiverr, shipping real products.',
        },
      ],
    },
    heroBio2: {
      parts: [
        { text: 'I studied CS at ' },
        { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
        { text: ', spent part of that time at ' },
        { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
        { text: ", and now I'm doing my PhD at " },
        {
          link: {
            href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
            label: 'UC Santa Cruz',
          },
        },
        { text: '. My research focuses on ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Oblivious_data_structure',
            label: 'oblivious computation',
          },
        },
        { text: ': using techniques like ' },
        { link: { href: 'https://en.wikipedia.org/wiki/Oblivious_RAM', label: 'ORAMs' } },
        { text: ' and ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Trusted_execution_environment',
            label: 'trusted execution environments',
          },
        },
        {
          text: ", such as Intel SGX, to hide access patterns and protect private data. I'm exploring how these ideas apply to anonymous communication, secure databases, and secure AI/ML systems.",
        },
      ],
    },
    readFullStory: 'Read the full story',
    sections: {
      ventures: {
        title: 'Ventures',
      },
      research: {
        label: 'Research',
        title: 'From the PhD',
      },
      founderPrograms: {
        label: 'Founder programs',
        title: 'Accelerator programs',
      },
      conferences: {
        label: 'Conferences',
        title: 'Research conferences',
      },
      events: {
        label: 'Events',
        title: 'Hackathons and industry events',
      },
      recognition: {
        label: 'Recognition',
        title: 'Honors and awards',
      },
    },
    recognitionItems: [
      {
        place: 'Athens',
        date: '2023',
        title: 'Valedictorian — AUEB',
        detail:
          'Delivered the valedictorian address. Top of cohort in Computer Science at Athens University of Economics and Business.',
      },
      {
        place: 'Athens',
        date: '2022',
        title: 'Huawei Seeds for the Future',
        detail:
          'Selected for the international cohort focused on emerging tech, innovation, and entrepreneurship.',
        href: 'https://www.huawei.com/minisite/seeds-for-the-future/index.html',
      },
    ],
    founderProgramItems: [
      {
        place: 'Hamburg',
        date: '2023',
        title: "Let's Startup — Erasmus+",
        detail:
          'International startup intensive: market research, product and UX for scalable systems, pitching.',
        href: null,
      },
      {
        place: 'Athens',
        date: '2022',
        title: 'Startab',
        detail:
          'Corallia pre-accelerator (Athena RC): agile MVP, sales, fundraising, and live pitches — free program for ages 18–35.',
        href: 'https://startab.gr/en/home/',
      },
    ],
    conferenceItems: [
      {
        place: 'San Francisco',
        date: 'May 18–20, 2026',
        title: 'IEEE S&P 2026',
        detail:
          'IEEE Symposium on Security and Privacy; premier forum for security and privacy research (47th edition).',
        href: 'https://sp2026.ieee-security.org/',
      },
      {
        place: 'San Francisco',
        date: 'Mar 23–26, 2026',
        title: 'RSA Conference 2026',
        detail:
          'Security research and industry conference: sessions, expo, and community.',
        href: 'https://www.rsaconference.com/',
      },
      {
        place: 'Berkeley',
        date: 'Nov 2025',
        title: 'Bay Area Crypto Day',
        detail:
          'Simons Institute / Melvin Calvin Lab. One-day cryptography research workshop (Bay Area series).',
        href: 'https://sites.google.com/view/bayareacryptoday/2025-nov',
      },
      {
        place: 'Athens',
        date: 'May 29–30, 2025',
        title: 'Olympia Research Summit',
        detail:
          'Athena Research Center summit on next-generation data, systems, and AI; Greek and international researchers.',
        href: 'https://olympiasummit.athenarc.gr/',
      },
    ],
    eventItems: [
      {
        place: 'San Francisco',
        date: 'Jun 4, 2026',
        title: 'Snowflake Dev Day 2026',
        detail:
          'Free one-day builder event co-located with Snowflake Summit: data, AI, bootcamps, and hands-on labs.',
        href: 'https://www.snowflake.com/en/dev-day/in-person/',
      },
      {
        place: 'San Francisco',
        date: 'Feb 2025',
        title: 'Smallest.ai Voice Hacksprint',
        detail: 'Full-day voice AI build, hosted by Smallest.ai.',
        href: 'https://smallest.ai/',
      },
    ],
    ventureProjects: [
      {
        place: 'Co-founder',
        date: 'Jan 2025',
        title: 'SimasiaAI',
        description:
          'AI tutor for Greek high school: personalized notes, exams and grading, study plans, and instructor-style explanations — built to widen access beyond expensive private tutoring.',
        tags: ['Co-founder', 'AI', 'RAG'],
        href: 'https://simasiaai.gr/',
      },
      {
        place: 'Co-founder',
        date: 'Nov 2023',
        title: 'HermesView',
        description:
          'Luxury dining: VR venue previews before you book, with real-time availability, reservations, and integrations with existing booking platforms.',
        tags: ['Co-founder', 'VR', 'Real-time'],
        href: 'https://www.instagram.com/hermes_view/',
      },
    ],
    researchProjects: [
      {
        place: 'Metadata · messaging',
        date: '2023–',
        title: 'Privacy-Preserving Messaging',
        description:
          'PhD work toward practical private communication — metadata-aware designs that can survive real deployment constraints.',
        tags: ['Privacy', 'UCSC'],
        href: 'https://en.wikipedia.org/wiki/Traffic_analysis',
      },
      {
        place: 'Low-latency · media',
        date: '2019–2022',
        title: 'TENeMP Real-Time Systems',
        description:
          'Research assistant at AUEB MMLab: WebRTC and GStreamer pipelines in C, SFU-style media paths, and measured latency for telepresence music. Co-authored IWCMC work on network music beyond 4G.',
        tags: ['WebRTC', 'GStreamer', 'Paper'],
        href: 'https://mmlab-aueb.github.io/tenemp-site/',
      },
    ],
  },

  about: {
    title: {
      parts: [
        { text: "Hey, I'm Giannis (aka " },
        { lang: 'el', text: 'Γιάννης' },
        { text: ')' },
      ],
    },
    rows: [
      {
        imageAlt: 'Giannis saying goodbye at the airport before flying to California',
        paragraphs: [
          "I'm 24, from Greece, and at some point I did the slightly dramatic thing: I left everything behind and moved to California with two suitcases to chase the dream.",
          {
            aside: true,
            text: 'As you can guess, very "I know what I\'m doing" type of decision.',
          },
        ],
      },
      {
        imageAlt: 'Giannis delivering his valedictorian speech at AUEB',
        paragraphs: [
          {
            parts: [
              { text: 'I studied Computer Science at ' },
              { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
              { text: ', spent part of that time at ' },
              { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
              {
                text: ", and somewhere along the way realized I didn't just like learning how systems work. I liked building them.",
              },
            ],
          },
          'That started in a pretty funny way: helping friends automate Instagram contest posts, the "like, comment, tag, repeat" kind. I felt bad watching them waste hours on it, so I built a tool. Then I realized people would actually pay for this stuff. One project became another, and I ended up working with 100+ clients on Upwork and Fiverr, building websites, tools, automations, and real products for real people.',
        ],
      },
      {
        imageAlt: 'Giannis working on a startup',
        paragraphs: [
          'Eventually, that turned into startups.',
          {
            parts: [
              { text: 'In 2023, I co-founded ' },
              { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
              {
                text: ', a VR reservation platform for restaurants, built around the idea that choosing a place should feel closer to actually being there.',
              },
            ],
          },
          {
            parts: [
              { text: 'In 2025, I co-founded ' },
              { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
              {
                text: ', focused on human-centered AI tools that make work and learning more practical. One of our main directions is affordable AI for education, helping students and educators use AI as a real assistant.',
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Giannis at UC Santa Cruz',
        paragraphs: [
          {
            parts: [
              { text: "Now I'm doing my PhD at " },
              {
                link: {
                  href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
                  label: 'UC Santa Cruz',
                },
              },
              { text: '. My research focuses on ' },
              {
                link: {
                  href: 'https://en.wikipedia.org/wiki/Oblivious_data_structure',
                  label: 'oblivious computation',
                },
              },
              { text: ': using techniques like ' },
              { link: { href: 'https://en.wikipedia.org/wiki/Oblivious_RAM', label: 'ORAMs' } },
              { text: ' and ' },
              {
                link: {
                  href: 'https://en.wikipedia.org/wiki/Trusted_execution_environment',
                  label: 'trusted execution environments',
                },
              },
              {
                text: ", such as Intel SGX, to hide access patterns and protect private data. I'm exploring how these ideas can be applied to anonymous communication, secure databases, and secure AI/ML systems.",
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Giannis doing a one-handed handstand above a city skyline',
        paragraphs: [
          {
            chapter: true,
            text: 'Outside all of that, I still try to build myself too.',
          },
          'My day usually starts with coffee. More like a dependency than a personality trait.',
          "I've been doing calisthenics for seven years, and I like it for the same reason I like hard technical problems: progress is honest. You either put in the work or you don't. I share that side of my life online too — fitness, nutrition, discipline, and well-being in general — mostly to push people to raise their standards and take themselves a bit more seriously.",
        ],
      },
      {
        imageAlt: 'Giannis on a hot air balloon ride',
        paragraphs: [
          "Travel shaped a lot of the rest. I've been to 30+ countries around Europe, partly thanks to Erasmus+ (which, as far as I can tell, exists to give lost people in their 20s, like myself, the chance to collect friends, stories, questionable decisions, and strong opinions about food).",
        ],
      },
      {
        imageAlt: 'Giannis with sled dogs in the snow',
        paragraphs: [
          "Most of the languages I speak came from that too. Greek, English, Spanish, Portuguese — each one is tied to people, places, cuisines, and stories I didn't want to experience from the outside.",
        ],
      },
    ],
    closing: {
      closer: 'But enough of me ranting.',
      cta: {
        parts: [
          {
            text: 'If you want to connect, collaborate, talk research, startups, AI, fitness, travel, or just send a good coffee shop recommendation, ',
          },
          { link: { href: '#contact', label: 'reach out here' } },
          { text: '.' },
        ],
      },
    },
  },

  lifestyle: {
    profile: {
      tagline: 'The parts of life I share outside work.',
    },
    sections: {
      reels: 'Reels',
      posts: 'Posts',
    },
    follow: 'Follow @{handle}',
    reels: {
      DSDP03rjx8b: {
        title: 'San Francisco with my buddy',
      },
      'DSsleaoEtd-': {
        title: 'Central Park with the snowmen',
      },
      'DRcmrNtj-ro': {
        title: 'Berkeley day',
      },
      DQPN04rCTtI: {
        title: 'A little lost',
      },
      DPooyCckiW_: {
        title: 'Life in California',
      },
    },
    posts: {
      'DWwgzQXjxF-': {
        location: 'Beverly Hills, LA',
        description: 'Palms, sunshine, main-character energy',
      },
      DQHlYpWCSxc: {
        location: 'Pleasure Point, Santa Cruz',
        description: 'Surf town mornings',
      },
      DEIDoNsMw61: {
        location: 'Rome, Italy',
        description: 'When in Rome, obviously',
      },
      'C-0FgI5slQ6': {
        location: 'Zakynthos, Greece',
        description: 'Blue water therapy',
      },
      'Cx2er4-sAoS': {
        location: 'Lisbon, Portugal',
        description: 'Tiles, hills, good coffee',
      },
      CurFHAxMJxb: {
        location: 'Vilnius, Lithuania',
        description: 'Hot air balloon kind of day',
      },
      'CqDI-IcMRaA': {
        location: 'Lapland, Finland',
        description: 'Huskies > humans',
      },
      ClcNoMpMALO: {
        location: 'Belgrade, Serbia',
        description: 'Night lights and good vibes',
      },
      CSuPrGDMrEY: {
        location: 'Evia, Greece',
        description: 'Summer on the island',
      },
    },
  },

  contact: {
    label: 'Contact',
    title: 'Open to serious conversations.',
    emailKinds: {
      academic: 'Academic',
      personal: 'Personal',
    },
    copiedTitle: 'Copied to clipboard',
    copyErrorTitle: 'Could not copy automatically',
    copyHint: 'Select the address on the card, or try again.',
    social: {
      linkedIn: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
    },
  },
}
