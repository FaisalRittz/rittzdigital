"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const serviceRef = useRef();

  const heading = "Our Services";

  useEffect(() => {
    const letters = serviceRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-green-600 text-white px-6 md:px-16 py-12 relative">
      <div className="">
        <div className="text-right overflow-hidden">
          <h2
            className="text-[95px] font-bold leading-tight overflow-hidden"
            ref={serviceRef}
          >
            <div className="flex flex-wrap justify-end">
              {heading.split("").map((char, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <span className="letter inline-block text-white">
                    {char === " " ? "\u00A0" : char}
                  </span>
                </span>
              ))}
            </div>
          </h2>
        </div>

        <div className="flex align-middle justify-end  mb-5">
          <div className="h-auto flex align-center justify-center">
            <div className="h-0.5 w-[208px] bg-gray-300 my-7  mx-1 "></div>
          </div>
          <p className="text-white  mt-1 text-left leading-[1.75]">
            Affordable innovation,
            <br />
            built for impact.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          {
            img: "/assets/Our Services.png",
            title: "Digital Product\nStrategy",
          },
          {
            img: "/assets/Our Services 1.png",
            title: "UI/UX Design &\nPrototyping",
          },
          {
            img: "/assets/Our Services.png",
            title: "Backend\nDevelopment & API Integration",
          },
          {
            img: "/assets/Our Services 1.png",
            title: "Cloud-Based\nSolutions",
          },
          {
            img: "/assets/Our Services.png",
            title: "Ongoing\nMaintenance & Support",
          },
          {
            img: "/assets/Our Services 1.png",
            title: "Custom Mobile App\nDevelopment",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="text-black relative transition-all duration-300 ease-in-out hover:-translate-y-5 hover:scale-105"
          >
            <img src={item.img} />
            <p className="text-center font-medium absolute bottom-15 left-0 right-0 whitespace-pre-line">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#"
          className="text-white text-sm flex items-center gap-2 hover:underline"
        >
          Our Services
          <span className="text-lg">›</span>
        </a>
      </div>
    </div>
  );
}