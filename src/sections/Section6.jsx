
const Section6 = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4 md:px-12">

      <div className="absolute top-0 md:top-24 left-0 w-full z-0 overflow-hidden pointer-events-none">
        <h2 className="animate-marquee font-bold text-4xl md:text-6xl text-secondary whitespace-nowrap">
          Our Team’s Strength ~ Our Team’s Strength ~ Our Team’s Strength ~ Our Team’s Strength ~ Our Team’s Strength ~ Our Team’s Strength ~
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center md:items-end justify-center md:justify-between min-h-[400px] gap-10">
        <div className="w-[250px] h-[300px] md:w-[320px] md:h-[380px] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1645932647969-6a92e3d6667f?q=80&w=1170&auto=format&fit=crop"
            alt="Team"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="text-left max-w-2xl">
          <p className="text-xl md:text-2xl text-justify font-medium text-secondary/70 leading-relaxed">
            “Our team spans Naval Architects, Marine & Electrical Engineers, Process Engineers,
            Sustainability Experts, and Surveyors. We deliver precise, passionate, and
            end-to-end consultancy with proven real-world impact.”
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Section6;
