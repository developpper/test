"use client";

import React from "react";

const VideoSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/myvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

      {/* Content aligned to bottom */}
      <div className="relative z-10 w-full h-screen flex items-end   p-6 sm:p-18">
        <div className="max-w-3xl space-y-6 text-white  ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Brighten Your
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Beauty Routine!
          </h1>
          <h2 className="text-base    leading-relaxed">
            Brighten your routine with tips and cosmetics from Haneen Al Saify
            for a radiant glow!
          </h2>
          <div>
            <button className="bg-white rounded p-4 px-8 text-black text-base font-urbanist flex items-center gap-1 ">
              Shop Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 16.5L16.5 7.5M16.5 7.5H8.25M16.5 7.5V15.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
