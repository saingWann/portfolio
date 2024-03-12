import React, { useEffect, useState } from "react";
import { Home } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="lg:hidden fixed bottom-0 left-0 z-30 h-1 bg-white w-full origin-left"
        style={{ scaleX }}
      />
      <Home />
    </>
  );
};

export default App;
