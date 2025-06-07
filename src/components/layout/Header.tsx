
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Oral Health', href: '/oral-health' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ToothIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10 text-primary"
      aria-label="D-Cure Dental Clinic Logo - Tooth Icon"
    >
      <title>Dental Clinic Tooth Icon</title>
      <path d="M17 2H7C5.89543 2 5 2.89543 5 4V10C5 11.1046 5.89543 12 7 12H8V15C8 16.1046 8.89543 17 10 17H14C15.1046 17 16 16.1046 16 15V12H17C18.1046 12 19 11.1046 19 10V4C19 2.89543 18.1046 2 17 2ZM17 10H16V11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11V10H7V4H17V10Z" />
      <path d="M10 17H14V20L12 22L10 20V17Z" />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <ToothIcon />
          <span className="text-2xl font-bold text-primary font-headline">D-Cure</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-background p-6">
              <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setMobileMenuOpen(false)}>
                  <ToothIcon />
                  <span className="text-2xl font-bold text-primary font-headline">D-Cure</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                 <Button asChild className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/contact?reason=appointment">Book Appointment</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Button asChild className="hidden md:flex">
          <Link href="/contact?reason=appointment">Book Appointment</Link>
        </Button>
      </div>
    </header>
  );
}
