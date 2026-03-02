import HeroSection from "../layouts/HeroSection";
import AiInnovationSection from "../layouts/AiInnovationSection";
import VrExperienceSection from "../layouts/VrExperienceSection";
import DronePreviewSection from "../layouts/DronePreviewSection";
import HeavyLiftSection from "../layouts/HeavyLiftSection";
import { useEffect } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import { Helmet } from "react-helmet-async";
import Logo from "../assets/icons/Dp.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hydronavix Marine - Advanced Marine Solutions & Engineering Services</title>
        <meta name="description" content="Hydronavix Marine offers cutting-edge marine navigation, drone technology, AI innovation, VR experiences, and heavy lift engineering services for the maritime industry." />
        <meta name="keywords" content="marine engineering, drone solutions, AI marine technology, VR maritime, heavy lift services, navigation systems" />
        <meta property="og:title" content="Hydronavix Marine - Advanced Marine Solutions & Engineering Services" />
        <meta property="og:description" content="Leading provider of innovative marine technology solutions including drones, AI, VR, and engineering services." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="text-secondary overflow-hidden">
        <HeroSection />
        <HeavyLiftSection />
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
    </>
  );
}
