import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import FadeWords from "../components/FadeWords";
import ServiceSection from '../layouts/ServiceSection';

const Service = () => {
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start("visible");
  }, []);
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-32 text-center">
      <div className="flex flex-col gap-1 items-center justify-center pb-4 px-4 md:pb-8">
        <FadeWords
          text="ENGINEERING SERVICES"
          controls={titleControls}
          className="text-2xl sm:text-4xl font-semibold tracking-tight text-center mb-1.5"
        />
        <p className="max-w-4xl text-md md:text-lg text-secondary/60">
          Hydronavix offers a wide spectrum of engineering services across marine, offshore, oil & gas, and renewable sectors reimagined with smart processes, advanced tools, and practical delivery
        </p>
      </div>

      <div className="w-full mx-auto">
        <ServiceSection />
      </div>
    </div>
  );
};

export default Service;
