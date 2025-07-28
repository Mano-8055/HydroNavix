import { useEffect } from "react";
import { Services } from "../json/services";

const Project = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="py-24">
      <p className="text-2xl sm:text-4xl font-semibold tracking-tight text-secondary text-center">
        Projects
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-12 py-10">
        {Services.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden cursor-follow shadow-md cursor-pointer"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-secondary/30 z-10"></div>

            <div className="absolute inset-0 bg-secondary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <p className="text-primary text-md md:text-lg font-semibold text-center">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
