"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ChefsSection() {
    return (
        <section className="py-24 bg-card relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                            <Image
                                src="/img/head_chef.png"
                                alt="Head Chef Alessandro Romano"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                                <h3 className="text-2xl font-serif font-bold text-white">Alessandro Romano</h3>
                                <p className="text-primary uppercase tracking-widest text-sm mt-1">Executive Chef</p>
                            </div>
                        </div>

                        {/* Simple decorative frame accent */}
                        <div className="absolute top-4 -left-4 w-full h-full border border-primary/20 -z-10 hidden md:block"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <span className="text-primary text-sm tracking-[0.2em] uppercase">Meet The Team</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                            Mastery in Every <br /><span className="text-gradient-gold">Detail</span>
                        </h2>

                        <p className="text-muted-foreground text-lg leading-relaxed font-light">
                            Chef Alessandro brings over 25 years of culinary excellence to La Rustica. Born in Modena,
                            his philosophy revolves around "cucina povera" elevated to modern heights—respecting humble
                            ingredients while extracting their deepest flavors.
                        </p>

                        <blockquote className="border-l-2 border-primary pl-6 py-2 my-8 italic text-foreground/80 font-serif text-xl">
                            "Cooking is not just about ingredients, it's about memory. I want every dish to take you back to a moment in time."
                        </blockquote>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div>
                                <h4 className="text-primary font-bold text-3xl font-serif">25+</h4>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-primary font-bold text-3xl font-serif">3</h4>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-2">Michelin Stars (Prev)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
