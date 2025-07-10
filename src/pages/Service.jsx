import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { SlArrowRightCircle } from "react-icons/sl";
import { Services } from "../json/services";

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  const sectionRefs = useRef([]);
   
 useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const sectionId = decodeURIComponent(pathParts[2] || ""); 

    const index = Services.findIndex((s) => s.id === sectionId);
    if (index !== -1 && sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveIndex(index);
    }
  }, [location]);

  return (
    <div className="py-24">
    <div className="flex flex-col gap-1 justify-center items-center">
    <p className="text-center text-3xl md:text-5xl">At HydroNavix, we engineer precision</p>
    <p className="max-w-4xl text-md md:text-lg text-center text-secondary/60">We provide end-to-end engineering services across marine, offshore, subsea, and energy sectors blending design innovation, compliance, and execution to streamline every project phase</p>
    </div>
    <div className="max-w-screen mx-auto py-10 space-y-0">
      {Services.map((service, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            ref={(el) => (sectionRefs.current[index] = el)}
            id={service.id}
            key={service.id}
            className="w-full overflow-hidden cursor-pointer transition-all duration-500"
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Image container */}
            <div
              className={`relative w-full transition-all duration-500 ${
                isActive ? "h-[400px]" : "h-[200px]"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isActive ? "blur-0 scale-100" : "blur-[1px] scale-105"
                }`}
              />

              {/* Overlay Title + Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white px-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                {isActive && (
                  <ul className="flex flex-wrap gap-2 text-sm max-w-4xl">
                    {service.content.map((point, idx) => (
                     <li
                        key={idx}
                        className="flex items-center gap-2 justify-center px-2 py-1 rounded bg-primary text-secondary"
                      >
                        <SlArrowRightCircle className="text-accent text-xs" />
                        <span className="text-xs font-medium leading-[1.5]">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Service;
