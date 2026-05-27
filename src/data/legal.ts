export type LegalSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPage = {
  title: string;
  sections: LegalSection[];
};

const studioIdentity = [
  'Titular: Estudio Norai',
  'NIF/CIF: [NÚMERO]',
  'Domicilio social: Carrer del Vi, 3A, Palma',
  'Correo electrónico: estudionorai@gmail.com',
  'Teléfono: +34 666 72 21 61',
  'Nombre comercial: Estudio Norai',
];

export const avisoLegal: LegalPage = {
  title: 'A-VISO LEGAL',
  sections: [
    {
      paragraphs: [
        'En cumplimiento con el deber de información recogido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos identificativos del titular del presente sitio web:',
        ...studioIdentity,
      ],
    },
    {
      title: 'OBJETO',
      paragraphs: [
        'El presente sitio web tiene como finalidad ofrecer información sobre los servicios y/o productos desarrollados por Estudio Norai.',
        'La navegación por este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.',
      ],
    },
    {
      title: 'CONDICIONES DE USO',
      paragraphs: [
        'El usuario se compromete a hacer un uso adecuado del contenido y de los servicios ofrecidos a través de esta página web y a no emplearlos para:',
      ],
      bullets: [
        'Realizar actividades ilícitas o contrarias a la buena fe y al orden público.',
        'Provocar daños en los sistemas físicos y lógicos del titular del sitio web, de sus proveedores o de terceras personas.',
        'Introducir o difundir virus informáticos u otros sistemas físicos o lógicos susceptibles de provocar daños.',
      ],
    },
    {
      paragraphs: [
        'El titular se reserva el derecho de retirar cualquier comentario o aportación que vulnere el respeto a la dignidad de las personas, sea discriminatorio o resulte inapropiado.',
      ],
    },
    {
      title: 'PROPIEDAD INTELECTUAL E INDUSTRIAL',
      paragraphs: [
        'Todos los contenidos del presente sitio web, incluyendo textos, imágenes, diseños, logotipos, iconos, software, nombres comerciales, marcas o cualquier otro elemento susceptible de protección, están protegidos por los derechos de propiedad intelectual e industrial del titular o de terceros autorizados.',
        'Queda expresamente prohibida la reproducción, distribución o transformación total o parcial de dichos contenidos sin autorización previa y expresa del titular.',
      ],
    },
    {
      title: 'RESPONSABILIDAD',
      paragraphs: [
        'El titular no se hace responsable de los daños y perjuicios derivados del uso de la información contenida en este sitio web ni de la falta de disponibilidad o continuidad del funcionamiento de la página.',
        'Asimismo, no se responsabiliza del contenido de enlaces externos que puedan dirigir a terceros sitios web.',
      ],
    },
    {
      title: 'ENLACES EXTERNOS',
      paragraphs: [
        'En caso de que en el sitio web se dispongan enlaces o hipervínculos hacia otros sitios de Internet, el titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos.',
        'En ningún caso asumirá responsabilidad alguna por los contenidos de enlaces pertenecientes a terceros.',
      ],
    },
    {
      title: 'LEGISLACIÓN APLICABLE',
      paragraphs: [
        'La relación entre el titular y el usuario se regirá por la normativa española vigente, y cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a derecho.',
      ],
    },
  ],
};

export const politicaPrivacidad: LegalPage = {
  title: 'POLÍTICA DE PRIVACIDAD',
  sections: [
    {
      paragraphs: [
        'En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la normativa vigente en materia de protección de datos personales, se informa a los usuarios de esta página web sobre el tratamiento de sus datos personales.',
      ],
    },
    {
      title: '1. RESPONSABLE DEL TRATAMIENTO',
      paragraphs: studioIdentity.slice(0, 5),
    },
    {
      title: '2. FINALIDAD DEL TRATAMIENTO DE LOS DATOS',
      paragraphs: ['Los datos personales recabados a través de esta web serán tratados con las siguientes finalidades:'],
      bullets: [
        'Atender solicitudes de información realizadas a través de formularios de contacto.',
        'Gestionar comunicaciones con usuarios y clientes.',
        'Enviar información comercial o newsletters, en caso de consentimiento expreso.',
        'Mejorar la experiencia de navegación y analizar el uso de la web mediante cookies y herramientas analíticas.',
      ],
    },
    {
      title: '3. LEGITIMACIÓN',
      paragraphs: ['La base legal para el tratamiento de sus datos es:'],
      bullets: [
        'El consentimiento del usuario al enviar formularios o aceptar comunicaciones.',
        'La ejecución de una relación contractual o precontractual.',
        'El interés legítimo del responsable para mejorar los servicios ofrecidos.',
      ],
    },
    {
      title: '4. CONSERVACIÓN DE LOS DATOS',
      paragraphs: [
        'Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para atender posibles obligaciones legales.',
      ],
    },
    {
      title: '5. DESTINATARIOS',
      paragraphs: [
        'Los datos no serán cedidos a terceros salvo obligación legal o cuando sea necesario para la prestación de servicios relacionados con esta web.',
        'Determinados proveedores podrán acceder a los datos para prestar servicios tecnológicos, alojamiento web, analítica o email marketing, actuando siempre como encargados del tratamiento.',
      ],
    },
    {
      title: '6. DERECHOS DEL USUARIO',
      paragraphs: ['El usuario puede ejercer los siguientes derechos:'],
      bullets: [
        'Acceder a sus datos personales.',
        'Solicitar la rectificación de datos inexactos.',
        'Solicitar su supresión cuando los datos ya no sean necesarios.',
        'Solicitar la limitación del tratamiento.',
        'Oponerse al tratamiento de sus datos.',
        'Solicitar la portabilidad de los datos.',
      ],
    },
    {
      paragraphs: [
        'Para ejercer estos derechos puede enviar una solicitud a: estudionorai@gmail.com',
        'Indicando como asunto: “Protección de Datos”.',
        'Asimismo, el usuario tiene derecho a presentar una reclamación ante la autoridad de control competente, como la Agencia Española de Protección de Datos.',
      ],
    },
    {
      title: '7. SEGURIDAD DE LOS DATOS',
      paragraphs: [
        'El titular adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad, confidencialidad e integridad de los datos personales tratados.',
      ],
    },
    {
      title: '8. CAMBIOS EN LA POLÍTICA DE PRIVACIDAD',
      paragraphs: [
        'El titular se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas o cambios en el funcionamiento del sitio web.',
      ],
    },
  ],
};
