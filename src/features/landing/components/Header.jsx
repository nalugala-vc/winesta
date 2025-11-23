import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm py-4 backdrop-blur-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="font-heading text-2xl font-bold text-primary tracking-wide">WINESTA</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <li><Link to="/about" className="text-sm font-semibold uppercase tracking-wide text-text relative group hover:text-primary transition-colors">About Us<span className="absolute w-0 h-0.5 bottom-[-4px] left-0 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
            <li><Link to="/wines" className="text-sm font-semibold uppercase tracking-wide text-text relative group hover:text-primary transition-colors">Wines<span className="absolute w-0 h-0.5 bottom-[-4px] left-0 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
            <li><Link to="/stories" className="text-sm font-semibold uppercase tracking-wide text-text relative group hover:text-primary transition-colors">Stories<span className="absolute w-0 h-0.5 bottom-[-4px] left-0 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
            <li><Link to="/contact" className="text-sm font-semibold uppercase tracking-wide text-text relative group hover:text-primary transition-colors">Contact Us<span className="absolute w-0 h-0.5 bottom-[-4px] left-0 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <Link to="/login" className="font-semibold text-sm uppercase tracking-wide hover:text-primary transition-colors">Log In</Link>
          <Link to="/signup" className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wide bg-primary text-white hover:bg-primary-light transition-colors duration-300">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
