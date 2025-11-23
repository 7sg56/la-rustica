import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center gap-8">
      <h1 className="text-6xl font-bold text-primary">La Rustica</h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        Authentic Italian flavors in a warm, family atmosphere.
        Experience the tradition of handmade pasta and wood-fired pizza.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-serif text-lg hover:bg-primary/90 transition">
          Reserve a Table
        </button>
        <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-serif text-lg hover:bg-primary/10 transition">
          View Menu
        </button>
      </div>
    </main>
  );
}
