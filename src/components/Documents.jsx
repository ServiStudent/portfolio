import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { documents } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {Document, Page} from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"


const DocumentCard = ({
                         index,
                         name,
                         description,
                         tags,
                         image,
                         file,
                     }) => {

    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{ max: 0, scale: 1, speed: 0 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <div
                        className="w-full h-full object-cover rounded-2xl"
                    >
                        <Document file={file}>
                            <Page pageNumber={1} renderTextLayer={false} />
                        </Document>
                    </div>
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <a href={file} download={name} target='_blank'>
                        <div
                            onClick={''}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github}
                                alt="github"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        </a>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Documents = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}></p>
                <h2 className={styles.sectionHeadText}>Documenten.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Hieronder vindt je documenten die ik heb gemaakt tijdens mijn stage, met een kleine toelichting erbij.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {documents.map((project, index) => (
                    <DocumentCard key={`project-${index}`} index={index} {...project}/>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Documents, "documenten");
