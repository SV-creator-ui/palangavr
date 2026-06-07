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
    tagline: 'Ugniagesių iškvietimas miške virsta pagrobimu į ateivių erdvėlaivį.',
    description: [
      'Tiriate keistus įvykius vietiniame miške – ir suprantate, kad tai ne legendos: nusileido NSO.',
      'Pagrobti į skraidančią lėkštę, turite suvaldyti šiurpią ateivių technologiją ir pabėgti, kol infekcija nepasiglemžė ir jūsų.',
      'Pakeliui išgelbėkite katiną Viskį. Siaubo atmosferos VR nuotykis drąsiems, mėgstantiems įtampą.',
    ],
    tags: ['Logika', 'Galvosūkis', 'Ateiviai', 'Pabėgimas', 'VR', 'Veiksmas', 'Šiurpuliukai', 'Komandinis'],
    i18n: {
      en: {
        tagline: 'A firefighter callout in the woods turns into an abduction aboard an alien craft.',
        description: [
          'You investigate strange happenings in a local forest – and realise it is no legend: a UFO has landed.',
          'Abducted onto the flying saucer, you must master horrifying alien technology and escape before the infection claims you too.',
          'Rescue Whiskers the cat along the way. A horror-tinged VR adventure for the brave who love tension.',
        ],
      },
      ru: {
        tagline: 'Вызов пожарных в лесу превращается в похищение на корабль пришельцев.',
        description: [
          'Вы расследуете странные события в местном лесу — и понимаете, что это не легенды: приземлилось НЛО.',
          'Похищенные на летающую тарелку, вы должны овладеть жуткой технологией пришельцев и сбежать, пока инфекция не забрала и вас.',
          'По пути спасите кота Виски. VR-приключение с атмосферой ужаса для смелых, любящих напряжение.',
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
    tagline: 'Trys mokytojo išbandymai, skiriantys mokinį nuo tikro nindzės.',
    description: [
      'Senovės Japonijoje tampate nindzės mokiniu ir turite įveikti tris išbandymus.',
      'Kovos išbandymas su kardais ir šurikenais, Dvasios išbandymas su magija – ir galiausiai dvikova su pačiu mokytoju.',
      'Šeimai draugiškas, kupinas veiksmo ir magijos – puikus pirmas VR nuotykis vaikams ir suaugusiems.',
    ],
    tags: ['Japonija', 'Kova', 'Kardai', 'Veiksmas', 'Magija', 'Boso kova', 'Pradedantiesiems'],
    i18n: {
      en: {
        tagline: 'Three trials set by your master stand between you and becoming a true ninja.',
        description: [
          'In ancient Japan you become a ninja apprentice who must pass three trials.',
          'A Trial of Combat with swords and shuriken, a Trial of Spirit using magic – and finally a duel with your master himself.',
          'Family-friendly and full of action and magic – a perfect first VR adventure for kids and adults alike.',
        ],
      },
      ru: {
        tagline: 'Три испытания учителя отделяют вас от звания настоящего ниндзя.',
        description: [
          'В древней Японии вы становитесь учеником ниндзя и должны пройти три испытания.',
          'Испытание Боя с мечами и сюрикенами, испытание Духа с магией — и наконец поединок с самим учителем.',
          'Дружелюбное к семье, полное экшена и магии — идеальное первое VR-приключение для детей и взрослых.',
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
    tagline: 'Pirma darbo diena S.R.F. – ir serverį jau naikina virusas.',
    description: [
      'Naujausias ir moderniausias mūsų VR pabėgimo kambarys.',
      'Skaitmeninio perkėlimo technologija įmes jus tiesiai į sistemos branduolį – suraskite kenkėjišką kodą ir atkurkite tvarką.',
      'Greito tempo neoninis trileris, kuriame logika kaunasi su chaosu. Lengva pradėti, gilu pasinerti.',
    ],
    tags: ['Kibernetika', 'Hakeriai', 'Veiksmas', 'Komandinis', 'Galvosūkis'],
    i18n: {
      en: {
        tagline: 'Your first day at S.R.F. – and the server is already under viral attack.',
        description: [
          'Our newest and most modern VR escape room.',
          'Digital transference technology drops you straight into the system core – find the malicious code and restore order.',
          'A fast-paced neon thriller where logic battles chaos. Easy to start, deep to dive into.',
        ],
      },
      ru: {
        tagline: 'Первый рабочий день в S.R.F. — а сервер уже атакует вирус.',
        description: [
          'Наша новейшая и самая современная VR-комната побега.',
          'Технология цифрового переноса отправит вас прямо в ядро системы — найдите вредоносный код и восстановите порядок.',
          'Неоновый триллер в быстром темпе, где логика сражается с хаосом. Легко начать, трудно оторваться.',
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
    tagline: 'Įkalinti bokšto viršūnėje, kai alkani drakonai jau artėja.',
    description: [
      'Tampate naujomis aukomis: drakonai skrieja prie bokšto pasisotinti, o jūs užrakinti jo viršūnėje.',
      'Ištrūkite iš kameros, virkite eliksyrus alchemiko laboratorijoje, valdykite balistą ir nugalėkite ugnimi alsuojantį drakoną.',
      'Spalvingas, šeimai draugiškas fantastinis nuotykis – idealus pirmas žingsnis į VR.',
    ],
    tags: ['Fantastika', 'Magija', 'Pabėgimas', 'Pradedantiesiems'],
    i18n: {
      en: {
        tagline: 'Locked at the top of the tower as hungry dragons close in.',
        description: [
          'You are the next sacrifice: dragons swoop toward the tower to feed, and you are locked at its top.',
          'Break out of your cell, brew potions in the alchemy lab, work a ballista and defeat a fire-breathing dragon.',
          'A colourful, family-friendly fantasy adventure – the perfect first step into VR.',
        ],
      },
      ru: {
        tagline: 'Заперты на вершине башни, пока голодные драконы приближаются.',
        description: [
          'Вы — следующая жертва: драконы летят к башне насытиться, а вы заперты на её вершине.',
          'Вырвитесь из камеры, варите эликсиры в лаборатории алхимика, управляйте баллистой и победите огнедышащего дракона.',
          'Красочное семейное фэнтези-приключение — идеальный первый шаг в VR.',
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
    tagline: 'Pamišęs grafas, pavojingi padarai ir dvaras, iš kurio reikia ištrūkti.',
    description: [
      'Pamišęs grafas Malumas dvare atlieka tamsius eksperimentus su pavojingais padarais.',
      'Tyrinėkite dvaro koridorius ir slaptą laboratoriją, spręskite mįsles ir kovokite ginklu bei lanku.',
      'Šiurpokas, bet ne per baisus nuotykis tiems, kurie nori švelnaus išgąsčio ir paslapčių.',
    ],
    tags: ['Baimė', 'Paslaptis', 'Pabėgimas', 'Galvosūkis'],
    i18n: {
      en: {
        tagline: 'A mad count, dangerous creatures and a manor you must escape.',
        description: [
          'The mad count Malum runs dark experiments with dangerous creatures inside his manor.',
          'Explore the manor halls and a hidden laboratory, solve puzzles and fight with gun and bow.',
          'A spooky but not-too-scary adventure for those who want a gentle fright and a few mysteries.',
        ],
      },
      ru: {
        tagline: 'Безумный граф, опасные твари и усадьба, из которой нужно сбежать.',
        description: [
          'Безумный граф Малум проводит в усадьбе тёмные эксперименты с опасными существами.',
          'Исследуйте коридоры усадьбы и тайную лабораторию, решайте головоломки и сражайтесь с оружием и луком.',
          'Жутковатое, но не слишком страшное приключение для тех, кто хочет лёгкого испуга и тайн.',
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
    tagline: 'Prakeikti piratai, paversti žmonėmis-žuvimis, ieško vienintelio vaisto.',
    description: [
      'Prakeiksmas pavertė jūsų įgulą padarais – nuimti jį galima tik radus Krakeno širdį šventykloje saloje.',
      'Kaukitės kardais ir patrankomis su priešų laivais, o tada įveikite mįslių kupiną senovės labirintą.',
      'Energingas, visoms amžiaus grupėms tinkantis nuotykis, kuriame veiksmas susitinka su galvosūkiais.',
    ],
    tags: ['Piratai', 'Paslaptis', 'Galvosūkis', 'Nuotykis'],
    i18n: {
      en: {
        tagline: 'Cursed pirates turned into fish-men search for the only cure.',
        description: [
          'A curse has turned your crew into creatures – the only cure is the Kraken heart hidden in an island temple.',
          'Battle enemy ships with swords and cannons, then conquer an ancient labyrinth full of puzzles.',
          'An energetic adventure for all ages, where action meets brain-teasers.',
        ],
      },
      ru: {
        tagline: 'Проклятые пираты, превращённые в людей-рыб, ищут единственное лекарство.',
        description: [
          'Проклятие превратило вашу команду в существ — снять его можно, лишь найдя сердце Кракена в храме на острове.',
          'Сражайтесь с вражескими кораблями мечами и пушками, а затем пройдите древний лабиринт, полный головоломок.',
          'Энергичное приключение для всех возрастов, где экшен встречается с головоломками.',
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
    tagline: 'Dr. Stymas prikrovė traukinį dinamito ir paleido jį į miestą.',
    description: [
      'Iš kalėjimo pabėgęs Dr. Stymas keršija miestui: dinamito prikrautas traukinys lekia tiesiai į jį.',
      'Valdykite kulkosvaidį, lydykite metalą įrankiams, numušinėkite dronus ir prasibraukite per vagonus iki paskutinės dvikovos – kol traukinys nesprogo.',
      'Aukšto intensyvumo Laukinių Vakarų trileris patyrusioms komandoms, mėgstančioms veiksmą ir spaudimą.',
    ],
    tags: ['Vakarai', 'Veiksmas', 'Komandinis', 'Ekspertams'],
    i18n: {
      en: {
        tagline: 'Dr. Steem has packed a train with dynamite and aimed it at the town.',
        description: [
          'Escaped from prison, Dr. Steem takes revenge on the town: a train loaded with dynamite races straight toward it.',
          'Operate a gatling gun, smelt metal into tools, shoot down drones and fight through the carriages to the final showdown – before the train blows.',
          'A high-intensity Wild West thriller for experienced teams who love action and pressure.',
        ],
      },
      ru: {
        tagline: 'Доктор Стим начинил поезд динамитом и направил его на город.',
        description: [
          'Сбежавший из тюрьмы доктор Стим мстит городу: поезд, набитый динамитом, мчится прямо на него.',
          'Управляйте пулемётом, плавьте металл в инструменты, сбивайте дроны и пробивайтесь через вагоны до финальной схватки — пока поезд не взорвался.',
          'Высокоинтенсивный триллер о Диком Западе для опытных команд, любящих экшен и напряжение.',
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
    tagline: 'Vandenyno dugne – prarasta Ozirio šventykla ir besibaigiantis deguonis.',
    description: [
      'Iš povandeninės stoties „Oceanus 5" leidžiatės prie ką tik atrastos Ozirio šventyklos gelmėse.',
      'Valdykite povandeninius laivus, ginkitės nuo ryklių ir įminkite senovės mechanizmų mįsles, kol nesibaigė deguonis.',
      'Įtemptas povandeninis nuotykis patyrusiems – tamsa, paslaptys ir tikras adrenalinas.',
    ],
    tags: ['Po vandeniu', 'Paslaptis', 'Įtampa', 'Komandinis', 'Rykliai'],
    i18n: {
      en: {
        tagline: 'On the ocean floor – a lost Temple of Osiris and a dwindling oxygen supply.',
        description: [
          'From the underwater station Oceanus 5 you descend to the newly discovered Temple of Osiris in the deep.',
          'Pilot submarines, fend off sharks and solve the puzzles of ancient mechanisms before your oxygen runs out.',
          'A tense underwater adventure for the experienced – darkness, mysteries and real adrenaline.',
        ],
      },
      ru: {
        tagline: 'На дне океана — затерянный храм Осириса и тающий запас кислорода.',
        description: [
          'С подводной станции «Oceanus 5» вы спускаетесь к недавно обнаруженному храму Осириса в глубинах.',
          'Управляйте подводными лодками, отбивайтесь от акул и разгадывайте головоломки древних механизмов, пока не закончился кислород.',
          'Напряжённое подводное приключение для опытных — тьма, тайны и настоящий адреналин.',
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
    tagline: 'Iki Žemę pražudysiančio meteorito – 35 minutės.',
    description: [
      'Meteoritų gynybos platformoje „Tiberia" orbitoje sužinote: didžiausias kada nors matytas meteoritas artėja prie Žemės.',
      'Atkurkite stoties energiją, valdykite robotinę ranką ir paleiskite gynybinį lazerį, kad sunaikintumėte grėsmę.',
      'Įtraukiantis, šeimai tinkantis mokslinės fantastikos nuotykis su tikra įtampa.',
    ],
    tags: ['Mokslinė fantastika', 'Kosmosas', 'Galvosūkis', 'Paslaptis'],
    i18n: {
      en: {
        tagline: 'Just 35 minutes until a meteor destroys Earth.',
        description: [
          'Aboard the Tiberia meteor-defence platform in orbit, you learn the largest meteor ever seen is heading for Earth.',
          'Restore the station power, operate a robotic arm and fire the defence laser to destroy the threat.',
          'An engaging, family-friendly sci-fi adventure with real tension.',
        ],
      },
      ru: {
        tagline: 'До метеорита, который уничтожит Землю, — 35 минут.',
        description: [
          'На орбитальной платформе метеоритной защиты «Tiberia» вы узнаёте: крупнейший из когда-либо виденных метеоритов приближается к Земле.',
          'Восстановите энергию станции, управляйте роботизированной рукой и запустите защитный лазер, чтобы уничтожить угрозу.',
          'Увлекательное семейное научно-фантастическое приключение с настоящим напряжением.',
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
