import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:max-w-7xl md:max-w-4xl w-full lg:p-0 p-3 mx-auto">
      {children}
    </div>
  );
};

export default Container;
