"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
    { src: '/img/interior-1.png', alt: 'Restaurant Interior Detail', span: 'col-span-1 md:col-span-2' },
    { src: '/img/italian_pizza.png', alt: 'Signature Pizza', span: 'col-span-1' },
    { src: '/img/interior-2.png', alt: 'Bar Area', span: 'col-span-1' },
    { src: '/img/pasta_carbonara.png', alt: 'Classic Carbonara', span: 'col-span-1 md:col-span-2' },
];

export function GallerySection() {
    return (
        <section id="gallery" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-primary text-sm tracking-[0.2em] uppercase">Visual Journey</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">
                            The <span className="text-primary">Atmosphere</span>
                        </h2>
                        <p className="text-muted-foreground mt-4 font-light">
                            Experience the perfect blend of rustic charm and modern elegance. Every corner is designed to transport you to Italy.
                        </p>
                    </div>
                    <button className="text-white border-b border-primary pb-1 hover:text-primary transition-colors uppercase tracking-widest text-xs">
                        View Full Gallery
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`relative group overflow-hidden rounded-sm cursor-pointer ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary text-xs uppercase tracking-wider mb-1">La Rustica</span>
                                <span className="text-white font-serif text-xl">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
