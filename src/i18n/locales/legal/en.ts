import type { LegalPage } from '../../types';

const studioIdentity = [
  'Owner: Estudio Norai',
  'Tax ID (NIF/CIF): [NUMBER]',
  'Registered address: Carrer del Vi, 3A, Palma',
  'Email: estudionorai@gmail.com',
  'Phone: +34 666 72 21 61',
  'Trade name: Estudio Norai',
];

export const avisoLegal: LegalPage = {
  title: 'LEGAL NOTICE',
  sections: [
    {
      paragraphs: [
        'In compliance with the information duty set out in Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), the following identifying details of the owner of this website are provided:',
        ...studioIdentity,
      ],
    },
    {
      title: 'PURPOSE',
      paragraphs: [
        'This website is intended to provide information about the services and/or products developed by Estudio Norai.',
        'Browsing this website attributes user status and implies full and unreserved acceptance of all provisions included in this Legal Notice.',
      ],
    },
    {
      title: 'TERMS OF USE',
      paragraphs: [
        'The user agrees to make appropriate use of the content and services offered through this website and not to use them to:',
      ],
      bullets: [
        'Carry out unlawful activities or activities contrary to good faith and public order.',
        'Cause damage to the physical and logical systems of the website owner, its suppliers or third parties.',
        'Introduce or spread computer viruses or other physical or logical systems that may cause damage.',
      ],
    },
    {
      paragraphs: [
        'The owner reserves the right to remove any comment or contribution that violates respect for human dignity, is discriminatory or is inappropriate.',
      ],
    },
    {
      title: 'INTELLECTUAL AND INDUSTRIAL PROPERTY',
      paragraphs: [
        'All content on this website, including texts, images, designs, logos, icons, software, trade names, trademarks or any other element subject to protection, is protected by the intellectual and industrial property rights of the owner or authorised third parties.',
        'Reproduction, distribution or total or partial transformation of such content without prior express authorisation from the owner is expressly prohibited.',
      ],
    },
    {
      title: 'LIABILITY',
      paragraphs: [
        'The owner shall not be liable for damages arising from the use of the information contained on this website or from the lack of availability or continuity of the operation of the page.',
        'Nor shall it be liable for the content of external links that may lead to third-party websites.',
      ],
    },
    {
      title: 'EXTERNAL LINKS',
      paragraphs: [
        'If links or hyperlinks to other Internet sites are provided on the website, the owner shall not exercise any control over such sites and content.',
        'Under no circumstances shall it assume any liability for the content of links belonging to third parties.',
      ],
    },
    {
      title: 'APPLICABLE LAW',
      paragraphs: [
        'The relationship between the owner and the user shall be governed by current Spanish legislation, and any dispute shall be submitted to the courts and tribunals that correspond by law.',
      ],
    },
  ],
};

export const politicaPrivacidad: LegalPage = {
  title: 'PRIVACY POLICY',
  sections: [
    {
      paragraphs: [
        'In compliance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and current personal data protection legislation, users of this website are informed about the processing of their personal data.',
      ],
    },
    {
      title: '1. DATA CONTROLLER',
      paragraphs: studioIdentity.slice(0, 5),
    },
    {
      title: '2. PURPOSE OF DATA PROCESSING',
      paragraphs: ['Personal data collected through this website will be processed for the following purposes:'],
      bullets: [
        'To respond to information requests submitted through contact forms.',
        'To manage communications with users and clients.',
        'To send commercial information or newsletters, where express consent has been given.',
        'To improve the browsing experience and analyse use of the website through cookies and analytics tools.',
      ],
    },
    {
      title: '3. LEGAL BASIS',
      paragraphs: ['The legal basis for processing your data is:'],
      bullets: [
        'The user’s consent when submitting forms or accepting communications.',
        'The performance of a contractual or pre-contractual relationship.',
        'The legitimate interest of the controller in improving the services offered.',
      ],
    },
    {
      title: '4. DATA RETENTION',
      paragraphs: [
        'Personal data will be retained for as long as necessary to fulfil the purpose for which it was collected and to meet possible legal obligations.',
      ],
    },
    {
      title: '5. RECIPIENTS',
      paragraphs: [
        'Data will not be disclosed to third parties except where required by law or where necessary for the provision of services related to this website.',
        'Certain providers may access the data to provide technological services, web hosting, analytics or email marketing, always acting as data processors.',
      ],
    },
    {
      title: '6. USER RIGHTS',
      paragraphs: ['The user may exercise the following rights:'],
      bullets: [
        'Access their personal data.',
        'Request rectification of inaccurate data.',
        'Request erasure when the data is no longer necessary.',
        'Request restriction of processing.',
        'Object to the processing of their data.',
        'Request data portability.',
      ],
    },
    {
      paragraphs: [
        'To exercise these rights you may send a request to: estudionorai@gmail.com',
        'With the subject line: “Data Protection”.',
        'The user also has the right to lodge a complaint with the competent supervisory authority, such as the Spanish Data Protection Agency.',
      ],
    },
    {
      title: '7. DATA SECURITY',
      paragraphs: [
        'The owner adopts the technical and organisational measures necessary to guarantee the security, confidentiality and integrity of the personal data processed.',
      ],
    },
    {
      title: '8. CHANGES TO THE PRIVACY POLICY',
      paragraphs: [
        'The owner reserves the right to modify this Privacy Policy to adapt it to legislative developments or changes in the operation of the website.',
      ],
    },
  ],
};

export const politicaCookies: LegalPage = {
  title: 'COOKIE POLICY',
  sections: [
    {
      paragraphs: [
        'This Cookie Policy explains what cookies are, what types we use on this website and how you can manage them.',
      ],
    },
    {
      title: '1. WHAT ARE COOKIES?',
      paragraphs: [
        'Cookies are small files stored on your device when you visit a website. They allow, among other things, preferences to be remembered, navigation to be facilitated or statistical information to be collected.',
      ],
    },
    {
      title: '2. TYPES OF COOKIES WE USE',
      bullets: [
        'Technical or necessary cookies: they store your decision regarding the use of cookies.',
        'Analytics cookies: they help us understand how the website is used. They are only activated if you accept them.',
        'Third-party / external content cookies: they may be installed when loading services such as Spotify or Google Maps. They are only activated if you accept them.',
      ],
    },
    {
      title: '3. THIRD-PARTY COOKIES',
      paragraphs: ['This site may load external services that install their own cookies:'],
      bullets: [
        'Google Fonts: fonts hosted on Google servers (loaded when you confirm your preferences).',
        'Spotify: embedded playlist player.',
        'Google Maps: map showing the studio location.',
      ],
    },
    {
      title: '4. RETENTION',
      paragraphs: [
        'Your cookie preference is stored in your browser for a maximum of 12 months. After that period, we will ask for your consent again.',
      ],
    },
    {
      title: '5. HOW TO MANAGE COOKIES',
      paragraphs: [
        'You can accept, reject or configure non-essential cookies from the initial banner or at any time via the “Configure cookies” link in the footer.',
        'You can also configure your browser to block or delete cookies. Please note that if you disable necessary cookies, some features may no longer be available.',
      ],
    },
    {
      title: '6. CONTROLLER',
      paragraphs: [
        'Owner: Estudio Norai',
        'Email: estudionorai@gmail.com',
        'You can find more information about the processing of personal data in our Privacy Policy.',
      ],
    },
  ],
};
