import HeroSection from "../layouts/HeroSection";
import AiInnovationSection from "../layouts/AiInnovationSection";
import VrExperienceSection from "../layouts/VrExperienceSection";
import DronePreviewSection from "../layouts/DronePreviewSection";
import { useEffect } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import Logo from "../assets/icons/Dp.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-secondary">
      <HeroSection />
      <DronePreviewSection />
      <AiInnovationSection />
      <VrExperienceSection />
      <FloatingWhatsApp
        phoneNumber="+971564048037"
        accountName="HydroNavixMarine"
        avatar={Logo}
        initialMessageByServer="How can I assist you?"
        statusMessage="Available"
        startChatText="Start chat with us"
        allowEsc={true}
      />
    </div>
  );
}
