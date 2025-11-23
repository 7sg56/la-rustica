import { Button } from "@/components/ui/button";

const menuItems = [
    {
        id: 1,
        name: "Pizza Margherita",
        description: "San Marzano tomato sauce, fresh mozzarella di bufala, basil, extra virgin olive oil.",
        price: "$18",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Tagliatelle al Tartufo",
        description: "Handmade ribbon pasta, black truffle cream sauce, parmesan, fresh parsley.",
        price: "$24",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Classic Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa powder dust.",
        price: "$12",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop"
    }
];

export function MenuGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Specialties</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Crafted with passion using the finest imported Italian ingredients and locally sourced produce.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuItems.map((item) => (
                        <div key={item.id} className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-serif font-bold text-foreground">{item.name}</h3>
                                    <span className="text-primary font-bold">{item.price}</span>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                                    Order Now &rarr;
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                        View Full Menu
                    </Button>
                </div>
            </div>
        </section>
    );
}
