export type ServiceTheme = 'dark' | 'light';
export type ImagePosition = 'left' | 'right';
export type PreviewVariant = 'image' | 'sessions';

export interface Service {
  slug: string;
  previewTitle: string;
  previewImage: string;
  previewVariant: PreviewVariant;
  detailTitle: string;
  detailSubtitle?: string;
  imagePosition: ImagePosition;
  panelTheme: ServiceTheme;
}

export const services: Service[] = [
  {
    slug: 'acompanamiento',
    previewTitle: 'Acompañamiento y Producción musical',
    previewImage: '/images/prod_musical.jpg',
    previewVariant: 'image',
    detailTitle: 'Acompañamiento musical',
    detailSubtitle: 'Producción',
    imagePosition: 'left',
    panelTheme: 'dark',
  },
  {
    slug: 'mezcla-mastering',
    previewTitle: 'Mezcla y mastering',
    previewImage: '/images/mezcla_mastering.jpg',
    previewVariant: 'image',
    detailTitle: 'Mezcla y mastering',
    imagePosition: 'right',
    panelTheme: 'light',
  },
  {
    slug: 'norai-sessions',
    previewTitle: 'Grabación de videoclip en directo',
    previewImage: '/images/logo_simple.svg',
    previewVariant: 'sessions',
    detailTitle: 'Norai Sessions',
    detailSubtitle: 'Grabación de directos',
    imagePosition: 'left',
    panelTheme: 'light',
  },
  {
    slug: 'composicion',
    previewTitle: 'Composición de canciones personalizadas',
    previewImage: '/images/composicion.jpg',
    previewVariant: 'image',
    detailTitle: 'Composición de canciones personalizadas',
    imagePosition: 'left',
    panelTheme: 'dark',
  },
  {
    slug: 'clases',
    previewTitle: 'Clases de guitarra y/o producción musical',
    previewImage: '/images/formacion.jpg',
    previewVariant: 'image',
    detailTitle: 'Clases de guitarra',
    detailSubtitle: 'y/o producción musical',
    imagePosition: 'right',
    panelTheme: 'light',
  },
];
