import MarineXBanner from '../layouts/MarineXBanner';
import DigitalExpertise from "../json/DigitalExpertise";
import SplitShowcaseCarousel from "../components/SplitShowcaseCarousel";

const MarinexStudio = () => {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start overflow-hidden">

      <div className="relative z-20 w-full h-screen">
        <MarineXBanner />
      </div>

      {/* Carousel Section */}
      <div className="relative z-20 w-full">
        <SplitShowcaseCarousel data={DigitalExpertise} />
      </div>
    </section>
  )
}

export default MarinexStudio