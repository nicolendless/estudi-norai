import { locales } from '../i18n';

export const localeStaticPaths = () =>
  locales.map((locale) => ({ params: { locale } }));
