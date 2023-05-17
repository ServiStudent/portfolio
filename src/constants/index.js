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
import projectplan from '../assets/projectplan.docx.pdf';
import onderzoeksvraag1 from '../assets/onderzoeksvraag1.pdf';
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

export const files = [
  {
    title: "Projectplan",
    file: projectplan,
  },
  {
    title: "Onderzoeksvraag: Wat zijn de huidige mogelijkheden die de Laravel Horizon package biedt?",
    file: onderzoeksvraag1,
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
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number8,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number9,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number10,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number11,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number12,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number13,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number14,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number15,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number16,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number17,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number18,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
  // {
  //   title: "Item",
  //   company_name: "Categorie",
  //   icon: number19,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Abc.",
  //     "Def.",
  //   ],
  // },
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
  },
];
const documents = [
  {
    name: "A",
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
];

export { services, technologies, experiences, retrospectives, projects, documents };
