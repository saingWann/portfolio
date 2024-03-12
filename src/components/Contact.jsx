import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-white body-font relative w-full"
      >
        <div className="container  mx-auto flex">
          <div className=" rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className=" font-bold uppercase text-xl font-main border-b-2 mb-2 ">
              Hit me up.
            </h2>
            <p className="lg:text-base text-xs mb-5 text-gray-300 font-body">
              Feel free to contact me and i will get back to you ASAP.
            </p>
            <div className="relative mb-4 font-body">
              <label htmlFor="email" className="leading-7 text-sm ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="w-full bg-white rounded border border-gray-300 text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 font-body">
              <label htmlFor="message" className="leading-7 text-sm ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave a message here..."
                className="w-full bg-white rounded-md text-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-purple-900  border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 hover:text-white rounded text-lg transition-all duration-150">
              Button
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
