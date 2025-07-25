// src/pages/MarinexStudio.jsx

import MarineXBanner from '../layouts/MarineXBanner';
import AnchorSvg from "../assets/studio/anchor.svg";
import DigitalExpertise from "../json/DigitalExpertise";
import ScrollControlledCarousel from "../components/ScrollControlledCarousel";

import ShipIcon from "../assets/studio/ship.png";
import ScanIcon from "../assets/studio/scan.png";
import RetrofitIcon from "../assets/studio/puzzle.png";
import WalkthroughIcon from "../assets/studio/layout.png";

// FIX: Import Mail icon (e.g. from lucide-react or your preferred icon library)
import { Mail } from "lucide-react"; // Adjust path if using a different icon library

const MarinexStudio = () => {
  const customAnimationStyle = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(10deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes float-reverse {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(20px) rotate(-10deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes fade-in-up {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-reverse {
      animation: float-reverse 8s ease-in-out infinite;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  `;

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start bg-white">
      {/* Inject custom animations */}
      <style>{customAnimationStyle}</style>

      {/* Banner Section */}
      <div className="relative z-10 w-full h-screen">
        <MarineXBanner />
      </div>

      {/* Scroll-Controlled Carousel */}
      <ScrollControlledCarousel data={DigitalExpertise} />

      {/* Informational Grid */}
      <div className="relative z-10 text-black text-center p-4 max-w-4xl mx-auto my-24">
        <h3 className="font-serif font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4">
          Immersive Digital Content
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {[
            { title: "High-quality 3D ship and rig models", icon: ShipIcon },
            { title: "Walkthroughs of machinery & deck layouts", icon: WalkthroughIcon },
            { title: "Retrofit before/after comparisons", icon: RetrofitIcon },
            { title: "Scan-to-model case studies", icon: ScanIcon },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-start bg-gray-100 rounded-2xl shadow-md px-6 py-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-md md:text-lg font-medium text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium text-black bg-white border border-black shadow-sm mt-14">
          <img src={AnchorSvg} alt="Anchor icon" className="w-5 h-5" />
          All built to inform, impress, and accelerate engineering decisions.
        </p>
      </div>

      {/* Highlight Section */}
      <div className="bg-slate-900 font-sans w-full">
        <section className="relative flex items-center justify-center w-full min-h-screen overflow-hidden text-white">
          {/* Floating Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-10%] left-[5%] w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-50 animate-float"></div>
            <div className="absolute bottom-[-10%] right-[5%] w-96 h-96 bg-sky-500/30 rounded-full filter blur-3xl opacity-50 animate-float-reverse"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center lg:items-start lg:text-left">
            <h1
              className="text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              MarineX Studio is where future-ready engineering comes alive — visually, digitally, and interactively.
            </h1>

            <p
              className="mt-6 text-lg leading-8 text-slate-400 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <span role="img" aria-label="email emoji" className="mr-2">📩</span>
              Visit, explore, or collaborate with us.
            </p>

            <div
              className="flex flex-col items-center justify-center w-full mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-transform duration-300 ease-in-out transform bg-sky-600 border border-transparent rounded-md sm:w-auto hover:bg-sky-700 hover:scale-105">
                Explore Projects
              </button>
              <button className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-sky-300 transition-all duration-300 ease-in-out bg-slate-800/50 border border-slate-700 rounded-md sm:w-auto hover:bg-slate-800 hover:text-white group">
                Collaborate
                <Mail className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MarinexStudio;
