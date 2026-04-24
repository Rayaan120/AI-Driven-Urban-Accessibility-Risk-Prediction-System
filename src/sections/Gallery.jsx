import React from 'react';

const Gallery = () => {
    const images = [
        '/gallery/1.png',
        '/gallery/2.png',
        '/gallery/3.png',
        '/gallery/4.png',
    ];

    return (
        <div>
            <h2 className="text-3xl font-display font-bold mb-8">Visual Progress</h2>
            <div className="columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
                {images.map((src, idx) => (
                    <div key={idx} className="break-inside-avoid">
                        <img 
                            src={src} 
                            alt={`Gallery item ${idx + 1}`} 
                            className="w-full rounded-2xl hover:scale-[1.02] transition-transform duration-300 shadow-lg border border-white/10"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
