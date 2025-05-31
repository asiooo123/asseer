import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="font-headline text-lg mb-2 text-primary">TerreForm</h5>
            <p className="text-sm">L'art de façonner la terre, entre tradition et modernité.</p>
          </div>
          <div>
            <h5 className="font-headline text-lg mb-2 text-primary">Liens Rapides</h5>
            <ul className="space-y-1">
              <li><Link href="/formations" className="hover:text-accent transition-colors">Formations</Link></li>
              <li><Link href="/ateliers" className="hover:text-accent transition-colors">Ateliers</Link></li>
              <li><Link href="/galerie" className="hover:text-accent transition-colors">Galerie</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-headline text-lg mb-2 text-primary">Suivez-nous</h5>
            <div className="flex justify-center space-x-4">
              <Link href="#" aria-label="Facebook" className="text-foreground hover:text-accent transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Instagram" className="text-foreground hover:text-accent transition-colors"><Instagram size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="text-foreground hover:text-accent transition-colors"><Twitter size={24} /></Link>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TerreForm. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
