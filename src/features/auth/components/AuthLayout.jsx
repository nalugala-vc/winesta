import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding/Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-primary">
                <div className="absolute inset-0">
                    <img
                        src="/assets/auth-background.png"
                        alt="Wine cellar"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
                    <Link to="/" className="font-heading text-5xl font-bold mb-6 tracking-wide">
                        WINESTA
                    </Link>
                    <p className="text-xl text-center max-w-md font-light leading-relaxed">
                        Join the global community of wine enthusiasts. Discover, rate, and share your wine journey.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-8">
                        <Link to="/" className="font-heading text-4xl font-bold text-primary tracking-wide">
                            WINESTA
                        </Link>
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="font-heading text-4xl text-primary mb-2">{title}</h1>
                        {subtitle && <p className="text-text-light">{subtitle}</p>}
                    </div>

                    {/* Form Content */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
