import React from 'react';
import AuthenticatedHeader from '../../../components/AuthenticatedHeader';

const WineClubPage = () => {
    return (
        <div className="min-h-screen bg-background font-body">
            <AuthenticatedHeader />
            
            <div className="pt-32 pb-16 container mx-auto px-4">
                {/* Minimalist Hero Section */}
                <div className="mb-20 max-w-4xl mx-auto text-center">
                    <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-bold">Membership</p>
                    <h1 className="font-heading text-6xl md:text-7xl text-primary mb-8 leading-tight">
                        The Wine Club
                    </h1>
                    <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join an exclusive community of wine enthusiasts. Receive curated selections delivered to your door twice a year.
                    </p>
                </div>

                {/* Tiers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    
                    {/* Tier 1: Explorer */}
                    <div className="bg-white px-12 py-16 border border-gray-100 hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center group">
                        <h3 className="font-heading text-3xl text-primary font-bold mb-2">The Explorer</h3>
                        <p className="text-xs uppercase tracking-widest text-text-light mb-10">Essential Collection</p>
                        
                        <div className="text-4xl font-bold text-text mb-10">
                            <span className="text-base align-top mr-1">KES</span>
                            15,000
                            <span className="text-sm font-normal text-text-light ml-2">/ shipment</span>
                        </div>

                        <ul className="space-y-4 mb-10 text-sm text-text-light flex-grow">
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> 6 Bottles Bi-Annually
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> Tasting Notes & Pairings
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> 10% Off Online Store
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> Priority Event Access
                            </li>
                        </ul>

                        <button className="w-full py-4 bg-white border border-primary text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-300">
                            Join Explorer
                        </button>
                    </div>

                    {/* Tier 2: Connoisseur */}
                    <div className="bg-primary text-white px-12 py-16 border border-primary relative overflow-hidden flex flex-col items-center text-center shadow-xl">
                        <div className="absolute top-0 right-0 bg-secondary text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1">Best Value</div>
                        
                        <h3 className="font-heading text-3xl font-bold mb-2 text-white">The Connoisseur</h3>
                        <p className="text-xs uppercase tracking-widest text-white/70 mb-10">Premium Collection</p>
                        
                        <div className="text-4xl font-bold mb-10 text-white">
                            <span className="text-base align-top mr-1">KES</span>
                            28,500
                            <span className="text-sm font-normal text-white/60 ml-2">/ shipment</span>
                        </div>

                        <ul className="space-y-4 mb-10 text-white/80 flex-grow">
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> 12 Bottles Bi-Annually
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> Premium & Reserve Wines
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> 20% Off Online Store
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> VIP Event Invitations
                            </li>
                            <li className="flex items-center justify-center gap-3">
                                <span className="text-secondary">✓</span> Private Sommelier Consult
                            </li>
                        </ul>

                        <button className="w-full py-4 bg-secondary text-primary font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all duration-300">
                            Join Connoisseur
                        </button>
                    </div>

                </div>

                {/* Additional Info */}
                <div className="mt-20 text-center max-w-2xl mx-auto">
                    <p className="text-text-light text-sm italic">
                        *Shipments occur in May and November. Membership can be paused or cancelled at any time after the first shipment. Prices include VAT and delivery within Nairobi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WineClubPage;

