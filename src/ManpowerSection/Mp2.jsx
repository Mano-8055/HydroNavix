import React from 'react';

// Importing Specific Images
import cadModelersImg from '../assets/images/Mp2/CAD & 3D Modelers.png';
import electricalEngineersImg from '../assets/images/Mp2/Electrical Engineers.png';
import marineConsultantsImg from '../assets/images/Mp2/Marine Consultants.png';
import mechanicalHvacImg from '../assets/images/Mp2/Mechanical & HVAC.png';
import pipingEngineersImg from '../assets/images/Mp2/Piping Engineers.png';
import projectManagersImg from '../assets/images/Mp2/Project Managers.png';
import qaqcInspectorsImg from '../assets/images/Mp2/QAQC Inspectors.png';
import structuralEngineersImg from '../assets/images/Mp2/Structural Engineers.png';

// Data for the offer cards
const offerCards = [
  {
    title: "Piping Engineers",
    fullDesc: "We offer piping engineers with offshore/onshore design experience using PDMS/E3D.",
    image: pipingEngineersImg,
  },
  {
    title: "Structural Engineers",
    fullDesc: "Expertise in structural analysis and 3D model coordination for heavy industries.",
    image: structuralEngineersImg,
  },
  {
    title: "Mechanical & HVAC",
    fullDesc: "HVAC & mechanical layout experts for vessels, buildings, plants, and rigs.",
    image: mechanicalHvacImg,
  },
  {
    title: "Electrical Engineers",
    fullDesc: "Designing integrated power and automation systems for complex projects.",
    image: electricalEngineersImg,
  },
  {
    title: "Marine Consultants",
    fullDesc: "Naval architects & marine piping engineers for shipbuilding and retrofits.",
    image: marineConsultantsImg,
  },
  {
    title: "QA/QC Inspectors",
    fullDesc: "Certified QA/QC inspectors for offshore and shipyard quality assurance.",
    image: qaqcInspectorsImg,
  },
  {
    title: "CAD & 3D Modelers",
    fullDesc: "Drafters & modelers for intelligent 2D/3D designs across platforms.",
    image: cadModelersImg,
  },
  {
    title: "Project Managers",
    fullDesc: "Leaders managing end-to-end project execution with engineering insight.",
    image: projectManagersImg,
  },
];

const Mp2 = () => {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary">What We Offer</h2>
          <p className="text-secondary/70 text-lg mt-2 max-w-2xl mx-auto">
            Providing a comprehensive range of skilled professionals to meet the demands of your projects.
          </p>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden shadow-lg min-h-[320px]"
            >
              {/* Background Image with Hover Zoom & Blur Effect */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-secondary/40" />

              {/* Content Container */}
              <div className="relative z-10 p-6 text-primary h-full flex flex-col justify-between">
                {/* Top Section: Title and Hover-reveal description */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{card.title}</h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    <p className="text-primary font-bold text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {card.fullDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Arrow Button */}
                <div className="flex justify-between items-end">
                  <button className="bg-LightBlue hover:bg-LightBlue/80 transition-colors p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
