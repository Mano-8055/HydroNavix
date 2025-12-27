import React, { useState, useEffect, useRef } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { Gallerys } from "../json/Gallerys";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const wrapperRef = useRef(null);
  const firstItemRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const updateCarousel = () => {
    if (!wrapperRef.current || !firstItemRef.current) return;
    const totalItems = Gallerys.length;
    const itemWidth = firstItemRef.current.offsetWidth;
    const gap = 40;

    Array.from(wrapperRef.current.children).forEach((itemElement, index) => {
      let offset = index - currentIndex;
      if (offset > totalItems / 2) offset -= totalItems;
      else if (offset < -totalItems / 2) offset += totalItems;

      let translateX = 0;
      let scale = 1;
      let opacity = 1;
      let zIndex = 1;
      let blur = 0;

      if (offset === 0) {
        scale = 1.1;
        zIndex = 10;
      } else {
        translateX = (itemWidth - gap) * offset;
        scale = 1 - 0.1 * Math.abs(offset);
        opacity = 1 - 0.2 * Math.abs(offset);
        zIndex = 5 - Math.abs(offset);
        blur = 2 * Math.abs(offset);
      }

      opacity = Math.max(0, Math.min(1, opacity));
      scale = Math.max(0.7, scale);
      blur = Math.max(0, blur);

      itemElement.style.transform = `translateX(${translateX}px) scale(${scale})`;
      itemElement.style.opacity = opacity;
      itemElement.style.zIndex = zIndex;
      itemElement.style.filter = `blur(${blur}px)`;
      itemElement.style.transition = "all 0.6s ease";
    });
  };

  const scrollCarousel = (dir) => {
    setCurrentIndex((prev) => (prev + dir + Gallerys.length) % Gallerys.length);
  };

  const openPreview = (src) => {
    setPreviewSrc(src);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setPreviewSrc(null);
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener("resize", updateCarousel);
    return () => window.removeEventListener("resize", updateCarousel);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePreview();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        scrollCarousel(1);
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalRef.current);
    };

    startAutoScroll();

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mouseenter", stopAutoScroll);
      wrapper.addEventListener("mouseleave", startAutoScroll);
    }

    return () => {
      stopAutoScroll();
      if (wrapper) {
        wrapper.removeEventListener("mouseenter", stopAutoScroll);
        wrapper.removeEventListener("mouseleave", startAutoScroll);
      }
    };
  }, []);

  return (
    <div className="py-24">
      <p className="text-2xl sm:text-4xl font-semibold tracking-tight text-secondary text-center">Our Gallery</p>

      <div className="relative w-full py-10 flex justify-center items-center bg-gradient-to-br from-primary to-primary/60 overflow-hidden">
        
        <div className="relative w-[90%] max-w-[1200px] pb-8">
          <div
            ref={wrapperRef}
            className="relative w-full h-[400px] flex items-center justify-center"
          >
            {Gallerys.map((src, i) => (
              <div
                key={i}
                ref={i === 0 ? firstItemRef : null}
                onClick={() => openPreview(src)}
                className="absolute w-[320px] h-[350px] overflow-hidden shadow-xl cursor-pointer flex justify-center items-center"
              >
                <img
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-5 py-5">
            <TfiArrowCircleLeft
              className="w-8 h-8 cursor-pointer text-secondary hover:text-accent"
              onClick={() => scrollCarousel(-1)}
            />
            <TfiArrowCircleRight
              className="w-8 h-8 cursor-pointer text-secondary hover:text-accent"
              onClick={() => scrollCarousel(1)}
            />
          </div>
        </div>

        {/* Fullscreen Preview */}
       {isPreviewOpen && (
          <div
            className="fixed inset-0 bg-secondary bg-opacity-90 flex items-center justify-center z-50"
            onClick={closePreview} 
          >
            <div
              className="max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()} 
            >
              <img
                src={previewSrc}
                alt="Full Preview"
                className="max-h-[80vh] max-w-[80vw] object-contain transition-all duration-300 shadow-lg"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;