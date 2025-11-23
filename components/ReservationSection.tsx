import { Button } from "@/components/ui/button";

export function ReservationSection() {
    return (
        <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Texture overlay could go here */}
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join Us for Dinner</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Whether it's a romantic evening, a family gathering, or a celebration with friends,
                    we promise an unforgettable dining experience.
                </p>
                <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 font-bold px-8 py-6 text-lg">
                    Book a Table Now
                </Button>
            </div>
        </section>
    );
}
