import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import MyTable from "./MyTable.jsx";

const Evaluatie = () => {


  return (
    <div
      className={`xl:mt-12 w-full flex flex-col-reverse overflow-hidden test-glow2`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Evaluatie & professionele ontwikkeling</p>
        <h3 className={styles.sectionHeadText}>Semesteroverzicht.</h3>
          <h3>Mijn evaluatie....</h3>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Evaluatie, "evaluatie");
