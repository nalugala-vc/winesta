import React from 'react';
import { Link } from 'react-router-dom';
import PostsFeed from '../components/PostsFeed';
import EventsPanel from '../components/EventsPanel';
import WinesTriedList from '../components/WinesTriedList';
import AuthenticatedHeader from '../../../components/AuthenticatedHeader';

const Dashboard = () => {
    // Mock user data
    const user = {
        name: "Isabella",
        stats: {
            winesTried: 42,
            eventsAttended: 0,
            reviewsGiven: 38
        }
    };

    return (
        <div className="min-h-screen bg-background font-body">
            <AuthenticatedHeader />

            {/* Main Content Wrapper - Add padding-top to account for fixed header */}
            <div className="pt-32 pb-16 container mx-auto px-4">
                
                {/* Minimalist Welcome Section */}
                <div className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-secondary text-xs uppercase tracking-[0.3em] mb-4 font-bold">Your Personal Collection</p>
                    <h1 className="font-heading text-4xl md:text-5xl text-primary mb-8 leading-tight">
                        Welcome back, {user.name}
                    </h1>
                    
                    {/* Quick Stats - Centered and Minimal */}
                    <div className="flex justify-center gap-16 md:gap-32 border-t border-b border-primary/10 py-8 max-w-3xl mx-auto">
                        <div className="text-center group cursor-pointer">
                            <div className="text-3xl font-heading text-primary mb-1 group-hover:scale-110 transition-transform duration-300">{user.stats.winesTried}</div>
                            <div className="text-[10px] uppercase tracking-widest text-text-light font-bold group-hover:text-secondary transition-colors">Wines Tried</div>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="text-3xl font-heading text-primary mb-1 group-hover:scale-110 transition-transform duration-300">{user.stats.eventsAttended}</div>
                            <div className="text-[10px] uppercase tracking-widest text-text-light font-bold group-hover:text-secondary transition-colors">Events</div>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="text-3xl font-heading text-primary mb-1 group-hover:scale-110 transition-transform duration-300">{user.stats.reviewsGiven}</div>
                            <div className="text-[10px] uppercase tracking-widest text-text-light font-bold group-hover:text-secondary transition-colors">Reviews</div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 max-w-7xl mx-auto">
                    
                    {/* Left Column (Feed) - Spans 7 columns for better balance */}
                    <div className="lg:col-span-7 space-y-8">
                        <PostsFeed />
                    </div>

                    {/* Spacer Column - Optional if using gap, but grid-cols adjustment handles it better */}

                    {/* Right Column (Sidebar) - Spans 5 columns */}
                    <div className="lg:col-span-5 space-y-16">
                        <EventsPanel />
                        <WinesTriedList />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
