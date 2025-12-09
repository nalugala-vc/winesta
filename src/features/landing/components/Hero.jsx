import React from 'react';
import { Link } from 'react-router-dom';
import TransparentImage from '../../../components/TransparentImage';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] opacity-30 pointer-events-none blur-sm">
        <img src="/assets/hero-grapes-gold.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative flex items-center justify-center w-full h-[calc(100vh-80px)]">

          {/* Left Side Text - Absolutely Positioned */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-md z-20">
            <h1 className="font-heading text-[55px] md:text-[91px] text-primary leading-tight mb-6 text-right drop-shadow-sm">
              Discover <br />
              <span className="font-bold">New Wine</span>
            </h1>
            <p className="text-text-light text-sm md:text-base max-w-xs leading-relaxed ml-auto text-right">
              Join us to uncover fresh wine experiences each month. Elevate your palate with handpicked selections from around the world.
            </p>
          </div>

          {/* Center Image - Takes up most space */}
          <div className="relative w-full max-w-[800px] z-10 px-32">
            <TransparentImage
              src="/assets/hero-brown-removebg-preview.png"
              alt="Brown theme wine bottle and glass"
              className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in-up"
              tolerance={20}
            />
          </div>

          {/* Right Side Text - Absolutely Positioned */}
          <div className="absolute right-0 top-1/2 translate-y-8 max-w-md z-20 flex flex-col items-end">
            <h1 className="font-heading text-[55px] md:text-[91px] text-primary leading-tight mb-8 drop-shadow-sm">
              Adventures
            </h1>
            <Link to="/events" className="group flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity">
              Events
              <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
