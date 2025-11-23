import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2000&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <h1 className="mb-6 text-5xl md:text-7xl font-bold font-serif tracking-tight">
                    Authentic Italian <br />
                    <span className="text-primary-foreground italic">Tradition</span>
                </h1>
                <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                    Experience the warmth of family recipes passed down through generations.
                    Handmade pasta, wood-fired pizza, and the finest wines.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                        Book a Table
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-black">
                        View Menu
                    </Button>
                </div>
            </div>
        </section>
    );
}
