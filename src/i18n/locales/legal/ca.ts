import type { LegalPage } from '../../types';

const studioIdentity = [
  'Titular: Estudio Norai',
  'NIF/CIF: [NÚMERO]',
  'Domicili social: Carrer del Vi, 3A, Palma',
  'Correu electrònic: estudionorai@gmail.com',
  'Telèfon: +34 666 72 21 61',
  'Nom comercial: Estudio Norai',
];

export const avisoLegal: LegalPage = {
  title: 'A-VÍS LEGAL',
  sections: [
    {
      paragraphs: [
        "En compliment amb el deure d'informació recollit a la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), es faciliten a continuació les dades identificatives del titular del present lloc web:",
        ...studioIdentity,
      ],
    },
    {
      title: 'OBJECTE',
      paragraphs: [
        'El present lloc web té com a finalitat oferir informació sobre els serveis i/o productes desenvolupats per Estudio Norai.',
        "La navegació per aquest lloc web atribueix la condició d'usuari i implica l'acceptació plena i sense reserves de totes les disposicions incloses en aquest Avís Legal.",
      ],
    },
    {
      title: "CONDICIONS D'ÚS",
      paragraphs: [
        "L'usuari es compromet a fer un ús adequat del contingut i dels serveis oferts a través d'aquesta pàgina web i a no emprar-los per a:",
      ],
      bullets: [
        'Realitzar activitats il·lícites o contràries a la bona fe i a l\'ordre públic.',
        'Provocar danys en els sistemes físics i lògics del titular del lloc web, dels seus proveïdors o de terceres persones.',
        'Introduir o difondre virus informàtics o altres sistemes físics o lògics susceptibles de provocar danys.',
      ],
    },
    {
      paragraphs: [
        'El titular es reserva el dret de retirar qualsevol comentari o aportació que vulneri el respecte a la dignitat de les persones, sigui discriminatori o resulti inadequat.',
      ],
    },
    {
      title: 'PROPIETAT INTEL·LECTUAL I INDUSTRIAL',
      paragraphs: [
        'Tots els continguts del present lloc web, incloent textos, imatges, dissenys, logotips, icones, programari, noms comercials, marques o qualsevol altre element susceptible de protecció, estan protegits pels drets de propietat intel·lectual i industrial del titular o de tercers autoritzats.',
        'Queda expressament prohibida la reproducció, distribució o transformació total o parcial d\'aquests continguts sense autorització prèvia i expressa del titular.',
      ],
    },
    {
      title: 'RESPONSABILITAT',
      paragraphs: [
        "El titular no es fa responsable dels danys i perjudicis derivats de l'ús de la informació continguda en aquest lloc web ni de la falta de disponibilitat o continuïtat del funcionament de la pàgina.",
        "Tampoc es responsabilitza del contingut d'enllaços externs que puguin dirigir a llocs web de tercers.",
      ],
    },
    {
      title: 'ENLLAÇOS EXTERNS',
      paragraphs: [
        "En cas que al lloc web s'hi disposin enllaços o hiperenllaços cap a altres llocs d'Internet, el titular no exercirà cap tipus de control sobre aquests llocs i continguts.",
        "En cap cas assumirà responsabilitat alguna pels continguts d'enllaços pertanyents a tercers.",
      ],
    },
    {
      title: 'LEGISLACIÓ APLICABLE',
      paragraphs: [
        "La relació entre el titular i l'usuari es regirà per la normativa espanyola vigent, i qualsevol controvèrsia se sotmetrà als jutjats i tribunals que corresponguin conforme a dret.",
      ],
    },
  ],
};

