import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-serif font-bold text-white tracking-tighter">
                            La <span className="text-primary">Rustica</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Authentic Italian cuisine served with passion and elegance. Experience the true taste of Italy in every bite.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-serif font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Story', 'Menu', 'Gallery', 'Reservations'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-muted-foreground text-sm">
                            <li>123 Culinary Avenue</li>
                            <li>New York, NY 10012</li>
                            <li className="pt-4">+1 (555) 123-4567</li>
                            <li>info@larustica.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif font-bold mb-6">Hours</h4>
                        <ul className="space-y-4 text-muted-foreground text-sm">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span>17:00 - 22:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Fri - Sat</span>
                                <span>17:00 - 23:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>16:00 - 21:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs">
                        © {new Date().getFullYear()} La Rustica. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-muted-foreground hover:text-white text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-muted-foreground hover:text-white text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
