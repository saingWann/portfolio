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
          <div className="lg:text-4xl font-main uppercase font-bold text-2xl max-sm:mt-8 flex max-sm:flex-col">
            <p>sai than tun sein</p>
            <span className="text-gray-500"> &lt; Day /&gt;</span>
          </div>
          <p className="capitalize">frontend web developer</p>
        </div>

        <div className="mt-14 lg:flex font-main flex-col gap-2 md:flex hidden">
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
                  activeTab === tab ? "w-16" : "w-1"
                }`}
              ></div>
              <p
                className={`capitalize ${
                  activeTab === tab ? "font-bold" : "font-normal"
                }`}
              >
                {tab}
              </p>
            </a>
          ))}
        </div>

        <div className="flex gap-10 lg:mt-80 mt-7 max-sm:px-4">
          <a href="https://github.com/saingWann" target="blank">
            <Github />
          </a>
          <a href="" target="blank">
            <Linkedin />
          </a>
          <a href="" target="blank">
            <StickyNote />
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
