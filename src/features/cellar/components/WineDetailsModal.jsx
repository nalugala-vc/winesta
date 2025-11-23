import React from 'react';
import RatingStars from './RatingStars';

const WineDetailsModal = ({ wine, onClose, onEdit }) => {
    if (!wine) return null;

    const categoryLabels = {
        tried: 'Tried',
        wishlist: 'Wishlist',
        favorite: 'Favorite'
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
                    <div>
                        <h2 className="font-heading text-3xl text-primary mb-2">{wine.name}</h2>
                        <p className="text-text-light">{wine.year} • {wine.region}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Image */}
                    {wine.image && (
                        <div className="mb-6 rounded-lg overflow-hidden">
                            <img src={wine.image} alt={wine.name} className="w-full h-96 object-cover" />
                        </div>
                    )}

                    {/* Rating & Category */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-sm text-text-light mb-2">Rating</p>
                            <RatingStars rating={wine.rating} size="lg" />
                        </div>
                        <div>
                            <p className="text-sm text-text-light mb-2">Category</p>
                            <span className="px-4 py-2 bg-background text-primary font-semibold uppercase tracking-wide text-sm rounded">
                                {categoryLabels[wine.category]}
                            </span>
                        </div>
                    </div>

                    {/* Tasting Notes */}
                    {wine.tastingNotes && (
                        <div className="mb-6">
                            <h3 className="font-heading text-xl text-primary mb-3">Tasting Notes</h3>
                            <p className="text-text-light leading-relaxed">{wine.tastingNotes}</p>
                        </div>
                    )}

                    {/* Pairings */}
                    {wine.pairings && wine.pairings.length > 0 && (
                        <div className="mb-6">
                            <h3 className="font-heading text-xl text-primary mb-3">Food Pairings</h3>
                            <div className="flex flex-wrap gap-2">
                                {wine.pairings.map((pairing, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-secondary/20 text-primary text-sm rounded-full"
                                    >
                                        {pairing}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Date Added */}
                    <div className="text-sm text-text-light">
                        Added on {new Date(wine.dateAdded).toLocaleDateString()}
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3">
                    <button
                        onClick={() => onEdit(wine)}
                        className="flex-1 px-6 py-3 bg-primary text-white font-semibold uppercase tracking-wide hover:bg-primary-light transition-colors"
                    >
                        Edit Wine
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-3 border border-gray-300 text-text font-semibold uppercase tracking-wide hover:bg-background transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WineDetailsModal;
