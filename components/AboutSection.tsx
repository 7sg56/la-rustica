"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section id="story" className="py-24 bg-background text-foreground overflow-hidden relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 relative"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50"></div>
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/img/story-img.png"
              alt="Chef plating a dish"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Decorative floating element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-card border border-white/10 p-6 shadow-xl hidden md:flex flex-col justify-center items-center backdrop-blur-md">
            <span className="text-4xl font-serif font-bold text-primary">35+</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground text-center mt-2">Years of Excellence</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-8"
        >
          <div>
            <span className="text-primary text-sm tracking-[0.2em] uppercase">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-2 leading-tight">
              A Story of <br /><span className="text-gradient-gold">Passion</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Founded in 1985, La Rustica has been a beacon of authentic Italian culinary tradition.
            We believe in the art of slow cooking, the importance of fresh, locally sourced ingredients,
            and the joy of sharing a meal with loved ones.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Our executive chef brings decades of experience from the heart of Tuscany, crafting dishes
            that are both nostalgic and innovative. Every plate tells a story of heritage, passion, and flavor.
          </p>

          <div className="pt-4">
            <Link href="/story" className="inline-block">
              <button className="group relative px-8 py-3 bg-transparent border border-primary text-primary overflow-hidden transition-all duration-300 hover:text-primary-foreground">
                <span className="relative z-10 uppercase tracking-widest text-sm font-bold">Read Our Story</span>
                <div className="absolute inset-0 h-full w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
