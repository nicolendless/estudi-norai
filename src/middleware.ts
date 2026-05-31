import { defineMiddleware } from 'astro:middleware';
import { defaultLocale, isLocale } from './i18n/config';
import { getLocaleFromPathname, isLegacyPath, legacyToLocalized } from './i18n/utils';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (pathname === '/') {
    return context.redirect(`/${defaultLocale}/`, 308);
  }

  if (isLegacyPath(pathname)) {
    return context.redirect(legacyToLocalized(pathname), 301);
  }

  const locale = getLocaleFromPathname(pathname);
  if (locale) {
    context.locals.locale = locale;
    return next();
  }

  if (pathname.startsWith('/api/') || pathname.startsWith('/_') || pathname.includes('.')) {
    return next();
  }

  return new Response(null, {
    status: 404,
    statusText: 'Not Found',
  });
});
