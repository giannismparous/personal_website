export default {
  nav: {
    work: 'Trabalho',
    personal: 'Pessoal',
    lifestyle: 'Lifestyle',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    primaryAria: 'Menu principal',
    workSectionsAria: 'Secções',
    workSections: {
      ventures: 'Startups',
      research: 'Investigação',
      accelerators: 'Accelerators',
      conferences: 'Conferências',
      events: 'Events',
      recognition: 'Distinções',
      contact: 'Contacto',
    },
  },

  meta: {
    ariaLabel: 'Localização e hora',
    otherLocationsAria: 'Outras localizações',
    location: 'San Francisco, California',
    locationAthens: 'Atenas, Grécia',
  },

  a11y: {
    switchToGreek: 'Mudar para grego',
    switchToEnglish: 'Mudar para inglês',
    switchToSpanish: 'Mudar para espanhol',
    switchToPortuguese: 'Mudar para português',
    selectLanguage: 'Selecionar idioma',
    profileAlt: 'Retrato de perfil do Giannis',
    openInstagram: 'Abrir no Instagram: {title}',
    copyEmail: 'Copiar email {kind} ({address})',
    previousReels: 'Reels anteriores',
    nextReels: 'Reels seguintes',
    previousPhoto: 'Foto anterior',
    nextPhoto: 'Foto seguinte',
  },

  home: {
    eyebrow: 'Founder • Builder • Investigador',
    title:
      'Construo coisas que quero ver no mundo, desde startups e produtos de AI até investigação em privacy e secure systems.',
    heroBio1: {
      parts: [
        {
          text: 'Olá, sou o Giannis, tenho 24 anos e sou da Grécia. Gosto de construir coisas que as pessoas realmente usam e de entrar a fundo em problemas difíceis de sistemas. Cofundei a ',
        },
        { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
        { text: ' e a ' },
        { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
        {
          text: ', e antes das startups trabalhei com mais de 100 clientes no Upwork e Fiverr, criando websites, automations, ferramentas e produtos para necessidades reais.',
        },
      ],
    },
    heroBio2: {
      parts: [
        { text: 'Estudei Ciência da Computação na ' },
        { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
        { text: ', passei parte dos meus estudos na ' },
        { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
        { text: ', e agora faço um PhD na ' },
        {
          link: {
            href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
            label: 'UC Santa Cruz',
          },
        },
        { text: '. A minha investigação é em ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Oblivious_data_structure',
            label: 'oblivious computation',
          },
        },
        { text: ', com técnicas como ' },
        { link: { href: 'https://en.wikipedia.org/wiki/Oblivious_RAM', label: 'ORAMs' } },
        { text: ' e ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Trusted_execution_environment',
            label: 'trusted execution environments',
          },
        },
        {
          text: ', para sistemas que protegem private data e escondem access patterns. Interessa-me especialmente como aplicar isto a anonymous communication, secure databases e secure AI/ML.',
        },
      ],
    },
    readFullStory: 'Ler a história toda',
    sections: {
      ventures: { title: 'Startups' },
      research: { label: 'Investigação', title: 'Do PhD' },
      founderPrograms: { label: 'Programas', title: 'Programas para founders' },
      conferences: { label: 'Conferências', title: 'Conferências de investigação' },
      events: { label: 'Events', title: 'Hackathons e eventos' },
      recognition: { label: 'Distinções', title: 'Honras e prémios' },
    },
    recognitionItems: [
      {
        place: 'Atenas',
        date: '2023',
        title: 'Melhor desempenho académico — AUEB',
        detail:
          'Fiz o discurso de graduação pelo melhor desempenho académico. Primeiro lugar no Departamento de Informática da AUEB.',
      },
      {
        place: 'Atenas',
        date: '2022',
        title: 'Huawei Seeds for the Future',
        detail:
          'Selecionado para o programa internacional da Huawei sobre emerging tech, innovation e empreendedorismo.',
        href: 'https://www.huawei.com/minisite/seeds-for-the-future/index.html',
      },
    ],
    founderProgramItems: [
      {
        place: 'Hamburgo',
        date: '2023',
        title: "Let's Startup — Erasmus+",
        detail:
          'Programa internacional de startups em Hamburgo, com market research, product thinking, UX e pitching.',
        href: null,
      },
      {
        place: 'Atenas',
        date: '2022',
        title: 'Startab',
        detail: 'Pre-accelerator da Corallia / Athena RC, com MVP, vendas, fundraising e pitches.',
        href: 'https://startab.gr/en/home/',
      },
    ],
    conferenceItems: [
      {
        place: 'San Francisco',
        date: '18–20 maio 2026',
        title: 'IEEE S&P 2026',
        detail:
          'IEEE Symposium on Security and Privacy — fórum principal de security & privacy research (47.ª edição).',
        href: 'https://sp2026.ieee-security.org/',
      },
      {
        place: 'San Francisco',
        date: '23–26 mar. 2026',
        title: 'RSA Conference 2026',
        detail: 'Conferência de security research e industry: sessions, expo, community.',
        href: 'https://www.rsaconference.com/',
      },
      {
        place: 'Berkeley',
        date: 'Nov. 2025',
        title: 'Bay Area Crypto Day',
        detail:
          'Simons Institute / Melvin Calvin Lab. Workshop de um dia sobre criptografia (série Bay Area).',
        href: 'https://sites.google.com/view/bayareacryptoday/2025-nov',
      },
      {
        place: 'Atenas',
        date: '29–30 maio 2025',
        title: 'Olympia Research Summit',
        detail:
          'Summit do Athena Research Center sobre data, systems e AI; investigadores gregos e internacionais.',
        href: 'https://olympiasummit.athenarc.gr/',
      },
    ],
    eventItems: [
      {
        place: 'San Francisco',
        date: '4 jun. 2026',
        title: 'Snowflake Dev Day 2026',
        detail:
          'Evento gratuito de um dia para builders, junto ao Snowflake Summit: data, AI, bootcamps e hands-on labs.',
        href: 'https://www.snowflake.com/en/dev-day/in-person/',
      },
      {
        place: 'San Francisco',
        date: 'Fev. 2025',
        title: 'Smallest.ai Voice Hacksprint',
        detail: 'Hackathon de voice AI de um dia, organizado pela Smallest.ai.',
        href: 'https://smallest.ai/',
      },
    ],
    ventureProjects: [
      {
        place: 'Cofundador',
        date: 'Jan. 2025',
        title: 'SimasiaAI',
        description:
          'AI tutor para alunos do ensino secundário na Grécia: apontamentos, explicações, correção, planos de estudo e apoio tipo professor, com o objetivo de tornar uma boa ajuda no estudo acessível para além de quem consegue pagar explicações caras.',
        tags: ['Cofundador', 'AI', 'RAG'],
        href: 'https://simasiaai.gr/',
      },
      {
        place: 'Cofundador',
        date: 'Nov. 2023',
        title: 'HermesView',
        description:
          'VR preview para restaurantes antes de reservar mesa. A ideia era simples: conseguir sentir o espaço antes de ir.',
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
          'PhD research sobre comunicação privada prática, metadata protection e sistemas que consigam funcionar num deployment real.',
        tags: ['Privacy', 'UCSC'],
        href: 'https://en.wikipedia.org/wiki/Traffic_analysis',
      },
      {
        place: 'Low-latency · media',
        date: '2019–2022',
        title: 'TENeMP Real-Time Systems',
        description:
          'Research assistant no AUEB MMLab, com trabalho em WebRTC, GStreamer, low-latency media systems e network music performance.',
        tags: ['WebRTC', 'GStreamer', 'Paper'],
        href: 'https://mmlab-aueb.github.io/tenemp-site/',
      },
    ],
  },

  about: {
    title: {
      parts: [{ text: 'Olá, sou o Giannis.' }],
    },
    rows: [
      {
        imageAlt: 'Giannis a despedir-se no aeroporto antes de voar para a Califórnia',
        paragraphs: [
          'Tenho 24 anos, sou da Grécia, e a certa altura fiz aquela coisa ligeiramente dramática: deixei tudo para trás e mudei-me para a Califórnia com duas malas para ir atrás do sonho.',
          {
            aside: true,
            text: 'Uma decisão bem "sim sim, eu sei exatamente o que estou a fazer".',
          },
        ],
      },
      {
        imageAlt: 'Giannis a fazer o discurso de graduação na AUEB',
        paragraphs: [
          {
            parts: [
              { text: 'Estudei Ciência da Computação na ' },
              { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
              { text: ', e durante esse percurso também passei um semestre na ' },
              { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
              {
                text: ' através do Erasmus. Quando voltei para a Grécia, acabei por fazer o discurso de graduação na AUEB por ter tido o melhor desempenho académico. Parece muito sério, mas na prática eu continuava a ser o mesmo tipo a tentar perceber o que queria fazer da vida.',
              },
            ],
          },
          'Em algum momento percebi que não gostava só de aprender como os sistemas funcionam. Eu queria construí-los.',
          'Começou de uma forma bastante parva: fazia automations para amigos que participavam em giveaways no Instagram, daqueles de "like, comment, tag, repeat". Via-os a perder horas naquilo e pensei: "não é possível que isto tenha de ser feito assim". Então construí uma ferramenta. Depois percebi que havia pessoas dispostas a pagar por este tipo de coisas. Um projeto levou a outro, e acabei por trabalhar com mais de 100 clientes no Upwork e Fiverr, construindo websites, ferramentas, automations e produtos reais para pessoas reais.',
        ],
      },
      {
        imageAlt: 'Giannis a trabalhar numa startup',
        paragraphs: [
          'Com o tempo, isso virou startups.',
          {
            parts: [
              { text: 'Em 2023 cofundei a ' },
              { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
              {
                text: ', uma plataforma de reservas com VR para restaurantes, com a ideia de que antes de reservar num sítio devia ser possível sentir um pouco o espaço.',
              },
            ],
          },
          {
            parts: [
              { text: 'Em 2025 cofundei a ' },
              { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
              {
                text: '. Lá trabalhamos em ferramentas de AI centradas nas pessoas, com um foco forte em educação. Um dos nossos produtos é um AI tutor para alunos do ensino secundário na Grécia, com apontamentos, explicações, correção, planos de estudo e apoio que não devia estar disponível só para quem consegue pagar explicações caras.',
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Giannis na UC Santa Cruz',
        paragraphs: [
          {
            parts: [
              { text: 'Agora estou a fazer o meu PhD na ' },
              {
                link: {
                  href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
                  label: 'UC Santa Cruz',
                },
              },
              { text: '. A minha investigação é em ' },
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
                text: ' como Intel SGX, e técnicas que escondem access patterns e protegem dados privados. Estou a explorar como estas ideias podem ser aplicadas a anonymous communication, secure databases e secure AI/ML systems.',
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Giannis a fazer handstand com uma mão sobre o skyline',
        paragraphs: [
          { chapter: true, text: 'Fora disso tudo, também tento construir-me a mim próprio.' },
          'O meu dia normalmente começa com café. Não pelo aesthetic. Simplesmente, sem café nada começa.',
          'Faço calisthenics há sete anos, e gosto disso pela mesma razão que gosto de problemas técnicos difíceis: o progresso não mente. Ou fazes o trabalho, ou não fazes. Também partilho essa parte online, junto com fitness, nutrição, disciplina e well-being em geral, porque gosto de puxar as pessoas a subir um pouco o padrão que têm para si mesmas.',
        ],
      },
      {
        imageAlt: 'Giannis num passeio de balão de ar quente',
        paragraphs: [
          'Viajar também teve um papel enorme. Já estive em mais de 30 países pela Europa, em grande parte graças ao Erasmus+, que pelo que percebi existe para dar a pessoas um bocado perdidas nos seus 20s, como eu, a oportunidade de colecionar amigos, histórias, más decisões e opiniões muito fortes sobre comida.',
        ],
      },
      {
        imageAlt: 'Giannis com cães de trenó na neve',
        paragraphs: [
          'E as línguas vieram um pouco daí também. Grego, inglês, espanhol, português. Cada uma está ligada a pessoas, lugares, comida e histórias que eu não queria viver de fora como simples turista.',
        ],
      },
    ],
    closing: {
      closer: 'Pronto, já chega de falar de mim.',
      cta: {
        parts: [
          {
            text: 'Se quiseres falar sobre investigação, startups, AI, fitness, viagens, ou simplesmente mandar-me um bom coffee spot, ',
          },
          { link: { href: '#contact', label: 'fala comigo por aqui' } },
          { text: '.' },
        ],
      },
    },
  },

  lifestyle: {
    profile: {
      tagline: 'Vida fora do trabalho — é isto que partilho online.',
    },
    sections: {
      reels: 'Reels',
      posts: 'Posts',
    },
    follow: 'Follow @{handle}',
    reels: {
      DSDP03rjx8b: {
        title: 'San Francisco com um amigo',
        description: 'Um pouco de city life, um pouco de "como é que eu vim parar aqui".',
      },
      'DSsleaoEtd-': {
        title: 'Central Park com bonecos de neve',
        description: 'Frio, passeio, e eu a fingir que não estava a congelar.',
      },
      'DRcmrNtj-ro': {
        title: 'Um dia em Berkeley',
        description: 'Campus bonito, boa energia, e muita gente que parece inteligente demais.',
      },
      DQPN04rCTtI: {
        title: 'Um pouco perdido',
        description: 'Acontece mais vezes do que eu admito.',
      },
      DPooyCckiW_: {
        title: 'Vida na Califórnia',
        description: 'Sol, mar, trabalho, e o eterno "e se eu fosse dar uma volta?".',
      },
    },
    posts: {
      'DWwgzQXjxF-': {
        location: 'Beverly Hills, LA',
        description: 'Palmeiras, sol, um pouco cinematográfico. Não vou mentir.',
      },
      DQHlYpWCSxc: {
        location: 'Pleasure Point, Santa Cruz',
        description: 'Surf town, café de manhã, bom vibe.',
      },
      DEIDoNsMw61: {
        location: 'Roma, Itália',
        description: 'Quando estás em Roma, comes como se fosse parte da cultura. Porque é.',
      },
      'C-0FgI5slQ6': {
        location: 'Zakynthos',
        description: 'Água que te lembra porque é que os gregos são um bocado intensos com o verão.',
      },
      'Cx2er4-sAoS': {
        location: 'Lisboa',
        description: 'Azulejos, colinas, bom café, e pernas a pedir descanso depois.',
      },
      CurFHAxMJxb: {
        location: 'Vilnius',
        description:
          'O dia do balão de ar quente. Daqueles momentos em que pensas: "sim, fiz bem em vir de Erasmus".',
      },
      'CqDI-IcMRaA': {
        location: 'Lapónia',
        description: 'Huskies > humanos. Pelo menos naquele dia.',
      },
      ClcNoMpMALO: {
        location: 'Belgrado',
        description: 'Noite, luzes, bom vibe.',
      },
      CSuPrGDMrEY: {
        location: 'Evia',
        description: 'Verão, ilha, coisas simples.',
      },
    },
  },

  contact: {
    label: 'Contacto',
    title: 'Se tiveres algo com sentido para dizer, estou por aqui.',
    emailKinds: {
      academic: 'Académico',
      personal: 'Pessoal',
    },
    copiedTitle: 'Copiado para a área de transferência',
    copyErrorTitle: 'Não foi possível copiar automaticamente',
    copyHint: 'Seleciona o endereço no cartão ou tenta novamente.',
    social: {
      linkedIn: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
    },
  },
}
