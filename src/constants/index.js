import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import number1 from '../assets/number-1.png';
import number2 from '../assets/number-2.png';
import number3 from '../assets/number-3.png';
import number4 from '../assets/number-4.png';
import number5 from '../assets/number-5.png';
import number6 from '../assets/number-6.png';
import number7 from '../assets/number-7.png';
import number8 from '../assets/number-8.png';
import number9 from '../assets/number-9.png';
import number10 from '../assets/number-10.png';
import number11 from '../assets/number-11.png';
import number12 from '../assets/12.png';
import number13 from '../assets/13.png';
import number14 from '../assets/14.png';
import number15 from '../assets/15.png';
import number16 from '../assets/16.png';
import number17 from '../assets/17.png';
import number18 from '../assets/18.png';
import number19 from '../assets/19.png';
import number20 from '../assets/20.png';
import placeholder from '../assets/jk-placeholder-image.png';

import projectplan from '../assets/documents/projectplan.docx.pdf';
import o_stakeholders from '../assets/documents/onderzoeksvraag-stakeholders.pdf';
import o_mogelijkheden from '../assets/documents/onderzoeksvraag-mogelijkheden.pdf';
import o_implementatiewijze from '../assets/documents/onderzoeksvraag-implementatiewijze.pdf';
import o_specifieke_eisen from '../assets/documents/onderzoeksvraag-specifieke-eisen.pdf';
import o_herbruikbare_functionaliteiten from '../assets/documents/onderzoeksvraag-herbruikbaar.pdf';

import demo_redis_base from '../assets/videos/demo-redis-in-base.mp4';
import demo_redis_raw from '../assets/videos/demo-redis-raw.mp4';
import demo_redis_retry_poc from '../assets/videos/demo-redis-retry-poc.mp4';



export const navLinks = [
  {
    id: "opdracht",
    title: "Opdracht",
  },
  {
    id: "tijdlijn",
    title: "Tijdlijn",
  },
  {
    id: "producten",
    title: "Producten",
  },
  {
    id: "retrospectives",
    title: "Retrospectives",
  },
  {
    id: "documenten",
    title: "Documenten",
  },
  {
    id: "competence",
    title: "Competentie profiel",
  },
];

