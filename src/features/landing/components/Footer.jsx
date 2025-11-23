import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">WINESTA</h2>
                    <p className="footer-tagline">Start the secret romance, today.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="/wines">Wines</a></li>
                            <li><a href="/regions">Regions</a></li>
                            <li><a href="/producers">Producers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/stories">Stories</a></li>
                            <li><a href="/members">Membership</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/terms">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Twitter">TW</a>
                    <a href="#" aria-label="Facebook">FB</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Winesta. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
