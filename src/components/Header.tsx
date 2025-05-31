'use client';

import * as React from 'react';
import Link from 'next/link';
import SiteLogo from './SiteLogo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Home, GraduationCap, GalleryThumbnails, CalendarDays, Info, MessageCircleQuestion, Mail, LogIn, UserPlus } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil', icon: <Home className="h-4 w-4 mr-2" /> },
  { href: '/formations', label: 'Formations', icon: <GraduationCap className="h-4 w-4 mr-2" /> },
  { href: '/galerie', label: 'Galerie', icon: <GalleryThumbnails className="h-4 w-4 mr-2" /> },
  { href: '/ateliers', label: 'Ateliers', icon: <CalendarDays className="h-4 w-4 mr-2" /> },
  { href: '/a-propos', label: 'À Propos', icon: <Info className="h-4 w-4 mr-2" /> },
  { href: '/faq', label: 'FAQ', icon: <MessageCircleQuestion className="h-4 w-4 mr-2" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4 mr-2" /> },
];

const authLinks = [
  { href: '/connexion', label: 'Connexion', icon: <LogIn className="h-4 w-4 mr-2" /> },
  { href: '/inscription', label: 'Inscription', icon: <UserPlus className="h-4 w-4 mr-2" /> },
];

const NavLinkItem = ({ href, label, icon, onClick }: { href: string; label: string; icon: React.ReactNode, onClick?: () => void }) => (
  <Link href={href} passHref>
    <Button variant="ghost" className="justify-start w-full text-foreground hover:text-accent-foreground hover:bg-accent" onClick={onClick}>
      {icon}
      {label}
    </Button>
  </Link>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <SiteLogo />
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground hover:bg-accent">{link.label}</Button>
            </Link>
          ))}
          <div className="h-6 border-l border-border mx-2"></div>
          {authLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground hover:bg-accent">{link.label}</Button>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card p-6">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.href} {...link} onClick={() => setMobileMenuOpen(false)} />
                ))}
                <hr className="my-2 border-border" />
                {authLinks.map((link) => (
                  <NavLinkItem key={link.href} {...link} onClick={() => setMobileMenuOpen(false)} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
