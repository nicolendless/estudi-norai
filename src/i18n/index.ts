import type { Locale } from './config';
import type { Translations } from './types';
import { ca } from './locales/ca';
import { en } from './locales/en';
import { es } from './locales/es';

const dictionaries: Record<Locale, Translations> = { es, ca, en };

export const getTranslations = (locale: Locale): Translations => dictionaries[locale];

export type { Locale, Translations } from './types';
export {
  defaultLocale,
  htmlLang,
  isLocale,
  localeLabels,
  locales,
  ogLocale,
} from './config';
export {
  getLocaleFromParams,
  getLocaleFromPathname,
  isLegacyPath,
  legacyToLocalized,
  localizedPath,
  stripLocalePrefix,
  switchLocalePath,
} from './utils';
