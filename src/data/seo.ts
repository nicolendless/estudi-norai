import { socialLinks } from './social';

export const siteConfig = {
  name: 'Estudi Norai',
  legalName: 'Estudio Norai',
  tagline: 'Estudio de grabación, creación y aprendizaje musical Km 0',
  /** Meta description (~155 caracteres) — home y schema.org */
  defaultDescription:
    'Estudio de grabación y acompañamiento musical Km 0 en Palma de Mallorca. Producción, mezcla, mastering, clases y salas equipadas en Estudi Norai.',
  locale: 'es_ES',
  language: 'es',
  email: 'estudionorai@gmail.com',
  phone: '+34666722161',
  address: {
    streetAddress: 'Carrer del Vi, 3A',
    addressLocality: 'Palma',
    addressRegion: 'Illes Balears',
    postalCode: '07003',
    addressCountry: 'ES',
  },
  geo: {
    latitude: 39.5696,
    longitude: 2.6502,
  },
  defaultOgImage: '/images/door_home_1.jpg',
  twitterHandle: '@estudi.norai',
} as const;

/** Párrafo visible en la home — alineado con la meta description para Google */
export const homeIntro = {
  lead: 'Estudi Norai es un estudio de grabación y acompañamiento musical ',
  highlight: 'Km 0',
  rest: ' en el centro de Palma de Mallorca. Como el norai amarra las embarcaciones en el puerto, aquí tu proyecto musical encuentra su punto de amarre para llegar a buen puerto.',
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

export const pagesSeo: Record<string, PageSeo> = {
  home: {
    title: 'Estudi Norai | Estudio de grabación y producción musical en Palma',
    description: siteConfig.defaultDescription,
    path: '/',
  },
  servicios: {
    title: 'Servicios | Estudi Norai',
    description:
      'Acompañamiento, producción, composición, mezcla, mastering y clases en Estudi Norai, Palma. Acompañamos tu proyecto musical de la idea al lanzamiento.',
    path: '/servicios',
  },
  works: {
    title: 'Works | Estudi Norai',
    description:
      'Artistas y proyectos grabados en Estudi Norai, Palma. Tripulación creativa, Norai Sessions y momentos del estudio de grabación.',
    path: '/works',
  },
  lestudi: {
    title: "L'estudi | Estudi Norai",
    description:
      'Salas de grabación y equipamiento profesional en el centro de Palma. Sala principal, Sala 2 e instrumentos en Estudi Norai.',
    path: '/lestudi',
  },
  avisoLegal: {
    title: 'Aviso legal | Estudi Norai',
    description:
      'Aviso legal e información del titular del sitio web de Estudi Norai, estudio de grabación en Palma de Mallorca.',
    path: '/aviso-legal',
    noindex: true,
  },
  privacidad: {
    title: 'Política de privacidad | Estudi Norai',
    description:
      'Política de privacidad y protección de datos personales de Estudi Norai conforme al RGPD.',
    path: '/politica-de-privacidad',
    noindex: true,
  },
  cookies: {
    title: 'Política de cookies | Estudi Norai',
    description:
      'Información sobre el uso de cookies y cómo gestionar tus preferencias en el sitio web de Estudi Norai.',
    path: '/politica-de-cookies',
    noindex: true,
  },
};

export const absoluteUrl = (site: string, path: string) => new URL(path, site).href;

export const absoluteAssetUrl = (site: string, assetPath: string) =>
  new URL(assetPath.startsWith('/') ? assetPath : `/${assetPath}`, site).href;

const organizationRef = (site: string) => ({ '@id': `${site}/#organization` });
const websiteRef = (site: string) => ({ '@id': `${site}/#website` });

export const getStructuredData = (site: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      url: site,
      name: siteConfig.name,
      description: siteConfig.defaultDescription,
      inLanguage: siteConfig.language,
      publisher: organizationRef(site),
    },
    {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: site,
      name: pagesSeo.home.title,
      description: siteConfig.defaultDescription,
      isPartOf: websiteRef(site),
      about: organizationRef(site),
      inLanguage: siteConfig.language,
    },
    {
      '@type': ['LocalBusiness', 'RecordingStudio'],
      '@id': `${site}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: site,
      image: absoluteAssetUrl(site, siteConfig.defaultOgImage),
      logo: {
        '@type': 'ImageObject',
        url: absoluteAssetUrl(site, '/images/logo.svg'),
        name: siteConfig.name,
      },
      description: siteConfig.defaultDescription,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: [socialLinks.instagram, socialLinks.youtube],
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      areaServed: {
        '@type': 'City',
        name: 'Palma de Mallorca',
      },
      priceRange: '€€',
    },
  ],
});

export const getPageStructuredData = (site: string, seo: PageSeo) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl(site, seo.path)}#webpage`,
      url: absoluteUrl(site, seo.path),
      name: seo.title,
      description: seo.description,
      isPartOf: websiteRef(site),
      about: organizationRef(site),
      inLanguage: siteConfig.language,
    },
    {
      '@type': ['LocalBusiness', 'RecordingStudio'],
      '@id': `${site}/#organization`,
      name: siteConfig.name,
      url: site,
    },
  ],
});
