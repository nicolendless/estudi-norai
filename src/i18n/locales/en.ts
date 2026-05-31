import type { Translations } from '../types';
import { avisoLegal, politicaPrivacidad, politicaCookies } from './legal/en';

export const en = {
  locale: 'en',
  seo: {
    siteName: 'Estudi Norai',
    tagline: 'Recording, creation and music learning studio Km 0',
    defaultDescription:
      'Estudi Norai is a recording studio and musical accompaniment space in the centre of Palma de Mallorca. Production, mixing, mastering, lessons and fully equipped rooms to help your project reach safe harbour.',
    pages: {
      home: {
        title: 'Estudi Norai — Recording and music production studio in Palma',
        description:
          'Estudi Norai is a recording studio and musical accompaniment space in the centre of Palma de Mallorca. Production, mixing, mastering, lessons and fully equipped rooms to help your project reach safe harbour.',
        path: '/',
      },
      servicios: {
        title: 'Services — Estudi Norai',
        description:
          'Musical accompaniment, production, composition, mixing, mastering and lessons at Estudi Norai, Palma de Mallorca. We support your project from idea to release.',
        path: '/servicios',
      },
      works: {
        title: 'Works — Estudi Norai',
        description:
          'Projects, artists and sessions recorded at Estudi Norai. Meet the creative crew and the musical work developed at our Palma studio.',
        path: '/works',
      },
      lestudi: {
        title: "L'estudi — Estudi Norai",
        description:
          "Discover Estudi Norai's recording rooms, equipment and space in Palma. Main room, Room 2 and professional instruments for your session.",
        path: '/lestudi',
      },
      avisoLegal: {
        title: 'Legal notice — Estudi Norai',
        description:
          'Legal notice and information about the owner of the Estudi Norai website, a recording studio in Palma de Mallorca.',
        path: '/aviso-legal',
        noindex: true,
      },
      privacidad: {
        title: 'Privacy policy — Estudi Norai',
        description:
          'Privacy policy and personal data protection at Estudi Norai in accordance with the GDPR.',
        path: '/politica-de-privacidad',
        noindex: true,
      },
      cookies: {
        title: 'Cookie policy — Estudi Norai',
        description:
          'Information about the use of cookies and how to manage your preferences on the Estudi Norai website.',
        path: '/politica-de-cookies',
        noindex: true,
      },
    },
  },
  nav: {
    servicios: 'SERVICES',
    lestudi: "L'ESTUDI",
    works: 'WORKS',
    ariaPrincipal: 'Main',
    ariaSections: 'Sections',
  },
  hero: {
    h1Line1: 'RECORDING, CREATION',
    h1Line2: 'AND MUSIC LEARNING STUDIO',
    h1Tagline: "Estudi 'Km 0'",
    imageAlt: 'Entrance to Estudi Norai recording studio in Palma de Mallorca',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    servicios: 'SERVICES',
    serviciosSub: 'Course',
    bio: 'BIO',
    bioSub: 'Helmsman',
    proyectos: 'PROJECTS',
    proyectosSub: 'Crew',
    estudio: 'STUDIO',
    estudioSub: 'Vessel',
    trabajemos: "LET'S WORK",
    trabajemosLine2: 'TOGETHER',
    trabajemosSub: 'Come aboard',
    mobileServicios: 'SERVICES',
    mobileBio: 'BIO',
    mobileProyectos: 'PROJECTS',
    mobileEstudio: 'STUDIO',
    mobileTrabajemos: "LET'S WORK TOGETHER",
  },
  footer: {
    copyright: '@Copyright Estudio Norai',
    avisoLegal: 'Legal notice',
    privacidad: 'Privacy policy',
    cookies: 'Cookie policy',
    configureCookies: 'Configure cookies',
    logoAlt: 'Estudi Norai logo',
  },
  common: {
    saberMas: 'Find out more',
    embarcate: 'Come aboard',
    sessions: 'Norai Sessions',
    moreInfo: 'Find out more',
  },
  home: {
    intro:
      'Estudi Norai is a Km 0 musical accompaniment space in the centre of Palma de Mallorca. This place is the mooring point for your musical project to reach safe harbour. A space where ideas take shape and find their own rhythm.',
    contactCta: 'Get in touch',
    conocemeTitle: 'GET TO KNOW ME',
    conocemeSub: 'Helmsman',
    conocemeIntro:
      'My passion for music has been with me practically since birth, as my parents met in a choir. Since I was little, I have lived surrounded by music, both passionately and through formal training.',
    conocemeCareer:
      'During my teens I started my first musical projects as an artist and performer. Although my university and professional start was in the business world, my career gradually turned towards music, via Ticketmaster, until I graduated with honours in Music Production in Barcelona, at Microfusa school.',
    conocemeStudio:
      'In 2022, I decided to move to Mallorca to open my own music studio on the island, which you now know as Estudi Norai. From this space, I have been able to support artists in many ways, on wonderful projects. I am also fortunate to stay connected to music as an artist (Norai), performer (FincaMusicBand, Fonoll…), event organiser (Rodautors) and even as a guitar and production teacher.',
    readMore: 'Read more',
    readLess: 'Read less',
    worksTitle: 'WORKS',
    worksSub: 'Crew',
    worksSaberMas: 'Find out more',
    projectAlt: 'Project',
    embarcacionTitle: "L'estudi",
    embarcacionSub: 'Vessel',
    lestudiAlt: "L'estudi",
    instrumentsTitle: 'Instruments and equipment available',
    instrumentsBrandsAlt:
      'Neumann, Apogee, Gibson, Fender, Heritage Audio and more brands available',
    srOnlyH1: 'Estudi Norai — Recording and music production studio in Palma',
  },
  contact: {
    namePlaceholder: 'Name*',
    emailPlaceholder: 'E-mail*',
    phonePlaceholder: 'Phone',
    messagePlaceholder: 'Project / Idea\nLeave me a message',
    submit: 'Send',
    submitting: 'Sending...',
    privacyCheckbox: 'I accept the data protection policy',
    marketingCheckbox: 'I agree to receive commercial updates',
    headingLine1: "LET'S WORK",
    headingLine2: 'TOGETHER',
    success: 'Message sent successfully.',
    error: 'The message could not be sent.',
    connectionError: 'Connection error. Please try again.',
    missingFields: 'Required fields are missing.',
  },
  visitanos: {
    title: 'VISIT US',
    contactCtaLine1: 'or get',
    contactCtaLine2: 'in touch',
    mapTitle: 'Estudi Norai map',
    mapPlaceholder:
      'To show the map we need your consent to load external content from Google Maps.',
    instagramAria: 'Estudi Norai on Instagram',
    youtubeAria: 'Estudi Norai YouTube channel',
  },
  spotify: {
    title: 'Spotify player',
    placeholder:
      'To listen to the playlist we need your consent to load external content from Spotify.',
  },
  instruments: {
    title: 'Instruments and equipment available',
    saberMas: 'Find out more',
    ariaLabel: 'Instrument illustrations',
    imageAlt: 'Studio instruments and equipment',
  },
  cookies: {
    bannerTitle: 'Cookies',
    bannerText:
      'We use first-party and third-party cookies to improve the website and show external content such as Spotify or Google Maps. You can accept all, reject optional ones or configure your preferences. More information in our',
    bannerPolicyLink: 'Cookie policy',
    configure: 'Configure',
    reject: 'Reject',
    acceptAll: 'Accept all',
    modalTitle: 'Cookie preferences',
    modalDescription:
      'Select which optional cookies you want to allow. Necessary cookies cannot be disabled.',
    closeModal: 'Close',
    closeModalAria: 'Close cookie preferences',
    alwaysActive: 'Always active',
    enableCategory: 'Enable cookies for',
    savePreferences: 'Save preferences',
    rejectOptional: 'Reject optional',
    categories: [
      {
        id: 'necessary',
        label: 'Necessary',
        description:
          'Essential to remember your cookie preferences and ensure basic site functionality.',
        required: true,
      },
      {
        id: 'analytics',
        label: 'Analytics',
        description:
          'They allow us to measure website use in aggregate to improve content and services.',
      },
      {
        id: 'marketing',
        label: 'External content',
        description:
          'They allow embedded third-party content such as Spotify or Google Maps, which may install their own cookies.',
      },
    ],
  },
  services: [
    {
      slug: 'acompanamiento',
      previewTitle: 'Musical accompaniment and production',
      previewImage: '/images/servicios/acompanamiento.jpg',
      previewVariant: 'image',
      detailTitle: 'Musical accompaniment',
      detailImage: '/images/servicios/acompanamiento.jpg',
      imageOverlayLines: ['PRODU', 'CTION'],
      imagePosition: 'left',
      panelTheme: 'dark',
      body: [
        {
          text: 'We help artists turn their first musical expression into a consolidated, published project. We support you through: ',
        },
        {
          text: 'composition, arrangement, recording, editing, mixing, mastering and even managing the registration and release of your works.',
          bold: true,
        },
      ],
    },
    {
      slug: 'mezcla-mastering',
      previewTitle: 'Mixing and mastering',
      previewImage: '/images/servicios/mezcla-mastering.jpg',
      previewVariant: 'image',
      detailTitle: 'Mixing and',
      detailSubtitle: 'MASTERING',
      detailImage: '/images/servicios/mezcla-mastering.jpg',
      imagePosition: 'right',
      panelTheme: 'light',
      body: [
        {
          text: 'Within the processes that make up the overall musical production of a project, we can support you at any step along the way towards the result you want to achieve. Here we have equipment, training, ',
        },
        {
          text: 'experience in the most technical side',
          bold: true,
        },
        {
          text: ' of the production process, such as ',
        },
        {
          text: 'mixing and mastering.',
          bold: true,
        },
      ],
    },
    {
      slug: 'norai-sessions',
      previewTitle: 'Live music video\nrecording',
      previewImage: '/images/logo_simple.svg',
      previewVariant: 'sessions',
      detailTitle: 'Norai Sessions',
      detailSubtitle: 'Live recording',
      detailImage: '/images/servicios/norai-sessions.jpg',
      imagePosition: 'left',
      panelTheme: 'outlined',
      body: [
        {
          text: 'We know how key the audiovisual side is for getting your musical projects out there. At the studio, we are ready for you to ',
        },
        {
          text: 'record your live versions here,',
          bold: true,
        },
        {
          text: ' in the best environment, with the best technical team, to guarantee the best sound quality.',
        },
      ],
    },
    {
      slug: 'composicion',
      previewTitle: 'Custom song composition',
      previewImage: '/images/composicion.jpg',
      previewVariant: 'image',
      detailTitle: 'Song composition',
      detailSubtitle: 'CUSTOM',
      detailImage: '/images/servicios/composicion.jpg',
      imagePosition: 'right',
      panelTheme: 'dark',
      body: [
        {
          text: 'If you are tired of looking for original gifts for your partner, family member or friend, we help you surprise them. Several people have already trusted us to ',
        },
        {
          text: 'compose the most special song for that very special person.',
          bold: true,
        },
        {
          text: ' We help with the lyrics and musical composition. Plus, this song will have the production quality of a professional studio.',
        },
      ],
    },
    {
      slug: 'clases',
      previewTitle: 'Music training\nGuitar, production, combo',
      previewImage: '/images/formacion.jpg',
      previewVariant: 'image',
      detailTitle: 'Guitar lessons',
      detailSubtitle: 'and/or music production',
      detailImage: '/images/servicios/clases.jpg',
      imagePosition: 'left',
      panelTheme: 'cream',
      body: [
        {
          text: 'Do not wait any longer — if you want to dive into the musical world or deepen your knowledge and skills, enjoying an environment where music is in the air. Here',
        },
        {
          text: ' we offer lessons',
          bold: true,
        },
        {
          text: ' based on guitar or music production, incorporating and enjoying all the studio’s musical resources and know-how. If you were waiting for a sign, this is it!',
        },
      ],
    },
  ],
  servicios: {
    srOnlyH1: 'Recording studio services, music production and lessons in Palma de Mallorca',
  },
  works: {
    tripulacionTitle: 'Crew',
    viewMember: 'View',
    discoverSessions: 'Discover Norai Sessions',
    estudioTitle: 'Studio',
    estudioMoments: 'moments',
    sessionsLast: 'last',
    sessionsTitle: 'Norai Sessions',
    sessionsQuote:
      "‘’A short text that describes and evaluates a work (book, film, music, etc.) or event, combining factual information with a reasoned critical opinion, in order to make it known and guide the public, whether to recommend it or warn about it.’’",
    crew: [
      {
        name: 'Aleix',
        image: '/images/works/aleix.jpg',
        bio: 'With lyrics in a deeply poetic Mallorcan and an alternative rock style worthy of Sheffield, our island’s “Aleix” Turner dropped by the studio to leave four delights that he has kept to himself for now. We hope he will share some of his music with us soon.',
      },
      {
        name: 'Borja Palacios',
        image: '/images/works/borja.jpg',
        bio: 'The “pirate” singer-songwriter, based in Mallorca with a long track record at open mics on the island and in Barcelona, came to record the live video version of his song “A veces”. Recorded with Marina Rueda, it will always be the 1st Norai Session, premiered on our YouTube channel.',
      },
      {
        name: 'CADMUS',
        image: '/images/works/cadmus.jpg',
        bio: 'This indie-rock project was born from two friends in Mallorca, with similar influences and great musical taste. The EP “The Rockets”, which we mixed from the studio, led them to take part in the Pop-Rock Palma contest, where they won the Mobo Fest prize, allowing them to perform at the prestigious festival.',
      },
      {
        name: 'Can Friends',
        image: '/images/works/can-friends.jpg',
        bio: 'A Madrid-based band blending folk styles, Latin American rhythms and singer-songwriter music, creating a sensory, social and varied musical experience. They have travelled from the mainland several times to record at the studio, resulting in three fantastic singles.',
      },
      {
        name: 'DeMàr',
        image: '/images/works/demar.jpg',
        bio: 'A wandering singer-songwriter of Italian origin, based in Mallorca and in love with Spanish music, DeMàr came to record his 1st EP as a live version at Estudi Norai. His songs tell his stories and express, poetically and intensely, how he has lived and felt them.',
      },
      {
        name: 'Fernando Gallostra',
        image: '/images/works/fernando.jpg',
        bio: 'A Mallorcan classical guitarist with a long history with the instrument. Through six strings he conveys all kinds of emotions, influenced by the island and the people around him. He came to the studio to record his beautiful song “Empty Rooms” and already has his return to Estudi Norai scheduled.',
      },
      {
        name: 'J.Suau',
        image: '/images/works/jsuau.jpg',
        bio: 'One of the projects where we were commissioned a custom song. It was a gift Jaume wanted to give his sister after she became pregnant. Jaume gave us details about her and her family and with that we created lyrics and a song from scratch, which he played as a surprise for his family.',
      },
      {
        name: 'Mercé Pons',
        image: '/images/works/merce-pons.jpg',
        bio: 'Composer Mercé asked us to collaborate on the composition and subsequent performance of the original soundtrack for the film “Cien Libros Juntos”, directed by Margà Melià. This soundtrack has brought us many joys, such as the Goya nomination for best music and best original song.',
      },
    ],
    srOnlyH1: 'Works, artists and musical projects at Estudi Norai',
  },
  lestudi: {
    embarcacionTitle: 'Vessel',
    mainRoom: 'Main room',
    room2: 'Room 2',
    mainRoomLead:
      'Acoustically treated room, analysed and fitted with custom-built materials by acoustic professionals.',
    mainRoomDetail:
      'It has air conditioning and heating. It is also the control room and the space where training takes place.',
    room2Lead:
      'A room where artists rehearse for their concerts and where ideas are born with instruments such as drums, piano, organ, amplifiers… etc.',
    room2Detail: 'Estudio Norai also has a fully equipped bathroom.',
    reserveRoom: 'Book this room',
    equipoTitle: 'Equipment',
    equipoAlt: 'Equipment and instrument brands available',
    srOnlyH1: "L'estudi: recording rooms and professional equipment in Palma",
    specs: {
      capacity: 'Capacity',
      surface: 'Floor area',
      height: 'Height',
      controlRoom: 'Control room',
      usage: 'Use',
      mainCapacity: '6 musicians',
      mainSurface: '32 m²',
      mainHeight: '3.4 m',
      mainControl: 'SSL Big Six',
      room2Capacity: '4 musicians',
      room2Surface: '18 m²',
      room2Height: '3.2 m',
      room2Usage: 'Rehearsals and demos',
    },
  },
  legal: {
    avisoLegal,
    politicaPrivacidad,
    politicaCookies,
    logoAlt: 'Estudio Norai',
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    description:
      'We could not find the page you are looking for. You can return to the home page or explore our services and recording rooms.',
    home: 'Go to home',
    services: 'View services',
    lestudi: "Discover l'estudi",
  },
  api: {
    missingFields: 'Required fields are missing.',
    sendError: 'The message could not be sent.',
    sendSuccess: 'Message sent successfully.',
  },
} satisfies Translations;
