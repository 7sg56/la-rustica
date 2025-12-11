"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        text: "The best Italian food I've had outside of Rome. The atmosphere is simply magical.",
        author: "Sarah Jenkins",
        role: "Food Critic",
        rating: 5
    },
    {
        text: "An unforgettable evening. The service was impeccable and the wine selection is world-class.",
        author: "Michael Ross",
        role: "Sommelier",
        rating: 5
    },
    {
        text: "Truly a hidden gem. The pasta is handmade and you can taste the love in every bite.",
        author: "Elena Rodriguez",
        role: "Regular Guest",
        rating: 5
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-32 relative overflow-hidden bg-muted/20">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/texture-bg.png"
                    alt="Texture Background"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary text-sm tracking-[0.2em] uppercase">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2">
                        Guest <span className="text-primary">Experiences</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="bg-card/40 backdrop-blur-md p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 shadow-lg"
                        >
                            <div className="mb-6 text-primary">
                                <Quote size={40} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-lg text-muted-foreground mb-8 italic leading-relaxed font-light">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif text-xl font-bold">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground font-serif tracking-wide">{testimonial.author}</p>
                                    <p className="text-xs text-primary uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
