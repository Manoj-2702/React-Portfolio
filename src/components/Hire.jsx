import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { hires } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const HireCard = ({ index, title, icon, description }) => (
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
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="mt-2 text-secondary text-[14px]"> {description} </p>
      </div>
    </motion.div>
  </Tilt>
);

const Hire = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Open To Work</p>
        <h2 className={styles.sectionHeadText}>Why Hire Me ?</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {hires.map((hire, index) => (
          <HireCard key={`${index}`} index={index} {...hire} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hire, "");
