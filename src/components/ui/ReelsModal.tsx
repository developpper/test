import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoStop } from "react-icons/io5";

interface ReelVideo {
    src: string;
    productImg: string;
}

interface ReelsModalProps {
    videos: ReelVideo[];
    initialIndex: number;
    onClose: () => void;
}

const ReelsModal: React.FC<ReelsModalProps> = ({
    videos,
    initialIndex,
    onClose,
}) => {
    const [reelList, setReelList] = useState([...videos]);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [muted, setMuted] = useState(true);
    const [playing, setPlaying] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Scroll to initial position on open
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: window.innerHeight * initialIndex,
                behavior: "instant" as ScrollBehavior,
            });
        }
    }, [initialIndex]);

    // Handle scroll and loop videos infinitely
    const handleScroll = () => {
        if (containerRef.current) {
            const scrollTop = containerRef.current.scrollTop;
            const index = Math.round(scrollTop / window.innerHeight);

            if (index !== currentIndex) {
                setCurrentIndex(index);
            }

            videoRefs.current.forEach((video, i) => {
                if (video) {
                    if (i === index) {
                        video.play().catch(() => {
                            // ignore autoplay errors
                        });
                    } else {
                        video.pause();
                    }
                }
            });

            // Infinite scroll logic (optional)
            if (index >= reelList.length - 1) {
                setReelList((prev) => [...prev, ...videos]);
            }
        }
    };

    const togglePlayPause = () => {
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo) {
            if (currentVideo.paused) {
                currentVideo.play();
                setPlaying(true);
            } else {
                currentVideo.pause();
                setPlaying(false);
            }
        }
    };



    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
            {/* Centered container */}
            <div
                ref={containerRef}
                className="relative w-[360px] h-screen overflow-y-scroll snap-y snap-mandatory rounded-lg scrollbar-hide"
                onScroll={handleScroll}
                style={{ scrollbarWidth: "none" }}
            >
                {reelList.map((video, index) => (
                    <div
                        key={index}
                        className="relative w-full h-screen snap-start flex items-center justify-center"
                    >
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={video.src}
                            className="w-full h-full object-cover rounded-lg"
                            muted={muted}
                            loop
                            playsInline
                        />


                        {index === currentIndex && (
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between px-4 py-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                {/* Top */}
                                <div className="flex justify-end items-center text-white text-sm">
                                    <button
                                        onClick={onClose}
                                        className="bg-black/50 px-3 py-1 rounded-full"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Bottom */}
                                <div className="flex justify-between items-end text-white">
                                    <div className="flex flex-col gap-4 mb-4">
                                        <button
                                            onClick={togglePlayPause}
                                            className="bg-black/50 px-3 py-1 w-fit rounded-full text-lg"
                                        >
                                            {playing ? <IoStop /> : <FaPlay />}
                                        </button>
                                        <div>
                                            <p className="font-semibold">@username</p>
                                            <p className="text-sm">This is the caption of the video 🔥</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-4">
                                        <button className="text-xl bg-black/50 px-3 py-1 rounded-full"><FaRegHeart /></button>
                                        <button
                                            onClick={() => setMuted(!muted)}
                                            className="bg-black/50 px-3 py-1 rounded-full"
                                        >
                                            {muted ? "🔇" : "🔊"}
                                        </button>
                                        <button className="bg-red-600 px-2 py-1 rounded-full text-xs mt-2">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReelsModal;
