export const locales = ['es', 'ca', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeLabels: Record<Locale, string> = {
  es: 'ES',
  ca: 'CAT',
  en: 'ENG',
};

export const htmlLang: Record<Locale, string> = {
  es: 'es',
  ca: 'ca',
  en: 'en',
};

export const ogLocale: Record<Locale, string> = {
  es: 'es_ES',
  ca: 'ca_ES',
  en: 'en_GB',
};

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);
