export default {
  nav: {
    work: 'Δουλειά',
    personal: 'Προσωπικά',
    lifestyle: 'Lifestyle',
    openMenu: 'Άνοιγμα μενού',
    closeMenu: 'Κλείσιμο μενού',
    primaryAria: 'Κύριο μενού',
    workSectionsAria: 'Ενότητες',
    workSections: {
      ventures: 'Startups',
      research: 'Έρευνα',
      accelerators: 'Accelerators',
      conferences: 'Συνέδρια',
      events: 'Events',
      recognition: 'Διακρίσεις',
      contact: 'Επικοινωνία',
    },
  },

  meta: {
    ariaLabel: 'Τοποθεσία και ώρα',
    otherLocationsAria: 'Άλλες τοποθεσίες',
    location: 'San Francisco, California',
    locationAthens: 'Αθήνα, Ελλάδα',
  },

  a11y: {
    switchToGreek: 'Αλλαγή σε Ελληνικά',
    switchToEnglish: 'Αλλαγή σε Αγγλικά',
    switchToSpanish: 'Αλλαγή σε Ισπανικά',
    switchToPortuguese: 'Αλλαγή σε Πορτογαλικά',
    selectLanguage: 'Επιλογή γλώσσας',
    profileAlt: 'Φωτογραφία προφίλ του Γιάννη',
    openInstagram: 'Άνοιγμα στο Instagram: {title}',
    copyEmail: 'Αντιγραφή {kind} email ({address})',
    previousReels: 'Προηγούμενα reels',
    nextReels: 'Επόμενα reels',
    previousPhoto: 'Προηγούμενη φωτογραφία',
    nextPhoto: 'Επόμενη φωτογραφία',
  },

  home: {
    eyebrow: 'Ιδρυτής • Builder • Ερευνητής',
    title: 'Ζω εκεί που η έρευνα συναντά πράγματα με αξία στον πραγματικό κόσμο.',
    heroBio1: {
      parts: [
        { text: 'Γεια, είμαι ο ' },
        { lang: 'el', text: 'Γιάννης' },
        {
          text: ', 24, από την Ελλάδα. Μου αρέσει να φτιάχνω πράγματα που βγαίνουν live και να μπαίνω βαθιά σε δύσκολα θέματα συστημάτων. Έχω συνιδρύσει το ',
        },
        { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
        { text: ' (Ιαν. 2025) και το ' },
        { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
        {
          text: ' (Νοέ. 2023). Πριν τα startups, είχα δουλέψει με 100+ πελάτες στο Upwork και Fiverr — websites, εργαλεία, automations, πράγματα που πάνε στον κόσμο.',
        },
      ],
    },
    heroBio2: {
      parts: [
        { text: 'Σπούδασα Πληροφορική στο ' },
        { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
        { text: ', έκανα μέρος των σπουδών μου στο ' },
        { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
        { text: ', και τώρα κάνω διδακτορικό στο ' },
        {
          link: {
            href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
            label: 'UC Santa Cruz',
          },
        },
        { text: '. Δουλεύω στον ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Oblivious_data_structure',
            label: 'oblivious computation',
          },
        },
        { text: ' — τεχνικές όπως ' },
        { link: { href: 'https://en.wikipedia.org/wiki/Oblivious_RAM', label: 'ORAMs' } },
        { text: ' και ' },
        {
          link: {
            href: 'https://en.wikipedia.org/wiki/Trusted_execution_environment',
            label: 'trusted execution environments',
          },
        },
        {
          text: ' (π.χ. Intel SGX) για να κρύβονται τα access patterns και να προστατεύονται ευαίσθητα δεδομένα. Με ενδιαφέρει πώς αυτό εφαρμόζεται σε ανώνυμη επικοινωνία, ασφαλείς βάσεις δεδομένων και AI/ML.',
        },
      ],
    },
    readFullStory: 'Διάβασε όλη την ιστορία',
    sections: {
      ventures: {
        title: 'Startups',
      },
      research: {
        label: 'Έρευνα',
        title: 'Από το διδακτορικό',
      },
      founderPrograms: {
        label: 'Προγράμματα',
        title: 'Accelerators & προγράμματα ιδρυτών',
      },
      conferences: {
        label: 'Συνέδρια',
        title: 'Ερευνητικά συνέδρια',
      },
      events: {
        label: 'Events',
        title: 'Hackathons & industry events',
      },
      recognition: {
        label: 'Διακρίσεις',
        title: 'Τιμές & βραβεία',
      },
    },
    recognitionItems: [
      {
        place: 'Αθήνα',
        date: '2023',
        title: 'Αριστούχος — AUEB',
        detail:
          'Εκφώνησα τον λόγο του αριστούχου. Πρώτος στην τάξη στην Πληροφορική του ΟΠΑ.',
      },
      {
        place: 'Αθήνα',
        date: '2022',
        title: 'Huawei Seeds for the Future',
        detail:
          'Επιλογή στο διεθνές πρόγραμμα για emerging tech, καινοτομία και επιχειρηματικότητα.',
        href: 'https://www.huawei.com/minisite/seeds-for-the-future/index.html',
      },
    ],
    founderProgramItems: [
      {
        place: 'Αμβούργο',
        date: '2023',
        title: "Let's Startup — Erasmus+",
        detail:
          'Διεθνές εντατικό startup: έρευνα αγοράς, προϊόν, UX για scalable συστήματα, pitching.',
        href: null,
      },
      {
        place: 'Αθήνα',
        date: '2022',
        title: 'Startab',
        detail:
          'Pre-accelerator της Corallia (Athena RC): MVP, πωλήσεις, fundraising, pitches — δωρεάν για 18–35.',
        href: 'https://startab.gr/en/home/',
      },
    ],
    conferenceItems: [
      {
        place: 'San Francisco',
        date: '18–20 Μαΐου 2026',
        title: 'IEEE S&P 2026',
        detail:
          'IEEE Symposium on Security and Privacy — κορυφαίο forum για security & privacy research (47η έκδοση).',
        href: 'https://sp2026.ieee-security.org/',
      },
      {
        place: 'San Francisco',
        date: '23–26 Μαρτίου 2026',
        title: 'RSA Conference 2026',
        detail:
          'Συνέδριο security research & industry: sessions, expo, community.',
        href: 'https://www.rsaconference.com/',
      },
      {
        place: 'Berkeley',
        date: 'Νοέ. 2025',
        title: 'Bay Area Crypto Day',
        detail:
          'Simons Institute / Melvin Calvin Lab. Μονοήμερο workshop κρυπτογραφίας (σειρά Bay Area).',
        href: 'https://sites.google.com/view/bayareacryptoday/2025-nov',
      },
      {
        place: 'Αθήνα',
        date: '29–30 Μαΐου 2025',
        title: 'Olympia Research Summit',
        detail:
          'Summit του Κέντρου Αθηνά για data, systems και AI· Έλληνες και διεθνείς ερευνητές.',
        href: 'https://olympiasummit.athenarc.gr/',
      },
    ],
    eventItems: [
      {
        place: 'San Francisco',
        date: '4 Ιουν. 2026',
        title: 'Snowflake Dev Day 2026',
        detail:
          'Δωρεάν one-day event για builders, μαζί με το Snowflake Summit: data, AI, bootcamps, hands-on labs.',
        href: 'https://www.snowflake.com/en/dev-day/in-person/',
      },
      {
        place: 'San Francisco',
        date: 'Φεβ. 2025',
        title: 'Smallest.ai Voice Hacksprint',
        detail: 'Ολοήμερο voice AI hackathon από τη Smallest.ai.',
        href: 'https://smallest.ai/',
      },
    ],
    ventureProjects: [
      {
        place: 'Συνιδρυτής',
        date: 'Ιαν. 2025',
        title: 'SimasiaAI',
        description:
          'AI tutor για το ελληνικό λύκειο: σημειώσεις, εξετάσεις, βαθμολόγηση, πλάνα μελέτης, εξηγήσεις σαν καθηγητής — για πρόσβαση πέρα από τα ακριβά ιδιαίτερα.',
        tags: ['Συνιδρυτής', 'AI', 'RAG'],
        href: 'https://simasiaai.gr/',
      },
      {
        place: 'Συνιδρυτής',
        date: 'Νοέ. 2023',
        title: 'HermesView',
        description:
          'Fine dining με VR preview του χώρου πριν κλείσεις τραπέζι — real-time διαθεσιμότητα, κρατήσεις, integrations με booking platforms.',
        tags: ['Συνιδρυτής', 'VR', 'Real-time'],
        href: 'https://www.instagram.com/hermes_view/',
      },
    ],
    researchProjects: [
      {
        place: 'Metadata · messaging',
        date: '2023–',
        title: 'Privacy-Preserving Messaging',
        description:
          'Διδακτορικό για πρακτική ιδιωτική επικοινωνία — σχεδιασμοί που σέβονται metadata και αντέχουν σε πραγματικό deployment.',
        tags: ['Privacy', 'UCSC'],
        href: 'https://en.wikipedia.org/wiki/Traffic_analysis',
      },
      {
        place: 'Low-latency · media',
        date: '2019–2022',
        title: 'TENeMP Real-Time Systems',
        description:
          'Research assistant στο AUEB MMLab: WebRTC & GStreamer σε C, SFU media paths, latency για telepresence music. Co-author σε IWCMC paper για network music πέρα από 4G.',
        tags: ['WebRTC', 'GStreamer', 'Paper'],
        href: 'https://mmlab-aueb.github.io/tenemp-site/',
      },
    ],
  },

  about: {
    title: {
      parts: [{ text: 'Γεια, είμαι ο ' }, { lang: 'el', text: 'Γιάννης' }],
    },
    rows: [
      {
        imageAlt: 'Ο Γιάννης στο αεροδρόμιο, πριν φύγει για την Καλιφόρνια',
        paragraphs: [
          'Είμαι 24, από την Ελλάδα, και κάποια στιγμή έκανα το κλασικό δραματικό: άφησα τα πάντα πίσω μου και ήρθα στην Καλιφόρνια με δύο βαλίτσες να κυνηγήσω το όνειρο.',
          {
            aside: true,
            text: 'Νομίζω, απόφαση τύπου «ξέρω ακριβώς τι κάνω».',
          },
        ],
      },
      {
        imageAlt: 'Ο Γιάννης εκφωνεί τον λόγο του αριστούχου στο AUEB',
        paragraphs: [
          {
            parts: [
              { text: 'Σπούδασα Πληροφορική στο ' },
              { link: { href: 'https://www.aueb.gr/en', label: 'AUEB' } },
              { text: ', έκανα μέρος των σπουδών μου στο ' },
              { link: { href: 'https://www.vu.lt/en/', label: 'Vilnius University' } },
              {
                text: ', και κάπου στο δρόμο κατάλαβα ότι δεν με ενδιέφερε μόνο να μαθαίνω πώς δουλεύουν τα συστήματα. Ήθελα να τα φτιάχνω.',
              },
            ],
          },
          'Ξεκίνησε με έναν αστείο τρόπο: βοηθούσα φίλους να αυτοματοποιούν διαγωνισμούς στο Instagram — like, comment, tag, repeat. Με έσκαγε να τους βλέπω να χάνουν ώρες, οπότε έφτιαξα εργαλείο. Μετά κατάλαβα ότι ο κόσμος πληρώνει γι\' αυτό. Ένα project έφερε το επόμενο, και κατέληξα με 100+ πελάτες στο Upwork και Fiverr — sites, εργαλεία, automations, πράγματα για πραγματικούς ανθρώπους.',
        ],
      },
      {
        imageAlt: 'Ο Γιάννης δουλεύει σε startup',
        paragraphs: [
          'Κάποια στιγμή αυτό έγινε startups.',
          {
            parts: [
              { text: 'Το 2023 συνίδρυσα το ' },
              { link: { href: 'https://www.instagram.com/hermes_view/', label: 'HermesView' } },
              {
                text: ', πλατφόρμα VR κρατήσεων για εστιατόρια — η ιδέα ήταν να νιώθεις τον χώρο πριν κλείσεις.',
              },
            ],
          },
          {
            parts: [
              { text: 'Το 2025 συνίδρυσα το ' },
              { link: { href: 'https://simasiaai.gr/', label: 'SimasiaAI' } },
              {
                text: ', AI εργαλεία που κάνουν δουλειά και μάθηση πιο πρακτικές. Ένα από τα βασικά μας θέματα είναι προσιτό AI στην εκπαίδευση — βοηθός, όχι απλά chatbot.',
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Ο Γιάννης στο UC Santa Cruz',
        paragraphs: [
          {
            parts: [
              { text: 'Τώρα κάνω διδακτορικό στο ' },
              {
                link: {
                  href: 'https://www.soe.ucsc.edu/departments/computer-science-and-engineering/',
                  label: 'UC Santa Cruz',
                },
              },
              { text: '. Δουλεύω στον ' },
              {
                link: {
                  href: 'https://en.wikipedia.org/wiki/Oblivious_data_structure',
                  label: 'oblivious computation',
                },
              },
              { text: ' — ' },
              { link: { href: 'https://en.wikipedia.org/wiki/Oblivious_RAM', label: 'ORAMs' } },
              { text: ', ' },
              {
                link: {
                  href: 'https://en.wikipedia.org/wiki/Trusted_execution_environment',
                  label: 'trusted execution environments',
                },
              },
              {
                text: ' (π.χ. Intel SGX) και πώς κρύβονται access patterns χωρίς να θυσιάζεται η ασφάλεια. Με ενδιαφέρει η εφαρμογή τους σε ανώνυμη επικοινωνία, secure databases και AI/ML.',
              },
            ],
          },
        ],
      },
      {
        imageAlt: 'Ο Γιάννης κάνει one-arm handstand πάνω από την πόλη',
        paragraphs: [
          {
            chapter: true,
            text: 'Εκτός από όλα αυτά, προσπαθώ να χτίζω και τον εαυτό μου.',
          },
          'Η μέρα μου ξεκινά με καφέ. Όχι ως aesthetic — σαν εξάρτηση.',
          'Κάνω calisthenics εδώ και επτά χρόνια. Μου αρέσει για τον ίδιο λόγο που μου αρέσουν τα δύσκολα technical problems: η πρόοδος είναι ειλικρινής. Δουλεύεις ή όχι. Μοιράζομαι και αυτό online — γυμναστική, διατροφή, πειθαρχία — κυρίως για να ωθώ κόσμο να ανεβάσει τον πήχη και να πάρει τον εαυτό του λίγο πιο σοβαρά.',
        ],
      },
      {
        imageAlt: 'Ο Γιάννης σε αερόστατο',
        paragraphs: [
          'Τα ταξίδια έπαιξαν μεγάλο ρόλο. Έχω πάει 30+ χώρες στην Ευρώπη, σε μεγάλο μέρος χάρη στο Erasmus+ — που, όσο καταλαβαίνω, υπάρχει για να δίνει σε χαμένους στα 20 τους, σαν εμένα, την ευκαιρία να μαζεύουν φίλους, ιστορίες, κακές αποφάσεις και απόλυτες γνώμες για φαγητό.',
        ],
      },
      {
        imageAlt: 'Ο Γιάννης με husky σε χιονισμένο τοπίο',
        paragraphs: [
          'Οι γλώσσες που μιλάω ήρθαν κι από εκεί. Ελληνικά, Αγγλικά, Ισπανικά, Πορτογαλικά — η καθεμιά δεμένη με ανθρώπους, μέρη, φαγητό και ιστορίες που δεν ήθελα να ζήσω από μακριά.',
        ],
      },
    ],
    closing: {
      closer: 'Καλά, αρκετά με εμένα.',
      cta: {
        parts: [
          {
            text: 'Αν θες να μιλήσουμε — για έρευνα, startups, AI, γυμναστική, ταξίδια, ή απλά για να μου στείλεις ένα καλό coffee spot — ',
          },
          { link: { href: '#contact', label: 'στείλε μου εδώ' } },
          { text: '.' },
        ],
      },
    },
  },

  lifestyle: {
    profile: {
      tagline: 'Ζωή εκτός δουλειάς — αυτά μοιράζομαι online.',
    },
    sections: {
      reels: 'Reels',
      posts: 'Posts',
    },
    follow: 'Follow @{handle}',
    reels: {
      DSDP03rjx8b: {
        title: 'San Francisco με τον φίλο μου',
      },
      'DSsleaoEtd-': {
        title: 'Central Park με τους χιονάνθρωπους',
      },
      'DRcmrNtj-ro': {
        title: 'Μια μέρα στο Berkeley',
      },
      DQPN04rCTtI: {
        title: 'Λίγο χαμένος',
      },
      DPooyCckiW_: {
        title: 'Ζωή στην Καλιφόρνια',
      },
    },
    posts: {
      'DWwgzQXjxF-': {
        location: 'Beverly Hills, LA',
        description: 'Φοίνικες, ήλιος, main character energy',
      },
      DQHlYpWCSxc: {
        location: 'Pleasure Point, Santa Cruz',
        description: 'Surf town, πρωινό vibe',
      },
      DEIDoNsMw61: {
        location: 'Ρώμη, Ιταλία',
        description: 'Όταν είσαι στη Ρώμη…',
      },
      'C-0FgI5slQ6': {
        location: 'Ζάκυνθος',
        description: 'Γαλάζιο νερό, θεραπεία',
      },
      'Cx2er4-sAoS': {
        location: 'Λισαβόνα',
        description: 'Πλακάκια, λόφοι, καλός καφές',
      },
      CurFHAxMJxb: {
        location: 'Βίλνιους',
        description: 'Μέρα αερόστατου',
      },
      'CqDI-IcMRaA': {
        location: 'Λαπωνία',
        description: 'Huskies > ανθρώποι',
      },
      ClcNoMpMALO: {
        location: 'Βελιγράδι',
        description: 'Νύχτα, φώτα, καλό vibe',
      },
      CSuPrGDMrEY: {
        location: 'Εύβοια',
        description: 'Καλοκαίρι στο νησί',
      },
    },
  },

  contact: {
    label: 'Επικοινωνία',
    title: 'Αν έχεις κάτι ουσιαστικό να πεις, είμαι εδώ.',
    emailKinds: {
      academic: 'Ακαδημαϊκό',
      personal: 'Προσωπικό',
    },
    copiedTitle: 'Αντιγράφηκε',
    copyErrorTitle: 'Δεν έγινε αυτόματη αντιγραφή',
    copyHint: 'Διάλεξε τη διεύθυνση στην κάρτα ή δοκίμασε ξανά.',
    social: {
      linkedIn: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
    },
  },
}
