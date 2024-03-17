import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../lib";

const Project = () => {
  return (
    <section className=" max-sm:mt-10 lg:mb-10 md:mb-10 relative">
      <motion.div
        initial={{ height: 800 }}
        animate={{ height: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.3, 0.7] }}
        className="lg:w-1/2 md:w-1/2 w-full origin-top lg:bg-gradient-to-r from-gray-900 to-gray-950 md:bg-gradient-to-r bg-purple-950
         fixed top-0  max-sm:left-0 z-20  max-sm:opacity-80 overflow-hidden flex justify-start items-center"
      >
        <p className="w-full text-center lg:hidden md:hidden block text-2xl text-white font-main font-bold">
          Day.webdev
        </p>
        <p
          className="  w-full lg:inline-block md:inline-block hidden  
         text-3xl text-white text-center font-main "
        >
          Projects Gallery.
        </p>
      </motion.div>
      <p className="font-bold uppercase text-xl sticky max-sm:bg-gradient-to-r/80 from-gray-900 to-gray-950 p-2 top-0 backdrop-blur-sm z-10 lg:hidden md:hidden">
        Projects.
      </p>
      <AnimatePresence mode="wait">
        <div className="flex flex-col lg:gap-16 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Project;
