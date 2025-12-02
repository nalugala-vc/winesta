import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthenticatedHeader from '../../../components/AuthenticatedHeader';
import WineCard from '../components/WineCard';
import AddWineModal from '../components/AddWineModal';
import WineDetailsModal from '../components/WineDetailsModal';

// Mock data
const initialWines = [
    {
        id: '1',
        name: 'Château Margaux',
        year: 2015,
        region: 'Bordeaux, France',
        rating: 5,
        category: 'favorite',
        tastingNotes: 'Elegant and complex with notes of blackcurrant, cedar, and tobacco. Silky tannins with a long, refined finish.',
        pairings: ['Lamb', 'Beef', 'Hard Cheese'],
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
        dateAdded: '2024-01-15'
    },
    {
        id: '2',
        name: 'Cloudy Bay Sauvignon Blanc',
        year: 2022,
        region: 'Marlborough, New Zealand',
        rating: 4,
        category: 'tried',
        tastingNotes: 'Crisp and refreshing with vibrant citrus and tropical fruit flavors. Perfect minerality and acidity.',
        pairings: ['Seafood', 'Salads', 'Goat Cheese'],
        image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400',
        dateAdded: '2024-02-20'
    },
    {
        id: '3',
        name: 'Opus One',
        year: 2018,
        region: 'Napa Valley, USA',
        rating: 0,
        category: 'wishlist',
        tastingNotes: '',
        pairings: [],
        image: '',
        dateAdded: '2024-03-10'
    }
];

const CellarDashboard = () => {
    const [wines, setWines] = useState(initialWines);
    const [activeCategory, setActiveCategory] = useState('all');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedWine, setSelectedWine] = useState(null);
    const [editingWine, setEditingWine] = useState(null);

    const filteredWines = activeCategory === 'all'
        ? wines
        : wines.filter(wine => wine.category === activeCategory);

    const counts = {
        all: wines.length,
        tried: wines.filter(w => w.category === 'tried').length,
        wishlist: wines.filter(w => w.category === 'wishlist').length,
        favorite: wines.filter(w => w.category === 'favorite').length
    };

    const handleAddWine = (wineData) => {
        if (editingWine) {
            setWines(wines.map(w => w.id === editingWine.id ? wineData : w));
        } else {
            setWines([...wines, wineData]);
        }
        setShowAddModal(false);
        setEditingWine(null);
    };

    const handleViewWine = (wine) => {
        setSelectedWine(wine);
        setShowDetailsModal(true);
    };

    const handleEditWine = (wine) => {
        setEditingWine(wine);
        setShowAddModal(true);
        setShowDetailsModal(false);
    };

    const handleDeleteWine = (id) => {
        if (window.confirm('Are you sure you want to delete this wine?')) {
            setWines(wines.filter(w => w.id !== id));
        }
    };

    const categories = [
        { id: 'all', label: 'All Wines' },
        { id: 'favorite', label: 'Favorites' },
        { id: 'tried', label: 'Tried' },
        { id: 'wishlist', label: 'Wishlist' }
    ];

    return (
        <div className="min-h-screen bg-background font-body">
            <AuthenticatedHeader />
            
            <div className="pt-32 pb-16 container mx-auto px-4">
                {/* Minimalist Hero Section */}
                <div className="mb-20 max-w-4xl mx-auto text-center">
                    <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-bold">Your Personal Collection</p>
                    <h1 className="font-heading text-6xl md:text-7xl text-primary mb-8 leading-tight">
                        Wine Cellar
                    </h1>
                    <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Curate your journey through the world of wine. Track, rate, and cherish every bottle.
                    </p>
                    <button
                        onClick={() => {
                            setEditingWine(null);
                            setShowAddModal(true);
                        }}
                        className="group px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary-light transition-all duration-300 inline-flex items-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add to Collection
                    </button>
                    
                    {/* Stats Cards - Minimalist */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
                        {[
                            { label: 'Total Wines', value: counts.all, icon: '🍷' },
                            { label: 'Favorites', value: counts.favorite, icon: '⭐' },
                            { label: 'Tried', value: counts.tried, icon: '✓' },
                            { label: 'Wishlist', value: counts.wishlist, icon: '♡' }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center group cursor-pointer">
                                <div className="text-4xl font-heading text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-text-light font-bold group-hover:text-secondary transition-colors">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto">
                    {/* Category Filter */}
                    <div className="flex justify-center gap-3 mb-16 overflow-x-auto pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 font-semibold uppercase tracking-wide text-sm whitespace-nowrap transition-all border-b-2 ${activeCategory === cat.id
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-text-light hover:text-primary hover:border-primary/30'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Wine Grid */}
                    {filteredWines.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {filteredWines.map(wine => (
                                <WineCard
                                    key={wine.id}
                                    wine={wine}
                                    onView={handleViewWine}
                                    onEdit={handleEditWine}
                                    onDelete={handleDeleteWine}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white/50 rounded-lg border border-dashed border-gray-200">
                            <div className="text-6xl mb-6 opacity-50">🍷</div>
                            <h3 className="font-heading text-3xl text-primary mb-3">No wines yet</h3>
                            <p className="text-text-light mb-8 max-w-md mx-auto">
                                Start your wine journey by adding your first bottle to the collection
                            </p>
                            <button
                                onClick={() => {
                                    setEditingWine(null);
                                    setShowAddModal(true);
                                }}
                                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary-light transition-colors"
                            >
                                Add Your First Wine
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            {showAddModal && (
                <AddWineModal
                    wine={editingWine}
                    onClose={() => {
                        setShowAddModal(false);
                        setEditingWine(null);
                    }}
                    onSave={handleAddWine}
                />
            )}

            {showDetailsModal && (
                <WineDetailsModal
                    wine={selectedWine}
                    onClose={() => {
                        setShowDetailsModal(false);
                        setSelectedWine(null);
                    }}
                    onEdit={handleEditWine}
                />
            )}
        </div>
    );
};

export default CellarDashboard;