export const politicaPrivacidad: LegalPage = {
  title: 'POLÍTICA DE PRIVACITAT',
  sections: [
    {
      paragraphs: [
        "En compliment del Reglament (UE) 2016/679 del Parlament Europeu i del Consell (RGPD) i de la normativa vigent en matèria de protecció de dades personals, s'informa els usuaris d'aquesta pàgina web sobre el tractament de les seves dades personals.",
      ],
    },
    {
      title: '1. RESPONSABLE DEL TRACTAMENT',
      paragraphs: studioIdentity.slice(0, 5),
    },
    {
      title: '2. FINALITAT DEL TRACTAMENT DE LES DADES',
      paragraphs: [
        'Les dades personals recollides a través d\'aquesta web seran tractades amb les finalitats següents:',
      ],
      bullets: [
        "Atendre sol·licituds d'informació realitzades a través de formularis de contacte.",
        'Gestionar comunicacions amb usuaris i clients.',
        "Enviar informació comercial o newsletters, en cas de consentiment express.",
        "Millorar l'experiència de navegació i analitzar l'ús de la web mitjançant cookies i eines analítiques.",
      ],
    },
    {
      title: '3. LEGITIMACIÓ',
      paragraphs: ['La base legal per al tractament de les vostres dades és:'],
      bullets: [
        "El consentiment de l'usuari en enviar formularis o acceptar comunicacions.",
        "L'execució d'una relació contractual o precontractual.",
        "L'interès legítim del responsable per millorar els serveis oferts.",
      ],
    },
    {
      title: '4. CONSERVACIÓ DE LES DADES',
      paragraphs: [
        'Les dades personals es conservaran durant el temps necessari per complir amb la finalitat per a la qual van ser recollides i per atendre possibles obligacions legals.',
      ],
    },
    {
      title: '5. DESTINATARIS',
      paragraphs: [
        "Les dades no seran cedides a tercers llevat d'obligació legal o quan sigui necessari per a la prestació de serveis relacionats amb aquesta web.",
        'Determinats proveïdors podran accedir a les dades per prestar serveis tecnològics, allotjament web, analítica o email marketing, actuant sempre com a encarregats del tractament.',
      ],
    },
    {
      title: "6. DRETS DE L'USUARI",
      paragraphs: ["L'usuari pot exercir els drets següents:"],
      bullets: [
        'Accedir a les seves dades personals.',
        'Sol·licitar la rectificació de dades inexactes.',
        'Sol·licitar la supressió quan les dades ja no siguin necessàries.',
        'Sol·licitar la limitació del tractament.',
        'Oposar-se al tractament de les seves dades.',
        'Sol·licitar la portabilitat de les dades.',
      ],
    },
    {
      paragraphs: [
        'Per exercir aquests drets podeu enviar una sol·licitud a: estudionorai@gmail.com',
        'Indicant com a assumpte: “Protecció de Dades”.',
        "Així mateix, l'usuari té dret a presentar una reclamació davant l'autoritat de control competent, com l'Agència Espanyola de Protecció de Dades.",
      ],
    },
    {
      title: '7. SEGURETAT DE LES DADES',
      paragraphs: [
        'El titular adopta les mesures tècniques i organitzatives necessàries per garantir la seguretat, confidencialitat i integritat de les dades personals tractades.',
      ],
    },
    {
      title: '8. CANVIS EN LA POLÍTICA DE PRIVACITAT',
      paragraphs: [
        'El titular es reserva el dret de modificar la present Política de Privacitat per adaptar-la a novetats legislatives o canvis en el funcionament del lloc web.',
      ],
    },
  ],
};

export const politicaCookies: LegalPage = {
  title: 'POLÍTICA DE COOKIES',
  sections: [
    {
      paragraphs: [
        'La present Política de Cookies explica què són les cookies, quins tipus utilitzem en aquest lloc web i com les podeu gestionar.',
      ],
    },
    {
      title: '1. QUÈ SÓN LES COOKIES?',
      paragraphs: [
        'Les cookies són petits fitxers que s\'emmagatzemen al vostre dispositiu quan visiteu una pàgina web. Permeten, entre d\'altres coses, recordar preferències, facilitar la navegació o recopilar informació estadística.',
      ],
    },
    {
      title: '2. TIPUS DE COOKIES QUE UTILITZEM',
      bullets: [
        "Cookies tècniques o necessàries: permeten guardar la vostra decisió sobre l'ús de cookies.",
        "Cookies analítiques: ens ajuden a comprendre com s'utilitza la web. Només s'activen si les accepteu.",
        'Cookies de tercers / contingut extern: poden instal·lar-se en carregar serveis com Spotify o Google Maps. Només s\'activen si les accepteu.',
      ],
    },
    {
      title: '3. COOKIES DE TERCERS',
      paragraphs: ['Aquest lloc pot carregar serveis externs que instal·len les seves pròpies cookies:'],
      bullets: [
        'Google Fonts: tipografies allotjades en servidors de Google (es carreguen en confirmar les vostres preferències).',
        'Spotify: reproductor incrustat de playlist.',
        "Google Maps: mapa d'ubicació de l'estudi.",
      ],
    },
    {
      title: '4. CONSERVACIÓ',
      paragraphs: [
        'La vostra preferència de cookies es guarda al navegador durant un màxim de 12 mesos. Passat aquest termini, tornarem a sol·licitar-vos el consentiment.',
      ],
    },
    {
      title: '5. COM GESTIONAR LES COOKIES',
      paragraphs: [
        'Podeu acceptar, rebutjar o configurar les cookies no necessàries des del bàner inicial o en qualsevol moment mitjançant l\'enllaç “Configurar cookies” del peu de pàgina.',
        'També podeu configurar el navegador per bloquejar o eliminar cookies. Tingueu en compte que, si desactiveu les cookies necessàries, algunes funcions poden deixar d\'estar disponibles.',
      ],
    },
    {
      title: '6. RESPONSABLE',
      paragraphs: [
        'Titular: Estudio Norai',
        'Correu electrònic: estudionorai@gmail.com',
        'Podeu consultar més informació sobre el tractament de dades personals a la nostra Política de privacitat.',
      ],
    },
  ],
};
