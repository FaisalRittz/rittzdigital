"use client";
import { Router } from "next/router";
import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./contact";
import Talltous from "./ui/talltous";

export default function Header() {

  const [showContact, setShowContact] = React.useState(false);

  const handleContactClick = () => {
    setShowContact((prev) => !prev);
  };
  const handleClose = () => {
    setShowContact(false);
  };

  return (
   <>
    <header className="flex justify-between items-center ">
    <div className="flex items-center w-100% h-100% bg-amber-700">
      <div >
        <img src="./assets/rittz_logo.png" className="w-25 h-7 absolute left-20 top-11 " />
      </div>
      
    </div>

    <div className="flex items-center absolute right-8 top-11 space-x-6">
      <button onClick={handleContactClick} className="px-6 py-2 cursor-pointer text-sm bg-white text-black relative rounded-lg overflow-hidden group">
            <span
              className="absolute bottom-0 left-0 w-0 h-0 bg-black rounded-lg transition-all duration-200 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
              style={{ transform: "translate(-50%, 50%)" }}
            ></span>
            <span className="relative z-10 transition-all duration-200 group-hover:text-white">
              Talk To Us
            </span>
          </button>
      <span className="text-[20px] font-semibold ">Menu</span>
      <div className="w-[24px] h-[24px] flex flex-col justify-between">
       <img src="assets/align-justify.png" />
      </div>
    </div>
  </header>

  <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0, rotateX: -90, transformPerspective: 1000 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}>
            <Contact onClose={handleClose}/>
          </motion.div>
        )}
      </AnimatePresence>
    {/* <Talltous/> */}
  </>
  );
}