import React from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/activeTab";
import { AboutMe, Contact, Project } from "./index";

const Home = () => {
  const tabs = ["about", "projects", "contact"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);

  //   console.log(activeTab);
  return (
    <main className="max-w-screen lg:min-h-screen md:min-h-screen max-sm:h-fit text-white bg-black  md:px-10">
      {/* <div className="relative h-screen"> */}

      <Container>
        <div className="flex flex-col lg:flex-row md:flex-row gap-10 ">
          {/* left side */}
          <section className="lg:w-1/2 w-full h-[100%] sticky top-0 lg:pt-28 md:pt-24 z-10">
            <div
              className="flex gap-2
          flex-col"
            >
              <h1 className="lg:text-4xl uppercase font-bold max-sm:bg-purple-900 max-sm:p-3 max-sm:text-center ">
                sai than tun sein{" "}
                <span className="text-gray-500"> &lt; Day /&gt;</span>
              </h1>
              <p className="capitalize max-sm:hidden">frontend web developer</p>
            </div>

            <div className="mt-14 lg:flex flex-col gap-2 md:flex hidden">
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
          </section>

          {/* right side */}
          <section className="lg:w-1/2 w-full lg:pt-28 md:pt-24">
            <div className="lg:flex md:flex sm:hidden max-sm:hidden  ">
              {activeTab === "about" && <AboutMe />}
              {activeTab === "projects" && <Project />}
              {activeTab === "contact" && <Contact />}
            </div>

            <div className="flex-col lg:hidden md:hidden max-sm:flex">
              <Container>
                <AboutMe />
                <Project />
                <Contact />
              </Container>
            </div>
          </section>
        </div>
      </Container>
      {/* </div> */}
    </main>
  );
};

export default Home;
