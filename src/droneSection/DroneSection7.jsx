import React from 'react';
import {
  FaShip,
  FaTools,
  FaCogs,
  FaRoute,
  FaDraftingCompass,
  FaRegBuilding,
} from 'react-icons/fa';

const applications = [
  { title: 'Shipyard Planning', icon: <FaShip size={32} className="text-LightBlue" /> },
  { title: 'Rig Retrofits', icon: <FaTools size={32} className="text-LightBlue" /> },
  { title: 'Subsea Documentation', icon: <FaCogs size={32} className="text-LightBlue" /> },
  { title: 'Cable Routing', icon: <FaRoute size={32} className="text-LightBlue" /> },
  { title: '3D Scanning', icon: <FaDraftingCompass size={32} className="text-LightBlue" /> },
  { title: 'As-built Records', icon: <FaRegBuilding size={32} className="text-LightBlue" /> },
];

const DroneSection7 = () => {
  return (
    <section className="w-full py-16 bg-secondary overflow-hidden cursor-follow">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-primary mb-10">
        Applications of HydroNavix Solutions
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="marquee flex w-max animate-marquee whitespace-nowrap gap-8">
          {[...applications, ...applications].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[180px] p-6 rounded-xl"
            >
              {item.icon}
              <h3 className="text-primary text-base md:text-lg mt-3">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroneSection7;
