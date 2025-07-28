import React from 'react';

// --- IMPORTANT ---
// For the best look, please replace the placeholder images below 
// with actual images for each service in your assets folder.
import industryDefault from '../assets/images/industry1.jpg';
// Example: import pipingEngineersImg from '../assets/images/piping-engineers.jpg';

// Data for the offer cards (icons removed)
const offerCards = [
  {
    title: "Piping Engineers",
    fullDesc: "We offer piping engineers with offshore/onshore design experience using PDMS/E3D.",
    image: industryDefault, // Replace with a specific image like 'pipingEngineersImg'
  },
  {
    title: "Structural Engineers",
    fullDesc: "Expertise in structural analysis and 3D model coordination for heavy industries.",
    image: industryDefault, // Replace with a specific image
  },
  {
    title: "Mechanical & HVAC",
    fullDesc: "HVAC & mechanical layout experts for vessels, buildings, plants, and rigs.",
    image: industryDefault, // Replace with a specific image
  },
  {
    title: "Electrical Engineers",
    fullDesc: "Designing integrated power and automation systems for complex projects.",
    image: industryDefault, // Replace with a specific image
  },
  {
    title: "Marine Consultants",
    fullDesc: "Naval architects & marine piping engineers for shipbuilding and retrofits.",
    image: industryDefault, // Replace with a specific image
  },
  {
    title: "QA/QC Inspectors",
    fullDesc: "Certified QA/QC inspectors for offshore and shipyard quality assurance.",
    image: industryDefault, // Replace with a specific image
  },
  {
    title: "CAD & 3D Modelers",
    fullDesc: "Drafters & modelers for intelligent 2D/3D designs across platforms.",
    image: industryDefault, // Replace with a specific image
  },
  {
    title: "Project Managers",
    fullDesc: "Leaders managing end-to-end project execution with engineering insight.",
    image: industryDefault, // Replace with a specific image
  },
];

const Mp2 = () => {
  return (
    <section className="px-6 py-20 bg-[#080a15]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            What We Offer
          </h2>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">
            Providing a comprehensive range of skilled professionals to meet the demands of your projects.
          </p>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-lg min-h-[400px]"
            >
              {/* Background Image with Hover Zoom & Blur Effect */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

              {/* Content Container */}
              <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
                {/* Top Section: Title and Hover-reveal description */}
                <div>
                  <h3 className="text-3xl font-bold">{card.title}</h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        {card.fullDesc}
                    </p>
                  </div>
                </div>
                
                {/* Bottom Section: Arrow Button */}
                <div className="flex justify-between items-end">
                    <button className="bg-blue-800 hover:bg-cyan-600 transition-colors p-4 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    </button>
                    
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mp2;
