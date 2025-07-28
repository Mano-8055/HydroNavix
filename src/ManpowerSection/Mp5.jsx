import React, { useState } from 'react';

// Using the default industry image as requested for all cards.
import industryDefault from '../assets/images/asset.png';

// Data for the "Our Advantage" section
const advantages = [
  {
    id: "01",
    title: "Global Talent Pool",
    description: "A self-learning intelligence core that observes, learns, and makes smart decisions in milliseconds to optimize your operations.",
    image: industryDefault,
  },
  {
    id: "02",
    title: "Technical Screening",
    description: "An automated architecture engine that designs and adapts your infrastructure on the fly for peak performance and reliability.",
    image: industryDefault,
  },
  {
    id: "03",
    title: "Fast Mobilization",
    description: "Robust security protocols and systems that protect your critical assets against emerging threats around the clock.",
    image: industryDefault,
  },
  {
    id: "04",
    title: "Expert Backing",
    description: "An intelligent scaling system that grows with your needs, ensuring resources are optimized automatically and efficiently.",
    image: industryDefault,
  },
];

const Mp5 = () => {
  // State to keep track of the currently active tab, defaulting to the first one.
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#080a15]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Advantage
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Discover the core strengths that set us apart and drive success in every project we undertake.
          </p>
        </div>

        {/* Tab container */}
        <div className="flex flex-col md:flex-row bg-[#1c1c1e] rounded-3xl overflow-hidden min-h-[600px]">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`cursor-pointer transition-all duration-500 ease-in-out border-l border-gray-700/50
                ${activeTab === idx ? 'w-full md:w-3/5 bg-[#71a8bf]' : 'w-full md:w-1/5 bg-[#1c1c1e] hover:bg-gray-800'}`}
            >
              {/* Content for each tab */}
              <div className="p-8 h-full flex flex-col">
                {/* Header with number and arrow */}
                <div className={`flex items-center gap-4 text-white transition-all duration-300 ${activeTab === idx ? '' : 'md:flex-col'}`}>
                  {activeTab === idx ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
                      <path d="M5 19L19 5M19 5H5M19 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span className="text-4xl font-light opacity-50">{item.id}</span>
                </div>
                
                <div className="flex-grow flex flex-col justify-center mt-6">
                  {/* Expanded content for the active tab */}
                  <div className={`transition-all duration-500 ease-in-out ${activeTab === idx ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/80 mb-8">{item.description}</p>
                    <img src={item.image} alt={item.title} className="rounded-2xl w-full object-cover h-64" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mp5;
