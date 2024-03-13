import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../lib";

const Project = () => {
  return (
    <section className=" max-sm:mt-10 relative">
      <motion.div
        initial={{ height: 1000 }}
        animate={{ height: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full origin-top lg:bg-gradient-to-r from-gray-900 to-gray-950 md:bg-gradient-to-r bg-purple-950
         fixed top-0  max-sm:left-0 z-20  max-sm:opacity-80 overflow-hidden"
      >
        <p
          className="absolute lg:hidden md:hidden block left-[50%] top-[50%] translate-y-[-50%]
        translate-x-[-50%]  text-2xl text-white font-main font-bold"
        >
          Day.webdev
        </p>
      </motion.div>
      <p className="font-bold uppercase text-xl sticky max-sm:bg-gradient-to-r/80 from-gray-900 to-gray-950 p-2 top-0 backdrop-blur-sm z-10 lg:hidden md:hidden">
        Projects
      </p>
      <div className="flex flex-col lg:gap-16 gap-8 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
