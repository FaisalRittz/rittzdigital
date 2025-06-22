"use client";

import React, { useEffect, useRef } from "react";
import Header from "./header";
import Brand from "./brand";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const cubeRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const text = textRef.current;
    const hero = heroRef.current;

    const frontFace = cube.children[0];
    const bottomFace = cube.children[1];

    gsap.set(cube, { scale: 1 });

   
    gsap.to(cube, {
      scale: 20,
      scrollTrigger: {
        trigger: hero,
        start: "top -5%",
        end: "bottom 20%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const amber50 = "#fee9a9"; 
          const amber500 = "#f59e0b";
          const bottomColor = "#fff6db";

          const blend = (from, to, p) => {
            const f = parseInt(from.slice(1), 16);
            const t = parseInt(to.slice(1), 16);
            const rf = f >> 16,
              gf = (f >> 8) & 0xff,
              bf = f & 0xff;
            const rt = t >> 16,
              gt = (t >> 8) & 0xff,
              bt = t & 0xff;
            const r = Math.round(rf + (rt - rf) * p);
            const g = Math.round(gf + (gt - gf) * p);
            const b = Math.round(bf + (bt - bf) * p);
            return `rgb(${r}, ${g}, ${b})`;
          };

          frontFace.style.backgroundColor = blend(amber500, amber50, progress);
          bottomFace.style.backgroundColor = blend(
            bottomColor,
            amber50,
            progress
          );
        },
      },
      ease: "power2.out",
    });

  
    gsap.fromTo(
      text,
      {
        x: -10,
        y: -250,
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: cube,
          start: "top -5%",
          end: "bottom 20%",
          scrub: 1,
        },
        ease: "none",
      }
    );
  }, []);

  return (
    <>
      <main
        ref={heroRef}
        className="relative bg-[#b51947] w-full h-[110vh] overflow-hidden text-white font-sans"
        style={{ perspective: "1000px" }}
      >
        <Header />

        <div className="absolute w-full mt-30">
          <h1 className="text-7xl ml-[8rem] mt-[5rem] relative font-semibold leading-tight z-0">
            <span className="text-white font-bold">We</span> Build Products
            <br />
            That <span className="font-bold">Scale —</span>
            <br />
            <span className="font-bold">No Code Required.</span>
          </h1>

          <div
            ref={cubeRef}
            className="absolute w-[12rem] h-[12rem] -bottom-15 -right-23 rounded-[40px] rotate-45 transform-style-preserve-3d z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute w-full h-full rounded-[40px] bg-amber-500 p-20"
              style={{ transform: "translateZ(244px)" }}
            ></div>
            <div
              className="absolute w-full h-full rounded-[40px] bg-amber-500 p-20"
              style={{
                transform: "rotateX(90deg) translateZ(244px)",
                backfaceVisibility: "hidden",
              }}
            ></div>
          </div>

          <div
            ref={textRef}
            className="absolute bottom-[-40rem] right-[10%] text-[50px] font-bold z-30"
          >
            <Brand />
          </div>

          <div className="absolute bg-blue-600 -bottom-55 right-12 w-[12rem] rotate-45 rounded-[40px] h-[13rem] z-0"></div>
          <div className="absolute bg-green-700 bottom-19 right-10 w-[12rem] h-[13rem] rotate-45 rounded-[40px] z-0"></div>
        </div>
      </main>
    </>
  );
}