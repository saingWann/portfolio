import React, { useEffect, useRef, useState } from "react";

const MouseTrailer = () => {
  const cursor = useRef(null);

  useEffect(() => {
    const mouseTrack = (e) => {
      //   setPosition({ x: e.clientX, y: e.clientY });
      if (cursor.current) {
        cursor.current.style.left = e.clientX + "px";
        cursor.current.style.top = e.clientY + "px";
        cursor.current.style.transform = `translateY(-1.25rem) translateX(-1.25rem)`;
        cursor.current.style.boxShadow = `10px 17px 340px 64px rgba(180,217,217,0.7)`;
        // cursor.current.style.boxShadow = `10px 17px 277px 33px rgba(180,200,200,0.75)`;
      }
    };
    window.addEventListener("mousemove", mouseTrack);

    return () => window.removeEventListener("mousemove", mouseTrack);
  }, []);

  return (
    <div
      ref={cursor}
      className={`fixed top-0 left-0 rounded-full lg:block hidden`}
    ></div>
  );
};

export default MouseTrailer;
