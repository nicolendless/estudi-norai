import { defineMiddleware } from 'astro:middleware';

/** Strip legacy locale prefixes (/es, /ca, /en) — i18n lives on feat/i18n-es-ca-en only. */
export const onRequest = defineMiddleware((context, next) => {
  const { hostname, pathname } = context.url;

  if (hostname === 'estudinorai.com') {
    const canonical = new URL(context.url);
    canonical.hostname = 'www.estudinorai.com';
    return context.redirect(canonical.toString(), 301);
  }

  const match = pathname.match(/^\/(es|ca|en)(\/.*)?$/);

  if (match) {
    const rest = match[2] || '/';
    return context.redirect(rest, 301);
  }

  return next();
});
