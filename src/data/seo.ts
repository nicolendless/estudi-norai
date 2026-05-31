import { socialLinks } from './social';

export const siteConfig = {
  name: 'Estudi Norai',
  legalName: 'Estudio Norai',
  tagline: 'Estudio de grabación, creación y aprendizaje musical Km 0',
  defaultDescription:
    'Estudi Norai es un estudio de grabación y acompañamiento musical en el centro de Palma de Mallorca. Producción, mezcla, mastering, clases y salas equipadas para que tu proyecto llegue a buen puerto.',
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

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

export const pagesSeo: Record<string, PageSeo> = {
  home: {
    title: 'Estudi Norai — Estudio de grabación y producción musical en Palma',
    description: siteConfig.defaultDescription,
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
    description: 'Aviso legal e información del titular del sitio web de Estudi Norai, estudio de grabación en Palma de Mallorca.',
    path: '/aviso-legal',
    noindex: true,
  },
  privacidad: {
    title: 'Política de privacidad — Estudi Norai',
    description: 'Política de privacidad y protección de datos personales de Estudi Norai conforme al RGPD.',
    path: '/politica-de-privacidad',
    noindex: true,
  },
  cookies: {
    title: 'Política de cookies — Estudi Norai',
    description: 'Información sobre el uso de cookies y cómo gestionar tus preferencias en el sitio web de Estudi Norai.',
    path: '/politica-de-cookies',
    noindex: true,
  },
};

export const absoluteUrl = (site: string, path: string) => new URL(path, site).href;

export const absoluteAssetUrl = (site: string, assetPath: string) =>
  new URL(assetPath.startsWith('/') ? assetPath : `/${assetPath}`, site).href;

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
      publisher: { '@id': `${site}/#organization` },
    },
    {
      '@type': ['Organization', 'LocalBusiness', 'MusicStore'],
      '@id': `${site}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: site,
      image: absoluteAssetUrl(site, siteConfig.defaultOgImage),
      logo: absoluteAssetUrl(site, '/images/logo.svg'),
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
