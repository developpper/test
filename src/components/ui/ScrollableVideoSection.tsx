"use client";
import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import ReelsModal from "./ReelsModal";

const videos = [
  { src: "/myvideo.mp4", productImg: "/product1.png" },
  { src: "/myvideo.mp4", productImg: "/product2.png" },
  { src: "/myvideo.mp4", productImg: "/product3.mp4" },
  { src: "/myvideo.mp4", productImg: "/product4.png" },
  { src: "/myvideo.mp4", productImg: "/product1.png" },
  { src: "/myvideo.mp4", productImg: "/product2.png" },
  { src: "/myvideo.mp4", productImg: "/product3.png" },
  { src: "/myvideo.mp4", productImg: "/product4.png" },
];

const ScrollableVideoSection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(videos.map(() => false));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [reelOpen, setReelOpen] = useState(false);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const togglePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        } else {
          video.pause();
        }
      }
    });

    setIsPlaying((prev) =>
      prev.map((_, idx) => (idx === index ? !prev[idx] : false))
    );
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
      return () => {
        current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="w-full py-10 bg-white relative !bg-[#FFEDFA]">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-4 pb-6 relative scroll-smooth"
        style={{ scrollbarWidth: "none" }} // Firefox
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative w-44 md:w-52 aspect-[9/16] overflow-hidden rounded-xl bg-black shadow-lg shrink-0 group"
            onClick={() => {
              setCurrentReelIndex(index);
              setReelOpen(true);
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              {...(index === 0 ? { autoPlay: true } : {})}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause SVG Icon */}
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {isPlaying[index] ? (
                // Pause Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white bg-black/50 rounded-full p-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                </svg>
              ) : (
                // Play Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white bg-black/50 rounded-full p-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar + Buttons */}
      <div className="flex items-center px-4 gap-4 mt-4">
        <div className="flex-1 h-[2px] bg-gray-300 overflow-hidden rounded-full relative">
          <div
            className="absolute left-0 top-0 h-full bg-black"
            style={{
              width: `${scrollProgress}%`,
              transition: "width 0.1s",
            }}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll(-300)}
            className="p-2 bg-black text-white rounded-full"
          >
            ←
          </button>
          <button
            onClick={() => scroll(300)}
            className="p-2 bg-black text-white rounded-full"
          >
            →
          </button>
        </div>
      </div>

      {reelOpen && (
        <ReelsModal
          videos={videos}
          initialIndex={currentReelIndex}
          onClose={() => setReelOpen(false)}
        />
      )}
    </div>
  );
};

export default ScrollableVideoSection;
