import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
            <div className="features-grid">
                <div className="feature-card">
                    <h3>Personal Cellar</h3>
                    <p>Catalog your collection and track your tasting notes with elegance.</p>
                </div>
                <div className="feature-card">
                    <h3>Global Connection</h3>
                    <p>Connect with wine lovers from around the world and share your moments.</p>
                </div>
                <div className="feature-card">
                    <h3>Curated Events</h3>
                    <p>Discover and attend exclusive wine tastings and meetups near you.</p>
                </div>
            </div>
        </div>
    </section>
);

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <main>
                <Hero />
                <WineTypes />
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
