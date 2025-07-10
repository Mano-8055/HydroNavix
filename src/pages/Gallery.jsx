import React, { useState, useEffect, useRef } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const wrapperRef = useRef(null);
  const firstItemRef = useRef(null);

const images = [
  "https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg",
  "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg",
  "https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg",
  "https://images.pexels.com/photos/2680058/pexels-photo-2680058.jpeg",
  "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg",
  "https://images.pexels.com/photos/745737/pexels-photo-745737.jpeg",
  "https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&crop=faces&fit=crop&w=500&h=500",
  "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&fit=crop&w=600&h=400",
  "https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&fit=crop&w=400&h=600",
  "https://images.pexels.com/photos/2680058/pexels-photo-2680058.jpeg?auto=compress&fit=crop&w=450&h=450",
  "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&fit=crop&w=700&h=500",
  "https://images.pexels.com/photos/745737/pexels-photo-745737.jpeg?auto=compress&fit=crop&w=500&h=700"
];


  const updateCarousel = () => {
    if (!wrapperRef.current || !firstItemRef.current) return;
    const totalItems = images.length;
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
    });
  };

  const scrollCarousel = (dir) => {
    setCurrentIndex((prev) => (prev + dir + images.length) % images.length);
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
      if (e.key === "Escape") {
        closePreview();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="py-24">
      <p className="text-2xl md:text-4xl text-secondary text-center font-bold">Our Gallery</p>
    
    <div className="relative w-full py-10 flex justify-center items-center bg-gradient-to-br from-primary to-primary/60 overflow-hidden">
      
      <div className="relative w-[90%] max-w-[1200px] pb-8">
        <div
          ref={wrapperRef}
          className="relative w-full h-[400px] flex items-center justify-center"
        >
          {images.map((src, i) => (
            <div
              key={i}
              ref={i === 0 ? firstItemRef : null}
              onClick={() => openPreview(src)}
              className="absolute w-[250px] h-[350px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out cursor-pointer bg-white flex justify-center items-center text-gray-500 text-2xl"
            >
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-5 py-5">
        <TfiArrowCircleLeft
          className="w-8 h-8 cursor-pointer text-secondary hover:text-accent "
          onClick={() => scrollCarousel(-1)}
        />
        <TfiArrowCircleRight
          className="w-8 h-8 cursor-pointer text-secondary hover:text-accent "
          onClick={() => scrollCarousel(1)}
        />
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-secondary bg-opacity-90 flex items-center justify-center z-50">
          <img
            src={previewSrc}
            alt="Full Preview"
            className="max-w-full max-h-full object-contain transition-all duration-300"
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default Gallery;
