import React from 'react';

// Minimalist Icons
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const EventsPanel = () => {
    return (
        <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-2xl text-primary font-bold tracking-wide">My Events</h3>
                <span className="text-secondary/80">
                    <CalendarIcon />
                </span>
            </div>
            
            <div className="bg-white/50 rounded-xl py-24 px-8 text-center border border-primary/5 hover:border-primary/20 transition-colors duration-300">
                <p className="text-text-light font-body text-sm mb-6 italic font-light">No upcoming events</p>
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:text-secondary hover:border-secondary transition-all">
                    Browse Calendar
                </button>
            </div>

            <div className="mt-6 flex justify-between items-center px-1 border-t border-primary/5 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-text-light">History</span>
                <span className="font-heading text-lg text-primary font-bold">0 Attended</span>
            </div>
        </div>
    );
};

export default EventsPanel;
