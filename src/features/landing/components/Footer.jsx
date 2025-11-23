import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-primary text-white py-20 pb-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-between mb-16">
                <div className="flex-1 min-w-[250px] mb-8">
                    <h2 className="text-white text-4xl mb-4 font-heading font-bold">WINESTA</h2>
                    <p className="font-heading italic opacity-80">Start the secret romance, today.</p>
                </div>
                <div className="flex-[2] flex justify-around flex-wrap gap-8">
                    <div className="footer-column">
                        <h3 className="text-secondary text-lg mb-6 uppercase tracking-wider font-heading font-bold">Explore</h3>
                        <ul>
                            <li className="mb-3"><a href="/wines" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Wines</a></li>
                            <li className="mb-3"><a href="/regions" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Regions</a></li>
                            <li className="mb-3"><a href="/producers" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Producers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="text-secondary text-lg mb-6 uppercase tracking-wider font-heading font-bold">Community</h3>
                        <ul>
                            <li className="mb-3"><a href="/events" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Events</a></li>
                            <li className="mb-3"><a href="/stories" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Stories</a></li>
                            <li className="mb-3"><a href="/members" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Membership</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="text-secondary text-lg mb-6 uppercase tracking-wider font-heading font-bold">Support</h3>
                        <ul>
                            <li className="mb-3"><a href="/contact" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Contact</a></li>
                            <li className="mb-3"><a href="/faq" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">FAQ</a></li>
                            <li className="mb-3"><a href="/terms" className="opacity-70 text-sm hover:opacity-100 hover:text-secondary transition-colors duration-300">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-4 mt-8 md:mt-0">
                    <a href="#" aria-label="Instagram" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-xs hover:bg-white hover:text-primary transition-colors duration-300">IG</a>
                    <a href="#" aria-label="Twitter" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-xs hover:bg-white hover:text-primary transition-colors duration-300">TW</a>
                    <a href="#" aria-label="Facebook" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-xs hover:bg-white hover:text-primary transition-colors duration-300">FB</a>
                </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10 text-xs opacity-50">
                <p>&copy; {new Date().getFullYear()} Winesta. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
