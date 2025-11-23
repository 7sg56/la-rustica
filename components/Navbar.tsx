import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <UtensilsCrossed className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold font-serif text-foreground">La Rustica</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        Menu
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-white">
                        Order Online
                    </Button>
                    <Button className="font-serif">
                        Book a Table
                    </Button>
                </div>
            </div>
        </nav>
    );
}
