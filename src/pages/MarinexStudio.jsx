import MarineXBanner from '../layouts/MarineXBanner';
import DigitalExpertise from "../json/DigitalExpertise";
import SplitShowcaseCarousel from "../components/SplitShowcaseCarousel";

const MarinexStudio = () => {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start overflow-hidden bg-black">
      {/* Banner Section */}
      <div className="relative z-20 w-full h-screen"> {/* Added h-screen here */}
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