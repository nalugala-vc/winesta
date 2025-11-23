import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        { id: 'all', label: 'All Wines', icon: '🍷' },
        { id: 'favorite', label: 'Favorites', icon: '⭐' },
        { id: 'tried', label: 'Tried', icon: '✓' },
        { id: 'wishlist', label: 'Wishlist', icon: '♡' }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Premium Header with Hero */}
            <div className="relative bg-primary text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 py-12 relative z-10">
                    {/* Navigation */}
                    <div className="flex items-center justify-between mb-16">
                        <Link to="/" className="font-heading text-3xl font-bold tracking-wide hover:text-secondary transition-colors">
                            WINESTA
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link to="/" className="text-sm uppercase tracking-widest hover:text-secondary transition-colors">Home</Link>
                            <Link to="/cellar" className="text-sm uppercase tracking-widest text-secondary">My Cellar</Link>
                            <Link to="/login" className="text-sm uppercase tracking-widest hover:text-secondary transition-colors">Profile</Link>
                        </nav>
                    </div>

                    {/* Hero Content */}
                    <div className="max-w-4xl">
                        <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Your Personal Collection</p>
                        <h1 className="font-heading text-6xl md:text-7xl mb-6 leading-tight">
                            Wine Cellar
                        </h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                            Curate your journey through the world of wine. Track, rate, and cherish every bottle.
                        </p>
                        <button
                            onClick={() => {
                                setEditingWine(null);
                                setShowAddModal(true);
                            }}
                            className="group px-8 py-4 bg-secondary text-primary font-bold uppercase tracking-widest text-sm hover:bg-secondary/90 transition-all duration-300 inline-flex items-center gap-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add to Collection
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                        {[
                            { label: 'Total Wines', value: counts.all, icon: '🍷' },
                            { label: 'Favorites', value: counts.favorite, icon: '⭐' },
                            { label: 'Tried', value: counts.tried, icon: '✓' },
                            { label: 'Wishlist', value: counts.wishlist, icon: '♡' }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-4xl font-heading mb-1">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-white/70">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Category Filter */}
                <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 font-semibold uppercase tracking-wide text-sm whitespace-nowrap transition-all ${activeCategory === cat.id
                                ? 'bg-primary text-white'
                                : 'bg-white text-text border border-gray-200 hover:border-primary hover:text-primary'
                                }`}
                        >
                            <span className="mr-2">{cat.icon}</span>
                            {cat.label}
                            {counts[cat.id] > 0 && (
                                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${activeCategory === cat.id ? 'bg-white/20' : 'bg-background'
                                    }`}>
                                    {counts[cat.id]}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Wine Grid */}
                {filteredWines.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="text-center py-24 bg-white rounded-lg">
                        <div className="text-6xl mb-6">🍷</div>
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

