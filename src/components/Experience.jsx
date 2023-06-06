import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import Modal from 'react-modal';
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ReactPlayer from "react-player";

const ExperienceCard = ({ experience }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black',
            backdrop: 'black',
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.8)',
        },
    };

    return (
        <>
        {experience.phase ? (
                <VerticalTimelineElement
                    contentStyle={{
                        background: "#4b3e8b",
                        color: "#fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                    date={experience.date}
                    iconStyle={{ background: experience.iconBg }}
                    icon={
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                style={{background: '#4b3e8b', borderRadius: '90px'}}
                                src={experience.icon}
                                alt={experience.company_name}
                                className="w-[100%] h-[100%] object-contain"
                            />
                        </div>
                    }
                >
                    <div>
                        <h3 className="text-white text-[24px] font-bold">{experience.phase}</h3>
                    </div>
                    <h1>{experience.description}</h1>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {experience.points.map((point, index) => (
                            <li
                                key={`experience-point-${index}`}
                                className="text-white-100 text-[14px] pl-1 tracking-wider"
                            >
                                {point.toString().includes("https://") ? (
                                    point.toString().includes("Course:") ? (
                                        <a href={point.replace("Course: ", "")} style={{ color: "cyan" }}>
                                            Link naar cursus
                                        </a>
                                    ) : (
                                        <a href={point} style={{ color: "cyan" }}>
                                            Link naar certificaat
                                        </a>
                                    )
                                ) : (
                                    point
                                )}
                            </li>
                        ))}
                    </ul>
                </VerticalTimelineElement>
            ) :
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
                {experience.file ? (
                    <p
                        className="text-[#915EFF] text-[16px] font-semibold"
                        style={{ margin: 0 }}
                    >
                        <a
                            href={experience.file}
                            download={experience.title}
                            target="_blank"
                        >
                            Document: {experience.title}
                        </a>
                    </p>
                ) : null}
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point.toString().includes("https://") ? (
                            point.toString().includes("Course:") ? (
                                <a href={point.replace("Course: ", "")} style={{ color: "cyan" }}>
                                    Link naar cursus
                                </a>
                            ) : (
                                <a href={point} style={{ color: "cyan" }}>
                                    Link naar certificaat
                                </a>
                            )
                        ) : (
                            point
                        )}
                    </li>
                ))}
                {experience.points.map((point, index) =>
                    point.toString().includes("Video:") ? (
                        <>
                          <li>
                            <h1 style={{ color: "cyan" }} onClick={openModal} className="cursor-pointer text-info">
                                Klik hier voor de demo video.
                            </h1>
                          </li>
                        </>
                    ) : null
                )}
            </ul>


            <Modal isOpen={modalOpen} contentLabel={experience.title} style={customStyles} onRequestClose={closeModal}>
                <h2>Demo Video voor: {experience.title}</h2>
                <ReactPlayer playing controls url={experience.video}/>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal>
        </VerticalTimelineElement>}
            </>
    );
};


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Wat heb ik tot nu toe gedaan?</p>
        <h2 className={styles.sectionHeadText}>Stage Tijdlijn.</h2>
          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-[1100px] leading-[30px]"
          >
              Hieronder vind je een tijdlijn van mijn stageperiode bij Scrumble. Bijgevoegd zijn de documenten die hiervoor gemaakt zijn, deze kun je downloaden door op de paarse tekst achter "Document:" te klikken.
          </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout={'1-column-left'}>
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
                            style={{fontSize: 30, textAlign: "center",background: "lightblue", borderRadius: 90}}
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
