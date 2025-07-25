import AnchorSvg from "../assets/studio/anchor.svg"; // not destructured

const MarineXBanner = () => {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start overflow-hidden bg-white">
      <div className="relative z-20 text-black text-center p-4 max-w-4xl mx-auto mt-24">
        <h2 className="font-serif font-semibold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-4">
          Where Innovation Meets the Ocean
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 opacity-90">
          MarineX Studio is Hydronavix’s digital powerhouse — where advanced tools, immersive media, and high-performance design software come together to transform marine and offshore engineering.
        </p>

        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium text-black bg-white border border-black shadow-sm">
          <img
            src={AnchorSvg}
            alt="Anchor icon"
            className="w-5 h-5"
          />
          This is not just a software list. It’s a full-stack capability lab.
        </p>
      </div>
    </section>
  );
};

export default MarineXBanner;
