import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuGrid } from "@/components/MenuGrid";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <MenuGrid />
      <ReservationSection />
      <Footer />
    </main>
  );
}
