"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: "url('/img/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
      </motion.div>

      <div className="relative z-10 px-4 max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Est. 1985
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-white drop-shadow-2xl mb-2">
            La <span className="text-gradient-gold italic">Rustica</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light tracking-wide text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          Where culinary tradition meets modern elegance. <br className="hidden md:block" />
          Experience the essence of Italy in every bite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
        >
          <Link
            href="#reservation"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          >
            <span className="relative z-10 uppercase tracking-widest text-sm">Book a Table</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
          </Link>
          <Link
            href="#menu"
            className="group px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-sm hover:bg-white/5 hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            <span className="uppercase tracking-widest text-sm">View Menu</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
