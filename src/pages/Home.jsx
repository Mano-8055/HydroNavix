import HeroSection from "../layouts/HeroSection";
import AiInnovationSection from "../layouts/AiInnovationSection";
import VrExperienceSection from "../layouts/VrExperienceSection";
import DronePreviewSection from "../layouts/DronePreviewSection";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="text-secondary">
      <HeroSection />
      <AiInnovationSection />
      <VrExperienceSection />
      <DronePreviewSection />
    </div>
  );
}
