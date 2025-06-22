"use client";
import React from "react";
export default function Contact({onClose}) {
  return (
    <div style={{ perspective: 1500}} className="fixed z-50 min-h-screen bg-transparent flex items-center justify-center rounded-3xl">
      <div style={{transformStyle: "preserve3d", perspective: 1800 }} className="w-6xl flex backdrop-blur-2xl flex-col md:flex-row bg-[#1c1c1cae] rounded-3xl shadow-lg">
        {/* Left: Form */}
        <div className="flex-1 p-8">
          <h1 className="text-5xl text-white font-bold mb-10">Talk To Us</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-white mb-1">Name</label>
              <input type="text" className="w-full text-gray-300 border-b border-gray-300 bg-transparent focus:outline-none py-2" />
            </div>
            <div>
              <label className="block text-lg font-medium text-white mb-1">Email</label>
              <input type="email" className="w-full text-gray-300 border-b border-gray-300 bg-transparent focus:outline-none py-2" />
            </div>
            <div>
              <label className="block text-lg font-medium text-white mb-1">Company</label>
              <input type="text" className="w-full text-gray-300 border-b border-gray-300 bg-transparent focus:outline-none py-2" />
            </div>
            <div>
              <label className="block text-lg font-medium text-white mb-1">Message</label>
              <textarea className="w-full text-gray-300 border-b border-gray-300 bg-transparent focus:outline-none py-2" rows={2}></textarea>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-white font-medium">Get In Touch</span>      
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </form>
        </div>
        {/* Right: Info */}
        <div className="flex-1 p-8 flex flex-col text-gray-300 justify-between">
          <div>
            <div className="mt-8 flex flex-row items-center">
                  <img src="/assets/Group 1000001213.svg" />
                  <div className="ml-4">
                        <span className="text-pink-600 font-semibold">Email</span>
                        <span className="block text-lg font-medium mb-2">info@rittzdigital.com</span>
                  </div>
            </div>
            <div className="mt-8 flex flex-row">
                  <img src="/assets/Group 1000001212.svg" />
                  <div className="ml-4">
                        <span className="text-pink-600 font-semibold">Registered office</span>
                        <div className="text-lg">11/32 A3, Cenotaph Road, Teynampet,<br />Chennai - 600018<br />51, Lower Simcoe St Toronto ON M5J 3A6</div>
                  </div>
            </div>
          </div>
            <div className="flex items-center gap-3">
                  <img src="/assets/Group 1000001209.svg" />
                  <div className="ml-4">
                        <span className="text-pink-600 font-semibold">Contact Number</span>
                        <p className="font-bold">+91 7418–333–093</p>
                  </div>  
            </div>
          <div className="flex items-center mt-10">
            <span className="font-medium text-lg mr-4">Send your Message</span>
            <button
              type="submit"
              className="w-14 h-14 rounded-full border-2 border-pink-400 flex items-center justify-center transition hover:bg-pink-500 hover:scale-125"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-600 hover:text-white">
                <path d="M8 16h16M20 12l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div>
            <button onClick={onClose} type="button" className="relative cursor-pointer mr-3 mt-3 flex items-center justify-center">
                  <img src="/assets/x-square.svg" alt="close" />
            </button>
        </div>
      </div>
    </div>
  );
}