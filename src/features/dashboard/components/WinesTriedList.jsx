import React from 'react';

const mockTriedWines = [
    {
        id: '1',
        name: 'Château Margaux',
        year: 2015,
        region: 'Bordeaux',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200'
    },
    {
        id: '2',
        name: 'Cloudy Bay',
        year: 2022,
        region: 'Marlborough',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=200'
    },
    {
        id: '4',
        name: 'Tignanello',
        year: 2019,
        region: 'Tuscany',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=200'
    }
];

const WinesTriedList = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-2xl text-primary font-bold tracking-wide">Wines Tried</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 cursor-pointer hover:text-primary transition-colors">View All</span>
            </div>

            <div className="space-y-8">
                {mockTriedWines.map(wine => (
                    <div key={wine.id} className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm group-hover:shadow-md transition-all duration-300">
                            <img 
                                src={wine.image} 
                                alt={wine.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 min-w-0 py-2 space-y-2">
                            <h4 className="font-heading font-bold text-text text-lg truncate group-hover:text-primary transition-colors">{wine.name}</h4>
                            <p className="text-sm text-text-light">{wine.year} • {wine.region}</p>
                            <div className="flex text-secondary gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-sm">{i < wine.rating ? '★' : '☆'}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-8 py-3 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 rounded-lg">
                Log New Tasting
            </button>
        </div>
    );
};

export default WinesTriedList;