const services = [
  {
    title: "Requirements Research",
    icon: web,
  },
  {
    title: "Redis Courses",
    icon: mobile,
  },
  {
    title: "PHP Package Development",
    icon: backend,
  },
  {
    title: "React Frontend Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project proposal",
    company_name: "Analyse",
    icon: number1,
    iconBg: "#383E56",
    date: "Februari 2023",
    points: [
      "Projectproposal uitgewerkt volgens de richtlijnen van school.",
      "Projectproposal opgeleverd voor feedback aan stagebegeleider.",
    ],
    file: projectplan,
  },
  {
    title: "Onderzoek naar stakeholders",
    company_name: "Analyse",
    icon: number2,
    iconBg: "#383E56",
    date: "Februari 2023",
    points: [
      "Onderzoek gedaan naar de stakeholders van het project.",
      "De beoogde stakeholders geplaatst binnen de stakeholder matrix (Beïnvloeder, sleutelfiguur, toeschouwer, geïnteresseerde).",
    ],
    file: o_stakeholders,
  },
  {
    title: "Onderzoek naar mogelijkheden Laravel Horizon",
    company_name: "Analyse",
    icon: number3,
    iconBg: "#383E56",
    date: "Februari 2023",
    points: [
      "Onderzoek gedaan naar de huidige mogelijkheden die Laravel Horizon biedt.",
      "Onderzoek gedaan naar hoe deze mogelijkheden aansluiten bij requirements om werk te besparen.",
    ],
    file: o_mogelijkheden,
  },
  {
    title: "Redis cursus",
    company_name: "Redis University | RU101: Introduction to Redis Data Structures",
    icon: number4,
    iconBg: "#383E56",
    date: "Februari 2023",
    points: [
      "Certificaat behaald voor Redis cursus: RU101: Introduction to Redis Data Structures.",
      "https://university.redis.com/certificates/ffa5d2358dc04fc6a5ecfaf8cb84d56f",
    ],
  },
  {
    title: "Redis cursus",
    company_name: "Redis University | RU203: Querying, Indexing, and Full-Text Search",
    icon: number5,
    iconBg: "#383E56",
    date: "Februari 2023",
    points: [
      "Certificaat behaald voor Redis cursus: RU203: Querying, Indexing, and Full-Text Search.",
      "https://university.redis.com/certificates/27a465db9fa043e9a5b51da188f13094",
    ],
  },
  {
    title: "Redis cursus",
    company_name: "Redis University | RU204: Storing, Querying, and Indexing JSON at Speed",
    icon: number6,
    iconBg: "#383E56",
    date: "Maart 2023",
    points: [
      "Certificaat behaald voor Redis cursus: RU204: Storing, Querying, and Indexing JSON at Speed.",
      "https://university.redis.com/certificates/e68cdafceec84a70b6baed5361a007f9",
    ],
  },
  {
    title: "Redis cursus",
    company_name: "Redis University | RU301: Running Redis at Scale",
    icon: number7,
    iconBg: "#383E56",
    date: "Maart 2023",
    points: [
      "Certificaat behaald voor Redis cursus: RU301: Running Redis at Scale.",
      "https://university.redis.com/certificates/914f8f0a55b0489c80457746f83341d8",
    ],
  },
  {
    title: "Test driven development course.",
    company_name: "Analyse",
    icon: number8,
    iconBg: "#383E56",
    date: "Maart 2023",
    points: [
      "Scrumble werkt test driven, dit betekent dat ik dit proces binnen Laravel(PHP) eigen moet maken.",
      "Ik heb hiervoor een test driven development cursus gevolgd van",
      "Course: https://course.testdrivenlaravel.com/.",
    ],
  },
  {
    title: "Laravel course: Laravel 8 from scratch",
    company_name: "Analyse",
    icon: number9,
    iconBg: "#383E56",
    date: "Maart 2023",
    points: [
      "Scrumble werkt met het PHP framework genaamd Laravel, om hier vaardig in te worden heb ik op aanraden van de lead developers een cursus gevolgd.",
      "Deze cursus heer Laravel 8 From Scratch en is van Laracasts:",
      "Course: https://laracasts.com/series/laravel-8-from-scratch/",
    ],
  },
  {
    title: "Affiniteit krijgen met het base project van Scrumble (Supercharge)",
    company_name: "Analyse",
    icon: number10,
    iconBg: "#383E56",
    date: "Maart 2023",
    points: [
      "Scrumble heeft een base project waarop alle systemen gebouwd worden, om een goede stage door te lopen moet ik affiniteit krijgen met dit systeem.",
      "Ik heb de tijd gekregen om een kleine test casus uit te werken om bekend te worden met de codestyle en structuur van Scrumble.",
    ],
  },
  {
    title: "Testapplicatie rauwe redis queries.",
    company_name: "Workshop",
    icon: number11,
    iconBg: "#383E56",
    date: "Maart 2023",
    points: [
      "Ik heb een kleine test applicatie gemaakt om te testen hoe Redis database calls precies werken.",
      "Video: Demo van de rauwe redis queries.",
    ],
    video: demo_redis_raw
  },
  {
    title: "Redis in base project implementeren.",
    company_name: "Workshop",
    icon: number12,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Ik heb Redis functionaliteiten gerealiseerd binnen het base project om te kijken of het mogelijk was.",
      "Video: Demo van implementatie van redis functionaliteiten in base project.",
    ],
    video: demo_redis_base
  },
  {
    title: "Proof of Concept: Retry jobs from front-end.",
    company_name: "Workshop",
    icon: number13,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Ik heb een proof of concept gemaakt om aan te tonen dat jobs vanuit de front-end opnieuw aangeroepen kunnen worden.",
      "Video: Demo van de proof of concept.",
    ],
    video: demo_redis_retry_poc
  },
  {
    title: "Onderzoek naar beste implementatiewijze voor de Orbit applicatie",
    company_name: "Analyse, advies, workshop",
    icon: number14,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Ik heb gekeken naar wat de beste implementatiewijze zou zijn voor Orbit.",
      "Dit heb ik gedaan door middel van bibliotheek onderzoek en performance testing van proof of concept.",
    ],
    file: o_implementatiewijze,
  },
  {
    title: "Onderzoek naar specifieke eisen van de developers",
    company_name: "Analyse",
    icon: number15,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Ik heb met dit onderzoek geprobeerd om de requirements van het project specifieker te maken.",
      "De eindconclusie is dat de requirements eigenlijk nog steeds open zijn voor interpretatie en deze tijdens de realisatiefase verder vastgesteld worden.",
    ],
    file: o_specifieke_eisen,
  },
  {
    title: "Onderzoek naar herbruikbare functionaliteiten van Laravel Horizon",
    company_name: "Analyse",
    icon: number16,
    iconBg: "#383E56",
    date: "Mei 2023",
    points: [
      "Laravel Horizon is een tool die ontwikkeld is voor het bijhouden van Laravel jobs en queues.",
      "Ik heb in de sourcecode gecontroleerd welke functionaliteiten ik kan hergebruiken/moet aanpassen.",
    ],
    file: o_herbruikbare_functionaliteiten,
  },
  {
    title: "Proof of Concept: Get redis keys & group by tag.",
    company_name: "Workshop",
    icon: number17,
    iconBg: "#383E56",
    date: "Mei 2023",
    points: [
      "Voor deze proof of concept ben ik bezig geweest met een zo snel mogelijk werkende functie schrijven om redis keys op te halen en deze te groeperen op specifieke delen.",
      "Dit lukte, het advies wat hieruit voortkwam was het zorgen voor een abstracte job class zodat ik Redis keys zelf kan opbouwen in plaats van dat het een gewone UUID is.",
        "Video: In de video zie je een klein voorbeeld van de gegroepeerde Redis keys en de snelheid van de functie (Dit gaat om het ophalen en groeperen van rond de 400.000 keys."
    ],
    // video: demo_redis_query_speed,
  },
  {
    title: "Proof of Concept: Package development",
    company_name: "Workshop",
    icon: number18,
    iconBg: "#383E56",
    date: "Mei 2023",
    points: [
      "Uit de voorgaande analyse en proof of concepts is een gesprek voortgekomen waarin ik samen met de opdrachtgever heb besloten om een package te ontwikkelen in plaats van een overkoepelende applicatie.",
      "Video: In de video zie je een voorbeeld van een in een project geïmplementeerde package variant van Orbit.",
    ],
    // video: demo_orbit_package_poc
  },
  {
    title: "Orbit - Final product v0.1",
    company_name: "Workshop",
    icon: number19,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Een eerste unfinished versie van mijn final product genaamd Orbit.",
      "Video: In de video zie je een package met daarin de eerste basisfunctionaliteiten verwerkt.",
    ],
    // video: demo_orbit_final_v_0,
  },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number20,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
];

