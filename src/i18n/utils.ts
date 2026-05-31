import { defaultLocale, isLocale, type Locale } from './config';

const legacyPaths = [
  '/servicios',
  '/works',
  '/lestudi',
  '/aviso-legal',
  '/politica-de-privacidad',
  '/politica-de-cookies',
];

export const getLocaleFromParams = (locale: string | undefined): Locale | null =>
  isLocale(locale) ? locale : null;

export const getLocaleFromPathname = (pathname: string): Locale | null => {
  const segment = pathname.split('/').filter(Boolean)[0];
  return isLocale(segment) ? segment : null;
};

/** Path without locale prefix, e.g. `/es/servicios` → `/servicios`. */
export const stripLocalePrefix = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
};

export const localizedPath = (path: string, locale: Locale): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return `/${locale}/`;
  return `/${locale}${normalized}`;
};

export const switchLocalePath = (pathname: string, targetLocale: Locale): string => {
  const bare = stripLocalePrefix(pathname);
  return localizedPath(bare, targetLocale);
};

export const isLegacyPath = (pathname: string): boolean =>
  legacyPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

export const legacyToLocalized = (pathname: string): string =>
  localizedPath(pathname, defaultLocale);
