import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-100 h-100 object-contain z-10"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introductie</p>
        <h2 className={styles.sectionHeadText}>Opdracht.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[1100px] leading-[30px]"
      >
          <h3 className={'pb-3'} style={{fontSize: '24px', color: 'white', borderBottom: '3px solid white', marginBottom: '10px'}}>Opdrachtomschrijving</h3>
          Het project betreft de ontwikkeling van een Laravel Horizon Insights Applicatie voor het softwarebedrijf Scrumble, deze tool zal verder op deze website ook wel Orbit genoemd worden. Het doel van het project is om een tool te ontwikkelen waarmee Scrumble inzicht kan krijgen in de fouten en problemen die optreden bij het uitvoeren van complexe asynchrone logica in hun applicaties. Momenteel maakt Scrumble gebruik van Laravel Horizon, een first-party package voor Laravel, om jobs in een queue te zetten en asynchroon af te handelen. Echter, wanneer er fouten optreden, is het lastig om inzicht te krijgen in wat er precies misgaat en waar dit gebeurt. De ontwikkelde applicatie moet automatische meldingen genereren en gedetailleerd inzicht bieden in de fouten en problemen die zich voordoen bij het uitvoeren van jobs met Laravel Horizon. Deze opdracht is een exploratieve opdracht dit houdt in dat ik een groot deel van de stageperiode bezig zal zijn met het onderzoeken en valideren van mogelijkheden.
          <br/>
          <br/>
          <h3 className={'pb-3'} style={{fontSize: '24px', color: 'white', borderBottom: '3px solid white', marginBottom: '10px'}}>Doelstelling</h3>
          Het doel van de stageopdracht is onderzoeken wat de mogelijkheden en limitaties van Laravel Horizon zijn en hierop instelen. Het uiteindelijke project is een applicatie die Scrumble in staat stelt om automatische meldingen te ontvangen en gedetailleerd inzicht te krijgen in de fouten en problemen die optreden bij het uitvoeren van jobs met Laravel Horizon. Het doel is niet om deze applicatie persé af te hebben maar om onderzocht te hebben wat er mogelijk is zodat er in de toekomst ontwikkeld kan worden met zekerheid. De applicatie moet in ieder geval de volgende functionaliteiten bieden:
          <br/>
          <br/>
            <ul>
                <li>• Het tonen van een overzicht van de jobs in de queue, de afgeronde jobs en de jobs die fout zijn gegaan.</li>
                <li>• Het verstrekken van gedetailleerde informatie over de fouten, inclusief de locatie waar de fouten zijn opgetreden.</li>
                <li>• Mogelijkheid om vanuit de front-end jobs opnieuw uit te voeren.</li>
                <li>• Onderzoeken of het mogelijk is om gegevens uit meerdere Laravel Horizon-instanties samen te voegen en te analyseren óf dat het beter is om het via een package implementatie te doen.</li>
                <li>• Het automatisch sturen van alerts wanneer er fouten optreden bij het uitvoeren van jobs met bepaalde threshholds.</li>
                <li>• Het bieden van een gebruiksvriendelijke interface voor het beheren en configureren van deze alerts.</li>
            </ul>
          <br/>
          Met het realiseren van deze doelstelling wil Scrumble een beter inzicht krijgen in de prestaties en problemen van hun applicaties die gebruikmaken van deze complexe asynchrone jobs en queues logica. Dit zal hen helpen om efficiënter te kunnen werken, problemen sneller op te lossen en de kwaliteit van hun diensten te verbeteren.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "opdracht");