const retrospectives = [
  {
    retrospectiveGood: "- Achter veel theorie van Horizon gekomen en veel mogelijkheden ontdekt. - Zelfstandig werken, vragen juist formuleren voordat ik deze stel. ",
    retrospectiveBad: "- Late reacties vanuit docent waardoor ik vastzat. (Achteraf had ik genoeg kunnen doen, m.b.t. Laravel Horizon onderzoeken). - Trage opstart van begrip van de base project, maar dit gaat steeds beter.",
    date: "15-02-2023",
  },
  {
    retrospectiveGood: "- Courses snel en goed afgerond. - Heel snel om kunnen zetten naar een werkend proof of concept met basisfunctionaliteiten.",
    retrospectiveBad: "- Te veel on-the-go gewerkt door te weinig planning vooraf. - Begonnen met testdriven development maar dit niet doorgezet.",
    date: "02-03-2023",
  },
  {
    retrospectiveGood: "- Een backlog gemaakt in JIRA. - Analyseonderzoeken gedaan en ondertussen ook aan een proof of concept aan het werken.",
    retrospectiveBad: "- Te weinig software ontwikkeld vind ik zelf. - Gedemotiveerd omdat ik een slecht begrip van package development had.",
    date: "15-03-2023",
  },
  {
    retrospectiveGood: "- Veel kennis opgedaan over de mogelijkheden en beperkingen door mijn laatste proof of concept. - Veel goede moed gekregen voor de realisatiefase van het final product.",
    retrospectiveBad: "- Backlog was te onduidelijk dus deze moet ik opnieuw gaan opstellen.",
    date: "20-04-2023",
  }
];

const projects = [
  {
    name: "PoC 1",
    description:
        "xxx.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_raw
  },
  {
    name: "PoC 2",
    description:
        "xxx.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_base
  },
  {
    name: "PoC 3",
    description:
        "xxx.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_retry_poc,
  },
  {
    name: "PoC 3",
    description:
        "xxx.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_retry_poc,
  },
];
const documents = [
  {
    name: "Projectplan",
    description:
        "Het projectplan is een document waarin ik de context en het doel van het project omschrijf. Waarbij de laatste versie van het document gedateerd is op 14-02-2023",
    tags: [
      {
        name: "analyse",
        color: "blue-text-gradient",
      },
      {
        name: "requirements",
        color: "green-text-gradient",
      },
      {
        name: "done",
        color: "pink-text-gradient",
      },
    ],
    file: projectplan,
  },
  {
    name: "Onderzoek naar stakeholders",
    description:
        "De vraag die geleid heeft tot dit document was: Wie zijn de stakeholders voor het Laravel Horizon Insights project?",
    tags: [
      {
        name: "analyse",
        color: "blue-text-gradient",
      },
      {
        name: "stakeholders",
        color: "green-text-gradient",
      },
      {
        name: "done",
        color: "pink-text-gradient",
      },
    ],
    file: o_stakeholders,
  },
  {
    name: "Onderzoek naar mogelijkheden Laravel Horizon",
    description:
        "De vraag die geleid heeft tot dit document was: Wie zijn de stakeholders voor het Laravel Horizon Insights project?",
    tags: [
      {
        name: "analyse",
        color: "blue-text-gradient",
      },
      {
        name: "stakeholders",
        color: "green-text-gradient",
      },
      {
        name: "done",
        color: "pink-text-gradient",
      },
    ],
    file: o_mogelijkheden,
  },
  {
    name: "Onderzoek naar de beste implementatiewijze",
    description:
        "De vraag die geleid heeft tot dit document was: Wat is de beste implementatiewijze voor de Orbit applicatie?",
    tags: [
      {
        name: "analyse",
        color: "blue-text-gradient",
      },
      {
        name: "implementatie",
        color: "green-text-gradient",
      },
      {
        name: "done",
        color: "pink-text-gradient",
      },
    ],
    file: o_implementatiewijze,
  },
];

export { services, technologies, experiences, retrospectives, projects, documents };
