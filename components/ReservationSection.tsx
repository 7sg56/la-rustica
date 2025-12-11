"use client";

import { motion } from 'framer-motion';

export function ReservationSection() {
    return (
        <section className="py-24 bg-muted/10 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="text-center mb-10">
                        <span className="text-primary text-sm tracking-[0.2em] uppercase">Reservations</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">
                            Book Your <span className="text-gradient-gold">Table</span>
                        </h2>
                        <p className="text-muted-foreground mt-4 font-light">
                            Reserve your spot for an unforgettable dining experience.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-muted-foreground">Date</label>
                                <input
                                    type="date"
                                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-muted-foreground">Time</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                                    <option className="bg-black">18:00</option>
                                    <option className="bg-black">19:00</option>
                                    <option className="bg-black">20:00</option>
                                    <option className="bg-black">21:00</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-muted-foreground">Guests</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                                    <option className="bg-black">2 People</option>
                                    <option className="bg-black">3 People</option>
                                    <option className="bg-black">4 People</option>
                                    <option className="bg-black">5+ People</option>
                                </select>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            Confirm Reservation
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
}
