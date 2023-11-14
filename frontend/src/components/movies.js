const movies = [
  {
    adult: false,
    backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Parallèlement au monde réel, il existe Barbie Land, un monde parfait où les poupées Barbie vivent joyeusement, persuadées d'avoir rendu les filles humaines heureuses. Mais un jour, une Barbie commence à se poser des questions et à devenir humaine. Sur les conseils d'une Barbie étrange, elle part pour le monde réel afin de retrouver la fille à laquelle elle appartenait afin de pouvoir retrouver sa perfection. Dans sa quête, elle est accompagnée par un Ken fou amoureux d'elle qui va également trouver un sens à sa vie dans le monde réel…",
    popularity: 438.672,
    poster_path: "/oQjqjIQ46VVa8Q80y3FfLrPXoK3.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 7.2,
    vote_count: 5780,
  },
  {
    adult: false,
    backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
    genre_ids: [10751, 16, 14, 10402, 35, 12],
    id: 354912,
    original_language: "en",
    original_title: "Coco",
    overview:
      "Depuis déjà plusieurs générations, la musique est bannie dans la famille de Miguel. Un vrai déchirement pour le jeune garçon dont le rêve ultime est de devenir un musicien aussi accompli que son idole, Ernesto de la Cruz. Bien décidé à prouver son talent, Miguel, par un étrange concours de circonstances, se retrouve propulsé dans un monde étonnant et coloré lié aux célébrations des ancêtres. Là, il se lie d’amitié avec Hector, un gentil garçon mais un peu filou sur les bords. Ensemble, ils vont accomplir un voyage extraordinaire qui leur révèlera la véritable histoire qui se cache derrière celle de la famille de Miguel…",
    popularity: 362.393,
    poster_path: "/sZqcEV3KhDITHlUBmyj1a3RRvT9.jpg",
    release_date: "2017-10-27",
    title: "Coco",
    video: false,
    vote_average: 8.2,
    vote_count: 18100,
  },
  {
    adult: false,
    backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    genre_ids: [16, 10751, 12, 14, 35],
    id: 502356,
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "Alors qu’ils tentent de réparer une canalisation souterraine, Mario et son frère Luigi, tous deux plombiers, se retrouvent plongés dans un nouvel univers féerique à travers un mystérieux conduit. Mais lorsque les deux frères sont séparés, Mario s’engage dans une aventure trépidante pour retrouver Luigi. Dans sa quête, il peut compter sur l’aide du champignon Toad, habitant du Royaume Champignon, et les conseils avisés, en matière de techniques de combat, de la Princesse Peach, guerrière déterminée à la tête du Royaume. C’est ainsi que Mario réussit à mobiliser ses propres forces pour aller au bout de sa mission.",
    popularity: 344.563,
    poster_path: "/ahMxyHMSJXingQr4yJBMzMU9k42.jpg",
    release_date: "2023-04-05",
    title: "Super Mario Bros, le film",
    video: false,
    vote_average: 7.8,
    vote_count: 7104,
  },
  {
    adult: false,
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    genre_ids: [878, 12, 28],
    id: 447365,
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 3",
    overview:
      "Peter Quill, encore sous le choc d'une terrible perte, doit rallier son équipe et se lancer dans un mission risquée et palpitante pour défendre l'univers et protéger Rocket. Pendant ce temps, une nouvelle force imprévisible menace de faire tomber les Gardiens pour de bon.",
    popularity: 247.187,
    poster_path: "/aaGDsYYjltMxrwgs4qnHse4qlGX.jpg",
    release_date: "2023-05-03",
    title: "Les Gardiens de la Galaxie : Volume 3",
    video: false,
    vote_average: 8,
    vote_count: 5236,
  },
  {
    adult: false,
    backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Une dizaine d'années se sont écoulés depuis les précédents évènements survenus sur Pandora. Jake Sully et Neytiri sont devenus parents. Leur vie idyllique, proche de la nature, est menacée lorsque la « Ressources Développement Administration », dangereuse organisation non-gouvernementale, est de retour sur Pandora. Contraints de quitter leur habitat naturel, Jake et sa famille se rendent sur les récifs, où ils pensent trouver asile. Mais ils tombent sur un clan, les Metkayina, aux mœurs différentes des leurs...",
    popularity: 241.139,
    poster_path: "/hYeB9GpFaT7ysabBoGG5rbo9mF4.jpg",
    release_date: "2022-12-14",
    title: "Avatar : La Voie de l'eau",
    video: false,
    vote_average: 7.6,
    vote_count: 10092,
  },
  {
    adult: false,
    backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Après les événements liés à l'affrontement avec Mysterio, l'identité secrète de Spider-Man a été révélée. Il est poursuivi par le gouvernement américain, qui l'accuse du meurtre de Mysterio, et traqué par les médias. Cet événement a également des conséquences terribles sur la vie de sa petite-amie M.J. et de son meilleur ami Ned. Désemparé, Peter Parker demande alors de l'aide au docteur Strange. Ce dernier lance un sort pour que tout le monde oublie que Peter est Spider-Man. Mais les choses ne se passent pas comme prévu, et cette action altère la stabilité de l'espace-temps. Cela ouvre le « multivers », un concept terrifiant dont ils ne savent quasiment rien...",
    popularity: 212.338,
    poster_path: "/3SyG7dq2q0ollxJ4pSsrqcfRmVj.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man : No Way Home",
    video: false,
    vote_average: 8,
    vote_count: 18468,
  },
  {
    adult: false,
    backdrop_path: "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
    genre_ids: [12, 14, 16, 35, 10751, 28],
    id: 315162,
    original_language: "en",
    original_title: "Puss in Boots: The Last Wish",
    overview:
      "Le Chat Potté découvre que sa passion pour l'aventure et son mépris du danger ont fini par lui coûter cher : il a épuisé huit de ses neuf vies, et en a perdu le compte au passage. Afin de retomber sur ses pattes notre héros velu se lance littéralement dans la quête de sa vie. Il s'embarque dans une aventure épique aux confins de la Forêt Sombre afin de dénicher la mythique Etoile à vœu, seule susceptible de lui rendre ses vies perdues. Mais quand il ne vous en reste qu’une, il faut savoir faire profil bas, se montrer prudent et demander de l’aide. C’est ainsi qu’il se tourne vers son ancienne partenaire et meilleure ennemie de toujours : l’ensorcelante Kitty Pattes De Velours. Le Chat Potté et la belle Kitty vont être aidés dans leur quête, à leur corps bien défendant, par Perro, un corniaud errant et galleux à la langue bien pendue et d’une inaltérable bonne humeur.",
    popularity: 207.882,
    poster_path: "/kO35BwoKHyP1VRulxZJVeEl5dvS.jpg",
    release_date: "2022-12-07",
    title: "Le Chat Potté 2 : la dernière quête",
    video: false,
    vote_average: 8.3,
    vote_count: 6573,
  },
  {
    adult: false,
    backdrop_path: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    genre_ids: [12, 28, 878],
    id: 299536,
    original_language: "en",
    original_title: "Avengers: Infinity War",
    overview:
      "Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.",
    popularity: 193.78,
    poster_path: "/hSfuKPtyEryeFzapZ8UgZd4aESu.jpg",
    release_date: "2018-04-25",
    title: "Avengers : Infinity War",
    video: false,
    vote_average: 8.3,
    vote_count: 27909,
  },
  {
    adult: false,
    backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
    genre_ids: [16, 35, 10751, 14],
    id: 568124,
    original_language: "en",
    original_title: "Encanto",
    overview:
      "Dans un mystérieux endroit niché au cœur des montagnes de Colombie, la fantastique famille Madrigal habite une maison enchantée dans une cité pleine de vie, un endroit merveilleux appelé Encanto. L’Encanto a doté chacun des enfants de la famille d’une faculté magique allant d’une force surhumaine au pouvoir de guérison. Seule Mirabel n’a reçu aucun don particulier. Mais lorsque la magie de l’Encanto se trouve menacée, la seule enfant ordinaire de cette famille extraordinaire va peut-être se révéler leur unique espoir…",
    popularity: 173.568,
    poster_path: "/75s7inwv1WHRuySyjA6p0oMaz9Z.jpg",
    release_date: "2021-10-13",
    title: "Encanto, la fantastique famille Madrigal",
    video: false,
    vote_average: 7.6,
    vote_count: 8724,
  },
  {
    adult: false,
    backdrop_path: "/wHytVsfAZsVDAcABd6iQGmE2j29.jpg",
    genre_ids: [53, 28, 80],
    id: 156022,
    original_language: "en",
    original_title: "The Equalizer",
    overview:
      "McCall, un homme qui pense avoir rangé son passé mystérieux derrière lui, se consacre à sa nouvelle vie tranquille. Au moment où il rencontre Teri, une jeune fille sous le contrôle de gangsters russes violents, il décide d'agir. McCall sort ainsi de sa retraite et voit son désir de justice réveillé.",
    popularity: 156.916,
    poster_path: "/tcV0DA04Ug4pHbPZkPZxohoMHCj.jpg",
    release_date: "2014-09-24",
    title: "Equalizer",
    video: false,
    vote_average: 7.3,
    vote_count: 8292,
  },
  {
    adult: false,
    backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    genre_ids: [28, 12, 878],
    id: 505642,
    original_language: "en",
    original_title: "Black Panther: Wakanda Forever",
    overview:
      "La Reine Ramonda, Shuri, M’Baku, Okoye et les Dora Milaje luttent pour protéger leur nation des ingérences d’autres puissances mondiales après la mort du roi T’Challa. Alors que le peuple s’efforce d’aller de l’avant, nos héros vont devoir s’unir et compter sur l’aide de la mercenaire Nakia et d’Everett Ross pour faire entrer le royaume du Wakanda dans une nouvelle ère. Mais une terrible menace surgit d’un royaume caché au plus profond des océans : Talokan.",
    popularity: 150.18,
    poster_path: "/rNTKgJdJ8tyfpiUug5ittECK8CS.jpg",
    release_date: "2022-11-09",
    title: "Black Panther : Wakanda Forever",
    video: false,
    vote_average: 7.2,
    vote_count: 5596,
  },
  {
    adult: false,
    backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    genre_ids: [12, 14],
    id: 671,
    original_language: "en",
    original_title: "Harry Potter and the Philosopher's Stone",
    overview:
      "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir.",
    popularity: 148.092,
    poster_path: "/fbxQ44VRdM2PVzHSNajUseUteem.jpg",
    release_date: "2001-11-16",
    title: "Harry Potter à l'école des sorciers",
    video: false,
    vote_average: 7.9,
    vote_count: 25563,
  },
  {
    adult: false,
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    genre_ids: [18, 80],
    id: 238,
    original_language: "en",
    original_title: "The Godfather",
    overview:
      "La Seconde Guerre mondiale vient de s'achever. À New York, le « parrain » Don Corleone, l'un des chefs respectés de la mafia, se sent vieillir. Il refuse de s'adapter à son temps et de se lancer, comme ses pairs, dans le trafic de drogue. Une frilosité qui entrave la bonne marche des affaires des autres « familles » et qui lui vaut d'être la cible d'un attentat. Don Corleone survit à ses blessures, mais reste très diminué. Mike, son plus jeune fils, qui jusque-là se tenait à l'écart des affaires de son père, devient le plus dévoué de ses héritiers. Plus efficace que ses frères, Sonny et Fredo, il venge son père et organise l'élimination de ses adversaires…",
    popularity: 147.777,
    poster_path: "/wnDNKCeBQzioXYQrXcSyrmRHVxf.jpg",
    release_date: "1972-03-14",
    title: "Le Parrain",
    video: false,
    vote_average: 8.7,
    vote_count: 18905,
  },
  {
    adult: false,
    backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    genre_ids: [28, 12, 878],
    id: 436270,
    original_language: "en",
    original_title: "Black Adam",
    overview:
      "Près de 5000 ans après avoir été doté des pouvoirs tout puissants des dieux égyptiens – et emprisonné très rapidement après – Black Adam est libéré de sa tombe terrestre, prêt à faire régner sa forme unique de justice dans le monde moderne.",
    popularity: 147.648,
    poster_path: "/hYALH5NPM7xk2XQd2J8wrfmliIW.jpg",
    release_date: "2022-10-19",
    title: "Black Adam",
    video: false,
    vote_average: 7,
    vote_count: 5553,
  },
  {
    adult: false,
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    genre_ids: [12, 878, 28],
    id: 299534,
    original_language: "en",
    original_title: "Avengers: Endgame",
    overview:
      "Après leur défaite face au Titan Thanos qui dans le film précédent s'est approprié toutes les pierres du Gant de l'infini, les Avengers et les Gardiens de la Galaxie ayant survécu à son claquement de doigts qui a pulvérisé « la moitié de toute forme de vie dans l'Univers », Captain America, Thor, Bruce Banner, Natasha Romanoff, War Machine, Tony Stark, Nébula et Rocket, vont essayer de trouver une solution pour ramener leurs coéquipiers disparus et vaincre Thanos en se faisant aider par Ronin alias Clint Barton, Captain Marvel et Ant-Man.",
    popularity: 143.56,
    poster_path: "/wF7jv3x51hXgkl7t5KHePuRjXc8.jpg",
    release_date: "2019-04-24",
    title: "Avengers : Endgame",
    video: false,
    vote_average: 8.3,
    vote_count: 24025,
  },
  {
    adult: false,
    backdrop_path: "/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg",
    genre_ids: [10749, 18],
    id: 537915,
    original_language: "en",
    original_title: "After",
    overview:
      "Depuis son plus jeune âge, Tessa était promise à un avenir tout tracé : une vie rangée, une brillante carrière, un mariage tranquille avec son fiancé de toujours. Jusqu’à sa rencontre avec Hardin à son arrivée à l’université. Grossier, provocateur, cruel, c’est le garçon le plus détestable qu’elle ait jamais croisé. Et pourtant, ce bad boy tatoué pourrait bien lui faire perdre tout contrôle…",
    popularity: 132.565,
    poster_path: "/qYDYA3jkSagHKjeKFmBPveBvGvn.jpg",
    release_date: "2019-04-11",
    title: "After : Chapitre 1",
    video: false,
    vote_average: 7.1,
    vote_count: 7848,
  },
  {
    adult: false,
    backdrop_path: "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    genre_ids: [28, 18],
    id: 361743,
    original_language: "en",
    original_title: "Top Gun: Maverick",
    overview:
      "Après avoir été l’un des meilleurs pilotes de chasse de l'Aéronavale américaine pendant plus de trente ans, Pete “Maverick\" Mitchell continue à repousser ses limites en tant que pilote d'essai. Il refuse de monter en grade, car cela l’obligerait à renoncer à voler. Il est chargé de former un détachement de jeunes diplômés de l’école Top Gun pour une mission spéciale qu’aucun pilote n'aurait jamais imaginée. Lors de cette mission, Maverick rencontre le lieutenant Bradley “Rooster” Bradshaw, le fils de son défunt ami, le navigateur Nick “Goose” Bradshaw. Face à un avenir incertain, hanté par ses fantômes, Maverick va devoir affronter ses pires cauchemars au cours d’une mission qui exigera les plus grands sacrifices.",
    popularity: 132.557,
    poster_path: "/kTh1s6I6yUyk2OGiRoGkDTYTS6K.jpg",
    release_date: "2022-05-24",
    title: "Top Gun : Maverick",
    video: false,
    vote_average: 8.3,
    vote_count: 7718,
  },
  {
    adult: false,
    backdrop_path: "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
    genre_ids: [80, 9648, 53],
    id: 414906,
    original_language: "en",
    original_title: "The Batman",
    overview:
      "Durant les deux années passées à arpenter les rues en tant que Batman, Bruce Wayne s'est aventuré au cœur des ténèbres de Gotham City. Disposant de seulement quelques alliés de confiance au sein du monde corrompu qu'est l'élite de la ville, le justicier solitaire s'est imposé comme l'unique incarnation de la vengeance parmi ses concitoyens. Lorsqu'un meurtrier s'en prend aux plus grandes personnalités de Gotham à l'aide de machinations sadiques, le plus grand détective du monde se lance dans une enquête dans la pègre en suivant des indices mystérieux, croisant ainsi Selina Kyle, alias Catwoman, Oswald Cobblepot, alias le Pingouin, Carmine Falcone et Edward Nashton, alias le Riddler. Alors que les pistes et les plans du criminel s'éclaircissent, Batman doit tisser de nouveaux liens, démasquer le coupable et rétablir la justice à Gotham City, depuis trop longtemps empoisonnée par l'abus de pouvoir et la corruption.",
    popularity: 131.772,
    poster_path: "/t9JGg10CW1DzXEdWL54ewkUko6N.jpg",
    release_date: "2022-03-01",
    title: "The Batman",
    video: false,
    vote_average: 7.7,
    vote_count: 8741,
  },
  {
    adult: false,
    backdrop_path: "/xWT5F1DNxciNLEMXRl49iq8zvN7.jpg",
    genre_ids: [14, 16, 10751],
    id: 9479,
    original_language: "en",
    original_title: "The Nightmare Before Christmas",
    overview:
      "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles », vit dans la ville d'Halloween.  En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween.  Mais le terrible épouvantail, lassé de cette vie répétitive et monotone, décide de partir. C'est alors qu'il découvre la ville de Noël.  Après cette aventure, il revient chez lui, avec une idée originale en tête : et si cette année, c'étaient les habitants de la ville d'Halloween qui allaient fêter Noël ?",
    popularity: 131.695,
    poster_path: "/e5hgZBkL1kvY0fGPixZD0468VIA.jpg",
    release_date: "1993-10-09",
    title: "L'Étrange Noël de monsieur Jack",
    video: false,
    vote_average: 7.8,
    vote_count: 8666,
  },
  {
    adult: false,
    backdrop_path: "/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg",
    genre_ids: [12, 14],
    id: 674,
    original_language: "en",
    original_title: "Harry Potter and the Goblet of Fire",
    overview:
      "La quatrième année à l’école de Poudlard est marquée par le « Tournoi des trois sorciers ». Les participants sont choisis par la fameuse « Coupe de feu » qui est à l’origine d’un scandale. Elle sélectionne Harry Potter alors qu’il n’a pas l’âge légal requis ! Accusé de tricherie et mis à mal par une série d’épreuves physiques de plus en plus difficiles, ce dernier sera enfin confronté à Celui dont on ne doit pas prononcer le nom, Lord V.",
    popularity: 131.67,
    poster_path: "/hBak1pn5pbI4ycAbrgMMn1YI7P1.jpg",
    release_date: "2005-11-16",
    title: "Harry Potter et la Coupe de feu",
    video: false,
    vote_average: 7.8,
    vote_count: 19414,
  },
];

export default movies;
