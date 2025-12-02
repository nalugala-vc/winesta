import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AuthenticatedHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [scrolled]);

    const navLinks = [
        { path: '/stories', label: 'Stories' },
        { path: '/events', label: 'Events' },
        { path: '/sommelier', label: 'Sommelier' },
        { path: '/wines', label: 'Wine Club' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-background/95 shadow-sm py-4 backdrop-blur-sm' : 'bg-transparent py-6'
        }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="w-1/4">
                    <Link to="/" className="font-heading text-2xl font-bold text-primary tracking-wide">WINESTA</Link>
                </div>
                
                <nav className="hidden md:flex justify-center flex-1">
                    <ul className="flex gap-10">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link 
                                    to={link.path} 
                                    className={`text-sm font-semibold uppercase tracking-wide relative group transition-colors ${
                                        isActive(link.path) ? 'text-primary' : 'text-text hover:text-primary'
                                    }`}
                                >
                                    {link.label}
                                    <span className={`absolute h-0.5 bottom-[-4px] left-0 bg-secondary transition-all duration-300 ${
                                        isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="w-1/4 flex justify-end items-center gap-6">
                    <div className="flex items-center gap-3 relative" ref={dropdownRef}>
                        <span className="text-sm font-bold text-primary">Isabella</span>
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-bold hover:bg-secondary/30 transition-colors focus:outline-none ring-2 ring-transparent focus:ring-secondary/50"
                        >
                            I
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fade-in-up">
                                <Link 
                                    to="/dashboard" 
                                    className="block px-4 py-2 text-sm text-text hover:bg-background hover:text-primary transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    to="/cellar" 
                                    className="block px-4 py-2 text-sm text-text hover:bg-background hover:text-primary transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    My Cellar
                                </Link>
                                <Link 
                                    to="/profile" 
                                    className="block px-4 py-2 text-sm text-text hover:bg-background hover:text-primary transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    Profile
                                </Link>
                                <div className="border-t border-gray-100 my-1"></div>
                                <Link 
                                    to="/login" 
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    Sign Out
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AuthenticatedHeader;

