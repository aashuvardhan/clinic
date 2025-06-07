
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
      <title>Tooth Icon</title>
      <path d="M17.82,19.26C17.39,20.91 15.93,22 14,22H10C8.07,22 6.61,20.91 6.18,19.26C4.13,18.5 3,16.5 3,14.28V11C3,8.03 5.47,5.43 8.42,5.12C8.79,3.31 10.26,2 12,2C13.74,2 15.21,3.31 15.58,5.12C18.53,5.43 21,8.03 21,11V14.28C21,16.5 19.87,18.5 17.82,19.26Z" />
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
