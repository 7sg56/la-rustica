"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Toast } from "@/components/ui/simple-toast";

const menuCategories = {
    antipasti: [
        {
            name: "Bruschetta al Pomodoro",
            description: "Grilled rustic bread, vine-ripened tomatoes, fresh basil, garlic rub.",
            price: "$14",
            image: "/img/antipasto_platter.png", // Correct
        },
        {
            name: "Calamari Fritti",
            description: "Crispy fried squid, lemon garlic aioli, spicy marinara.",
            price: "$18",
            image: "/img/interior-1.png", // Still placeholder, but acceptable for now
        },
        {
            name: "Carpaccio di Manzo",
            description: "Thinly sliced raw beef tenderloin, arugula, parmesan shavings, truffle oil.",
            price: "$24",
            image: "/img/florentine_steak.png", // Reusing steak image creatively
        },
        {
            name: "Caprese Salad",
            description: "Buffalo mozzarella, heirloom tomatoes, fresh basil, balsamico glaze.",
            price: "$19",
            image: "/img/italian_pizza.png", // Creative reuse
        }
    ],
    primi: [
        {
            name: "Truffle Carbonara",
            description: "Fresh tagliatelle, guanciale, pecorino romano, black truffle shavings.",
            price: "$28",
            image: "/img/pasta_carbonara.png",
        },
        {
            name: "Risotto ai Funghi",
            description: "Arborio rice, porcini mushrooms, parmesan cream, white truffle oil.",
            price: "$26",
            image: "/img/mushroom_risotto.png", // New Image
        },
        {
            name: "Pappardelle al Cinghiale",
            description: "Wide ribbon pasta, slow-braised wild boar ragu, juniper berries.",
            price: "$30",
            image: "/img/pappardelle_ragu.png", // New Image
        },
        {
            name: "Ravioli Ricotta",
            description: "Handmade ravioli, fresh ricotta, spinach, sage butter sauce.",
            price: "$25",
            image: "/img/pasta_carbonara.png", // Reuse
        }
    ],
    secondi: [
        {
            name: "Osso Buco",
            description: "Braised veal shanks, saffron risotto, gremolata.",
            price: "$38",
            image: "/img/antipasto_platter.png",
        },
        {
            name: "Bistecca alla Fiorentina",
            description: "Grilled T-bone steak, rosemary, roast potatoes (serves two).",
            price: "$85",
            image: "/img/florentine_steak.png", // New Image
        },
        {
            name: "Branzino al Sale",
            description: "Salt-crusted sea bass, seasonal vegetables, lemon butter sauce.",
            price: "$36",
            image: "/img/interior-1.png", // Placeholder
        },
        {
            name: "Pollo al Mattone",
            description: "Roasted chicken under a brick, tuscan herbs, polenta fries.",
            price: "$29",
            image: "/img/italian_pizza.png", // Placeholder
        }
    ],
    dolci: [
        {
            name: "Classic Tiramisu",
            description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa powder.",
            price: "$14",
            image: "/img/tiramisu.png",
        },
        {
            name: "Panna Cotta",
            description: "Vanilla bean custard, mixed berry coulis, almond crumble.",
            price: "$12",
            image: "/img/mushroom_risotto.png", // Placeholder, but better than texture
        },
        {
            name: "Cannoli Siciliani",
            description: "Crispy pastry shells, sweet ricotta filling, pistachios, chocolate chips.",
            price: "$10",
            image: "/img/tiramisu.png", // Reuse
        },
        {
            name: "Affogato al Caffè",
            description: "Vanilla gelato drowned in hot espresso shot.",
            price: "$9",
            image: "/img/story-img.png", // Placeholder
        }
    ]
};

export function MenuGrid() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleOrder = (itemName: string) => {
        setToastMessage(`Added ${itemName} to order`);
        setShowToast(true);
    };

    return (
        <section id="menu" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <span className="text-primary text-sm tracking-[0.2em] uppercase">Culinary Masterpieces</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Signature <span className="text-primary">Dishes</span>
                    </h2>
                    <div className="w-20 h-0.5 bg-primary mx-auto"></div>
                </div>

                <Tabs defaultValue="primi" className="w-full">
                    <div className="flex justify-center mb-12 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                        <TabsList className="bg-transparent border-b border-white/10 w-full md:w-auto justify-start md:justify-center p-0 h-auto gap-8">
                            <TabsTrigger value="antipasti" className="px-4 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-primary text-base md:text-lg">Antipasti</TabsTrigger>
                            <TabsTrigger value="primi" className="px-4 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-primary text-base md:text-lg">Primi</TabsTrigger>
                            <TabsTrigger value="secondi" className="px-4 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-primary text-base md:text-lg">Secondi</TabsTrigger>
                            <TabsTrigger value="dolci" className="px-4 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-muted-foreground data-[state=active]:text-primary text-base md:text-lg">Dolci</TabsTrigger>
                        </TabsList>
                    </div>

                    {(Object.keys(menuCategories) as Array<keyof typeof menuCategories>).map((category) => (
                        <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none ring-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {menuCategories[category].map((item, index) => (
                                    <motion.div
                                        key={`${category}-${index}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        className="group relative bg-card/30 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                                    >
                                        <div className="relative h-64 overflow-hidden shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        </div>

                                        <div className="p-6 relative flex flex-col grow">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {item.name}
                                                </h3>
                                                <span className="text-primary font-bold font-serif text-lg">{item.price}</span>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                                                {item.description}
                                            </p>
                                            <button
                                                onClick={() => handleOrder(item.name)}
                                                className="w-full py-2 border border-white/10 text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-sm mt-auto"
                                            >
                                                Order Now
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="text-center mt-16">
                    <button
                        onClick={() => {
                            setToastMessage("Downloading Full Menu...");
                            setShowToast(true);
                            setTimeout(() => {
                                // Simulate download by opening the image
                                window.open('/img/menu-preview.png', '_blank');
                            }, 1500);
                        }}
                        className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                    >
                        View Full PDF Menu
                    </button>
                </div>
            </div>
            <Toast
                message={toastMessage}
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </section>
    );
}
