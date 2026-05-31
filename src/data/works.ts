import { getTranslations } from '../i18n';

export type CrewMember = {
  name: string;
  image: string;
  bio: string;
};

const esWorks = getTranslations('es').works;

export const crew: CrewMember[] = esWorks.crew;

export const studioPhotos = [
  '/images/works/studio-1.jpg',
  '/images/works/studio-2.jpg',
  '/images/works/studio-3.jpg',
  '/images/works/studio-4.jpg',
  '/images/works/studio-5.jpg',
  '/images/works/studio-6.jpg',
];

export const sessionsThumb = '/images/works/norai-session.jpg';

export const sessionsQuote = esWorks.sessionsQuote;

export const sessionsQuoteAuthor = 'Borja Palacios';
