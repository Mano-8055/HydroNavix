import React from 'react';

const Mp3 = () => {
  const deploymentTypes = [
    {
      id: "01",
      title: "On-Site Deployment",
      desc: "Workforce for global sites including UAE, GCC, EU & Asia."
    },
    {
      id: "02",
      title: "Remote Engineering",
      desc: "Virtual expert support for project continuity worldwide."
    },
    {
      id: "03",
      title: "Contract / Long-Term",
      desc: "Flexible workforce model based on your duration needs."
    },
    {
      id: "04",
      title: "Emergency Staffing",
      desc: "Deploy skilled professionals at short notice."
    }
  ];

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#007a99] text-center mb-14">
          Deployment Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deploymentTypes.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden border border-[#8ed1ec] transition-all duration-300 hover:shadow-xl">
              {/* Top Card Section */}
              <div className="bg-white px-6 py-6 rounded-t-2xl transition-all duration-300">
                <span className="text-3xl font-bold text-[#007a99] opacity-40">{item.id}</span>
                <h3 className="mt-2 text-xl font-bold text-[#003d4d]">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm font-medium">{item.desc}</p>
              </div>

              {/* Hover Reveal Section */}
              <div className="absolute bottom-[-100px] group-hover:bottom-0 left-0 right-0 bg-[#8ed1ec] py-5 px-4 rounded-b-2xl flex justify-between items-center transition-all duration-300 ease-in-out shadow-inner">
                <span className="text-[#003d4d] text-2xl"></span>
                <button className="bg-[#003d4d] hover:bg-[#005066] text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300">
                  Hire Now
                </button>
                <span className="text-[#003d4d] text-2xl"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mp3;
