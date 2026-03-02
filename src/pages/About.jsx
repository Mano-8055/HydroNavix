import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";
import Section6 from "../sections/Section6";
import { FaCogs, FaTools, FaMoneyBillWave, FaRoute, FaBalanceScale, FaBuilding } from "react-icons/fa";

const About = () => {
  const componentRef = useRef(null);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <Helmet>
        <title>About Hydronavix Marine - Our Mission, Vision & Team</title>
        <meta name="description" content="Learn about Hydronavix Marine's mission to revolutionize marine technology with innovative engineering solutions, AI, drones, and VR experiences for safer maritime operations." />
        <meta name="keywords" content="about Hydronavix Marine, marine technology company, mission vision, marine engineering team" />
        <meta property="og:title" content="About Hydronavix Marine - Our Mission, Vision & Team" />
        <meta property="og:description" content="Discover our commitment to advancing marine navigation and intelligence through cutting-edge technology and engineering expertise." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div ref={componentRef} className="text-secondary py-20 relative">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        {/* What We Do */}
        <div data-aos="fade-left" className="min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
                What We <span style={{color: '#0B5384'}}>Do</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                HydroNavix delivers engineering and technical solutions that support the safe construction, operation, and maintenance of marine and offshore assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                <FaCogs size={32} className="text-LightBlue" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Marine and Offshore Engineering Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Engineering designs that support safe, efficient, and compliant marine and offshore structures and systems.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                <FaTools size={32} className="text-LightBlue" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Consulting and Project Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end technical support throughout the project lifecycle, including engineering reviews, technical guidance, and on-call expertise for marine and offshore developments.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                <FaMoneyBillWave size={32} className="text-LightBlue" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Cost-Effective and Reliable Engineering Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Practical solutions that balance quality, safety, and cost efficiency, built for real-world operating environments rather than short-term experimentation.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                <FaRoute size={32} className="text-LightBlue" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Navigation & Operational Intelligence (Positioning)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Solutions aligned with digital transformation in marine operations, enabling better decision-making and operational intelligence where data and engineering intersect.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                <FaBalanceScale size={32} className="text-LightBlue" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Structural Weighing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Precision structural weighing services for marine and offshore installations, ensuring accurate load calculations and safe operations.
                </p>
              </div>

              <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                <FaBuilding size={32} className="text-LightBlue" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Heavy Lift Engineering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized engineering for heavy lift operations in marine and offshore environments, combining technical expertise with innovative lifting solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Section5 />
        {/* <Section6 /> */}

        {/* Future Roadmap Section */}
        <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-gradient-to-br from-pink-50 to-rose-50 relative">
          <img
            src="/src/assets/services/s11.webp"
            alt="Future Roadmap Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
                Future <span className="text-pink-600" style={{color:'#0B5384'}}>Roadmap</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our strategic vision for the next decade of marine innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                    <h3 className="text-xl font-bold text-gray-800"><span className="font-mono">2025</span>: AI Integration</h3>
                  </div>
                  <p className="text-gray-600">Full AI integration across all marine operations with autonomous decision-making systems.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                    <h3 className="text-xl font-bold text-gray-800"><span className="font-mono">2027</span>: Global Expansion</h3>
                  </div>
                  <p className="text-gray-600">Establish operations in 10+ countries with regional headquarters in strategic locations.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                    <h3 className="text-xl font-bold text-gray-800"><span className="font-mono">2030</span>: Carbon Neutral</h3>
                  </div>
                  <p className="text-gray-600">Achieve carbon neutrality across all operations and client projects.</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
                    <h3 className="text-xl font-bold text-gray-800"><span className="font-mono">2026</span>: Autonomous Fleet</h3>
                  </div>
                  <p className="text-gray-600">Launch world's first fully autonomous commercial vessel fleet.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">5</div>
                    <h3 className="text-xl font-bold text-gray-800"><span className="font-mono">2028</span>: Digital Twin Platform</h3>
                  </div>
                  <p className="text-gray-600">Complete digital twin platform for entire marine ecosystems.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">6</div>
                    <h3 className="text-xl font-bold text-gray-800"><span className="font-mono">2032</span>: Industry Leadership</h3>
                  </div>
                  <p className="text-gray-600">Become the world's leading marine technology and engineering company.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
               <p className="text-lg md:text-xl  text-gray-800" style={{color:'gray'}}>
                Hydronavix aims to lead the transformation toward a smarter, auttomated, and more connected marine industry.
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-800" style={{fontStyle:'italic'}}>
                "The Ocean will remain constant <br /> but how we work with it must evolve"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
