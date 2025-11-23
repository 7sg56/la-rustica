import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-12 border-t border-border/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-primary">La Rustica</h3>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
                            Authentic Italian cuisine in the heart of the city.
                            Bringing the flavors of Tuscany to your table since 1995.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <div className="space-y-2 text-gray-400 text-sm">
                            <p>123 Culinary Avenue</p>
                            <p>Foodie City, FC 90210</p>
                            <p className="mt-4">Phone: (555) 123-4567</p>
                            <p>Email: ciao@larustica.com</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
                        <div className="space-y-2 text-gray-400 text-sm">
                            <p><span className="text-white">Mon - Thu:</span> 5:00 PM - 10:00 PM</p>
                            <p><span className="text-white">Fri - Sat:</span> 5:00 PM - 11:00 PM</p>
                            <p><span className="text-white">Sun:</span> 4:00 PM - 9:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} La Rustica. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
