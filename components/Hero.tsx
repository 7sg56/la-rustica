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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/img/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary text-sm md:text-base tracking-[0.3em] uppercase font-medium"
            >
              Est. 1985 &bull; Florence, Italy
            </motion.p>
          </div>

          <h1 className="text-7xl md:text-9xl font-serif text-white tracking-tighter leading-none mix-blend-screen">
            <span className="block text-white/90">La</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F1C40F] to-[#D4AF37] italic pr-2">
              Rustica
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/80 font-light leading-relaxed font-sans">
            An authentic culinary journey where tradition meets modern elegance.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-10 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="#reservation"
              className="group relative px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:bg-[#F1C40F]"
            >
              <span className="relative z-10">Book a Table</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </Link>

            <Link
              href="#menu"
              className="group relative px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm overflow-hidden hover:border-white/50 transition-colors backdrop-blur-sm"
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </motion.div>
    </section>
  );
}
