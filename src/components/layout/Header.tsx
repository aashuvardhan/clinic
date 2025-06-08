"use client";

import Link from 'next/link';
import Image from 'next/image';
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

// A very simple tooth icon SVG
const ToothIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Dental Clinic Tooth Icon"
  >
    <path d="M19.38,9.14a3.14,3.14,0,0,0-4.21-1L12.18,5.1a0.5,0.5,0,0,0-.36-0.1,0.5,0.5,0,0,0-.37.1L8.83,8.18a3.13,3.13,0,0,0-4.21,1,3.19,3.19,0,0,0-.62,3.56L6.59,18.9a0.5,0.5,0,0,0,.46.33H17a0.5,0.5,0,0,0,.46-0.33l2.59-6.2A3.19,3.19,0,0,0,19.38,9.14ZM12,6.12l2.12,2.47a2.12,2.12,0,0,1,.87,2.83,2.19,2.19,0,0,1-3,.83,2.16,2.16,0,0,1-3-.83,2.12,2.12,0,0,1,.87-2.83L12,6.12ZM16.5,18.23H7.51l-2-4.78a2.19,2.19,0,0,1,.41-2.42,2.11,2.11,0,0,1,3.29.28l0.55,0.64a0.5,0.5,0,0,0,.76,0l0.55-0.64a2.11,2.11,0,0,1,3.29-.28,2.19,2.19,0,0,1,.41,2.42Z" />
  </svg>
);


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
