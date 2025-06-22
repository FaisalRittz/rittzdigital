"use client"


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Idea() {
  const line1Ref = useRef();
  const line2Ref = useRef();

  useEffect(() => {
    const lettersLine1 = line1Ref.current.querySelectorAll(".letter");
    const lettersLine2 = line2Ref.current.querySelectorAll(".letter");

    // Animate first line letters
    gsap.fromTo(
      lettersLine1,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: line1Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate second line letters with a slight delay
    gsap.fromTo(
      lettersLine2,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.3,
        scrollTrigger: {
          trigger: line2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const line1Text = [
    { char: "F", className: "text-yellow-500" },
    { char: "r" },
    { char: "o" },
    { char: "m" },
    { char: " " },
    { char: "I" },
    { char: "d" },
    { char: "e" },
    { char: "a" },
    { char: " " },
    { char: "T" },
    { char: "o" },
  ];

  const line2Text = [
    { char: "M" },
    { char: "a" },
    { char: "r" },
    { char: "k" },
    { char: "e" },
    { char: "t" },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-between px-8 md:px-16 py-12 bg-white">
        <div className="space-y-6">
          <h2 className="text-[95px] font-bold leading-tight overflow-hidden">
            {/* First line */}
            <div
              ref={line1Ref}
              className="flex flex-wrap overflow-hidden"
              style={{ lineHeight: 1 }}
            >
              {line1Text.map((item, index) => (
                <span key={index} className="overflow-hidden">
                  <span
                    className={`letter inline-block text-gray-800 ${
                      item.className || ""
                    }`}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                </span>
              ))}
            </div>
            {/* Second line */}
            <div
              ref={line2Ref}
              className="flex flex-wrap overflow-hidden"
              style={{ lineHeight: 1 }}
            >
              {line2Text.map((item, index) => (
                <span key={index} className="overflow-hidden">
                  <span className="letter inline-block text-gray-800">
                    {item.char}
                  </span>
                </span>
              ))}
            </div>
          </h2>

          <div className="flex align-middle">
            <div className="h-auto flex align-center justify-center">
              <div className="h-0.5 w-[115px] bg-gray-300 my-7 mx-1"></div>
            </div>
            <div className="text-sm text-gray-500 mt-1 text-left leading-[1.75]">
              Turning Bold Ideas Into
              <br />
              Market-Ready Products.
            </div>
          </div>

          <button className="mt-4 w-[457px] px-6 py-2 cursor-pointer text-sm border border-gray-400 text-black relative overflow-hidden group">
            <span
              className="absolute bottom-0 left-0 w-0 h-0 bg-black rounded-full transition-all duration-400 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
              style={{ transform: "translate(-50%, 50%)" }}
            ></span>
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">
              Explore Our Process
            </span>
          </button>
        </div>

        <div className="md:w-1/3 mt-10 md:mt-0 space-y-4">
          {/* Side steps list unchanged */}
          <div
            className="flex items-center space-x-6 p-4 rounded bg-gray-50 
              hover:bg-gradient-to-r hover:from-neutral-500 hover:via-neutral-800 hover:to-black 
              group transition-all duration-500 ease-in-out cursor-pointer"
          >
            <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-all duration-500 ease-in">
              01
            </span>
            <p className="text-[32px] text-gray-400 group-hover:text-white transition-all duration-500 ease-in-out">
              Understand Your Vision
            </p>
          </div>

          <div
            className="flex items-center space-x-6 p-4 rounded bg-gray-50 
              hover:bg-gradient-to-r hover:from-neutral-500 hover:via-neutral-800 hover:to-black 
              group transition-all duration-500 ease-in-out cursor-pointer"
          >
            <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out">
              02
            </span>
            <p className="text-[32px] text-gray-400 group-hover:text-white transition-all duration-500 ease-in-out">
              Co-Create A Roadmap
            </p>
          </div>

          <div
            className="flex items-center space-x-6 p-4 rounded bg-gray-50 
              hover:bg-gradient-to-r hover:from-neutral-500 hover:via-neutral-800 hover:to-black 
              group transition-all duration-500 ease-in-out cursor-pointer"
          >
            <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out">
              03
            </span>
            <p className="text-[32px] text-gray-400 group-hover:text-white transition-all duration-500 ease-in-out">
              Design With Empathy
            </p>
          </div>

          <div
            className="flex items-center space-x-6 p-4 rounded bg-gray-50 
              hover:bg-gradient-to-r hover:from-neutral-500 hover:via-neutral-800 hover:to-black 
              group transition-all duration-500 ease-in-out cursor-pointer"
          >
            <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out">
              04
            </span>
            <p className="text-[32px] text-gray-400 group-hover:text-white transition-all duration-500 ease-in-out">
              Develop With Precision
            </p>
          </div>

          <div
            className="flex items-center space-x-6 p-4 rounded bg-gray-50 
              hover:bg-gradient-to-r hover:from-neutral-500 hover:via-neutral-800 hover:to-black 
              group transition-all duration-500 ease-in-out cursor-pointer"
          >
            <span className="text-3xl font-bold text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out">
              05
            </span>
            <p className="text-[32px] text-gray-400 group-hover:text-white transition-all duration-500 ease-in-out ">
              Test, Iterate & Launch
              <br />
              With Confidence
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
