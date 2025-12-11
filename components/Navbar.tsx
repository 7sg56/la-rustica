"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 10);
    });

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
                : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tighter">
                    La <span className="text-primary">Rustica</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Home", href: "/" },
                        { name: "Story", href: "/story" },
                        { name: "Menu", href: "/#menu" },
                        { name: "Gallery", href: "/#gallery" },
                        { name: "Contact", href: "#contact" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm uppercase tracking-widest text-white/80 hover:text-primary transition-colors duration-300 relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors"
                >
                    Reserve
                </button>
            </div>
        </motion.nav>
    );
}
