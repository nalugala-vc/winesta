import React from 'react';
import RatingStars from './RatingStars';

const WineCard = ({ wine, onView, onEdit, onDelete }) => {
    const categoryColors = {
        tried: 'text-green-700',
        wishlist: 'text-blue-700',
        favorite: 'text-secondary'
    };

    const categoryLabels = {
        tried: 'Tried',
        wishlist: 'Wishlist',
        favorite: 'Favorite'
    };

    return (
        <div className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100" onClick={() => onView(wine)}>
            {/* Image Section */}
            <div className="relative h-80 bg-gradient-to-br from-background to-white overflow-hidden">
                {wine.image ? (
                    <img
                        src={wine.image}
                        alt={wine.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="text-6xl mb-4 opacity-20">🍷</div>
                        <p className="text-xs uppercase tracking-widest text-text-light">No Image</p>
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-bold uppercase tracking-widest ${categoryColors[wine.category]}`}>
                        {categoryLabels[wine.category]}
                    </div>
                </div>

                {/* Quick Actions on Hover */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(wine);
                        }}
                        className="flex-1 px-4 py-2 bg-white text-primary text-xs font-bold uppercase tracking-wide hover:bg-primary hover:text-white transition-colors"
                    >
                        Edit
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(wine.id);
                        }}
                        className="px-4 py-2 bg-white text-red-600 text-xs font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <div className="mb-4">
                    <h3 className="font-heading text-2xl text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                        {wine.name}
                    </h3>
                    <p className="text-sm text-text-light uppercase tracking-widest">
                        {wine.year} • {wine.region}
                    </p>
                </div>

                {wine.rating > 0 && (
                    <div className="mb-4">
                        <RatingStars rating={wine.rating} size="sm" />
                    </div>
                )}

                {wine.tastingNotes && (
                    <p className="text-sm text-text-light leading-relaxed line-clamp-2 mb-4">
                        {wine.tastingNotes}
                    </p>
                )}

                {wine.pairings && wine.pairings.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {wine.pairings.slice(0, 2).map((pairing, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-background text-text text-xs uppercase tracking-wide"
                            >
                                {pairing}
                            </span>
                        ))}
                        {wine.pairings.length > 2 && (
                            <span className="px-2 py-1 text-text-light text-xs">
                                +{wine.pairings.length - 2} more
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WineCard;

