import React from 'react';
import AuthenticatedHeader from '../../../components/AuthenticatedHeader';

const mockStories = [
    {
        id: 1,
        title: "The Renaissance of Tuscan Reds",
        excerpt: "Exploring how a new generation of winemakers is redefining the classic Chianti profile while honoring centuries of tradition.",
        author: "Marco V.",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800"
    },
    {
        id: 2,
        title: "Biodynamic Viticulture Explained",
        excerpt: "Beyond organic: understanding the holistic approach to vineyard management that views the farm as a self-sustaining organism.",
        author: "Sarah J.",
        date: "Oct 08, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800"
    },
    {
        id: 3,
        title: "Hidden Gems of South Africa",
        excerpt: "From Stellenbosch to Swartland, discover the regions producing some of the most exciting and value-driven wines today.",
        author: "David K.",
        date: "Sep 28, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800"
    }
];

const StoriesPage = () => {
    return (
        <div className="min-h-screen bg-background font-body">
            <AuthenticatedHeader />
            
            <div className="pt-32 pb-16 container mx-auto px-4">
                {/* Minimalist Hero Section */}
                <div className="mb-20 max-w-4xl mx-auto text-center">
                    <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-bold">Journal</p>
                    <h1 className="font-heading text-6xl md:text-7xl text-primary mb-8 leading-tight">
                        Stories
                    </h1>
                    <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        In-depth articles, winemaker interviews, and travel journals from the world of wine.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {mockStories.map(story => (
                        <article key={story.id} className="group cursor-pointer flex flex-col h-full">
                            <div className="aspect-[4/3] w-full overflow-hidden mb-6 relative">
                                <img 
                                    src={story.image} 
                                    alt={story.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-text-light mb-3">
                                    <span>{story.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-secondary"></span>
                                    <span>{story.readTime}</span>
                                </div>
                                
                                <h3 className="font-heading text-2xl text-primary font-bold mb-3 group-hover:text-secondary transition-colors leading-tight">
                                    {story.title}
                                </h3>
                                
                                <p className="text-text-light leading-relaxed mb-6 flex-grow">
                                    {story.excerpt}
                                </p>
                                
                                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                        Read Story
                                    </span>
                                    <span className="text-sm font-heading italic text-text-light">
                                        by {story.author}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoriesPage;

