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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
        <Image 
        src="https://res.cloudinary.com/dbbox9eum/image/upload/v1749323276/oujeqkeafzh4doyiyfs2.png"
        alt="dcure logo"
        width={40}
        height={40}
        />
          	
        
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
                <Image 
                  src="https://res.cloudinary.com/dbbox9eum/image/upload/v1749323276/oujeqkeafzh4doyiyfs2.png"
                  alt="Smiling patient at D-Cure dental clinic"
                  width={40}
                  height={40}
                />
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
