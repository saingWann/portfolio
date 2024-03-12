import React from "react";

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
    <div className="lg:mt-16 mt-8 flex gap-10 flex-col">
      <div>
        <p className="font-bold uppercase text-xl mb-5">Skills</p>
        <div className="flex gap-3 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="lg:px-4 lg:py-2 p-2 lg:text-base text-xs font-semibold bg-gray-200 text-black rounded-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold uppercase text-xl mb-5">Others</p>
        <div className="flex gap-3 flex-wrap">
          {others.map((other, index) => (
            <div
              key={index}
              className="lg:px-4 lg:py-2 p-2 lg:text-base text-xs font-semibold  bg-gray-200 text-black rounded-xl"
            >
              {other}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStats;
