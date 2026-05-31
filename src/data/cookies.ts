export const COOKIE_CONSENT_KEY = 'norai-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;

export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export type CookieConsentState = {
  version: typeof COOKIE_CONSENT_VERSION;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export type CookieCategoryInfo = {
  id: CookieCategory;
  label: string;
  description: string;
  required?: boolean;
};

export const cookieCategories: CookieCategoryInfo[] = [
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
];
