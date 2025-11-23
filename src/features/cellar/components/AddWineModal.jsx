import React, { useState } from 'react';
import Input from '../../auth/components/Input';
import RatingStars from './RatingStars';

const AddWineModal = ({ wine, onClose, onSave }) => {
    const [formData, setFormData] = useState(wine || {
        name: '',
        year: new Date().getFullYear(),
        region: '',
        rating: 0,
        category: 'wishlist',
        tastingNotes: '',
        pairings: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRatingChange = (rating) => {
        setFormData(prev => ({ ...prev, rating }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const wineData = {
            ...formData,
            pairings: formData.pairings ? formData.pairings.split(',').map(p => p.trim()) : [],
            dateAdded: wine?.dateAdded || new Date().toISOString(),
            id: wine?.id || Date.now().toString()
        };
        onSave(wineData);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                    <h2 className="font-heading text-3xl text-primary">
                        {wine ? 'Edit Wine' : 'Add New Wine'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Wine Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g., Château Margaux"
                            required
                        />

                        <Input
                            label="Year"
                            type="number"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="2020"
                            required
                        />
                    </div>

                    <Input
                        label="Region"
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        placeholder="e.g., Bordeaux, France"
                        required
                    />

                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide">
                            Rating <span className="text-primary">*</span>
                        </label>
                        <RatingStars
                            rating={formData.rating}
                            onRatingChange={handleRatingChange}
                            interactive
                            size="lg"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide">
                            Category <span className="text-primary">*</span>
                        </label>
                        <div className="flex gap-3">
                            {['wishlist', 'tried', 'favorite'].map((cat) => (
                                <label key={cat} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="category"
                                        value={cat}
                                        checked={formData.category === cat}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                                    />
                                    <span className="ml-2 text-sm text-text capitalize">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="tastingNotes" className="block text-sm font-semibold text-text mb-2 uppercase tracking-wide">
                            Tasting Notes
                        </label>
                        <textarea
                            id="tastingNotes"
                            name="tastingNotes"
                            value={formData.tastingNotes}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe the flavors, aromas, and your experience..."
                            className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors bg-background text-text"
                        />
                    </div>

                    <Input
                        label="Food Pairings"
                        type="text"
                        name="pairings"
                        value={formData.pairings}
                        onChange={handleChange}
                        placeholder="e.g., Steak, Cheese, Chocolate (comma-separated)"
                    />

                    <Input
                        label="Image URL"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/wine-image.jpg"
                    />

                    {/* Footer */}
                    <div className="flex gap-3 mt-8">
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-primary text-white font-semibold uppercase tracking-wide hover:bg-primary-light transition-colors"
                        >
                            {wine ? 'Update Wine' : 'Add Wine'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 border border-gray-300 text-text font-semibold uppercase tracking-wide hover:bg-background transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWineModal;
