"use client";

import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Toast } from '@/components/ui/simple-toast';

export function ReservationSection() {
    const [showToast, setShowToast] = useState(false);

    const handleReserve = (e: React.FormEvent) => {
        e.preventDefault();
        setShowToast(true);
    };

    return (
        <section className="py-24 bg-muted/10 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="text-center mb-10">
                        <span className="text-primary text-sm tracking-[0.2em] uppercase">Reservations</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">
                            Book Your <span className="text-gradient-gold">Table</span>
                        </h2>
                        <p className="text-muted-foreground mt-4 font-light">
                            Reserve your spot for an unforgettable dining experience.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleReserve}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold pl-1">Date</Label>
                                <input
                                    type="date"
                                    required
                                    className="w-full bg-background border border-white/10 rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all h-10 font-sans hover:border-primary/30"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold pl-1">Time</Label>
                                <Select required>
                                    <SelectTrigger className="bg-background border-white/10 text-foreground h-10 hover:border-primary/30 focus:ring-1 focus:ring-primary/50">
                                        <SelectValue placeholder="Select Time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="18:00">18:00</SelectItem>
                                        <SelectItem value="18:30">18:30</SelectItem>
                                        <SelectItem value="19:00">19:00</SelectItem>
                                        <SelectItem value="19:30">19:30</SelectItem>
                                        <SelectItem value="20:00">20:00</SelectItem>
                                        <SelectItem value="20:30">20:30</SelectItem>
                                        <SelectItem value="21:00">21:00</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold pl-1">Guests</Label>
                                <Select required>
                                    <SelectTrigger className="bg-background border-white/10 text-foreground h-10 hover:border-primary/30 focus:ring-1 focus:ring-primary/50">
                                        <SelectValue placeholder="Guests" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="2">2 People</SelectItem>
                                        <SelectItem value="3">3 People</SelectItem>
                                        <SelectItem value="4">4 People</SelectItem>
                                        <SelectItem value="5">5 People</SelectItem>
                                        <SelectItem value="6">6 People</SelectItem>
                                        <SelectItem value="group">Large Group (7+)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] mt-6 text-sm"
                            type="submit"
                        >
                            Confirm Reservation
                        </motion.button>
                    </form>
                </div>
            </div>

            <Toast
                message="Reservation request sent successfully!"
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </section>
    );
}
