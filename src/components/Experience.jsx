import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
              {point.toString().includes('https://') ? <a href={point} style={{color: "cyan"}}>Link naar certificaat</a> : point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Wat heb ik tot nu toe gedaan?</p>
        <h2 className={styles.sectionHeadText}>Stage Tijdlijn.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
            <VerticalTimelineElement
                contentStyle={{
                    background: "rgba(29,24,54,0)",
                    color: "rgb(255,255,255)",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                iconStyle={{ background: "black" }}
                date={"07 Juli 2023"}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <h1
                            style={{fontSize: 44, textAlign: "center",background: "lightblue", borderRadius: 90}}
                            className="w-[102%] h-[102%] object-contain"
                        >✔️</h1>
                    </div>
                }
            />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "tijdlijn");
