import type { ServiceTheme, ImagePosition, PreviewVariant } from '../data/services';

export type BodySegment = { text: string; bold?: boolean };

export type ServiceTranslation = {
  slug: string;
  previewTitle: string;
  previewImage: string;
  previewVariant: PreviewVariant;
  detailTitle: string;
  detailSubtitle?: string;
  detailImage: string;
  imageOverlayLines?: string[];
  imagePosition: ImagePosition;
  panelTheme: ServiceTheme;
  body: BodySegment[];
};

export type CrewMemberTranslation = {
  name: string;
  image: string;
  bio: string;
};

export type RoomSpecTranslation = { label: string; value: string };

export type LegalSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPage = {
  title: string;
  sections: LegalSection[];
};

export type PageSeoTranslation = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

export type CookieCategoryTranslation = {
  id: 'necessary' | 'analytics' | 'marketing';
  label: string;
  description: string;
  required?: boolean;
};

export type Translations = {
  locale: 'es' | 'ca' | 'en';
  seo: {
    siteName: string;
    tagline: string;
    defaultDescription: string;
    pages: Record<string, PageSeoTranslation>;
  };
  nav: {
    servicios: string;
    lestudi: string;
    works: string;
    ariaPrincipal: string;
    ariaSections: string;
  };
  hero: {
    h1Line1: string;
    h1Line2: string;
    h1Tagline: string;
    imageAlt: string;
    openMenu: string;
    closeMenu: string;
    servicios: string;
    serviciosSub: string;
    bio: string;
    bioSub: string;
    proyectos: string;
    proyectosSub: string;
    estudio: string;
    estudioSub: string;
    trabajemos: string;
    trabajemosLine2: string;
    trabajemosSub: string;
    mobileServicios: string;
    mobileBio: string;
    mobileProyectos: string;
    mobileEstudio: string;
    mobileTrabajemos: string;
  };
  footer: {
    copyright: string;
    avisoLegal: string;
    privacidad: string;
    cookies: string;
    configureCookies: string;
    logoAlt: string;
  };
  common: {
    saberMas: string;
    embarcate: string;
    sessions: string;
    moreInfo: string;
  };
  home: {
    intro: string;
    contactCta: string;
    conocemeTitle: string;
    conocemeSub: string;
    conocemeIntro: string;
    conocemeCareer: string;
    conocemeStudio: string;
    readMore: string;
    readLess: string;
    worksTitle: string;
    worksSub: string;
    worksSaberMas: string;
    projectAlt: string;
    embarcacionTitle: string;
    embarcacionSub: string;
    lestudiAlt: string;
    instrumentsTitle: string;
    instrumentsBrandsAlt: string;
    srOnlyH1?: string;
  };
  contact: {
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    privacyCheckbox: string;
    marketingCheckbox: string;
    headingLine1: string;
    headingLine2: string;
    headingLine3: string;
    success: string;
    error: string;
    connectionError: string;
    missingFields: string;
  };
  visitanos: {
    title: string;
    contactCtaLine1: string;
    contactCtaLine2: string;
    mapTitle: string;
    mapPlaceholder: string;
    instagramAria: string;
    youtubeAria: string;
  };
  spotify: {
    title: string;
    placeholder: string;
  };
  instruments: {
    title: string;
    saberMas: string;
    ariaLabel: string;
    imageAlt: string;
  };
  cookies: {
    bannerTitle: string;
    bannerText: string;
    bannerPolicyLink: string;
    configure: string;
    reject: string;
    acceptAll: string;
    modalTitle: string;
    modalDescription: string;
    closeModal: string;
    closeModalAria: string;
    alwaysActive: string;
    enableCategory: string;
    savePreferences: string;
    rejectOptional: string;
    categories: CookieCategoryTranslation[];
  };
  services: ServiceTranslation[];
  servicios: {
    srOnlyH1: string;
  };
  works: {
    tripulacionTitle: string;
    viewMember: string;
    discoverSessions: string;
    estudioTitle: string;
    estudioMoments: string;
    sessionsLast: string;
    sessionsTitle: string;
    sessionsQuote: string;
    crew: CrewMemberTranslation[];
    srOnlyH1: string;
  };
  lestudi: {
    embarcacionTitle: string;
    mainRoom: string;
    room2: string;
    mainRoomLead: string;
    mainRoomDetail: string;
    room2Lead: string;
    room2Detail: string;
    reserveRoom: string;
    equipoTitle: string;
    equipoAlt: string;
    srOnlyH1: string;
    specs: {
      capacity: string;
      surface: string;
      height: string;
      controlRoom: string;
      usage: string;
      mainCapacity: string;
      mainSurface: string;
      mainHeight: string;
      mainControl: string;
      room2Capacity: string;
      room2Surface: string;
      room2Height: string;
      room2Usage: string;
    };
  };
  legal: {
    avisoLegal: LegalPage;
    politicaPrivacidad: LegalPage;
    politicaCookies: LegalPage;
    logoAlt: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    home: string;
    services: string;
    lestudi: string;
  };
  api: {
    missingFields: string;
    sendError: string;
    sendSuccess: string;
  };
};
