import Marquee from "react-fast-marquee";

export default function Ads() {
  return (
    <div className="bg-primary text-secondary py-1">
      <Marquee
        speed={100}
        pauseOnHover
        gradient={false}
      >
        <span className="mx-6">
          Meet HydroNavix at INMEX India 2025, 10–12 September — Let’s connect!
        </span>
        <span className="mx-6">
          ||
        </span>
        <span className="mx-6">
          HydroNavix is participating in ADIPEC 2025 | 3–6 November | Abu Dhabi, UAE
        </span>
      </Marquee>
    </div>
  );
}
