import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";
import {retrospectives} from "../constants";
import StringSplitter from './StringSplitter';

const FeedbackCard = ({
                          index,
                          retrospectiveGood,
                          retrospectiveBad,
                          date,
                      }) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[490px] w-full h-[400px] mb-5"
    >

        <div>
            <div className="mb-4 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                    <p className="text-white font-thin text-[20px]">
                        <span className="blue-text-gradient">@</span> {date}
                    </p>
                </div>

            </div>
            <p className="text-white tracking-wider text-[18px] font-bold"> Wat ging er goed? </p>
            <StringSplitter inputString={retrospectiveGood} />
            <br/>
            <p className="text-white tracking-wider text-[18px] font-bold"> Wat ging er slecht? </p>
            <StringSplitter inputString={retrospectiveBad} />
            <br/>

        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px] test-glow">
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Feedbackmomenten &</p>
                    <h2 className={styles.sectionHeadText}>Retrospectives.</h2>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {retrospectives.map((retrospective, index) => (
                    <FeedbackCard key={retrospective.date} index={index} {...retrospective} />
                ))}
                <h1>Meer retrospectives volgen ..</h1>
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "retrospectives");
