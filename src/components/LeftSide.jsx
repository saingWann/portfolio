import React from "react";
import { Github, Linkedin, StickyNote } from "lucide-react";
import { setActiveTab } from "../features/activeTab";
import { useDispatch, useSelector } from "react-redux";

const LeftSide = () => {
  const tabs = ["about", "projects", "contact"];

  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div
          className="flex gap-2
          flex-col max-sm:px-4"
        >
          <div className="lg:text-3xl font-main uppercase font-bold text-2xl max-sm:mt-8 flex max-sm:flex-col gap-2">
            <p>sai than tun sein. </p>
            <span className="text-gray-500 text-xl"> &lt; Day /&gt;</span>
          </div>
          <p className="capitalize">frontend web developer</p>
        </div>

        <div className="mt-14 lg:flex font-main flex-col lg:gap-4 gap-2 md:flex hidden">
          {tabs.map((tab, index) => (
            <a
              key={index}
              className="flex gap-2 justify-start items-center w-fit cursor-pointer"
              onClick={() => {
                dispatch(setActiveTab(tab));
              }}
            >
              <div
                className={` h-[1px] rounded-full bg-white transition-all duration-200 ${
                  activeTab === tab ? "w-20" : "w-6"
                }`}
              ></div>
              <div
                className={`capitalize transition-all duration-200 rounded-lg flex text-sm items-center gap-2 ${
                  activeTab === tab
                    ? "font-bold bg-white text-black px-3 py-1"
                    : "font-normal"
                }`}
              >
                {tab}
              </div>
            </a>
          ))}
        </div>

        <div className="flex gap-10 lg:mt-80 mt-7 max-sm:px-4">
          <a
            href="https://github.com/saingWann"
            target="blank"
            className="relative group"
          >
            <p className="absolute -top-20 -left-4 opacity-0 bg-white text-black px-3 py-1 text-xs rounded-full group-hover:-top-10 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              GitHub
            </p>
            <Github className="hover:text-purple-400" />
          </a>
          <a
            href="https://github.com/saingWann"
            target="blank"
            className="relative group"
          >
            <p className="absolute -top-20 -left-4 opacity-0 bg-white text-black px-3 py-1 text-xs rounded-full group-hover:-top-10 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              LinkIn
            </p>
            <Linkedin className="hover:text-purple-400" />
          </a>
          <a
            href="https://github.com/saingWann"
            target="blank"
            className="relative group"
          >
            <p className="absolute -top-20 -left-4 opacity-0 bg-white text-black px-3 py-1 text-xs rounded-full group-hover:-top-10 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              Resume
            </p>
            <StickyNote className="hover:text-purple-400" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
