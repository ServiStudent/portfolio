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
import warning from '../assets/warning.png';
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
import number21 from '../assets/21.png';
import number22 from '../assets/22.png';
import number23 from '../assets/23.png';
import number24 from '../assets/24.png';
import number25 from '../assets/25.png';
import number26 from '../assets/26.png';
import number27 from '../assets/27.png';
import number28 from '../assets/28.png';
import number29 from '../assets/29.png';
import number30 from '../assets/30.png';
import placeholder from '../assets/jk-placeholder-image.png';

import projectplan from '../assets/documents/projectplan.docx.pdf';
import o_stakeholders from '../assets/documents/onderzoeksvraag-stakeholders.pdf';
import o_mogelijkheden from '../assets/documents/onderzoeksvraag-mogelijkheden.pdf';
import o_implementatiewijze from '../assets/documents/onderzoeksvraag-implementatiewijze.pdf';
import o_specifieke_eisen from '../assets/documents/onderzoeksvraag-specifieke-eisen.pdf';
import o_herbruikbare_functionaliteiten from '../assets/documents/onderzoeksvraag-herbruikbaar.pdf';

import t_cursussen from '../assets/documents/toelichting-cursussen.pdf';
import t_affiniteit from '../assets/documents/toelichting-affiniteit.pdf';

