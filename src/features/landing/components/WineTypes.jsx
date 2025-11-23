import React, { useState } from 'react';
import TransparentImage from '../../../components/TransparentImage';
import './WineTypes.css';

const wineTypes = [
    {
        id: 'white',
        name: 'White Wine',
        subtitle: 'The Most Stylish Suit For Your Fish Menu',
        description: 'Crisp, refreshing, and versatile. Explore the zesty acidity of Sauvignon Blanc or the buttery richness of Chardonnay.',
        image: '/assets/wine-white-iso.png',
        notes: ['Citrus', 'Apple', 'Floral'],
        color: '#f9f9f9', // Light background
        textColor: '#4a0404',
        accentColor: '#d4af37' // Gold
    },
    {
        id: 'rose',
        name: 'Rosé Wine',
        subtitle: 'Perfect Style For Light Afternoons',
        description: 'The perfect balance. Enjoy the freshness of white with the fruitiness of red, perfect for any sunny occasion.',
        image: '/assets/wine-rose-iso.png',
        notes: ['Strawberry', 'Melon', 'Rose Petal'],
        color: '#fff0f0', // Very light pink
        textColor: '#4a0404',
        accentColor: '#ff8a80'
    },
    {
        id: 'red',
        name: 'Red Wine',
        subtitle: 'The Red That Suits Every Cut of Meat',
        description: 'Bold, complex, and full of character. From the deep tannins of Cabernet to the fruity notes of Merlot.',
        image: '/assets/wine-red-iso.png',
        notes: ['Cherry', 'Oak', 'Vanilla'],
        color: '#f5f5f5', // Light grey
        textColor: '#2c0b0e',
        accentColor: '#720e1e'
    }
];

const WineTypes = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="wine-types-section">
            <div className="container-fluid">
                <div className="wine-types-container">
                    {wineTypes.map((wine) => (
                        <div
                            key={wine.id}
                            className={`wine-card ${hoveredId === wine.id ? 'expanded' : ''} ${hoveredId && hoveredId !== wine.id ? 'collapsed' : ''}`}
                            style={{ backgroundColor: wine.color, color: wine.textColor }}
                            onMouseEnter={() => setHoveredId(wine.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="wine-content">
                                <div className="wine-image-wrapper">
                                    <TransparentImage
                                        src={wine.image}
                                        alt={wine.name}
                                        className="wine-image"
                                        tolerance={30}
                                    />
                                </div>

                                <div className="wine-info">
                                    <h3 className="wine-name">{wine.name}</h3>

                                    <div className="wine-details">
                                        <h4 className="wine-subtitle">{wine.subtitle}</h4>
                                        <p className="wine-description">{wine.description}</p>
                                        <div className="wine-notes">
                                            {wine.notes.map((note, index) => (
                                                <span key={index} className="wine-note" style={{ borderColor: wine.textColor }}>{note}</span>
                                            ))}
                                        </div>
                                        <button className="btn btn-outline wine-btn" style={{ borderColor: wine.textColor, color: wine.textColor }}>
                                            View Collection
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WineTypes;
