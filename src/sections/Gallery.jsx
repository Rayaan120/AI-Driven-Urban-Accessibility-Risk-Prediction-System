import React from 'react';

const Gallery = () => {
    // Generate some placeholder grid items with different aspect ratios
    const items = [
        { id: 1, height: 'h-64', color: 'bg-purple-500/20' },
        { id: 2, height: 'h-96', color: 'bg-blue-500/20' },
        { id: 3, height: 'h-64', color: 'bg-indigo-500/20' },
        { id: 4, height: 'h-80', color: 'bg-pink-500/20' },
        { id: 5, height: 'h-64', color: 'bg-teal-500/20' },
        { id: 6, height: 'h-72', color: 'bg-cyan-500/20' },
    ];

    return (
        <div>
            <h2 className="text-3xl font-display font-bold mb-8">Visual Progress</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="break-inside-avoid">
                        <div className={`glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in group`}>
                            <div className={`${item.height} ${item.color} w-full relative`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full glass">View Details</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1">Concept Mockup {item.id}</h3>
                                <p className="text-gray-400 text-sm">Initial wireframe for the dashboard interface.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
