import {
  defaultLocale,
  getTranslations,
  htmlLang,
  localizedPath,
  locales,
  ogLocale,
  switchLocalePath,
  type Locale,
} from '../i18n';
import { socialLinks } from './social';

export const siteUrl = 'https://www.estudinorai.com';

export type PageSeoKey =
  | 'home'
  | 'servicios'
  | 'works'
  | 'lestudi'
  | 'avisoLegal'
  | 'privacidad'
  | 'cookies';

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

export const getSiteConfig = (locale: Locale) => {
  const t = getTranslations(locale);
  return {
    name: t.seo.siteName,
    tagline: t.seo.tagline,
    defaultDescription: t.seo.defaultDescription,
    locale: ogLocale[locale],
    language: htmlLang[locale],
    email: 'estudionorai@gmail.com',
    phone: '+34666722161',
    defaultOgImage: '/images/door_home_1.jpg',
    twitterHandle: '@estudi.norai',
  };
};

export const getPageSeo = (locale: Locale, seoKey: PageSeoKey): PageSeo => {
  const page = getTranslations(locale).seo.pages[seoKey];
  return {
    ...page,
    path: localizedPath(page.path, locale),
  };
};

export const absoluteUrl = (site: string, path: string) => new URL(path, site).href;

export const absoluteAssetUrl = (site: string, assetPath: string) =>
  new URL(assetPath.startsWith('/') ? assetPath : `/${assetPath}`, site).href;

export const getStructuredData = (site: string, locale: Locale) => {
  const config = getSiteConfig(locale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: `${site}/${locale}/`,
        name: config.name,
        description: config.defaultDescription,
        inLanguage: config.language,
        publisher: { '@id': `${site}/#organization` },
      },
      {
        '@type': ['Organization', 'LocalBusiness', 'MusicStore'],
        '@id': `${site}/#organization`,
        name: config.name,
        legalName: 'Estudio Norai',
        url: site,
        image: absoluteAssetUrl(site, config.defaultOgImage),
        logo: absoluteAssetUrl(site, '/images/logo.svg'),
        description: config.defaultDescription,
        email: config.email,
        telephone: config.phone,
        sameAs: [socialLinks.instagram, socialLinks.youtube],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Carrer del Vi, 3A',
          addressLocality: 'Palma',
          addressRegion: 'Illes Balears',
          postalCode: '07003',
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 39.5696,
          longitude: 2.6502,
        },
        areaServed: {
          '@type': 'City',
          name: 'Palma de Mallorca',
        },
        priceRange: '€€',
      },
    ],
  };
};

export const getHreflangUrls = (site: string, pathname: string) =>
  locales.map((locale) => ({
    locale,
    href: absoluteUrl(site, switchLocalePath(pathname, locale)),
  }));

export const getDefaultHreflang = (site: string, pathname: string) =>
  absoluteUrl(site, switchLocalePath(pathname, defaultLocale));
