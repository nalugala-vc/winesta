import React from 'react';

const CategoryTabs = ({ activeCategory, onCategoryChange, counts }) => {
    const categories = [
        { id: 'all', label: 'All Wines', count: counts.all },
        { id: 'tried', label: 'Tried', count: counts.tried },
        { id: 'wishlist', label: 'Wishlist', count: counts.wishlist },
        { id: 'favorite', label: 'Favorites', count: counts.favorite }
    ];

    return (
        <div className="flex gap-2 border-b border-gray-200 mb-8 overflow-x-auto">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`px-6 py-3 font-semibold uppercase tracking-wide text-sm whitespace-nowrap transition-colors border-b-2 ${activeCategory === category.id
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-light hover:text-text'
                        }`}
                >
                    {category.label}
                    {category.count > 0 && (
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-background">
                            {category.count}
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
