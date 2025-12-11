import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ChefsSection } from "@/components/ChefsSection";
import { MenuGrid } from "@/components/MenuGrid";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <ChefsSection />
      <MenuGrid />
      <GallerySection />
      <TestimonialsSection />
      <div id="reservation">
        <ReservationSection />
      </div>
      <Footer />
    </main>
  );
}
