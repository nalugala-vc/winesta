import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WineTypes from './components/WineTypes';
import Footer from './components/Footer';


const AboutSection = () => (
    <section className="py-32 px-4 text-center container mx-auto">
        <div className="about-content">
            <h2 className="text-5xl mb-8 text-primary font-heading font-bold">A Community of Taste</h2>
            <p className="max-w-3xl mx-auto mb-20 text-xl text-text-light">
                Winesta is more than just a platform; it's a gathering place for those who appreciate the finer things in life.
                Whether you are a seasoned sommelier or a curious beginner, our community is designed to elevate your wine journey.
            </p>
            <Link to="/login" className="inline-block px-8 py-3 text-base font-semibold uppercase tracking-wide border border-transparent transition-all duration-300 bg-primary text-white hover:bg-primary-light mt-8">Join the Community</Link>
        </div>
    </section>
);

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <Hero />
                <Features />

                <div className="text-center py-16 pb-8">
                    <h2 className="text-5xl mb-8 text-primary font-heading font-bold">Explore Our Collection</h2>
                    <p className="max-w-xl mx-auto text-xl text-text-light">
                        Discover the finest selection of wines, curated for every palate and occasion.
                    </p>
                </div>

                <WineTypes />
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
