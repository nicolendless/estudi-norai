import { getTranslations } from '../i18n';

export type LegalSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPage = {
  title: string;
  sections: LegalSection[];
};

const esLegal = getTranslations('es').legal;

export const avisoLegal: LegalPage = esLegal.avisoLegal;
export const politicaPrivacidad: LegalPage = esLegal.politicaPrivacidad;
export const politicaCookies: LegalPage = esLegal.politicaCookies;
