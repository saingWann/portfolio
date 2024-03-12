import React from "react";
import TechStats from "./TechStats";

const AboutMe = () => {
  return (
    <div>
      <p className="font-bold uppercase text-xl mb-5">About me</p>
      <div className="flex flex-col gap-4 lg:leading-7 lg:text-base text-sm leading-normal">
        <p>
          My journey into the world of web development began in the early
          2023.As i was a graphic designer back then so i decide to expertise
          the front-end web development which i think i could still apply my
          design skills to that.Since then, I've been on a mission to
          continuously improve my skills and try to catch up with the latest
          trends and technologies in the ever-evolving landscape of frontend
          development.
        </p>
        <p>
          Proficient in HTML, CSS, and JavaScript, I specialize in creating
          visually stunning layouts and seamless user interactions that leave a
          lasting impression.In my portfolio, you'll discover a curated
          collection of projects that showcase my skills and expertise.
        </p>
      </div>
      <TechStats />
    </div>
  );
};

export default AboutMe;
