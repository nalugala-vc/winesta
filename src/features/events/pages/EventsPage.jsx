import React from 'react';
import AuthenticatedHeader from '../../../components/AuthenticatedHeader';

const mockEvents = [
    {
        id: 1,
        title: "Grand Bordeaux Tasting",
        date: "Nov 15, 2024",
        time: "18:00 - 21:00",
        location: "The Wine Cellar, Nairobi",
        attendees: 45,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800",
        description: "An exclusive evening featuring a vertical tasting of prestigious Left Bank estates, paired with artisanal cheeses."
    },
    {
        id: 2,
        title: "Sparkling Wines of the World",
        date: "Dec 05, 2024",
        time: "19:00 - 22:00",
        location: "Rooftop Lounge, Westlands",
        attendees: 82,
        image: "https://images.unsplash.com/photo-1598155523122-3842334d6c10?w=800",
        description: "Celebrate the festive season with a journey through Champagne, Cava, Prosecco, and New World sparkling wines."
    },
    {
        id: 3,
        title: "Italian Wine & Truffle Dinner",
        date: "Jan 20, 2025",
        time: "19:30 - 22:30",
        location: "Trattoria Romana",
        attendees: 28,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
        description: "A decadent 5-course dinner showcasing the finest truffles paired with Barolo, Brunello, and Amarone."
    }
];

const EventsPage = () => {
    return (
        <div className="min-h-screen bg-background font-body">
            <AuthenticatedHeader />
            
            <div className="pt-32 pb-16 container mx-auto px-4">
                {/* Minimalist Hero Section */}
                <div className="mb-20 max-w-4xl mx-auto text-center">
                    <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-bold">Experiences</p>
                    <h1 className="font-heading text-6xl md:text-7xl text-primary mb-8 leading-tight">
                        Upcoming Events
                    </h1>
                    <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Curated tastings, winemaker dinners, and exclusive gatherings for our community.
                    </p>
                </div>

                {/* Events List */}
                <div className="max-w-5xl mx-auto space-y-8">
                    {mockEvents.map(event => (
                        <div key={event.id} className="group bg-white hover:bg-white/80 transition-colors border border-gray-100 hover:border-primary/20 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                            {/* Date Badge */}
                            <div className="flex-shrink-0 w-full md:w-32 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-8">
                                <span className="block text-4xl font-heading font-bold text-primary mb-1">
                                    {event.date.split(' ')[1]}
                                </span>
                                <span className="block text-sm uppercase tracking-widest text-text-light">
                                    {event.date.split(' ')[0]} {event.date.split(' ')[2]}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="font-heading text-2xl text-text group-hover:text-primary transition-colors font-bold mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-text-light mb-4 max-w-2xl">
                                    {event.description}
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-text-light/80">
                                    <span className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {event.time}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        {event.location}
                                    </span>
                                </div>
                            </div>

                            {/* Action */}
                            <div className="flex-shrink-0 text-center md:text-right flex flex-col items-center md:items-center gap-3">
                                <button className="px-8 py-3 border border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                                    Reserve Spot
                                </button>
                                <div className="text-xs font-medium text-text-light flex items-center justify-center gap-2 opacity-80 w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    {event.attendees} Attending
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;

