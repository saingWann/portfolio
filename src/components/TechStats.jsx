import React from "react";
import { motion } from "framer-motion";

const TechStats = () => {
  const skills = ["HTML", "CSS", "React", "JavaScript", "NodeJs"];
  const others = [
    "Tailwind",
    "Bootstrap",
    "Redux Toolkit",
    "Git",
    "Framer Motion",
    "API",
  ];
  return (
    <div className=" mt-8 flex gap-6 flex-col">
      <div>
        <p className="font-bold font-main uppercase text-xl mb-3">Skills</p>
        <div className="flex gap-3 flex-wrap">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * index, ease: "easeInOut" }}
              key={index}
              className="lg:px-4 font-body lg:py-2 p-2 lg:text-sm text-xs  bg-gray-200 text-black rounded-xl"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold font-main uppercase text-xl mb-3">Others</p>
        <div className="flex gap-3 flex-wrap">
          {others.map((other, index) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * index, ease: "easeInOut" }}
              key={index}
              className="lg:px-4 lg:py-2 p-2 lg:text-base text-xs font-body bg-gray-200 text-black rounded-xl"
            >
              {other}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStats;
