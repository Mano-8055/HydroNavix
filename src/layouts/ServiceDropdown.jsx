import React, { useState } from "react";
import { Services } from "../json/services";

const ServiceDropdown = () => {
  const [active, setActive] = useState(Services[0]);

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 border-gray-300 inline-block pb-2">
        Our Services
      </h1>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
        {Services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActive(service)}
            className={`flex flex-col items-center w-[18%] min-w-[150px] bg-white p-4 rounded-lg shadow-md border transition-all duration-300 hover:scale-105 ${
              active.id === service.id
                ? "border-indigo-500 shadow-lg"
                : "border-gray-200"
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 object-cover rounded-md mb-2"
              onError={(e) => (e.target.style.display = "none")}
            />
            <span className="text-sm font-medium text-center text-gray-800">
              {service.title}
            </span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-10 max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          {active.title}
        </h2>
        <div className="flex flex-wrap gap-3 justify-center text-sm text-gray-700">
          {active.content.map((point, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-4 py-2 rounded-full shadow-sm whitespace-nowrap"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDropdown;
