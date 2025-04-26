"use client";

import React from "react";

const VideoSection = () => {
  return (
    <div className="relative w-full   overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover p-2 sm:p-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/myvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full   z-0" />

      {/* Content on top */}
      <div className="relative z-10 flex items-center justify-start p-14 sm:p-32 md:p-52  ">
        <div className="max-w-3xl space-y-6 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Welcome to Our Website
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae est at nisi
            ultricies vestibulum. Donec ultricies arcu at sagittis efficitur.
          </h2>
          <p className="text-sm sm:text-base space-x-4">
            <a href="#" className="hover:text-green-400">Learn More</a>
            <a href="#" className="hover:text-green-400">Contact Us</a>
            <a href="#" className="hover:text-green-400">Sign Up</a>
            <a href="#" className="hover:text-green-400">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
