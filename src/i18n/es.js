export default {
  nav: {
    work: 'Trabajo',
    personal: 'Personal',
    lifestyle: 'Lifestyle',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    primaryAria: 'Menú principal',
    workSectionsAria: 'Secciones',
    workSections: {
      ventures: 'Startups',
      research: 'Investigación',
      accelerators: 'Accelerators',
      conferences: 'Conferencias',
      events: 'Events',
      recognition: 'Distinciones',
      contact: 'Contacto',
    },
  },

  meta: {
    ariaLabel: 'Ubicación y hora',
    otherLocationsAria: 'Otras ubicaciones',
    location: 'San Francisco, California',
    locationAthens: 'Atenas, Grecia',
  },

  a11y: {
    switchToGreek: 'Cambiar a griego',
    switchToEnglish: 'Cambiar a inglés',
    switchToSpanish: 'Cambiar a español',
    switchToPortuguese: 'Cambiar a portugués',
    selectLanguage: 'Seleccionar idioma',
    profileAlt: 'Retrato de perfil de Giannis',
    openInstagram: 'Abrir en Instagram: {title}',
    copyEmail: 'Copiar email {kind} ({address})',
    previousReels: 'Reels anteriores',
    nextReels: 'Reels siguientes',
    previousPhoto: 'Foto anterior',
    nextPhoto: 'Foto siguiente',
  },

  home: {
    eyebrow: 'Founder • Builder • Investigador',
    title:
      'Construyo cosas que quiero ver en el mundo, desde startups y productos de AI hasta investigación en privacy y secure systems.',
    heroBio1: {
      parts: [
        { text: 'Hola, soy Giannis, 24, de Grecia. Me gusta construir cosas que la gente realmente usa y meterme a fondo en problemas difíciles de sistemas. He cofundado ' },
        { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
        { text: ' y ' },
        { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
        {
          text: ', y antes de las startups trabajé con más de 100 clientes en Upwork y Fiverr, creando websites, automations, herramientas y productos para necesidades reales.',
        },
      ],
    },
    heroBio2: {
      parts: [
        { text: 'Estudié Ciencias de la Computación en ' },
        { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
        { text: ', pasé parte de mis estudios en ' },
        { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
        { text: ', y ahora hago un PhD en ' },
        {
          link: {
            href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
            label: 'UC Santa Cruz',
          },
        },
        { text: '. Mi investigación se centra en ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Oblivious_data_structure',
            label: 'oblivious computation',
          },
        },
        { text: ', con técnicas como ' },
        { link: { href: 'https://en.wikipedia.org/wiki/Oblivious_RAM', label: 'ORAMs' } },
        { text: ' y ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Trusted_execution_environment',
            label: 'trusted execution environments',
          },
        },
        {
          text: ', para sistemas que protegen private data y esconden access patterns. Me interesa especialmente cómo aplicar esto a anonymous communication, secure databases y secure AI/ML.',
        },
      ],
    },
    readFullStory: 'Leer toda la historia',
    sections: {
      ventures: { title: 'Startups' },
      research: { label: 'Investigación', title: 'Del PhD' },
      founderPrograms: { label: 'Programas', title: 'Programas para founders' },
      conferences: { label: 'Conferencias', title: 'Conferencias de investigación' },
      events: { label: 'Events', title: 'Hackathons y eventos' },
      recognition: { label: 'Distinciones', title: 'Honores y premios' },
    },
    recognitionItems: [
      {
        place: 'Atenas',
        date: '2023',
        title: 'Mejor rendimiento académico — AUEB',
        detail:
          'Di el discurso de graduación por el mejor rendimiento académico. Primera posición en el Departamento de Informática de AUEB.',
      },
      {
        place: 'Atenas',
        date: '2022',
        title: 'Huawei Seeds for the Future',
        detail:
          'Seleccionado para el programa internacional de Huawei sobre emerging tech, innovation y emprendimiento.',
        href: 'https://www.huawei.com/minisite/seeds-for-the-future/index.html',
      },
    ],
    founderProgramItems: [
      {
        place: 'Hamburgo',
        date: '2023',
        title: "Let's Startup — Erasmus+",
        detail:
          'Programa internacional de startups en Hamburgo, con market research, product thinking, UX y pitching.',
        href: null,
      },
      {
        place: 'Atenas',
        date: '2022',
        title: 'Startab',
        detail: 'Pre-accelerator de Corallia / Athena RC, con MVP, ventas, fundraising y pitches.',
        href: 'https://startab.gr/en/home/',
      },
    ],
    conferenceItems: [
      {
        place: 'San Francisco',
        date: '18–20 mayo 2026',
        title: 'IEEE S&P 2026',
        detail:
          'IEEE Symposium on Security and Privacy — foro principal de security & privacy research (47.ª edición).',
        href: 'https://sp2026.ieee-security.org/',
      },
      {
        place: 'San Francisco',
        date: '23–26 mar. 2026',
        title: 'RSA Conference 2026',
        detail: 'Conferencia de security research e industry: sessions, expo, community.',
        href: 'https://www.rsaconference.com/',
      },
      {
        place: 'Berkeley',
        date: 'Nov. 2025',
        title: 'Bay Area Crypto Day',
        detail:
          'Simons Institute / Melvin Calvin Lab. Workshop de un día sobre criptografía (serie Bay Area).',
        href: 'https://sites.google.com/view/bayareacryptoday/2025-nov',
      },
      {
        place: 'Atenas',
        date: '29–30 mayo 2025',
        title: 'Olympia Research Summit',
        detail:
          'Summit del Athena Research Center sobre data, systems y AI; investigadores griegos e internacionales.',
        href: 'https://olympiasummit.athenarc.gr/',
      },
    ],
    eventItems: [
      {
        place: 'San Francisco',
        date: '4 jun. 2026',
        title: 'Snowflake Dev Day 2026',
        detail:
          'Evento gratuito de un día para builders, junto al Snowflake Summit: data, AI, bootcamps y hands-on labs.',
        href: 'https://www.snowflake.com/en/dev-day/in-person/',
      },
      {
        place: 'San Francisco',
        date: 'Feb. 2025',
        title: 'Smallest.ai Voice Hacksprint',
        detail: 'Hackathon de voice AI de un día, organizado por Smallest.ai.',
        href: 'https://smallest.ai/',
      },
    ],
    ventureProjects: [
      {
        place: 'Cofundador',
        date: 'Ene. 2025',
        title: 'SimasiaAI',
        description:
          'AI tutor para estudiantes de instituto en Grecia: apuntes, explicaciones, corrección, planes de estudio y apoyo tipo profesor, con el objetivo de que una buena ayuda para estudiar no sea solo para quienes pueden pagar clases particulares caras.',
        tags: ['Cofundador', 'AI', 'RAG'],
        href: 'https://simasiaai.gr/',
      },
      {
        place: 'Cofundador',
        date: 'Nov. 2023',
        title: 'HermesView',
        description:
          'VR preview para restaurantes antes de reservar una mesa. La idea era simple: poder sentir el lugar antes de ir.',
        tags: ['Cofundador', 'VR', 'Real-time'],
        href: 'https://www.instagram.com/hermes_view/',
      },
    ],
    researchProjects: [
      {
        place: 'Metadata · messaging',
        date: '2023–',
        title: 'Privacy-Preserving Messaging',
        description:
          'PhD research sobre comunicación privada práctica, metadata protection y sistemas que puedan funcionar en un deployment real.',
        tags: ['Privacy', 'UCSC'],
        href: 'https://en.wikipedia.org/wiki/Traffic_analysis',
      },
      {
        place: 'Low-latency · media',
        date: '2019–2022',
        title: 'TENeMP Real-Time Systems',
        description:
          'Research assistant en AUEB MMLab, trabajando con WebRTC, GStreamer, low-latency media systems y network music performance.',
        tags: ['WebRTC', 'GStreamer', 'Paper'],
        href: 'https://mmlab-aueb.github.io/tenemp-site/',
      },
    ],
  },

  about: {
    title: {
      parts: [{ text: 'Hola, soy Giannis.' }],
    },
    rows: [
      {
        imageAlt: 'Giannis despidiéndose en el aeropuerto antes de volar a California',
        paragraphs: [
          'Tengo 24 años, soy de Grecia, y en algún momento hice lo ligeramente dramático: dejé todo atrás y me mudé a California con dos maletas para perseguir el sueño.',
          {
            aside: true,
            text: 'Decisión muy de "sí sí, sé perfectamente lo que estoy haciendo".',
          },
        ],
      },
      {
        imageAlt: 'Giannis dando el discurso de graduación en AUEB',
        paragraphs: [
          {
            parts: [
              { text: 'Estudié Ciencias de la Computación en ' },
              { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
              { text: ', y durante ese camino también pasé un semestre en ' },
              { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
              {
                text: ' con Erasmus. Cuando volví a Grecia, acabé dando el discurso de graduación en AUEB por tener el mejor rendimiento académico. Suena muy serio, pero en realidad seguía siendo el mismo tipo intentando entender qué quería hacer con su vida.',
              },
            ],
          },
          'En algún punto entendí que no solo me gustaba aprender cómo funcionan los sistemas. Quería construirlos.',
          'Todo empezó de una forma bastante tonta: hacía automations para amigos que participaban en giveaways de Instagram, de esos de "like, comment, tag, repeat". Los veía perder horas y pensé: "no puede ser que lo hagan así". Así que construí una herramienta. Luego me di cuenta de que la gente pagaba por cosas como esa. Un proyecto llevó al siguiente, y terminé trabajando con más de 100 clientes en Upwork y Fiverr, construyendo websites, herramientas, automations y productos reales para gente real.',
        ],
      },
      {
        imageAlt: 'Giannis trabajando en una startup',
        paragraphs: [
          'Con el tiempo, eso se convirtió en startups.',
          {
            parts: [
              { text: 'En 2023 cofundé ' },
              { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
              {
                text: ', una plataforma de reservas con VR para restaurantes, con la idea de que antes de reservar en un sitio estaría bien poder sentir un poco el espacio.',
              },
            ],
          },
          {
            parts: [
              { text: 'En 2025 cofundé ' },
              { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
              {
                text: '. Ahí trabajamos en herramientas de AI centradas en las personas, con un enfoque fuerte en educación. Uno de nuestros productos es un AI tutor para estudiantes de instituto en Grecia, con apuntes, explicaciones, corrección, planes de estudio y apoyo que no debería estar disponible solo para quienes pueden pagar clases particulares caras.',
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Giannis en UC Santa Cruz',
        paragraphs: [
          {
            parts: [
              { text: 'Ahora estoy haciendo mi PhD en ' },
              {
                link: {
                  href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
                  label: 'UC Santa Cruz',
                },
              },
              { text: '. Mi investigación va sobre ' },
              {
                link: {
                  href: 'https://en.wikipedia.org/wiki/Oblivious_data_structure',
                  label: 'oblivious computation',
                },
              },
              { text: ': ' },
              { link: { href: 'https://en.wikipedia.org/wiki/Oblivious_RAM', label: 'ORAMs' } },
              { text: ', ' },
              {
                link: {
                  href: 'https://en.wikipedia.org/wiki/Trusted_execution_environment',
                  label: 'trusted execution environments',
                },
              },
              {
                text: ' como Intel SGX, y técnicas que esconden access patterns y protegen datos privados. Estoy explorando cómo aplicar estas ideas a anonymous communication, secure databases y secure AI/ML systems.',
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Giannis haciendo un handstand con una mano sobre el skyline',
        paragraphs: [
          { chapter: true, text: 'Fuera de todo eso, también intento construirme a mí mismo.' },
          'Mi día normalmente empieza con café. No por aesthetic. Simplemente, sin café no arranca nada.',
          'Llevo siete años haciendo calisthenics, y me gusta por la misma razón por la que me gustan los problemas técnicos difíciles: el progreso no miente. O haces el trabajo, o no lo haces. También comparto esa parte online, junto con fitness, nutrición, disciplina y well-being en general, porque me gusta empujar a la gente a subir un poco el estándar que tiene para sí misma.',
        ],
      },
      {
        imageAlt: 'Giannis en un paseo en globo aerostático',
        paragraphs: [
          'Viajar también me cambió bastante. He estado en más de 30 países por Europa, en gran parte gracias a Erasmus+, que por lo que entiendo existe para darles a personas un poco perdidas en sus 20s, como yo, la oportunidad de coleccionar amigos, historias, malas decisiones y opiniones muy fuertes sobre comida.',
        ],
      },
      {
        imageAlt: 'Giannis con perros de trineo en la nieve',
        paragraphs: [
          'Y los idiomas vinieron un poco de ahí también. Griego, inglés, español, portugués. Cada uno está conectado con personas, lugares, comida e historias que no quería vivir desde fuera como simple turista.',
        ],
      },
    ],
    closing: {
      closer: 'Bueno, suficiente sobre mí.',
      cta: {
        parts: [
          {
            text: 'Si quieres hablar de investigación, startups, AI, fitness, viajes, o simplemente mandarme un buen coffee spot, ',
          },
          { link: { href: '#contact', label: 'escríbeme por aquí' } },
          { text: '.' },
        ],
      },
    },
  },

  lifestyle: {
    profile: {
      tagline: 'Vida fuera del trabajo — esto es lo que comparto online.',
    },
    sections: {
      reels: 'Reels',
      posts: 'Posts',
    },
    follow: 'Follow @{handle}',
    reels: {
      DSDP03rjx8b: {
        title: 'San Francisco con un amigo',
        description: 'Un poco de city life, un poco de "cómo acabé aquí".',
      },
      'DSsleaoEtd-': {
        title: 'Central Park con muñecos de nieve',
        description: 'Frío, paseo, y yo fingiendo que no me estaba congelando.',
      },
      'DRcmrNtj-ro': {
        title: 'Un día en Berkeley',
        description: 'Campus bonito, buena energía, y mucha gente que parece demasiado inteligente.',
      },
      DQPN04rCTtI: {
        title: 'Un poco perdido',
        description: 'Pasa más de lo que admito.',
      },
      DPooyCckiW_: {
        title: 'Vida en California',
        description: 'Sol, mar, trabajo, y el constante "¿y si salgo a dar una vuelta?".',
      },
    },
    posts: {
      'DWwgzQXjxF-': {
        location: 'Beverly Hills, LA',
        description: 'Palmeras, sol, un poco cinematográfico. No voy a mentir.',
      },
      DQHlYpWCSxc: {
        location: 'Pleasure Point, Santa Cruz',
        description: 'Surf town, café por la mañana, buen vibe.',
      },
      DEIDoNsMw61: {
        location: 'Roma, Italia',
        description: 'Cuando estás en Roma, comes como si fuera parte de la cultura. Porque lo es.',
      },
      'C-0FgI5slQ6': {
        location: 'Zakynthos',
        description: 'Agua que te recuerda por qué los griegos somos un poco intensos con el verano.',
      },
      'Cx2er4-sAoS': {
        location: 'Lisboa',
        description: 'Azulejos, cuestas, buen café, y piernas pidiendo descanso después.',
      },
      CurFHAxMJxb: {
        location: 'Vilnius',
        description:
          'El día del globo aerostático. De esos momentos en los que dices: "sí, hice bien en venir de Erasmus".',
      },
      'CqDI-IcMRaA': {
        location: 'Laponia',
        description: 'Huskies > humanos. Al menos ese día.',
      },
      ClcNoMpMALO: {
        location: 'Belgrado',
        description: 'Noche, luces, buen vibe.',
      },
      CSuPrGDMrEY: {
        location: 'Evia',
        description: 'Verano, isla, cosas simples.',
      },
    },
  },

  contact: {
    label: 'Contacto',
    title: 'Si tienes algo con sentido que decir, estoy aquí.',
    emailKinds: {
      academic: 'Académico',
      personal: 'Personal',
    },
    copiedTitle: 'Copiado al portapapeles',
    copyErrorTitle: 'No se pudo copiar automáticamente',
    copyHint: 'Selecciona la dirección en la tarjeta o inténtalo de nuevo.',
    social: {
      linkedIn: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
    },
  },
}
