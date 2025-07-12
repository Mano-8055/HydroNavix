import DigitalExpertise from "../json/DigitalExpertise";
import SplitShowcaseCarousel from "../components/SplitShowcaseCarousel";
import { useEffect } from "react";

export default function DigitalExpertisePage() {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return <SplitShowcaseCarousel data={DigitalExpertise} />;
}
