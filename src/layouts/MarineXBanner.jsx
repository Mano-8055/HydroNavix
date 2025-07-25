
import StudioBlueTheme from '../assets/studio/studio-blue-theme.mp4';

const MarineXBanner = () => {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-start overflow-hidden bg-black">
<video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={StudioBlueTheme}
        autoPlay
        loop
        muted
        playsInline
        aria-label="MarineX Studio cinematic background video"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white text-center p-4 max-w-4xl mx-auto mt-24">
        <h1 className="font-serif font-semibold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-4">
          MarineX Studio
        </h1>
        <h2 className="font-serif font-semibold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-4">
          Where Innovation Meets the Ocean
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 opacity-90">
          Hydronavix’s digital powerhouse, transforming marine engineering with
          cutting-edge simulations and immersive technology.
        </p>
      </div>
    </section>
  );
}

export default MarineXBanner;