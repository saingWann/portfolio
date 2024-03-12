import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../lib";

const Project = () => {
  return (
    <div className="flex flex-col lg:gap-16 gap-8 max-sm:mt-10">
      <p className="font-bold uppercase text-xl ">Projects</p>
      {projects.map((project, index) => (
        <div key={index} className="px-4 max-sm:p-0">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default Project;
