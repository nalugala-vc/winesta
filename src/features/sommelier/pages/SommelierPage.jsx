import React from 'react';
import AuthenticatedHeader from '../../../components/AuthenticatedHeader';
import ChatInterface from '../components/ChatInterface';

const SommelierPage = () => {
    return (
        <div className="min-h-screen bg-background font-body">
            <AuthenticatedHeader />
            
            <div className="pt-32 pb-16 container mx-auto px-4">
                {/* Minimalist Hero Section */}
                <div className="mb-16 max-w-4xl mx-auto text-center">
                    <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-bold">Your Personal Expert</p>
                    <h1 className="font-heading text-6xl md:text-7xl text-primary mb-8 leading-tight">
                        AI Sommelier
                    </h1>
                    <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Expert advice at your fingertips. Get personalized pairings, cellar insights, and recommendations instantly.
                    </p>
                </div>

                {/* Chat Interface Container */}
                <div className="max-w-4xl mx-auto">
                    <ChatInterface />
                    
                    {/* Suggested Topics */}
                    <div className="mt-12 text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-text-light mb-6">Suggested Topics</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Best pairings for Truffle Pasta",
                                "Underrated Italian Reds",
                                "Cellar aging potential",
                                "Gift recommendations"
                            ].map((topic, idx) => (
                                <button 
                                    key={idx}
                                    className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm text-text hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SommelierPage;

