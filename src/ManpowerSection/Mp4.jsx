import React from 'react';

// --- IMPORTANT ---
// Make sure you have the following images in your assets folder,
// for example: src/assets/images/
import ShipbuildingImg from '../assets/images/Shipbuilding.png';
import OffshoreImg from '../assets/images/Offshore.png';
import EquipmentImg from '../assets/images/Equippment.png';
import OilEPCImg from '../assets/images/OilEPC.png';
import PortImg from '../assets/images/Port.png';

const Mp4 = () => {
  // Data for the industry sector cards, including image and grid layout classes
  const industrySectors = [
    {
      title: "Shipbuilding & Retrofits",
      description: "We craft marketing plans built on real insights, not guesswork—so every move has purpose.",
      image: ShipbuildingImg,
      gridClass: "lg:row-span-2", // This card will be taller
      imgClass: "w-4/5 -right-10 -bottom-10",
    },
    {
      title: "Offshore Platforms & Jack-Ups",
      description: "Reach the right audience at the right time with campaigns that convert across every platform.",
      image: OffshoreImg,
      gridClass: "",
      imgClass: "w-3/4 -right-8 -top-8",
    },
    {
      title: "Port & Marine Infrastructure",
      description: "Stand out with bold visuals, sharp messaging, and a brand identity that speaks your language.",
      image: PortImg,
      gridClass: "",
      imgClass: "w-3/5 -right-4 -bottom-4",
    },
    {
      title: "Marine Equipment & Systems",
      description: "From content calendars to engagement boosts, we've got you covered.",
      image: EquipmentImg,
      gridClass: "lg:col-span-1",
      imgClass: "w-1/2 -right-4 -top-4",
    },
    {
      title: "Oil & Gas EPC Projects",
      description: "Boost visibility and authority with content that ranks, resonates, and delivers long-term value.",
      image: OilEPCImg,
      gridClass: "lg:col-span-1",
      imgClass: "w-3/4 -right-12 -bottom-8",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary">
            INDUSTRY SECTORS COVERED
          </h2>
          <p className="text-secondary/70 mt-4 max-w-2xl mx-auto text-lg">
            From strategy to execution, our services are built to elevate your project, engage your team, and drive measurable results.
          </p>
        </div>

        {/* Responsive & Asymmetrical Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 (Tall) */}
          <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] lg:row-span-2 flex flex-col justify-start group">
            <div className="w-full lg:w-3/5">
              <h3 className="text-3xl font-bold mb-4">{industrySectors[0].title}</h3>
              <p className="text-primary/70">{industrySectors[0].description}</p>
            </div>
            <img 
              src={industrySectors[0].image} 
              alt={industrySectors[0].title} 
              className="absolute w-4/5 lg:w-full max-w-xs lg:max-w-md -right-10 -bottom-10 lg:-right-16 lg:-bottom-16 transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Card 2 (Short) */}
          <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-end">
             <img 
              src={industrySectors[1].image} 
              alt={industrySectors[1].title} 
              className="absolute w-1/2 max-w-xs -right-8 -top-8 lg:-right-10 lg:-top-12 transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="w-full mt-auto">
              <h3 className="text-2xl font-bold mb-3">{industrySectors[1].title}</h3>
              <p className="text-primary/70 w-full lg:w-4/5">{industrySectors[1].description}</p>
            </div>
          </div>
          
          {/* Card 3 (Short) */}
          <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-start">
            <div className="w-full lg:w-4/5">
              <h3 className="text-2xl font-bold mb-3">{industrySectors[2].title}</h3>
              <p className="text-primary/70">{industrySectors[2].description}</p>
            </div>
            <img 
              src={industrySectors[2].image} 
              alt={industrySectors[2].title} 
              className="absolute w-1/2 max-w-[180px] -right-4 -bottom-4 transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Bottom Row - Spanning full width */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 4 */}
            <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-end">
              <img 
                src={industrySectors[3].image} 
                alt={industrySectors[3].title} 
                className="absolute w-1/2 max-w-[200px] -right-8 -top-8 transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="w-full mt-auto">
                <h3 className="text-2xl font-bold mb-3">{industrySectors[3].title}</h3>
                <p className="text-primary/70">{industrySectors[3].description}</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-end">
              <img 
                src={industrySectors[4].image} 
                alt={industrySectors[4].title} 
                className="absolute w-3/5 max-w-[240px] -right-10 -bottom-8 transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="w-full mt-auto">
                <h3 className="text-2xl font-bold mb-3">{industrySectors[4].title}</h3>
                <p className="text-primary/70">{industrySectors[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mp4;
