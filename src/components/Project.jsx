import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../lib";

const Project = () => {
  return (
    <section className=" max-sm:mt-10 relative">
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full origin-bottom bg-gray-950
         fixed top-0 z-20"
      ></motion.div>
      <p className="font-bold uppercase text-xl sticky max-sm:bg-black/50 p-2 top-0 backdrop-blur-sm z-10 lg:hidden md:hidden">
        Projects
      </p>
      <div className="flex flex-col lg:gap-16 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
