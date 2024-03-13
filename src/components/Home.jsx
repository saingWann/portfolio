import React from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { AboutMe, Contact, Project } from "./index";
import LeftSide from "./LeftSide";

const Home = () => {
  const activeTab = useSelector((state) => state.activeTab);

  //   console.log(activeTab);
  return (
    <main className="max-w-screen lg:min-h-screen md:min-h-screen max-sm:h-fit text-white md:px-10 bg-gradient-to-r from-gray-900 to-gray-950">
      {/* <div className="relative h-screen"> */}

      <Container>
        <div className="flex flex-col lg:flex-row md:flex-row gap-10 ">
          {/* left side */}
          <section className="lg:w-1/2 w-full h-[100%] lg:sticky md:sticky md:top-0  lg:top-0 lg:pt-28 md:pt-24 z-10">
            <LeftSide />
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
