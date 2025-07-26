import MarineXBanner from '../layouts/MarineXBanner';
import ScrollControlledCarousel from "../components/ScrollControlledCarousel";
import Marinex from '../json/Marinex';

import ShipIcon from "../assets/studio/ship.png";
import ScanIcon from "../assets/studio/scan.png";
import RetrofitIcon from "../assets/studio/puzzle.png";
import WalkthroughIcon from "../assets/studio/layout.png";


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
    <section className="relative w-full h-full flex flex-col items-center justify-center py-32">
      <style>{customAnimationStyle}</style>

      <div className="relative z-10 w-full px-4">
        <MarineXBanner />
      </div>

      <ScrollControlledCarousel data={Marinex} />

      <div className="relative z-10 text-black text-center max-w-7xl px-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center gap-0.5">
          <h3 className="text-2xl sm:text-4xl text-secondary font-semibold tracking-tight mb-1">
            Immersive Digital Content
          </h3>
          <p className="max-w-4xl text-md md:text-lg text-secondary/60">
            All built to inform, impress, and accelerate engineering decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { title: "High-quality 3D ship and rig models", icon: ShipIcon },
            { title: "Walkthroughs of machinery & deck layouts", icon: WalkthroughIcon },
            { title: "Retrofit before/after comparisons", icon: RetrofitIcon },
            { title: "Scan-to-model case studies", icon: ScanIcon },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-start hover:scale-105 cursor-pointer bg-secondary text-primary shadow-md px-6 py-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-md md:text-lg font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarinexStudio;
