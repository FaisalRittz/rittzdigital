"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const DATA = [
  {
    name: "Jay",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    project: "UI/UX",
    company: "Self‑employed",
    rating: 5,
    text: "Excellent experience, exceeded my expectations",
  },
  {
    name: "Alice",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    project: "Website Redesign",
    company: "Freelancer",
    rating: 4,
    text: "Amazing collaboration and fast delivery",
  },
  {
    name: "David",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    project: "Mobile App",
    company: "Startup Co.",
    rating: 5,
    text: "Their professionalism and creativity really stood out.",
  },
  {
    name: "Sara",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    project: "Brand Identity",
    company: "Marketing Pro",
    rating: 4,
    text: "Great attention to detail and easy communication!",
  },
  {
    name: "Tom",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    project: "E-commerce Website",
    company: "Shopify Seller",
    rating: 5,
    text: "Super smooth process — I highly recommend them!",
  },
  {
    name: "Nina",
    img: "https://randomuser.me/api/portraits/women/40.jpg",
    project: "Landing Page",
    company: "Solo Founder",
    rating: 4,
    text: "Quick delivery and amazing designs, thank you!",
  },
];

function Testimonials() {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

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
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  const heading = "Testimonials";

  return (
    <section className="bg-white w-full py-12 px-6 md:px-16 relative overflow-hidden h-screen">
      <div className="absolute top-4 right-8 text-right z-20">
        <h2
          className="text-8xl font-bold overflow-hidden leading-[1]"
          ref={textRef}
        >
          {heading.split("").map((char, i) => (
            <span
              key={i}
              className={`overflow-hidden inline-block ${
                char === "T" ? "text-yellow-400" : "text-black"
              }`}
            >
              <span className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h2>

        <div className="flex items-center justify-end mr-17 mt-1">
          <div className="h-0.5 w-[150px] bg-gray-400 mr-4"></div>
          <p className="text-sm text-black text-left leading-tight">
            Trusted By Innovators, <br />
            Loved By Clients.
          </p>
        </div>
      </div>

      <div className="bg-red-500 w-[53rem] absolute right-0 top-[11rem] h-[30rem] rounded-tl-[100px] rounded-br-[100px] z-0"></div>

      <div className="absolute top-[18rem] left-[19rem] z-30">
        <Swiper
          navigation={{ prevEl: ".btn-prev", nextEl: ".btn-next" }}
          modules={[Navigation]}
          slidesPerView={1}
          className="max-w-lg"
        >
          {DATA.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative bg-white rounded-xl shadow-xl p-10 pt-12 w-[450px]">
                <div className="absolute top-0 left-0 w-full h-6 bg-black rounded-t-xl flex items-center px-3 gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    Project:{" "}
                    <span className="text-blue-600">{item.project}</span>
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    Company:{" "}
                    <span className="text-yellow-600">{item.company}</span>
                  </span>
                </div>
                <p className="text-gray-800 text-sm mb-3">{item.text}</p>
                <div className="flex text-yellow-400 mb-4">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <div className="border-t pt-2">
                  <span className="text-sm font-semibold block mb-2">
                    {item.name}
                  </span>
                  <button className="bg-black text-white text-xs px-4 py-2 hover:opacity-90 transition">
                    Hear Their Story
                  </button>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute bottom-3 right-6 w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-4 mt-6">
          <button className="btn-prev w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl text-black">
            <FaArrowLeft />
          </button>
          <button className="btn-next w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl text-black">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="absolute top-[12.5rem] right-[4rem] w-[48rem] h-[27rem] z-10 backdrop-blur-md rounded-br-[100px] rounded-tl-[100px] bg-white/5 border border-white/20 shadow-md p-8">
        <h3 className="text-5xl relative ml-[13.5rem] mt-8">
          What Our Clients Say
        </h3>
        <p className="mb-4 text-[1.4rem] relative mt-9 ml-[14rem]">
          Building Digital Products That Make an Impact — Together.
        </p>
        <p className="text-[1rem] leading-relaxed relative mt-9 ml-[14rem]">
          At Ritz Digital, we don’t just create solutions — we build
          <br /> trusted partnerships. But don’t just take our word for it.
          <br /> Hear from the businesses who’ve worked with us and
          <br /> experienced the difference we make..
        </p>
      </div>
    </section>
  );
}

export default Testimonials;