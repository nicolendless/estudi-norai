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

export const services: Service[] = [
  {
    slug: 'acompanamiento',
    previewTitle: 'Acompañamiento y Producción musical',
    previewImage: '/images/prod_musical.jpg',
    previewVariant: 'image',
    detailTitle: 'Acompañamiento musical',
    detailImage: '/images/prod_musical.jpg',
    imageOverlayLines: ['PRODU', 'CCIÓN'],
    imagePosition: 'left',
    panelTheme: 'dark',
    body: [
      {
        text: 'Os ayudamos a los artistas a que vuestra primera idea de expresión musical, se convierta en un proyecto consolidado y publicado. Os acompañamos en los procesos de: ',
      },
      {
        text: 'composición, arreglo, grabación, edición, mezcla, mastering e incluso en la gestión de registrar y publicar vuestras obras.',
        bold: true,
      },
    ],
  },
  {
    slug: 'mezcla-mastering',
    previewTitle: 'Mezcla y mastering',
    previewImage: '/images/mezcla_mastering.jpg',
    previewVariant: 'image',
    detailTitle: 'Mezcla y',
    detailSubtitle: 'MASTERING',
    detailImage: '/images/mezcla_mastering.jpg',
    imagePosition: 'right',
    panelTheme: 'light',
    body: [
      {
        text: 'Dentro de los procesos que forman parte del global de la producción musical de un proyecto, os podemos dar apoyo en cualquier pasito del camino, hacia el resultado al que se quiere llegar. Aquí tenemos equipo, formación, ',
      },
      {
        text: 'experiencia en la parte más técnica',
        bold: true,
      },
      {
        text: ' del proceso de producción, como son la parte de ',
      },
      {
        text: 'mezcla y mastering.',
        bold: true,
      },
    ],
  },
  {
    slug: 'norai-sessions',
    previewTitle: 'Grabación de videoclip en directo',
    previewImage: '/images/logo_simple.svg',
    previewVariant: 'sessions',
    detailTitle: 'Norai Sessions',
    detailSubtitle: 'Grabación de directos',
    detailImage: '/images/servicios/norai-sessions.jpg',
    imagePosition: 'left',
    panelTheme: 'outlined',
    body: [
      {
        text: 'Ya sabemos lo clave que es la parte audiovisual, para dar a conocer vuestros proyectos musicales. En el estudio, estamos preparados para que podáis ',
      },
      {
        text: 'grabar aquí vuestras versiones en vivo,',
        bold: true,
      },
      {
        text: ' en el mejor entorno, con el mejor equipo técnico, para garantizar la mejor calidad en el sonido.',
      },
    ],
  },
  {
    slug: 'composicion',
    previewTitle: 'Composición de canciones personalizadas',
    previewImage: '/images/composicion.jpg',
    previewVariant: 'image',
    detailTitle: 'Composición de canciones',
    detailSubtitle: 'PERSONALIZADAS',
    detailImage: '/images/servicios/composicion.jpg',
    imagePosition: 'right',
    panelTheme: 'dark',
    body: [
      {
        text: 'Si ya estás cansado de buscar regalos originales para tu pareja, familiar o amigo/a, aquí te ayudamos a que les sorprendas. Ya son varios los que han confiado en nosotros para ',
      },
      {
        text: 'componer la canción más especial, para esa persona tan especial.',
        bold: true,
      },
      {
        text: ' Os ayudamos en la letra y en la composición musical. Además, esta canción tendrá la calidad en el proceso de producción, propia de un estudio profesional.',
      },
    ],
  },
  {
    slug: 'clases',
    previewTitle: 'Clases de guitarra y/o producción musical',
    previewImage: '/images/formacion.jpg',
    previewVariant: 'image',
    detailTitle: 'Clases de guitarra',
    detailSubtitle: 'y/o producción musical',
    detailImage: '/images/servicios/clases.jpg',
    imagePosition: 'left',
    panelTheme: 'cream',
    body: [
      {
        text: 'No te lo pienses más, si quieres introducirte de lleno en el mundo musical o profundizar tus conocimientos y habilidades, disfrutando en un entorno en el que se respira música. Aquí',
      },
      {
        text: ' ofrecemos clases',
        bold: true,
      },
      {
        text: ' en las que basándonos, en la guitarra o bien en la producción musical, incorporamos y disfrutamos de todo el material y conocimientos musicales del estudio. Si estabas esperando una señal, ¡es esta!',
      },
    ],
  },
];
