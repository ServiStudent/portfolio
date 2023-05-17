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
       Mijn stageopdracht heeft als einddoel een PHP Package inclusief React front-end te realiseren die ervoor zorgt dat er meer inzicht komt in de Laravel queues en jobs.
          Om dit te kunnen realiseren zal ik eerst een analyse moeten uitvoeren om achter de specifieke requirements te komen.
          <br/>
          <br/>
          Vervolgens moet ik kennis over Redis gaan
          opdoen want dit is de database die gebruikt wordt om de queues en jobs in op te slaan. Vervolgens moet ik kennis opdoen met de programmeertaal PHP en in het specifiek
          het Laravel framework. Ik moet met deze taal een package ontwikkelen die geïmporteerd kan worden in alle andere projecten.
          <br/>
          <br/>
          Ook moet ik kennis opdoen van de programmeertaal
          Javascript en in het specifiek het React framework. Ik moet met deze taal een frontend ontwikkelen die alles vanuit de PHP package op een mooie manier visualiseert.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "opdracht");
