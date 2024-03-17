import React from "react";
import TechStats from "./TechStats";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setActiveTab } from "../../features/activeTab";

const AboutMe = () => {
  const dispatch = useDispatch();
  return (
    <section className="relative">
      <motion.div
        initial={{ height: 800 }}
        animate={{ height: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.3, 0.7] }}
        className="w-1/2 h-full origin-top lg:bg-gradient-to-rfrom-gray-900 to-gray-950 md:bg-gradient-to-r
         fixed hidden top-0 right-0  z-20  max-sm:opacity-80 overflow-hidden md:flex lg:flex justify-start items-center"
      >
        <p
          className="  w-full   
         text-3xl text-white text-center font-main "
        >
          About Me.
        </p>
      </motion.div>
      <p className="font-bold  uppercase text-xl lg:mb-5 sticky max-sm:bg-gradient-to-r/80 from-gray-900 to-gray-950 lg:p-2 py-2 top-0 backdrop-blur-sm lg:hidden md:hidden">
        About me.
      </p>
      <div className="flex flex-col font-body gap-4 lg:leading-7 lg:text-base text-sm leading-normal text-slate-100">
        <p>
          My journey into the world of web development began in the early
          2023.As i was a &nbsp;
          <span className="font-bold text-purple-400">graphic designer </span>
          back then so i decide to expertise the &nbsp;
          <span className="font-bold text-purple-400">front-end</span> web
          development which i think i could still apply my{" "}
          <span className="font-bold text-purple-400">design skills</span> to
          that.Since then, I've been on a mission to continuously improve my
          skills and try to catch up with the latest trends and technologies in
          the ever-evolving landscape of frontend development.And i feel like
          i'm ready to dive into a real world.
        </p>
        <p>
          Proficient in HTML, CSS, and JavaScript, I specialize in creating
          visually stunning and{" "}
          <span className=" text-purple-400 font-bold">responsive</span> layouts
          and{" "}
          <span className=" text-purple-400 font-bold">
            seamless user interactions
          </span>{" "}
          that leave a lasting impression.In my portfolio, you'll discover a
          curated collection of{" "}
          <span
            className=" cursor-pointer hover:text-purple-400 hover:underline font-bold"
            onClick={() => {
              dispatch(setActiveTab("projects"));
            }}
          >
            projects
          </span>{" "}
          that showcase my skills and expertise.
        </p>
      </div>
      <TechStats />
    </section>
  );
};

export default AboutMe;
