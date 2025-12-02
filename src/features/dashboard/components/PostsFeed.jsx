import React from 'react';

// Minimalist Icons
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const CommentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const mockPosts = [
    {
        id: 1,
        user: {
            name: "Isabella Rossi",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
            location: "Tuscany, Italy"
        },
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800",
        caption: "A magnificent evening tasting the 2015 Brunello di Montalcino. The depth and complexity are simply outstanding. 🍷 #WineLover #Tuscany",
        likes: 124,
        comments: 18,
        timeAgo: "2h"
    },
    {
        id: 2,
        user: {
            name: "Marcus Chen",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            location: "Napa Valley, CA"
        },
        image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800",
        caption: "Exploring the caves at Stag's Leap. The history here is as rich as the Cabernet.",
        likes: 89,
        comments: 12,
        timeAgo: "5h"
    },
    {
        id: 3,
        user: {
            name: "Sarah Jenkins",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            location: "Bordeaux, France"
        },
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800",
        caption: "Just opened a bottle of Château Margaux. A dream come true to taste this vintage.",
        likes: 245,
        comments: 42,
        timeAgo: "1d"
    }
];

const PostsFeed = () => {
    return (
        <div className="space-y-12">
            {/* Header with Title aligned with Sidebar */}
            <div className="mb-8">
                <h3 className="font-heading text-2xl text-primary font-bold tracking-wide mb-8">
                    Community Highlights
                </h3>

                {/* Create Post Section */}
                <div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm hover:border-primary/10 transition-colors">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                            I
                        </div>
                        <div className="flex-1">
                            <input 
                                type="text" 
                                placeholder="Share your wine journey..." 
                                className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm placeholder:text-text-light/50 h-10"
                            />
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                                <div className="flex gap-4">
                                    <button className="text-text-light hover:text-primary transition-colors flex items-center gap-2 text-xs uppercase tracking-wider font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Photo
                                    </button>
                                    <button className="text-text-light hover:text-primary transition-colors flex items-center gap-2 text-xs uppercase tracking-wider font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Location
                                    </button>
                                </div>
                                <button className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary-light transition-colors rounded-lg">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {mockPosts.map(post => (
                <div key={post.id} className="group border-b border-gray-100 pb-8 last:border-0">
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <img 
                                src={post.user.avatar} 
                                alt={post.user.name} 
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-secondary/50 transition-all duration-300"
                            />
                            <div>
                                <h4 className="font-bold text-sm text-text group-hover:text-primary transition-colors tracking-wide">{post.user.name}</h4>
                                <p className="text-[10px] text-text-light uppercase tracking-widest">{post.user.location}</p>
                            </div>
                        </div>
                        <span className="text-[10px] text-text-light/60 font-medium uppercase tracking-widest">{post.timeAgo}</span>
                    </div>

                    {/* Post Image - Modern Rounded */}
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-gray-100 mb-6 relative shadow-sm">
                        <img 
                            src={post.image} 
                            alt="Wine post" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                        />
                        {/* Overlay Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Post Content */}
                    <div className="px-1">
                        <div className="flex items-center space-x-6 mb-3 text-text-light">
                            <button className="flex items-center space-x-2 hover:text-red-800 transition-colors group/btn">
                                <HeartIcon />
                                <span className="text-xs font-medium">{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-primary transition-colors group/btn">
                                <CommentIcon />
                                <span className="text-xs font-medium">{post.comments}</span>
                            </button>
                        </div>
                        
                        <p className="text-text leading-relaxed text-sm font-light">
                            <span className="font-bold mr-2 text-primary">{post.user.name}</span>
                            {post.caption}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostsFeed;
