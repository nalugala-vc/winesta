import React, { useState } from 'react';
import TransparentImage from '../../../components/TransparentImage';


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
        <section className="p-0 bg-white overflow-hidden">
            <div className="w-full p-0">
                <div className="flex w-full h-[90vh] min-h-[800px] flex-col md:flex-row">
                    {wineTypes.map((wine) => {
                        const isExpanded = hoveredId === wine.id;
                        const isCollapsed = hoveredId && hoveredId !== wine.id;

                        return (
                            <div
                                key={wine.id}
                                className={`relative transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex flex-col justify-center items-center cursor-pointer border-r border-black/5 last:border-r-0 md:h-auto
                                    ${isExpanded ? 'flex-[3] md:flex-[3] h-[750px] md:h-auto' : 'flex-1 md:flex-1 h-[120px] md:h-auto'}
                                    ${isCollapsed ? 'flex-[0.6] md:flex-[0.6] opacity-70 grayscale-[0.5] h-[80px] md:h-auto' : ''}
                                    border-b md:border-b-0
                                `}
                                style={{ backgroundColor: wine.color, color: wine.textColor }}
                                onMouseEnter={() => setHoveredId(wine.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative w-full h-full flex flex-col items-center justify-center p-8 md:p-12 pb-16">
                                    <div className={`w-full flex justify-center items-center transition-all duration-[800ms] mb-4 z-20
                                        ${isExpanded ? 'h-[40%]' : 'h-[65%]'}
                                        ${isCollapsed ? 'opacity-0 scale-80 hidden md:flex' : ''}
                                    `}>
                                        <div className={`transition-transform duration-[800ms] h-full ${isExpanded ? 'scale-90 -translate-y-12' : ''}`}>
                                            <TransparentImage
                                                src={wine.image}
                                                alt={wine.name}
                                                className="max-h-full max-w-full object-contain drop-shadow-2xl"
                                                tolerance={30}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center max-w-[500px] transition-all duration-[800ms] z-30 flex flex-col justify-center">
                                        <h3 className={`font-heading text-4xl md:text-5xl mb-2 uppercase tracking-[4px] whitespace-nowrap text-inherit transition-all duration-[800ms]
                                            ${isCollapsed ? 'md:-rotate-90 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2' : ''}
                                        `}>{wine.name}</h3>

                                        <div className={`overflow-hidden transition-all duration-[600ms] delay-100 flex flex-col items-center
                                            ${isExpanded ? 'max-h-[800px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-[30px]'}
                                        `}>
                                            <h4 className="font-heading italic text-2xl mb-4 opacity-80 font-normal">{wine.subtitle}</h4>
                                            <p className="text-lg mb-6 leading-relaxed font-light">{wine.description}</p>
                                            <div className="flex justify-center gap-6 mb-8">
                                                {wine.notes.map((note, index) => (
                                                    <span key={index} className="border-b border-current pb-1 text-sm uppercase tracking-widest font-medium" style={{ borderColor: wine.textColor }}>{note}</span>
                                                ))}
                                            </div>
                                            <button className="bg-transparent border border-current px-9 py-3.5 uppercase tracking-widest font-semibold transition-all duration-300 rounded-none hover:bg-black/5 hover:-translate-y-0.5 mb-2" style={{ borderColor: wine.textColor, color: wine.textColor }}>
                                                View Collection
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WineTypes;
