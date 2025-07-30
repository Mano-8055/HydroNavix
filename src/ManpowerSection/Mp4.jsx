import React from 'react';

import ShipbuildingImg from '../assets/images/a.png';
import OffshoreImg from '../assets/images/b.png';
import EquipmentImg from '../assets/images/d.png';
import OilEPCImg from '../assets/images/e.png';
import PortImg from '../assets/images/f.png';
// ...imports remain unchanged

const Mp4 = () => {
  const industrySectors = [
    {
      title: "Shipbuilding & Retrofits",
      description: "We craft marketing plans built on real insights, not guesswork—so every move has purpose.",
      image: ShipbuildingImg,
    },
    {
      title: "Offshore Platforms & Jack-Ups",
      description: "Reach the right audience at the right time with campaigns that convert across every platform.",
      image: OffshoreImg,
    },
    {
      title: "Port & Marine Infrastructure",
      description: "Stand out with bold visuals, sharp messaging, and a brand identity that speaks your language.",
      image: PortImg,
    },
    {
      title: "Marine Equipment & Systems",
      description: "From content calendars to engagement boosts, we've got you covered.",
      image: EquipmentImg,
    },
    {
      title: "Oil & Gas EPC Projects",
      description: "Boost visibility and authority with content that ranks, resonates, and delivers long-term value.",
      image: OilEPCImg,
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-secondary">
            INDUSTRY SECTORS COVERED
          </h2>
          <p className="text-secondary/70 mt-4 max-w-2xl mx-auto text-lg">
            From strategy to execution, our services are built to elevate your project, engage your team, and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] lg:row-span-2 flex flex-col justify-start group">
            <div className="relative z-10 w-full lg:w-3/5">
              <h3 className="text-3xl font-bold mb-4">{industrySectors[0].title}</h3>
              <p className="text-primary/70">{industrySectors[0].description}</p>
            </div>
            <img 
              src={industrySectors[0].image} 
              alt={industrySectors[0].title} 
              className="absolute z-0 w-[100%] max-w-[900px] -right-12 -bottom-16 transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Card 2 */}
          <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-end">
            <img 
              src={industrySectors[1].image} 
              alt={industrySectors[1].title} 
              className="absolute z-0 w-[75%] max-w-[400px] -right-8 -top-10 lg:-right-10 transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="relative z-10 w-full mt-auto">
              <h3 className="text-2xl font-bold mb-3">{industrySectors[1].title}</h3>
              <p className="text-primary/70 w-full lg:w-4/5">{industrySectors[1].description}</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-start">
            <div className="relative z-10 w-full lg:w-4/5">
              <h3 className="text-2xl font-bold mb-3">{industrySectors[2].title}</h3>
              <p className="text-primary/70">{industrySectors[2].description}</p>
            </div>
            <img 
              src={industrySectors[2].image} 
              alt={industrySectors[2].title} 
              className="absolute z-0 w-[60%] max-w-[390px] -right-9 -bottom-6 transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Bottom Row */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 4 */}
            <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-end">
              <img 
                src={industrySectors[3].image} 
                alt={industrySectors[3].title} 
                className="absolute z-0 w-[95%] max-w-[310px] -right-8 -top-8 transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10 w-full mt-auto">
                <h3 className="text-2xl font-bold mb-3">{industrySectors[3].title}</h3>
                <p className="text-primary/70">{industrySectors[3].description}</p>
              </div>
            </div>

            {/* Card 5 (Keep Same) */}
            <div className="relative bg-secondary text-primary p-8 rounded-3xl overflow-hidden min-h-[300px] flex flex-col group justify-end">
              <img 
                src={industrySectors[4].image} 
                alt={industrySectors[4].title} 
                className="absolute z-0 w-3/5 max-w-[330px] -right-10 -bottom-8 transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10 w-full mt-auto">
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