import demo_redis_base from '../assets/videos/demo-redis-in-base.mp4';
import demo_redis_raw from '../assets/videos/demo-redis-raw.mp4';
import demo_redis_query_speed from '../assets/videos/demo-redis-query-speed.mp4';
import demo_redis_retry_poc from '../assets/videos/demo-redis-retry-poc.mp4';
import demo_orbit_package_poc from '../assets/videos/demo-orbit-package-poc.mp4';



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
    icon: warning,
    description: "De analysefase was heel belangrijk tijdens de stageopdracht omdat de opdracht exploratief was. De requirements stonden nog niet vast of waren nog niet gevalidereerd. Een samenvatting van zaken die ik tijdens de analyse en vooronderzoeksfase heb uitgevoerd:",
    phase: "Analyse/vooronderzoek",
    points: [
        "Project proposal: Voor zowel school als de opdrachtgever was het belangrijk om de context en scope van het project te onderzoeken, dit vind je terug in dit document.",
        "Onderzoeken: Ik heb verschillende onderzoeken uitgevoerd binnen deze fase, de onderzoeken kun je hieronder in de tijdlijn terugvinden."
    ],
  },
  {
    title: "Project proposal",
    company_name: "Analyse",
    icon: number1,
    iconBg: "#383E56",
    date: "Februari 2023",
    points: [
      "Ik heb het projectproposal uitgewerkt volgens de richtlijnen van school om goed de scope van de opdracht uit te werken.",
      "Dit projectprosal heb ik opgeleverd voor feedback aan stagebegeleider en deze feedback heb ik in dit document verwerkt.",
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
      "Het was nodig om een onderzoek te doen naar de stakeholders voor dit project, omdat ik op basis van de stakeholders een betere inschatting kan maken van de priotisering van requirements.",
      "Ik heb hiervoor experts geïnterviewd en gevraagd om beoogde stakeholders te omschrijven en plaatsen binnen de stakeholder matrix (Beïnvloeder, sleutelfiguur, toeschouwer, geïnteresseerde)."
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
      "Het was nodig om onderzoek te doen naar de huidige mogelijkheden van de Laravel Horizon package, zodat ik kan inventariseren welke functionaliteiten ik kan hergebruiken en welke ik kan aanpassen om ze te laten werken zoals gewenst.",
      "De vervolgstappen van dit onderzoek zijn dus het inventariseren van herbruikbare functionaliteiten en onderzoeken hoe ik bestaande functionaliteiten zodanig aan kan passen om de requirements te bereiken.",
        "De onderzoeken die hieruit voortgekomen zijn zie je verderop in deze tijdlijn terugkomen."
    ],
    file: o_mogelijkheden,
  },
  {
    icon: warning,
    description: "Tijdens de analyse- en vooronderzoeksfase waren cursussen een belangrijk onderdeel. Dit was relevant omdat ik hierdoor kan leren werken op de manier van Scrumble en aan kwaliteitseisen kan voldoen. Ook was het belangrijk om de werkwijze van Scrumble eigen te maken en te leren werken met de technieken die zij gebruiken, omdat de applicatie die uiteindelijk opgeleverd wordt, moet voldoen aan hun kwaliteitseisen. Daarnaast is het volgens Scrumble belangrijk om een diepere kennisbasis te hebben van de context voordat je daadwerkelijk begint met realiseren om zo efficiënt mogelijk te werken.  Hieronder een kleine omschrijving van waarom ik de cursus heb gevolgd:",
    phase: "Analyse/vooronderzoek: Cursussen",
    points: [
      "Redis cursussen: Scrumble werkt met Laravel Horizon die jobs op een asynchrone queue zet. Deze jobs worden opgeslagen in een Redis database, om te kunnen werken met deze jobs moet ik dus een volledig begrip hebben van hoe Redis in elkaar steekt. Ik heb er samen met mijn stagebegeleider voor gekozen om 4 Redis courses te doen en we hebben er 1 gemarkeerd als optioneel. De 4 uitgevoerden staan hieronder met daarbij een redenering. De optionele cursus was: Redis Security. Deze heb ik uiteindelijk niet uitgevoerd omdat we deze nog niet nodig achtte in deze fase van de opdracht.",
      "TDD Cursus: Scrumble werkt volgens de test driven development werkwijze, dit zorgt ervoor dat de kwaliteit van de code gewaarborgd blijft tijdens het maken van functionaliteiten en dat tevens gecontroleerd wordt of bestaande functionaliteiten nog werken.",
      "Affiniteit krijgen met Supercharge: Supercharge is het basisproject van Scrumble. Omdat mijn applicatie moet werken samen met applicaties die gebouwd zijn vanuit dit basisproject is het belangrijk om affinitiet te krijgen met dit project. In een document wat hieronder volgt omschrijf ik wat ik heb gedaan en wat voor relevante punten Supercharge precies inhoudt.",
      "Laravel cursus: Scrumble gebruikt voor backend development het Laravel framework, dit is een PHP framework. Mijn stagebegeleider en ik hebben samen vastgesteld dat ik nog niet genoeg ervaring met Laravel had om een correcte applicatie te ontwikkelen.",
      "Onderzoeken: Ik heb om requirements te valideren en verder uit te zoeken verschillende onderzoeken gedaan. Deze onderzoeken staan hieronder op de tijdlijn aangegeven.",
    ],
    file: t_cursussen,
    title: "Toelichting cursussen"
  },
  {
    title: "Redis cursus",
    company_name: "Redis University | RU101: Introduction to Redis Data Structures",
    icon: number4,
    iconBg: "#383E56",
    date: "Februari 2023",
    points: [
        "De applicatie die ik uiteindelijk moet realiseren werkt nauw samen met Redis. Redis is namelijk de door Scrumble gekozen queue driver. Dit houdt in dat Redis de database is waarin alles wordt opgeslagen met betrekking tot jobs en queues. Zelf had ik nog geen ervaring met werken met Redis en daarom leek het de stagebegeleider en mij verstandig om een cursus over de basisprincipes van Redis te volgen.",
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
        "De applicatie die ik uiteindelijk ga ontwikkelen, moet queries doen naar de Redis database om de juiste data op te halen. De manier hoe ik deze data moet ophalen is afhankelijk van het datatype, deze cursus gaat dieper in op aanpasbare verzoeken die ik naar de Redis database kan sturen om uiteindelijk een goede dataset terug te krijgen.",
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
        "De applicatie die ik moet ontwikkelen heeft als non-functional requirement dat de performance zo optimaal mogelijk moet zijn. Om deze requirement ter harte te nemen hebben mijn stagebegeleider en ik ervoor gekozen dat ik cursus kan volgen. Deze cursus gaat dieper in op de methodes om data op een zo efficiënt mogelijke manier op te slaan en op te halen uit een Redis Database.",
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
        "Met dezelfde reden als de hierboven uitgewerkte cursus, hebben mijn stagebegeleider en ik bepaald dat deze cursus handig kan zijn in het geval dat ik het systeem als microservice ga realiseren. In deze cursus leer je namelijk zaken als data persistence bij opschalen en hoe opschalen met Redis databases in zijn werk gaat.",
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
      "Scrumble werkt al een lange tijd volgens de \"Test Driven Development\" -methodiek. Dit houdt in dat er tests geschreven worden waarin de uitkomst van functionaliteiten vooraf bepaald worden, vervolgens wordt er een functie ontwikkeld die voldoet aan deze uitkomst. Hierdoor werk je dus naar een uitkomst toe in plaats van on-the-go. Deze cursus is gericht op TDD in Laravel met het gebruik van het Laravel/PHP test framework PHPunit. Dit sluit naadloos aan bij de stack die Scrumble hanteert.",
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
      "Ondanks dat Scrumble momenteel applicaties ontwikkeld in Laravel 9 en 10, is deze cursus nog steeds relevant binnen de onboarding van Scrumble. Ik had nog niet genoeg ervaring met PHP/Laravel om een volledig werkende applicatie op te zetten en daarom was het relevant om deze cursus uit te voeren.",
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
      "Tijdens de analyse- en vooronderzoeksfase was het eigen maken van de Scrumble werkwijze een belangrijk onderdeel. Een van de zaken waar ik affiniteit mee moet krijgen is het basisproject genaamd Supercharge. Supercharge is een project wat door de jaren dat Scrumble bestaat heen gebouwd is. Hierdoor kan Scrumble elke applicatie bouwen vanaf een bepaalde basis, waar iedereen binnen het bedrijf mee bekend is. Mijn applicatie moet een connectie maken met de applicaties die zijn voortgebouwd op dit basisproject. Daarom is het relevant dat ik affiniteit krijg met het basisproject.",
      "Om te weten hoe de huidige applicaties met jobs en queues omgaan, moet ik affiniteit krijgen met Supercharge. Een van de grootste doelstellingen is ontdekken hoe mijn applicatie gaat interacteren met applicaties die gebouwd zijn op Supercharge, zodat ik vanuit daar weer een proof of concept kan ontwikkelen met hoe de interactie tussen de 2 gerealiseerd kan worden.",
    ],
    file: t_affiniteit,
  },
  {
    icon: warning,
    description: "De validatiefase is eigenlijk een verlengstuk van de analysefase. Tijdens deze validatiefase controleer ik, door middel van proof of concepts, of wat ik van plan ben te realiseren op basis van de requirements ook haalbaar is. Hieruit komt een advies richting mij als developer waarin aangegeven staat welke van de initiële requirements haalbaar zijn en welke niet. Bij degene die haalbaar zijn koppel ik terug naar bewijslast waarom deze haalbaar zijn. Bij degene die niet haalbaar zijn koppel ik terug naar bewijslast waaruit blijkt dat deze niet haalbaar zijn. ",
    phase: "Validatiefase",
    points: [
        "Onderzoeken: Ik heb tijdens deze fase verschillende onderzoeken gedaan om de requirements te toetsen of verder te specificeren. Verderop in de tijdlijn vind je deze onderzoeken terug met daarbij een uitleg en samengevatte conclusie.",
        "Proof of concepts: Tijdens de validatiefase heb ik steeds proof of concepts gemaakt en deze gepresenteerd aan de opdrachtgever, hierbij hebben wij samen besproken of de requirement op deze manier vervuld kan worden of niet."
    ],
  },
  {
    title: "Testapplicatie rauwe redis queries.",
    company_name: "Workshop",
    icon: number11,
    iconBg: "#383E56",
    date: "Maart 2023",
    points: [
      "Om te ontdekken hoe ik met Redis zou kunnen werken in een programmeeromgeving heb ik een proof of concept gemaakt waarbij ik ging controleren of ik items kon opslaan, ophalen en met behulp van parameters op kan halen uit/naar een Redis database. Ik heb de keuze gemaakt om deze proof of concept te ontwikkelen in een taal waar ik al iets meer thuis in was dus het is een Node.js applicatie geworden. Op de video die je in de tijdlijn kunt vinden zie je uitgewerkte code om bovenstaande functionaliteiten te bereiken. In deze video zie je dus de uitwerken van functionaliteiten waarbij je kunt zien dat mijn Node.js applicatie een connectie maakt met de Redis database en gegevens ophaalt.",
        "Door het maken van dit proof of concept heb ik bewezen dat ik kan werken met een Redis connectie. Ik heb tevens ontdekt dat je een externe package nodig hebt om een verbinding te leggen met Redis databases.",
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
      "Om te onderzoeken of ik het Redis kan gebruiken binnen de huidige stack van Scrumble ga ik een proof of concept maken waarbij ik een aantal Redis functionaliteiten binnen het basisproject van Scrumble (Supercharge) ga implementeren. In de video zie je dat ik een tabel heb met hierin een redisconnectie (Dat is in deze context de prefix van de jobs in de redis database). Vervolgens zie je dat ik RedisInsights open, dit is een soort database monitor voor Redis databases, ik open deze om aan te tonen dat er daadwerkelijk jobs in de database staan. Ik open vervolgens 1 van de redis connecties om daarmee alle jobs die beginnen met deze prefix op te halen door middel van een Redis call die ik in de backend geschreven heb. In de video laat ik zien dat je vanuit de front end een job kan zoeken binnen de tabel met gebruik van front end filtering. Tevens laat ik in deze video zien dat ik door middel van een zelfgeschreven functie de gegevens van een specifieke job kan ophalen en omvormen naar leesbare frontend.  Ook zie je bovenin het scherm 3 kaarten met daarop wat statistieken, deze haal ik tevens op met een zelfgeschreven Redis call in de backend. Verderop in de video laat ik zien dat deze kaarten ook elke 10 seconden gerefreshed worden door mijn queue worker aan te zetten die jobs gaat afhandelen.",
        "Door het maken van deze proof of concept heb ik gebruikgemaakt van de Predis package om backend calls naar de Redis database te maken. Ook heb ik geleerd om een queue worker aan te zetten. Verder heb ik geleerd hoe ik door middel van Axios deze backend calls kan maken vanuit de frontend en hoe ik door middel van React useEffect een call op een interval kan zetten. Daarnaast heb ik leren werken met de Scrumble quick table (Dit is een react bootstrap table met betere typing checks en filtering opties)",
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
      "Ik heb een proof of concept gemaakt waarbij ik door middel van het gebruik van bestaande Laravel Horizon functionaliteiten jobs opnieuw kan proberen vanuit de front-end wanneer deze gefaald zijn. Dit was een requirement omdat dit in de huidige Laravel Horizon frontend ook mogelijk was, echter wilde de developers niet steeds van frontend wisselen én kunnen ze op de manier zoals getoond in mijn proof of concept dus filteren door middel van de tabel en vervolgens een specifieke gevonden job opnieuw uitvoeren.",
        "Ik ben erachter gekomen hoe ik bestaande Laravel Horizon functionaliteiten kan hergebruiken in mijn frontend om zo aan de requirements vanuit Scrumble te voldoen en de user experience beter te maken. Ik kan nu door middel van zelfgeschreven backend jobs ophalen, deze filteren in de frontend en een betreffende job opnieuw starten. Ik kan ook alle jobs met een bepaalde prefix opnieuw starten met een knop die je in de video aan de bovenkant ziet.",
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
    video: demo_redis_query_speed,
  },
  {
    title: "Proof of Concept: Package development",
    company_name: "Workshop",
    icon: number18,
    iconBg: "#383E56",
    date: "Mei 2023",
    points: [
      "Uit de voorgaande analyse en proof of concepts is een gesprek voortgekomen waarin ik samen met de opdrachtgever heb besloten om een package te ontwikkelen in plaats van een overkoepelende applicatie.",
      "Video: In de video zie je een voorbeeld van een in het base project geïmplementeerde package variant van Orbit. De front-end van de package is te bereiken via een admin route, de backend zit ook achter een admin middleware.",
    ],
    video: demo_orbit_package_poc
  },
  {
    icon: warning,
    description: "De adviesfase geeft vanuit de voorgaande fases een aantal handvaten om mee te werken in de realisatiefase. Hierbij kun je denken aan het aangeven welke eigen logica er gerealiseerd moet worden, wat er vanuit Laravel Horizon hergebruikt gaat worden en wat er aangepast moet worden. Dit advies wordt zowel geuit naar de opdrachtgever als naar de developer van de package (In dit geval ben ik dat dus).",
    phase: "Adviesfase",
    points: [
      "Adviesdocumenten: Er zijn verschillende adviesdocumenten geschreven over herbruikbare functionaliteiten of bijvoorbeeld zelf te schrijven functionaliteiten. Je zult de documenten hieronder in de tijdlijn terugvinden.",
      "Ontwerpschetsen: Er zijn verschillende ontwerpen gemaakt. Je kunt hierbij denken aan grove UI schetsen tot aan een positioneringsontwerp. Je zult de documenten hieronder in de tijdlijn terugvinden.",
    ],
  },
  {
    title: "Adviesdocument: Veranderen van Laravel Horizon 'Job Payload' [Bestand komt nog]",
    company_name: "Advies",
    icon: number19,
    iconBg: "#383E56",
    date: "Juni 2023",
    points: [
      "Om optimale performance te waarborgen breng ik een advies uit over het veranderen van de Job Payload vanuit Laravel Horizon.",
      "Dit adviesrapport omvat tevens adviezen over de onderhoudbaarheid.",
        "Bestand komt nog"
    ],
    // file: a_job_payload,
  },{
    title: "Ontwerpdocument: workflows usecases",
    company_name: "Advies",
    icon: number19,
    iconBg: "#383E56",
    date: "Juni 2023",
    points: [
      "Om optimale performance te waarborgen breng ik een advies uit over het veranderen van de Job Payload vanuit Laravel Horizon.",
      "Dit adviesrapport omvat tevens adviezen over de onderhoudbaarheid.",
      "Bestand komt nog"
    ],
    // file: a_job_payload,
  },
  {
    icon: warning,
    description: "Tijdens de realisatiefase wordt er met inachtneming van alle voorgaande fases een applicatie ontwikkeld om de doelstellingen van deze opdracht te vervullen. Vastgesteld is dat het volledig afmaken van deze applicatie niet gaat lukken. Om de opdracht op professionele wijze af te sluiten heb ik met mijn opdrachtgever gesproken over het doorontwikkelen en afspraken gemaakt voor deze doorontwikkeling.",
    phase: "Realisatiefase",
    points: [
      "Final products: Je zult hieronder in de tijdlijn een final product zien met een demo. Dit final product is een versie 0, ofwel een versie die niet gereleased gaat worden.",
        "Testresultaten: Het final product moet nog getest worden, dit zal gaan doormiddel van usertesting. De beoogde eindgebruikers gaan ontworpen usecases doorlopen en geven feedback door middel van een excelsheet. Deze feedback wordt uiteindelijk verwerkt in een volgende versie van de applicatie.",
    ],
  },
  {
    title: "Orbit - Final product v0.1 [Demo komt nog]",
    company_name: "Workshop",
    icon: number20,
    iconBg: "#383E56",
    date: "Juni 2023",
    points: [
      "Een eerste unfinished versie van mijn final product genaamd Orbit.",
      "Video: [Video komt nog] In de video zie je een package met daarin de eerste basisfunctionaliteiten verwerkt.",
    ],
    // video: demo_orbit_final_v_0,
  },
  {
    title: "Testresultaten: Orbit - Final product v0.1 [Document komt nog]",
    company_name: "Workshop",
    icon: number21,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Validatiefase van eerste versie van Orbit.",
      "Document komt nog.",
    ],
  },
  {
    icon: warning,
    description: "Ik heb met de opdrachtgever afgesproken om het systeem indien dit niet compleet afgerond is, verder door te ontwikkelen. Hiervoor hebben we professionele afspraken gemaakt en hebben we een definition of done vastgesteld. Definition of done:",
    phase: "Afronding stage",
    points: [
      "Een composer package die geïmporteerd kan worden in projecten die draaien op Laravel 9 of 10.",
        "De gevalideerde requirements volledig uitgewerkt.",
        "De uitgewerkte requirements zijn door verschillende testrondes heengekomen.",
        "De UI van de applicatie hoeft niet perfect te zijn, als de UX maar in orde is."
    ],
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
    name: "PoC 1: Testapplicatie rauwe redis queries.",
    description:
        "Ik heb een kleine test applicatie gemaakt om te testen hoe Redis database calls precies werken.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Poc",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_raw
  },
  {
    name: "PoC 2: Redis in base project implementeren.",
    description:
        "Ik heb Redis functionaliteiten gerealiseerd binnen het base project om te kijken of het mogelijk was.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_base
  },
  {
    name: "PoC 3: Retry jobs from front-end.",
    description:
        "Ik heb een proof of concept gemaakt om aan te tonen dat jobs vanuit de front-end opnieuw aangeroepen kunnen worden.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_retry_poc
  },
  {
    name: "PoC 4: Get redis keys & group by tag.",
    description:
        "Voor deze proof of concept ben ik bezig geweest met een zo snel mogelijk werkende functie schrijven om redis keys op te halen en deze te groeperen op specifieke delen.\n" +
        "Dit lukte, het advies wat hieruit voortkwam was het zorgen voor een abstracte job class zodat ik Redis keys zelf kan opbouwen in plaats van dat het een gewone UUID is.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_redis_query_speed
  },
  {
    name: "PoC 5: Package development.",
    description:
        "Uit de voorgaande analyse en proof of concepts is een gesprek voortgekomen waarin ik samen met de opdrachtgever heb besloten om een package te ontwikkelen in plaats van een overkoepelende applicatie.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: placeholder,
    source_code_link: "https://github.com/",
    video: demo_orbit_package_poc
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
  {
    name: "Wat zijn de mogelijk herbruikbare functionaliteiten vanuit Laravel Horizon?",
    description:
        "Laravel Horizon is een tool die ontwikkeld is voor het bijhouden van Laravel jobs en queues.\n" +
        "Ik heb in de sourcecode gecontroleerd welke functionaliteiten ik kan hergebruiken/moet aanpassen.",
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
    file: o_herbruikbare_functionaliteiten,
  },
  {
    name: "Onderzoek naar specifieke eisen van de developers",
    description:
        "Ik heb met dit onderzoek geprobeerd om de requirements van het project specifieker te maken.",
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
    file: o_specifieke_eisen,
  },
];

export { services, technologies, experiences, retrospectives, projects, documents };
