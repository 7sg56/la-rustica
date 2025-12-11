"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
    {
        name: "Truffle Carbonara",
        description: "Fresh tagliatelle, guanciale, pecorino romano, black truffle shavings.",
        price: "$28",
        image: "/img/pasta_carbonara.png",
    },
    {
        name: "Pizza Margherita",
        description: "San Marzano tomato sauce, buffalo mozzarella, fresh basil, extra virgin olive oil.",
        price: "$22",
        image: "/img/italian_pizza.png",
    },
    {
        name: "Osso Buco",
        description: "Braised veal shanks, saffron risotto, gremolata.",
        price: "$34",
        image: "/img/antipasto_platter.png", // Using placeholder for now
    },
    {
        name: "Classic Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa powder.",
        price: "$14",
        image: "/img/tiramisu.png",
    },
];

export function MenuGrid() {
    return (
        <section id="menu" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm tracking-[0.2em] uppercase">Culinary Masterpieces</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Signature <span className="text-primary">Dishes</span>
                    </h2>
                    <div className="w-20 h-0.5 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-card/30 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6 relative">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {item.name}
                                    </h3>
                                    <span className="text-primary font-bold font-serif text-lg">{item.price}</span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <button className="w-full py-2 border border-white/10 text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-sm">
                                    Order Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
}
