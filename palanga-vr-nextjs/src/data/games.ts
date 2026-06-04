export interface Game {
  slug: string;
  youtubeId?: string;
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
  /* Lokalizuoti tekstai (EN/RU). Jei nera – rodomas lietuviskas variantas. */
  i18n?: Partial<Record<'en' | 'ru', { tagline?: string; description?: string[] }>>;
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
    youtubeId: 'ZyLLaPA9yQI',
    title: 'Alien Infection',
    year: 2024,
    difficulty: 4,
    difficultyName: 'Sudėtinga',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-alien-infection.webp',
    tagline: 'VR pabėgimo kambarys siaubingame garse ir vaizde.',
    description: [
      'Keisti įvykiai vyksta vietiniame miške. Jūsų ugniagesių komanda iškviesta surasti dingusį katiną.',
      'Garsai ir šviesos danguje šiurpina žmones.',
      'Drąsūs gelbėtojai leidžiasi į mišką ieškoti dingusio katino, nežinodami kokie priešai jų laukia. Ar spėsite pabėgti, išgelbėti kačiuką ir visą pasaulį nuo mirtinos infekcijos?',
    ],
    tags: ['Logika', 'Galvosūkis', 'Ateiviai', 'Pabėgimas', 'VR', 'Veiksmas', 'Šiurpuliukai', 'Komandinis'],
    i18n: {
      en: {
        tagline: 'A VR escape room of terrifying sound and vision.',
        description: [
          'Strange events unfold in the local forest. Your firefighter team is called in to find a missing cat.',
          'Sounds and lights in the sky send chills through the townsfolk.',
          'Brave rescuers head into the forest to search for the lost cat, unaware of the enemies that await. Can you escape in time, save the kitten and the whole world from a deadly infection?',
        ],
      },
      ru: {
        tagline: 'VR-комната побега в пугающем звуке и образе.',
        description: [
          'Странные события происходят в местном лесу. Вашу команду пожарных вызвали найти пропавшего кота.',
          'Звуки и огни в небе наводят ужас на людей.',
          'Храбрые спасатели отправляются в лес на поиски пропавшего кота, не зная, какие враги их ждут. Успеете ли сбежать, спасти котёнка и весь мир от смертельной инфекции?',
        ],
      },
    },
  },
  {
    slug: 'ninja-trials',
    youtubeId: 'ScEbCy35OVo',
    title: 'Ninja Trials',
    year: 2023,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-ninja-trials.webp',
    tagline: 'Šiąnakt jūs tampate tikrais nindzėmis.',
    description: [
      'Šiąnakt jūs tampate tikrais nindzėmis.',
      'Bet tai nebus lengva. Jūsų mokytojas paskyrė tris užduotis: Kovos, Slaptumo ir Dvasios išbandymus. Tik įvaldę reikalingus įgūdžius būsite pasiruošę jam pasipriešinti ir įrodyti savo vertę.',
      'Ninja Trials – šeimai draugiškas pabėgimo kambarys, kupinas pramogų ir iššūkių visiems amžiams.',
    ],
    tags: ['Japonija', 'Kova', 'Kardai', 'Veiksmas', 'Magija', 'Boso kova', 'Pradedantiesiems'],
    i18n: {
      en: {
        tagline: 'Tonight you become true ninjas.',
        description: [
          'Tonight you become true ninjas.',
          'But it won\'t be easy. Your master has set three tasks: the Trials of Combat, Stealth and Spirit. Only by mastering the needed skills will you be ready to face him and prove your worth.',
          'Ninja Trials is a family-friendly escape room, full of fun and challenges for all ages.',
        ],
      },
      ru: {
        tagline: 'Этой ночью вы становитесь настоящими ниндзя.',
        description: [
          'Этой ночью вы становитесь настоящими ниндзя.',
          'Но это будет нелегко. Ваш учитель дал три задания: испытания Боя, Скрытности и Духа. Только овладев нужными навыками, вы будете готовы противостоять ему и доказать свою ценность.',
          'Ninja Trials — комната побега для всей семьи, полная развлечений и испытаний для любого возраста.',
        ],
      },
    },
  },
  {
    slug: 'cyberscape',
    youtubeId: '9kSQ-MLwWJY',
    title: 'Cyberscape',
    year: 2025,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-cyberscape.webp',
    tagline: 'Įžengėte į pagrindinį tinklą. Sunaikinkite virusą. Išgelbėkite darbus.',
    description: [
      'Naujausias retro stiliaus VR pabėgimo kambarys.',
      'S.R.F. – pasaulinė technologijų lyderė – pasamdė jus, inžinierių, sunaikinti virusą, užkrėtusį jos pagrindinį tinklą.',
      'Skaitmeninio perkėlimo technologija įmes jus tiesiai į sistemą: suraskite virusą, nukirskite šaltinį ir sprukite, kol jis jūsų neatsekė.',
      'Cyberscape – greito tempo neoninis trileris: lengva pradėti, gilu pasinerti.',
    ],
    tags: ['Kibernetika', 'Hakeriai', 'Veiksmas', 'Komandinis', 'Galvosūkis'],
    i18n: {
      en: {
        tagline: 'You enter the mainframe. Destroy the virus. Save the jobs.',
        description: [
          'The newest retro-style VR escape room.',
          'S.R.F. – a world-leading technology manufacturer – has hired you, engineers, to eliminate a virus that infected its mainframe.',
          'Digital transference technology drops you straight into the system: find the virus, cut the source and escape before it traces you.',
          'Cyberscape – a fast-paced neon thriller: easy to start, deep to dive into.',
        ],
      },
      ru: {
        tagline: 'Вы вошли в мейнфрейм. Уничтожьте вирус. Спасите рабочие места.',
        description: [
          'Новейшая VR-комната побега в ретро-стиле.',
          'S.R.F. – мировой лидер в производстве технологий – нанял вас, инженеров, уничтожить вирус, заразивший её мейнфрейм.',
          'Технология цифрового переноса отправит вас прямо в систему: найдите вирус, отрубите источник и бегите, пока он вас не вычислил.',
          'Cyberscape – неоновый триллер в быстром темпе: легко начать, трудно оторваться.',
        ],
      },
    },
  },
  {
    slug: 'dragon-tower',
    youtubeId: 'q5j8YFyfsHo',
    title: 'Dragon Tower',
    year: 2018,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-dragon-tower.webp',
    tagline: 'Pabėk iš kalėjimo. Virk eliksyrus. Nugalėk drakoną.',
    description: [
      'Alchemikas įmetė jus į bokštą. Atskrenda drakonai.',
      'Virkite eliksyrus ir raskite kelią iš bokšto arba tapkite drakono pietumis.',
      'Dragon Tower – originalus, šeimai draugiškas, fantastinis nuotykis.',
    ],
    tags: ['Fantastika', 'Magija', 'Pabėgimas', 'Pradedantiesiems'],
    i18n: {
      en: {
        tagline: 'Escape the prison. Brew elixirs. Defeat the dragon.',
        description: [
          'An alchemist has thrown you into a tower. Dragons are coming.',
          'Brew elixirs and find your way out of the tower – or become the dragon\'s dinner.',
          'Dragon Tower is an original, family-friendly fantasy adventure.',
        ],
      },
      ru: {
        tagline: 'Сбегите из темницы. Варите эликсиры. Победите дракона.',
        description: [
          'Алхимик бросил вас в башню. Прилетают драконы.',
          'Варите эликсиры и найдите выход из башни — или станьте ужином дракона.',
          'Dragon Tower — оригинальное семейное фэнтези-приключение.',
        ],
      },
    },
  },
  {
    slug: 'manor-of-escape',
    youtubeId: 'Sx3uzbmaG7I',
    title: 'Manor of Escape',
    year: 2021,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-manor-of-escape.webp',
    tagline: 'Durys užsirakino pačios. Namas jus stebi.',
    description: [
      'Miestelio dvare ilgą laiką girdisi šiurpūs riksmai, dingsta žmonės.',
      'Meras nusamdė jus, kad sugautumėte išprotėjusį grafą Molumą, kuris alieka siaubingus eksperimentus.',
      'Ar išdrįsite įžengti į dvarą, įvykdyti misiją ir išgelbėti miestelį?',
    ],
    tags: ['Baimė', 'Paslaptis', 'Pabėgimas', 'Galvosūkis'],
    i18n: {
      en: {
        tagline: 'The doors locked themselves. The house is watching you.',
        description: [
          'For a long time, eerie screams have echoed from the town manor, and people keep disappearing.',
          'The mayor has hired you to capture the mad Count Molum, who carries out horrifying experiments.',
          'Will you dare to enter the manor, complete the mission and save the town?',
        ],
      },
      ru: {
        tagline: 'Двери заперлись сами. Дом следит за вами.',
        description: [
          'Из городской усадьбы давно доносятся жуткие крики, а люди пропадают.',
          'Мэр нанял вас поймать безумного графа Молума, который проводит ужасающие эксперименты.',
          'Осмелитесь ли вы войти в усадьбу, выполнить миссию и спасти город?',
        ],
      },
    },
  },
  {
    slug: 'pirates-plague',
    youtubeId: 'eGLdaquEQx8',
    title: 'Pirates Plague',
    year: 2021,
    difficulty: 3,
    difficultyName: 'Vidutiniška',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-pirates-plague.webp',
    tagline: 'Kapitonas serga. Įgula prakeikta. Jūra nori jus atgal.',
    description: [
      'Paskubėkite! Turite nedaug laiko, arba jūs ir jūsų komanda taps prakeikta amžiams!',
      'Kovokite su kitais piratais, spręskite galvosūkius! Aktyvus ir intensyvus! Puikiai tinka norintiems azarto ir veiksmo. Rekomenduojama šeimoms.',
      'Pirates Plague – šurmuliuojanti istorija su tikrais galvosūkiais įguloms, nebijančioms susitepti rankų.',
    ],
    tags: ['Piratai', 'Paslaptis', 'Galvosūkis', 'Nuotykis'],
    i18n: {
      en: {
        tagline: 'The captain is sick. The crew is cursed. The sea wants you back.',
        description: [
          'Hurry! You have little time, or you and your team will be cursed forever!',
          'Fight other pirates, solve puzzles! Active and intense! Perfect for those craving thrills and action. Recommended for families.',
          'Pirates Plague is a bustling tale with real puzzles for crews not afraid to get their hands dirty.',
        ],
      },
      ru: {
        tagline: 'Капитан болен. Команда проклята. Море зовёт вас обратно.',
        description: [
          'Поторопитесь! У вас мало времени, иначе вы и ваша команда будете прокляты навсегда!',
          'Сражайтесь с другими пиратами, решайте головоломки! Активно и интенсивно! Отлично подходит любителям азарта и экшена. Рекомендуется для семей.',
          'Pirates Plague — бурлящая история с настоящими головоломками для команд, не боящихся запачкать руки.',
        ],
      },
    },
  },
  {
    slug: 'runaway-train',
    youtubeId: '8iGISrU-Da0',
    title: 'Runaway Train',
    year: 2022,
    difficulty: 5,
    difficultyName: 'Ekspertams',
    players: '2 − 6',
    time: '~45 min',
    timeShort: '~45 min',
    poster: '/assets/poster-runaway-train.webp',
    tagline: 'Tik jūs galite sustabdyti pasileidusį traukinį.',
    description: [
      'Stabdžių nebėra. Konduktoriaus nebėra. Vienintelis dalykas tarp traukinio ir bedugnės – jūsų komanda.',
      'Eikite per judančius vagonus, traukite teisingas svirtis ir melskitės, kad nukirpote tinkamą laidą. Antros galimybės nebus.',
      'Aukšto intensyvumo Laukinių Vakarų trileris įguloms, mokančioms išlaikyti šaltą galvą.',
    ],
    tags: ['Vakarai', 'Veiksmas', 'Komandinis', 'Ekspertams'],
    i18n: {
      en: {
        tagline: 'Only you can stop the runaway train.',
        description: [
          'The brakes are gone. The conductor is gone. The only thing between the train and the abyss is your team.',
          'Move through the rocking cars, pull the right levers and pray you cut the right wire. There will be no second chance.',
          'A high-intensity Wild West thriller for crews who can keep a cool head.',
        ],
      },
      ru: {
        tagline: 'Только вы можете остановить мчащийся поезд.',
        description: [
          'Тормозов нет. Кондуктора нет. Единственное, что отделяет поезд от пропасти, — ваша команда.',
          'Пробирайтесь через движущиеся вагоны, тяните нужные рычаги и молитесь, что перерезали правильный провод. Второго шанса не будет.',
          'Высокоинтенсивный триллер о Диком Западе для команд, умеющих сохранять хладнокровие.',
        ],
      },
    },
  },
  {
    slug: 'depths-of-osiris',
    youtubeId: 'Kt1WQiFVwso',
    title: 'Depths of Osiris',
    year: 2020,
    difficulty: 5,
    difficultyName: 'Ekspertams',
    players: '2 − 6',
    time: '~50 min',
    timeShort: '~50 min',
    poster: '/assets/poster-depths-of-osiris.webp',
    tagline: 'Ten apačioje – kažkas su jumis.',
    description: [
      'Nuotykiai vandenyno dugne.',
      'Jūs ir komanda leisitės į vandenyno gelmes kur neseniai atradote prarastą Ozirio šventyklą ir atgauti legendinį artefaktą. Visur slypi pavojai.',
      'Depths of Osiris – įtempta povandeninės archeologijos istorija įguloms, mėgstančioms tamsą.',
    ],
    tags: ['Po vandeniu', 'Paslaptis', 'Įtampa', 'Komandinis', 'Rykliai'],
    i18n: {
      en: {
        tagline: 'Down there – something is with you.',
        description: [
          'An adventure on the ocean floor.',
          'You and your team descend into the ocean depths, where a lost temple of Osiris was recently discovered, to recover a legendary artifact. Danger lurks everywhere.',
          'Depths of Osiris is a tense underwater-archaeology tale for crews who love the dark.',
        ],
      },
      ru: {
        tagline: 'Там, внизу, — кто-то рядом с вами.',
        description: [
          'Приключение на дне океана.',
          'Вы с командой спускаетесь в океанские глубины, где недавно обнаружили затерянный храм Осириса, чтобы вернуть легендарный артефакт. Опасность подстерегает повсюду.',
          'Depths of Osiris — напряжённая история подводной археологии для команд, любящих темноту.',
        ],
      },
    },
  },
  {
    slug: 'space-station-tiberia',
    youtubeId: 'DBWe9lacAps',
    title: 'Space Station Tiberia',
    year: 2017,
    difficulty: 4,
    difficultyName: 'Sudėtinga',
    players: '2 − 6',
    time: '~50 min',
    timeShort: '~50 min',
    poster: '/assets/poster-space-station-tiberia.webp',
    tagline: 'Artėja meteoritas. Ar spėsite išgelbėti pasaulį?',
    description: [
      'Didžiulis meteoritas tuoj trenksis į žemę.',
      'Laiko liko visai negaug. Turite nuskristi į kosminę stotį ir ją suremontuoti.',
      'Tu ir tavo komanda yra vienintelė viltis išgelbėti žemę.',
    ],
    tags: ['Mokslinė fantastika', 'Kosmosas', 'Galvosūkis', 'Paslaptis'],
    i18n: {
      en: {
        tagline: 'A meteor is approaching. Can you save the world in time?',
        description: [
          'A massive meteor is about to strike the Earth.',
          'There\'s very little time left. You must fly to the space station and repair it.',
          'You and your team are the only hope to save the Earth.',
        ],
      },
      ru: {
        tagline: 'Приближается метеорит. Успеете ли спасти мир?',
        description: [
          'Огромный метеорит вот-вот врежется в Землю.',
          'Времени почти не осталось. Вы должны долететь до космической станции и починить её.',
          'Вы и ваша команда — единственная надежда спасти Землю.',
        ],
      },
    },
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
