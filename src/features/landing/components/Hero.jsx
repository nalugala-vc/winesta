import React from 'react';


const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <img src="/assets/hero-wine-premium.png" alt="Premium Wine Pouring" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      <div className="relative z-20 text-center max-w-4xl px-5 animate-fade-in">
        <h1 className="flex flex-col mb-6 drop-shadow-lg">
          <span className="font-body text-2xl md:text-3xl font-light tracking-[3px] uppercase mb-2 block opacity-0 animate-slide-down">Uncork the World of</span>
          <span className="font-heading text-5xl md:text-7xl leading-tight text-white opacity-0 animate-scale-in">Wine Together</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 opacity-90 max-w-xl mx-auto opacity-0 animate-fade-in-delay">
          Join the global community to discover, rate, and share your wine journey.
        </p>
        <button className="px-10 py-4 text-lg tracking-wide opacity-0 animate-fade-in-up bg-primary text-white hover:bg-primary-light transition-colors duration-300 uppercase font-semibold">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
