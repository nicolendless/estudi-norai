import type { Translations } from '../types';
import { avisoLegal, politicaPrivacidad, politicaCookies } from './legal/es';

export const es = {
  locale: 'es',
  seo: {
    siteName: 'Estudi Norai',
    tagline: 'Estudio de grabación, creación y aprendizaje musical Km 0',
    defaultDescription:
      'Estudi Norai es un estudio de grabación y acompañamiento musical en el centro de Palma de Mallorca. Producción, mezcla, mastering, clases y salas equipadas para que tu proyecto llegue a buen puerto.',
    pages: {
      home: {
        title: 'Estudi Norai — Estudio de grabación y producción musical en Palma',
        description:
          'Estudi Norai es un estudio de grabación y acompañamiento musical en el centro de Palma de Mallorca. Producción, mezcla, mastering, clases y salas equipadas para que tu proyecto llegue a buen puerto.',
        path: '/',
      },
      servicios: {
        title: 'Servicios — Estudi Norai',
        description:
          'Acompañamiento musical, producción, composición, mezcla, mastering y clases en Estudi Norai, Palma de Mallorca. Acompañamos tu proyecto de la idea al lanzamiento.',
        path: '/servicios',
      },
      works: {
        title: 'Works — Estudi Norai',
        description:
          'Proyectos, artistas y sesiones grabadas en Estudi Norai. Conoce la tripulación creativa y el trabajo musical desarrollado en nuestro estudio de Palma.',
        path: '/works',
      },
      lestudi: {
        title: "L'estudi — Estudi Norai",
        description:
          "Descubre las salas de grabación, el equipamiento y el espacio de Estudi Norai en Palma. Sala principal, Sala 2 e instrumentos profesionales para tu sesión.",
        path: '/lestudi',
      },
      avisoLegal: {
        title: 'Aviso legal — Estudi Norai',
        description:
          'Aviso legal e información del titular del sitio web de Estudi Norai, estudio de grabación en Palma de Mallorca.',
        path: '/aviso-legal',
        noindex: true,
      },
      privacidad: {
        title: 'Política de privacidad — Estudi Norai',
        description:
          'Política de privacidad y protección de datos personales de Estudi Norai conforme al RGPD.',
        path: '/politica-de-privacidad',
        noindex: true,
      },
      cookies: {
        title: 'Política de cookies — Estudi Norai',
        description:
          'Información sobre el uso de cookies y cómo gestionar tus preferencias en el sitio web de Estudi Norai.',
        path: '/politica-de-cookies',
        noindex: true,
      },
    },
  },
  nav: {
    servicios: 'SERVICIOS',
    lestudi: "L'ESTUDI",
    works: 'WORKS',
    ariaPrincipal: 'Principal',
    ariaSections: 'Sections',
  },
  hero: {
    h1Line1: 'ESTUDIO DE GRABACIÓN, CREACIÓN',
    h1Line2: 'Y APRENDIZAJE MUSICAL',
    h1Tagline: "Estudi 'Km 0'",
    imageAlt: 'Entrada del estudio de grabación Estudi Norai en Palma de Mallorca',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    servicios: 'SERVICIOS',
    serviciosSub: 'Rumbo',
    bio: 'BIO',
    bioSub: 'Timonel',
    proyectos: 'PROYECTOS',
    proyectosSub: 'Tripulación',
    estudio: 'ESTUDIO',
    estudioSub: 'Embarcación',
    trabajemos: 'TRABAJEMOS',
    trabajemosLine2: 'JUNTOS',
    trabajemosSub: 'Sube a bordo',
    mobileServicios: 'SERVICIOS',
    mobileBio: 'BIO',
    mobileProyectos: 'PROYECTOS',
    mobileEstudio: 'ESTUDIO',
    mobileTrabajemos: 'TRABAJEMOS JUNTOS',
  },
  footer: {
    copyright: '@Copyright Estudio Norai',
    avisoLegal: 'Aviso legal',
    privacidad: 'Política de privacidad',
    cookies: 'Política de cookies',
    configureCookies: 'Configurar cookies',
    logoAlt: 'Estudi Norai logo',
  },
  common: {
    saberMas: 'Saber más',
    embarcate: 'Embárcate',
    sessions: 'Norai Sessions',
    moreInfo: 'Saber más',
  },
  home: {
    intro:
      'Estudi Norai es un espacio de acompañamiento musical Km 0 en el centro de Palma de Mallorca. Este lugar es el punto de amarre, para que tu proyecto musical llegue a buen puerto. Un sitio donde las ideas toman forma y encuentran su propio ritmo.',
    contactCta: 'Contacta ya',
    conocemeTitle: 'CONÓCEME',
    conocemeSub: 'Timonel',
    conocemeIntro:
      'Mi pasión por la música viene prácticamente de nacimiento, ya que mis padres se conocieron en una coral. Desde pequeño, he vivido rodeado de música, tanto a nivel pasional como formativo.',
    conocemeCareer:
      'Durante la adolescencia inicié mis primeros proyectos musicales, como artista e intérprete. Pese a que mi arranque universitario y laboral fue en el mundo empresarial, poco a poco mi carrera fue girando hacia la música, pasando por Ticketmaster, hasta llegar a graduarme con honores, en Producción Musical en Barcelona, en la escuela Microfusa.',
    conocemeStudio:
      'En 2022, decidí mudarme a Mallorca para abrir mi propio estudio de música en la isla, lo que ahora ya conocéis como Estudi Norai. Desde este espacio, he podido acompañar a artistas de muchas maneras, en proyectos maravillosos. Además, tengo la suerte de seguir ligado a la música también como artista (Norai), intérprete (FincaMusicBand, Fonoll…), organizador de eventos (Rodautors) e incluso como profesor de guitarra y producción.',
    readMore: 'Leer más',
    readLess: 'Leer menos',
    worksTitle: 'WORKS',
    worksSub: 'Tripulación',
    worksSaberMas: 'Saber más',
    projectAlt: 'Proyecto',
    embarcacionTitle: "L'estudi",
    embarcacionSub: 'Embarcación',
    lestudiAlt: "L'estudi",
    instrumentsTitle: 'Instrumentos y material disponible',
    instrumentsBrandsAlt:
      'Neumann, Apogee, Gibson, Fender, Heritage Audio y más marcas disponibles',
    srOnlyH1: 'Estudi Norai — Estudio de grabación y producción musical en Palma',
  },
  contact: {
    namePlaceholder: 'Nombre*',
    emailPlaceholder: 'E-mail*',
    phonePlaceholder: 'Teléfono',
    messagePlaceholder: 'Proyecto / Idea\nDéjame un mensaje',
    submit: 'Enviar',
    submitting: 'Enviando...',
    privacyCheckbox: 'Acepto la política de protección de datos',
    marketingCheckbox: 'Acepto recibir novedades comerciales',
    headingLine1: 'TRABAJEMOS',
    headingLine2: 'JUNTOS',
    success: 'Mensaje enviado correctamente.',
    error: 'No se ha podido enviar el mensaje.',
    connectionError: 'Error de conexión. Vuelve a intentarlo.',
    missingFields: 'Faltan campos obligatorios.',
  },
  visitanos: {
    title: 'VISÍTANOS',
    contactCtaLine1: 'o ponte',
    contactCtaLine2: 'en contacto',
    mapTitle: 'Mapa Estudi Norai',
    mapPlaceholder:
      'Para mostrar el mapa necesitamos tu consentimiento para cargar contenido externo de Google Maps.',
    instagramAria: 'Instagram de Estudi Norai',
    youtubeAria: 'Canal de YouTube de Estudi Norai',
  },
  spotify: {
    title: 'Reproductor de Spotify',
    placeholder:
      'Para escuchar la playlist necesitamos tu consentimiento para cargar contenido externo de Spotify.',
  },
  instruments: {
    title: 'Instrumentos y material disponible',
    saberMas: 'Saber más',
    ariaLabel: 'Ilustraciones de instrumentos',
    imageAlt: 'Instrumentos y material del estudio',
  },
  cookies: {
    bannerTitle: 'Cookies',
    bannerText:
      'Utilizamos cookies propias y de terceros para mejorar la web y mostrar contenido externo como Spotify o Google Maps. Puedes aceptar todas, rechazar las opcionales o configurar tus preferencias. Más información en nuestra',
    bannerPolicyLink: 'Política de cookies',
    configure: 'Configurar',
    reject: 'Rechazar',
    acceptAll: 'Aceptar todas',
    modalTitle: 'Preferencias de cookies',
    modalDescription:
      'Selecciona qué cookies opcionales quieres permitir. Las cookies necesarias no se pueden desactivar.',
    closeModal: 'Cerrar',
    closeModalAria: 'Cerrar preferencias de cookies',
    alwaysActive: 'Siempre activas',
    enableCategory: 'Activar cookies de',
    savePreferences: 'Guardar preferencias',
    rejectOptional: 'Rechazar opcionales',
    categories: [
      {
        id: 'necessary',
        label: 'Necesarias',
        description:
          'Imprescindibles para recordar tus preferencias de cookies y garantizar el funcionamiento básico del sitio.',
        required: true,
      },
      {
        id: 'analytics',
        label: 'Analíticas',
        description:
          'Nos permiten medir el uso de la web de forma agregada para mejorar contenidos y servicios.',
      },
      {
        id: 'marketing',
        label: 'Contenido externo',
        description:
          'Permiten cargar contenidos incrustados de terceros, como Spotify o Google Maps, que pueden instalar sus propias cookies.',
      },
    ],
  },
  services: [
    {
      slug: 'acompanamiento',
      previewTitle: 'Acompañamiento y Producción musical',
      previewImage: '/images/servicios/acompanamiento.jpg',
      previewVariant: 'image',
      detailTitle: 'Acompañamiento musical',
      detailImage: '/images/servicios/acompanamiento.jpg',
      imageOverlayLines: ['PRODU', 'CCIÓN'],
      imagePosition: 'left',
      panelTheme: 'dark',
      body: [
        {
          text: 'Os ayudamos a los artistas a que vuestra primera idea de expresión musical, se convierta en un proyecto consolidado y publicado. Os acompañamos en los procesos de: ',
        },
        {
          text: 'composición, arreglo, grabación, edición, mezcla, mastering e incluso en la gestión de registrar y publicar vuestras obras.',
          bold: true,
        },
      ],
    },
    {
      slug: 'mezcla-mastering',
      previewTitle: 'Mezcla y mastering',
      previewImage: '/images/servicios/mezcla-mastering.jpg',
      previewVariant: 'image',
      detailTitle: 'Mezcla y',
      detailSubtitle: 'MASTERING',
      detailImage: '/images/servicios/mezcla-mastering.jpg',
      imagePosition: 'right',
      panelTheme: 'light',
      body: [
        {
          text: 'Dentro de los procesos que forman parte del global de la producción musical de un proyecto, os podemos dar apoyo en cualquier pasito del camino, hacia el resultado al que se quiere llegar. Aquí tenemos equipo, formación, ',
        },
        {
          text: 'experiencia en la parte más técnica',
          bold: true,
        },
        {
          text: ' del proceso de producción, como son la parte de ',
        },
        {
          text: 'mezcla y mastering.',
          bold: true,
        },
      ],
    },
    {
      slug: 'norai-sessions',
      previewTitle: 'Grabación de videoclip\nen directo',
      previewImage: '/images/logo_simple.svg',
      previewVariant: 'sessions',
      detailTitle: 'Norai Sessions',
      detailSubtitle: 'Grabación de directos',
      detailImage: '/images/servicios/norai-sessions.jpg',
      imagePosition: 'left',
      panelTheme: 'outlined',
      body: [
        {
          text: 'Ya sabemos lo clave que es la parte audiovisual, para dar a conocer vuestros proyectos musicales. En el estudio, estamos preparados para que podáis ',
        },
        {
          text: 'grabar aquí vuestras versiones en vivo,',
          bold: true,
        },
        {
          text: ' en el mejor entorno, con el mejor equipo técnico, para garantizar la mejor calidad en el sonido.',
        },
      ],
    },
    {
      slug: 'composicion',
      previewTitle: 'Composición de canciones personalizadas',
      previewImage: '/images/composicion.jpg',
      previewVariant: 'image',
      detailTitle: 'Composición de canciones',
      detailSubtitle: 'PERSONALIZADAS',
      detailImage: '/images/servicios/composicion.jpg',
      imagePosition: 'right',
      panelTheme: 'dark',
      body: [
        {
          text: 'Si ya estás cansado de buscar regalos originales para tu pareja, familiar o amigo/a, aquí te ayudamos a que les sorprendas. Ya son varios los que han confiado en nosotros para ',
        },
        {
          text: 'componer la canción más especial, para esa persona tan especial.',
          bold: true,
        },
        {
          text: ' Os ayudamos en la letra y en la composición musical. Además, esta canción tendrá la calidad en el proceso de producción, propia de un estudio profesional.',
        },
      ],
    },
    {
      slug: 'clases',
      previewTitle: 'Formación musical\nGuitarra, producción, combo',
      previewImage: '/images/formacion.jpg',
      previewVariant: 'image',
      detailTitle: 'Clases de guitarra',
      detailSubtitle: 'y/o producción musical',
      detailImage: '/images/servicios/clases.jpg',
      imagePosition: 'left',
      panelTheme: 'cream',
      body: [
        {
          text: 'No te lo pienses más, si quieres introducirte de lleno en el mundo musical o profundizar tus conocimientos y habilidades, disfrutando en un entorno en el que se respira música. Aquí',
        },
        {
          text: ' ofrecemos clases',
          bold: true,
        },
        {
          text: ' en las que basándonos, en la guitarra o bien en la producción musical, incorporamos y disfrutamos de todo el material y conocimientos musicales del estudio. Si estabas esperando una señal, ¡es esta!',
        },
      ],
    },
  ],
  servicios: {
    srOnlyH1:
      'Servicios de estudio de grabación, producción musical y clases en Palma de Mallorca',
  },
  works: {
    tripulacionTitle: 'Tripulación',
    viewMember: 'Ver',
    discoverSessions: 'Descúbre Norai Sessions',
    estudioTitle: 'Estudio',
    estudioMoments: 'moments',
    sessionsLast: 'last',
    sessionsTitle: 'Norai Sessions',
    sessionsQuote:
      '‘’texto breve que describe y evalúa una obra (libro, película, música, etc.) o evento, combinando información expositiva con una opinión crítica y argumentada, con el fin de darla a conocer y orientar al público, ya sea para recomendarla o advertir sobre ella.’’',
    crew: [
      {
        name: 'Aleix',
        image: '/images/works/aleix.jpg',
        bio: 'Con unas letras en un mallorquín del todo poético y un estilo de rock alternativo propio de Sheffield, nuestro “Aleix” Turner de la isla, se pasó por el estudio a dejar 4 delicias, que de momento se ha reservado para él. Esperamos que nos regale algo de su música pronto.',
      },
      {
        name: 'Borja Palacios',
        image: '/images/works/borja.jpg',
        bio: 'El cantautor “pirata”, residente en Mallorca y con una gran trayectoria en los micros abiertos tanto en la isla como en Barcelona, vino a grabar la versión en directo, en vídeo de su canción “A veces”. Grabado junto a Marina Rueda, siempre será la 1a Norai Session, estrenada en nuestro canal de Youtube.',
      },
      {
        name: 'CADMUS',
        image: '/images/works/cadmus.jpg',
        bio: 'Este proyecto de indie-rock, nace de dos amigos de Mallorca, con influencias parecidas y un gran gusto musical. El EP “The Rockets”, el cual mezclamos desde el estudio, les llevó a participar en el concurso Pop-Rock Palma, donde se llevaron el premio Mobo Fest, que les permitió actuar en el prestigioso festival.',
      },
      {
        name: 'Can Friends',
        image: '/images/works/can-friends.jpg',
        bio: 'Banda residente en Madrid, que fusiona estilos folk, ritmos latinoamericanos y música de cantautor, creando una experiencia musical sensorial, social y variada. Han viajado varias veces desde la península para venir a grabar al estudio, dando como resultado 3 fantásticos singles.',
      },
      {
        name: 'DeMàr',
        image: '/images/works/demar.jpg',
        bio: 'Cantautor trotamundos, de origen italiano, residente en Mallorca y enamorado de la música española, DeMàr, vino a grabar su 1er EP en una versión en directo en Estudi Norai. Sus canciones hablan de sus historias y expresan de manera poética e intensa, como él las ha vivido y sentido.',
      },
      {
        name: 'Fernando Gallostra',
        image: '/images/works/fernando.jpg',
        bio: 'Guitarrista clásico mallorquín, con una larga trayectoria con el instrumento. A través de las 6 cuerdas, nos transmite todo tipo de emociones, influidas por la isla y las personas que le rodean. Vino al estudio a grabar su preciosa canción “Empty Rooms” y ya tiene programada su vuelta al Estudi Norai.',
      },
      {
        name: 'J.Suau',
        image: '/images/works/jsuau.jpg',
        bio: 'Uno de los proyectos en el que nos encomendaron la composición de una canción personalizada. Fue un regalo que Jaume le quiso hacer a su hermana, después de lograr quedarse embarazada. Jaume nos proporcionó detalles sobre ella y su familia y con ello, creamos una letra y una canción desde cero, que él reprodujo como sorpresa a su familia.',
      },
      {
        name: 'Mercé Pons',
        image: '/images/works/merce-pons.jpg',
        bio: 'La compositora Mercé nos pidió colaboración en la composición y en la posterior interpretación, de la Banda Sonora Original de la película “Cien Libros Juntos”, dirigida por Margà Melià. Esta BSO nos ha dado muchas alegrías, como por ejemplo la nominación al Goya a mejor música y mejor canción original.',
      },
    ],
    srOnlyH1: 'Works, artistas y proyectos musicales en Estudi Norai',
  },
  lestudi: {
    embarcacionTitle: 'Embarcación',
    mainRoom: 'Sala principal',
    room2: 'Sala 2',
    mainRoomLead:
      'Sala tratada acústicamente, analizada y con material creado a medida, por profesionales de la acústica.',
    mainRoomDetail:
      'Cuenta con AC y calefacción. También es la habitación control room y el espacio donde se realizan las formaciones.',
    room2Lead:
      'Sala en donde los artistas vienen a ensayar para sus conciertos y en donde nacen ideas con instrumentos como batería, piano, órgano, amplificadores…etc',
    room2Detail: 'Estudio Norai también cuenta con un baño equipado.',
    reserveRoom: 'Reserva esta sala',
    equipoTitle: 'Equipo',
    equipoAlt: 'Marcas de equipo e instrumentos disponibles',
    srOnlyH1: "L'estudi: salas de grabación y equipamiento profesional en Palma",
    specs: {
      capacity: 'Aforo',
      surface: 'Superficie',
      height: 'Altura',
      controlRoom: 'Control room',
      usage: 'Uso',
      mainCapacity: '6 músicos',
      mainSurface: '32 m²',
      mainHeight: '3,4 m',
      mainControl: 'SSL Big Six',
      room2Capacity: '4 músicos',
      room2Surface: '18 m²',
      room2Height: '3,2 m',
      room2Usage: 'Ensayos y demos',
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
    title: 'Página no encontrada',
    description:
      'No hemos encontrado la página que buscas. Puedes volver al inicio o explorar nuestros servicios y salas de grabación.',
    home: 'Ir al inicio',
    services: 'Ver servicios',
    lestudi: "Conocer l'estudi",
  },
  api: {
    missingFields: 'Faltan campos obligatorios.',
    sendError: 'No se ha podido enviar el mensaje.',
    sendSuccess: 'Mensaje enviado correctamente.',
  },
} satisfies Translations;
