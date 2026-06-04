export interface Game {
  slug: string;
  title: string;
  year: number;
  difficulty: number;
  difficultyName: string;
  players: string;
  time: string;
  timeShort: string;
  poster: string;
  tagline: string;
  description: string[];
  tags: string[];
}

export interface PricingRow {
  players: number;
  price: number;
  perPerson: number;
  popular: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const GAMES: Game[] = [
  {
    slug: 'alien-infection',
    title: 'Alien Infection',
    year: 2024,
    difficulty: 4,
    difficultyName: 'Sudėtinga',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-alien-infection.png',
    tagline: 'VR pabėgimo kambarys siaubingame garse ir vaizde.',
    description: [
      'Keisti įvykiai vyksta vietiniame miške. Jūsų ugniagesių komanda iškviesta surasti dingusį katiną.',
      'Garsai ir šviesos danguje šiurpina žmones.',
      'Drąsūs gelbėtojai leidžiasi į mišką ieškoti dingusio katino, nežinodami kokie priešai jų laukia. Ar spėsite pabėgti, išgelbėti kačiuką ir visą pasaulį nuo mirtinos infekcijos?',
    ],
    tags: ['Logika', 'Galvosūkis', 'Ateiviai', 'Pabėgimas', 'VR', 'Veiksmas', 'Šiurpuliukai', 'Komandinis'],
  },
  {
    slug: 'ninja-trials',
    title: 'Ninja Trials',
    year: 2023,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-ninja-trials.png',
    tagline: 'Šiąnakt jūs tampate tikrais nindzėmis.',
    description: [
      'Šiąnakt jūs tampate tikrais nindzėmis.',
      'Bet tai nebus lengva. Jūsų mokytojas paskyrė tris užduotis: Kovos, Slaptumo ir Dvasios išbandymus. Tik įvaldę reikalingus įgūdžius būsite pasiruošę jam pasipriešinti ir įrodyti savo vertę.',
      'Ninja Trials – šeimai draugiškas pabėgimo kambarys, kupinas pramogų ir iššūkių visiems amžiams.',
    ],
    tags: ['Japonija', 'Kova', 'Kardai', 'Veiksmas', 'Magija', 'Boso kova', 'Pradedantiesiems'],
  },
  {
    slug: 'cyberscape',
    title: 'Cyberscape',
    year: 2025,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-cyberscape.png',
    tagline: 'Įžengėte į pagrindinį tinklą. Sunaikinkite virusą. Išgelbėkite darbus.',
    description: [
      'Retro stiliaus VR pabėgimo kambarys.',
      'Sukčiavęs dirbtinis intelektas paleistas miesto pagrindiniame tinkle, ir jis išalkęs darbų.',
      'Užsidėkite VR akinius ir leiskitės skaitmeniniais bėgiais pačios sistemos viduje. Suraskite virusą, nukirskite šaltinį ir sprukite, kol jis jūsų neatsekė.',
      'Cyberscape – greito tempo neoninis trileris: lengvas pradėti, gilus pasinerti.',
    ],
    tags: ['Kibernetika', 'Hakeriai', 'Veiksmas', 'Komandinis', 'Galvosūkis'],
  },
  {
    slug: 'dragon-tower',
    title: 'Dragon Tower',
    year: 2018,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-dragon-tower.png',
    tagline: 'Pabėk iš kalėjimo. Virk eliksyrus. Nugalėk drakoną.',
    description: [
      'Alchemikas įmetė jus į bokštą. Atskrenda drakonai.',
      'Virkite eliksyrus ir raskite kelią iš bokšto arba tapkite drakono pietumis.',
      'Dragon Tower – originalus, šeimai draugiškas, fantastinis nuotykis.',
    ],
    tags: ['Fantastika', 'Magija', 'Pabėgimas', 'Pradedantiesiems'],
  },
  {
    slug: 'manor-of-escape',
    title: 'Manor of Escape',
    year: 2021,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-manor-of-escape.png',
    tagline: 'Durys užsirakino pačios. Namas jus stebi.',
    description: [
      'Miestelio dvare ilgą laiką girdisi šiurpūs riksmai, dingsta žmonės.',
      'Meras nusamdė jus, kad sugautumėte išprotėjusį grafą Molumą, kuris alieka siaubingus eksperimentus.',
      'Ar išdrįsite įžengti į dvarą, įvykdyti misiją ir išgelbėti miestelį?',
    ],
    tags: ['Baimė', 'Paslaptis', 'Pabėgimas', 'Galvosūkis'],
  },
  {
    slug: 'pirates-plague',
    title: 'Pirates Plague',
    year: 2021,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-pirates-plague.png',
    tagline: 'Kapitonas serga. Įgula prakeikta. Jūra nori jus atgal.',
    description: [
      'Paskubėkite! Turite nedaug laiko, arba jūs ir jūsų komanda taps prakeikta amžiams!',
      'Kovokite su kitais piratais, spręskite galvosūkius! Aktyvus ir intensyvus! Puikiai tinka norintiems azarto ir veiksmo. Rekomenduojama šeimoms.',
      'Pirates Plague – šurmuliuojanti istorija su tikrais galvosūkiais įguloms, nebijančioms susitepti rankų.',
    ],
    tags: ['Piratai', 'Paslaptis', 'Galvosūkis', 'Nuotykis'],
  },
  {
    slug: 'runaway-train',
    title: 'Runaway Train',
    year: 2022,
    difficulty: 5,
    difficultyName: 'Ekspertams',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-runaway-train.png',
    tagline: 'Tik jūs galite sustabdyti pasileidusį traukinį.',
    description: [
      'Stabdžių nebėra. Konduktoriaus nebėra. Vienintelis dalykas tarp traukinio ir bedugnės – jūsų komanda.',
      'Eikite per judančius vagonus, traukite teisingas svirtis ir melskitės, kad nukirpote tinkamą laidą. Antros galimybės nebus.',
      'Aukšto intensyvumo Laukinių Vakarų trileris įguloms, mokančioms išlaikyti šaltą galvą.',
    ],
    tags: ['Vakarai', 'Veiksmas', 'Komandinis', 'Ekspertams'],
  },
  {
    slug: 'depths-of-osiris',
    title: 'Depths of Osiris',
    year: 2020,
    difficulty: 5,
    difficultyName: 'Ekspertams',
    players: '2 − 6',
    time: '~50 min',
    timeShort: '~50 min',
    poster: '/assets/poster-depths-of-osiris.png',
    tagline: 'Ten apačioje – kažkas su jumis.',
    description: [
      'Nuotykiai vandenyno dugne.',
      'Jūs ir komanda leisitės į vandenyno gelmes kur neseniai atradote prarastą Ozirio šventyklą ir atgauti legendinį artefaktą. Visur slypi pavojai.',
      'Depths of Osiris – įtempta povandeninės archeologijos istorija įguloms, mėgstančioms tamsą.',
    ],
    tags: ['Po vandeniu', 'Paslaptis', 'Įtampa', 'Komandinis', 'Rykliai'],
  },
  {
    slug: 'space-station-tiberia',
    title: 'Space Station Tiberia',
    year: 2017,
    difficulty: 4,
    difficultyName: 'Sudėtinga',
    players: '2 − 6',
    time: '~50 min',
    timeShort: '~50 min',
    poster: '/assets/poster-space-station-tiberia.png',
    tagline: 'Artėja meteoritas. Ar spėsite išgelbėti pasaulį?',
    description: [
      'Didžiulis meteoritas tuoj trenksis į žemę.',
      'Laiko liko visai negaug. Turite nuskristi į kosminę stotį ir ją suremontuoti.',
      'Tu ir tavo komanda yra vienintelė viltis išgelbėti žemę.',
    ],
    tags: ['Mokslinė fantastika', 'Kosmosas', 'Galvosūkis', 'Paslaptis'],
  },
];

export const PRICING: PricingRow[] = [
  { players: 2, price: 50, perPerson: 25, popular: false },
  { players: 3, price: 65, perPerson: 21.66, popular: false },
  { players: 4, price: 80, perPerson: 20.0, popular: true },
  { players: 5, price: 100, perPerson: 20.0, popular: false },
  { players: 6, price: 120, perPerson: 20.0, popular: false },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Nuo kokio amžiaus galima žaisti?',
    a: 'Rekomenduojame nuo 9 metų. Vaikai iki 13 m. žaidžia tik kartu su suaugusiais.',
  },
  {
    q: 'Kiek žmonių telpa viename kambaryje?',
    a: 'Vienoje komandoje žaidžia nuo 2 iki 6 žaidėjų. Visi pabėgimo kambariai – komandiniai, todėl smagiausia atvykti su draugais, šeima ar kolegomis.',
  },
  {
    q: 'Ar reikia patirties su VR?',
    a: 'Visiškai ne. Prieš seansą operatorius supažindina su įranga ir valdymu. Pradedančiajam puikiai tinka Ninja Trials arba Dragon Tower.',
  },
  {
    q: 'Kiek trunka apsilankymas?',
    a: 'Pats žaidimas apie 45 minutės. Su trumpu pristatymu, įrangos prisitaikymu ir nuotraukomis – maždaug valanda.',
  },
  {
    q: 'Ar galima atvykti su akiniais?',
    a: 'Taip. VR įranga pritaikyta dėvėti akinius.',
  },
  {
    q: 'Ką daryti, jei reikia atšaukti?',
    a: 'Prašome apie atšaukimą informuoti telefonu. Tel. nr.: +37068426686',
  },
  {
    q: 'Ar pykina su VR akiniais?',
    a: 'Mūsų žaidimuose jūs judate po visą realią erdvę, todėl pykinimas nepasireiškia.',
  },
];
