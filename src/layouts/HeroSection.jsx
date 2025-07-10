import React from "react";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/path-to-your-hero-image.jpg" // Replace with actual path
          alt="Beach View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Optional dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-20 py-16">
        {/* Left Text */}
        <div className="max-w-xl mt-20 md:mt-32">
          <h1 className="text-white text-4xl md:text-6xl font-serif font-semibold leading-tight">
            Your Gateway to <br /> Unforgettable <br /> Memories
          </h1>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-auto gap-8 border-t border-white/40 pt-6">
          {/* Description */}
          <p className="text-white text-center md:text-left text-sm md:text-base max-w-xl">
            Experience exquisite accommodations, world-class amenities, and
            personalized service tailored to exceed your expectations.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            {/* Book Button */}
            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 bg-[#d2b78c] rounded-full flex items-center justify-center text-center text-black font-medium text-sm md:text-base z-20 relative">
                Book Your <br /> Stay
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-[#d2b78c] scale-110 z-10" />
            </div>

            {/* View Rooms Button */}
            <button className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-full transition hover:bg-white hover:text-black">
              View Rooms
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
