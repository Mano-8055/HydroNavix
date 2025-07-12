import AssetIntegrity from "../json/AssetIntegrity";
import SplitShowcaseCarousel from "../components/SplitShowcaseCarousel";
import { useEffect } from "react";

export default function AssetIntegiryPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SplitShowcaseCarousel data={AssetIntegrity} />;
}
