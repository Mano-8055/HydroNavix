
import { Sustainability } from "../json/Sustainability";
import SplitShowcaseCarousel from "../components/SplitShowcaseCarousel";
import { useEffect } from "react";

export default function SustainablityPage() {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return <SplitShowcaseCarousel data={Sustainability} />;
}
