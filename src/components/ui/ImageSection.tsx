"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

const images = [
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
  { src: "/file.svg" },
];

const ImageSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (scrollOffset: number, smooth = true) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", handleScroll);

      const interval = setInterval(() => {
        if (current.scrollLeft >= current.scrollWidth / 2) {
          // Reset to start when scrolled half
          current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          scroll(3, false); // ⬅️ Increased scroll distance (3 pixels instead of 1)
        }
      }, 10); // ⬅️ Reduced interval to 10ms for faster update

      return () => {
        current.removeEventListener("scroll", handleScroll);
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="w-full py-10 bg-white relative">
      {/* Images Scroll Area */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-4 pb-6 relative scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative group w-44 md:w-52 p-2  overflow-hidden rounded bg-gray-200 shadow-lg shrink-0"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Instagram Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
              <FaInstagram className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
