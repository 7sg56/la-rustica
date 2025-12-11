"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img/story-hero.png"
                        alt="Chef Cooking"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary text-sm tracking-[0.3em] uppercase block"
                    >
                        Est. 1985
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter"
                    >
                        Our <span className="text-gradient-gold">Journey</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-invert prose-lg mx-auto text-center"
                    >
                        <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed italic">
                            "Food is not just sustenance; it is a story, a memory, and a bridge between generations."
                        </p>
                        <div className="w-20 h-0.5 bg-primary mx-auto my-8"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-muted-foreground leading-relaxed"
                        >
                            <h3 className="text-2xl font-serif font-bold text-white">The Beginning</h3>
                            <p>
                                It started in a small kitchen in Florence, where our founder, Nonna Maria, taught us that the secret to great Italian food isn't just the ingredients—it's the patience.
                            </p>
                            <p>
                                In 1985, we brought those family recipes across the ocean. La Rustica was born out of a desire to recreate the warmth of those Sunday family dinners, where the ragu simmered for hours and the laughter lasted even longer.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-sm overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/img/interior-1.png"
                                alt="Vintage Restaurant Photo"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-sm overflow-hidden border border-white/10 md:order-last"
                        >
                            <Image
                                src="/img/restaurant_candlelight.png"
                                alt="Modern Dining Room"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-muted-foreground leading-relaxed"
                        >
                            <h3 className="text-2xl font-serif font-bold text-white">Tradition Meets Modernity</h3>
                            <p>
                                While we honor our roots, we also embrace the present. Under the guidance of Head Chef Alessandro Romano, we've elevated traditional Tuscan dishes with modern techniques and presentation.
                            </p>
                            <p>
                                Today, La Rustica is more than just a restaurant; it's a sanctuary where time slows down, and every bite transports you back to that rustic kitchen in Florence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
