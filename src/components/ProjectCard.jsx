import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./scrollAnimation.css";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ descripiton, name, techStats, img, siteUrl }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="lg:px-4 max-sm:p-0 group lg:my-0 my-5"
    >
      <h1 className="font-bold font-main mb-3 border-b-2 lg:text-2xl text-xl">
        {name}
      </h1>
      <div>
        <div className="relative ">
          <div className="absolute flex items-center justify-center bg-gray-500/20 w-full scale-x-0 group-hover:scale-x-100 origin-left h-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-300 overflow-hidden rounded-lg backdrop-blur-sm group-hover:shadow-glow ">
            <a
              href={siteUrl}
              target="blank"
              className="bg-purple-900  px-4 py-2 rounded-lg capitalize hover:bg-purple-600 transition-all duration-200 whitespace-nowrap flex "
            >
              visit site
              <ArrowUpRight />
            </a>
          </div>
          <img src={img} alt="website preview imgage" className="rounded-lg" />
        </div>
        <div>
          <p
            className={`mt-4 font-body lg:text-base text-sm overflow-hidden transition-all duration-300 ease-in-out ${
              showMore ? "h-fit " : "h-24 line-clamp-4"
            }`}
          >
            {descripiton}
          </p>

          <p
            className="underline cursor-pointer hover:text-gray-500"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "see less" : "see more"}
          </p>
          <div className="mt-8 flex gap-2 items-center flex-wrap">
            {techStats.map((stat, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-lg bg-purple-900 text-white font-body lg:text-sm text-xs whitespace-nowrap"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* {show && name === "KeepOnTrack" && (
        <motion.div className="relative w-full flex flex-col justify-center items-center">
          <div className="icon-scroll"></div>
          <p className="absolute text-center ml-[2rem] mt-[15rem]">
            scroll down to see more
          </p>
        </motion.div>
      )} */}
    </motion.div>
  );
};

export default ProjectCard;
