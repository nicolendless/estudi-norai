import {
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_VERSION,
  type CookieConsentState,
} from '../data/cookies';

const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 365;

const defaultConsent = (): CookieConsentState => ({
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: new Date().toISOString(),
});

const parseConsent = (value: string | null): CookieConsentState | null => {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as CookieConsentState;
    if (parsed.version !== COOKIE_CONSENT_VERSION || parsed.necessary !== true) return null;

    const age = Date.now() - new Date(parsed.updatedAt).getTime();
    if (Number.isNaN(age) || age > CONSENT_MAX_AGE_MS) return null;

    return {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
};

export const getConsent = (): CookieConsentState | null =>
  parseConsent(localStorage.getItem(COOKIE_CONSENT_KEY));

export const saveConsent = (consent: Omit<CookieConsentState, 'version' | 'necessary' | 'updatedAt'>) => {
  const next: CookieConsentState = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics: consent.analytics,
    marketing: consent.marketing,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(next));
  applyConsent(next);
  window.dispatchEvent(new CustomEvent('norai:cookie-consent', { detail: next }));
  return next;
};

const loadGoogleFonts = () => {
  if (document.querySelector('[data-cookie-fonts-loaded]')) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Archivo:wght@200;300;400;500;600;700&display=swap';
  link.dataset.cookieFontsLoaded = 'true';
  document.head.appendChild(link);
};

const activateEmbeds = (category: 'analytics' | 'marketing') => {
  document.querySelectorAll<HTMLElement>(`[data-cookie-embed="${category}"]`).forEach((container) => {
    const placeholder = container.querySelector<HTMLElement>('[data-cookie-embed-placeholder]');
    const existingIframe = container.querySelector('iframe');

    if (existingIframe) {
      placeholder?.classList.add('hidden');
      return;
    }

    const src = container.dataset.embedSrc;
    if (!src) return;

    const title = container.dataset.embedTitle ?? '';
    const className = container.dataset.embedClass ?? 'h-full w-full border-0';
    const allow = container.dataset.embedAllow;
    const referrerPolicy = container.dataset.embedReferrerpolicy;

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = title;
    iframe.className = className;
    iframe.loading = 'lazy';
    iframe.setAttribute('frameborder', '0');

    if (allow) iframe.setAttribute('allow', allow);
    if (referrerPolicy) iframe.referrerPolicy = referrerPolicy as ReferrerPolicy;

    container.appendChild(iframe);
    placeholder?.classList.add('hidden');
    container.dataset.cookieEmbedActive = 'true';
  });
};

const disableEmbeds = (category: 'analytics' | 'marketing') => {
  document.querySelectorAll<HTMLElement>(`[data-cookie-embed="${category}"]`).forEach((container) => {
    container.querySelector('iframe')?.remove();
    container
      .querySelector<HTMLElement>('[data-cookie-embed-placeholder]')
      ?.classList.remove('hidden');
    delete container.dataset.cookieEmbedActive;
  });
};

export const applyConsent = (consent: CookieConsentState) => {
  loadGoogleFonts();

  if (consent.analytics) {
    activateEmbeds('analytics');
  } else {
    disableEmbeds('analytics');
  }

  if (consent.marketing) {
    activateEmbeds('marketing');
  } else {
    disableEmbeds('marketing');
  }
};

const bindUi = () => {
  const banner = document.getElementById('cookie-consent-banner');
  const modal = document.getElementById('cookie-consent-modal');
  const analyticsToggle = document.getElementById('cookie-toggle-analytics') as HTMLInputElement | null;
  const marketingToggle = document.getElementById('cookie-toggle-marketing') as HTMLInputElement | null;

  const hideBanner = () => banner?.classList.add('hidden');
  const showBanner = () => banner?.classList.remove('hidden');
  const openModal = () => {
    modal?.classList.remove('hidden');
    modal?.setAttribute('aria-hidden', 'false');
  };
  const closeModal = () => {
    modal?.classList.add('hidden');
    modal?.setAttribute('aria-hidden', 'true');
  };

  const syncToggles = (consent: CookieConsentState | null) => {
    if (analyticsToggle) analyticsToggle.checked = consent?.analytics ?? false;
    if (marketingToggle) marketingToggle.checked = consent?.marketing ?? false;
  };

  document.querySelectorAll<HTMLElement>('[data-cookie-open-settings]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      syncToggles(getConsent());
      openModal();
    });
  });

  document.querySelectorAll<HTMLElement>('[data-cookie-accept-all]').forEach((button) => {
    button.addEventListener('click', () => {
      saveConsent({ analytics: true, marketing: true });
      hideBanner();
      closeModal();
    });
  });

  document.querySelectorAll<HTMLElement>('[data-cookie-reject-all]').forEach((button) => {
    button.addEventListener('click', () => {
      saveConsent({ analytics: false, marketing: false });
      hideBanner();
      closeModal();
    });
  });

  document.querySelectorAll<HTMLElement>('[data-cookie-save-preferences]').forEach((button) => {
    button.addEventListener('click', () => {
      saveConsent({
        analytics: analyticsToggle?.checked ?? false,
        marketing: marketingToggle?.checked ?? false,
      });
      hideBanner();
      closeModal();
    });
  });

  document.querySelectorAll<HTMLElement>('[data-cookie-open-preferences]').forEach((button) => {
    button.addEventListener('click', () => {
      syncToggles(getConsent());
      openModal();
    });
  });

  document.querySelectorAll<HTMLElement>('[data-cookie-close-modal]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  const existing = getConsent();
  if (existing) {
    applyConsent(existing);
    hideBanner();
  } else {
    showBanner();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindUi);
} else {
  bindUi();
}
