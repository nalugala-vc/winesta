import React from 'react';


const features = [
    {
        id: 1,
        title: "Personal Wine Cellar",
        description: "Curate your digital cellar with precision. Track your collection, manage inventory, and get notified when your wines reach their peak drinking window.",
        image: "/assets/feature-cellar.png",
        imagePosition: "left"
    },
    {
        id: 2,
        title: "Vibrant Community",
        description: "Connect with fellow enthusiasts, share tasting notes, and discover hidden gems recommended by a global community of wine lovers.",
        image: "/assets/feature-community.png",
        imagePosition: "right"
    },
    {
        id: 3,
        title: "Events & Meetups",
        description: "Access exclusive tastings, vineyard tours, and sommelier-led workshops. Experience the world of wine beyond the bottle.",
        image: "/assets/feature-events.png",
        imagePosition: "left"
    },
    {
        id: 4,
        title: "AI-Sommelier",
        description: "Your personal pocket sommelier. Snap a photo of any label to get instant ratings, food pairings, and serving recommendations.",
        image: "/assets/feature-ai.png",
        imagePosition: "right"
    }
];

const Features = () => {
    return (
        <section className="w-full bg-background">
            {features.map((feature, index) => (
                <div key={feature.id} className="flex flex-col md:flex-row w-full h-[60vh] min-h-[500px]">
                    {/* Image Side */}
                    <div className={`w-full md:w-1/2 h-full relative overflow-hidden group ${feature.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                    {/* Text Side */}
                    <div className={`w-full md:w-1/2 h-full flex flex-col justify-center items-center p-12 md:p-24 text-center bg-[#fdfbf7] ${feature.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                        <h3 className="font-heading text-4xl md:text-5xl mb-6 text-primary relative inline-block">
                            {feature.title}
                            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-secondary"></span>
                        </h3>
                        <p className="text-lg text-text-light leading-relaxed max-w-md mt-4 font-light">
                            {feature.description}
                        </p>
                        <button className="mt-10 px-8 py-3 border border-primary text-primary uppercase tracking-widest text-xs font-bold hover:bg-primary hover:text-white transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Features;
