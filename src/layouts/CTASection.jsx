import React from 'react';

const CTASection = React.forwardRef(({ titleRef, subtitleRef, buttonRef, handleButtonHover }, _) => (
  <div
    className="cta-section bg-black rounded-2xl shadow-2xl px-8 py-12 md:px-20 md:py-16 text-center max-w-3xl w-full mx-auto
    -mb-24 md:-mb-28 relative"
    style={{
      boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
      marginTop: '-80px', // overlap effect
    }}
  >
    <div
      style={{
        background: 'linear-gradient(90deg, #000 0%, #1a1a1a 50%, #000 100%)'
      }}
      className="absolute inset-0 rounded-2xl"
    />
    <div className="relative z-10">
      <h2
        ref={titleRef}
        className="text-3xl md:text-5xl font-semibold mb-4 opacity-0 transform translate-y-12"
      >
        We'd love to hear from you!
      </h2>
      <p
        ref={subtitleRef}
        className="text-gray-300 mb-8 text-lg opacity-0 transform translate-y-8"
      >
        If you'd like to speak to someone at Sea Delta Marine, feel free to write us.
      </p>
      <button
        ref={buttonRef}
        className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors opacity-0 transform translate-y-8"
        onMouseEnter={() => handleButtonHover(true)}
        onMouseLeave={() => handleButtonHover(false)}
      >
        Let's Talk
      </button>
    </div>
  </div>
));

export default CTASection;
