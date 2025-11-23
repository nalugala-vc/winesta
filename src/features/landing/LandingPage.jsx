import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WineTypes from './components/WineTypes';
import Footer from './components/Footer';
import './LandingPage.css';

const AboutSection = () => (
    <section className="about-section container">
        <div className="about-content">
            <h2 className="section-title">A Community of Taste</h2>
            <p className="section-text">
                Winesta is more than just a platform; it's a gathering place for those who appreciate the finer things in life.
                Whether you are a seasoned sommelier or a curious beginner, our community is designed to elevate your wine journey.
            </p>
            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Join the Community</button>
        </div>
    </section>
);

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <main>
                <Hero />
                <Features />

                <div className="section-header text-center" style={{ padding: '4rem 0 2rem' }}>
                    <h2 className="section-title">Explore Our Collection</h2>
                    <p className="section-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
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
