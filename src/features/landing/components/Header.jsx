import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">WINESTA</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/wines">Wines</Link></li>
            <li><Link to="/stories">Stories</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="auth-actions">
          <Link to="/login" className="login-link">Log In</Link>
          <Link to="/signup" className="btn btn-primary signup-btn">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
