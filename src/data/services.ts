import { getTranslations } from '../i18n';

export type ServiceTheme = 'dark' | 'light' | 'cream' | 'outlined';
export type ImagePosition = 'left' | 'right';
export type PreviewVariant = 'image' | 'sessions';

export type BodySegment = {
  text: string;
  bold?: boolean;
};

export interface Service {
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
}

export const services: Service[] = getTranslations('es').services;
