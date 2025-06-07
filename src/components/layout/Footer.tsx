import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, MessageSquare, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/40 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">D-Cure Dental Hub</h3>
            <p className="text-sm">Redefining Dental Wellness. Your smile is our priority.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/oral-health" className="hover:text-primary transition-colors">Oral Health</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
              </li>
               <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center">
                <Instagram className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href={siteConfig.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Follow on Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Clinic Hours</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.clinicHours.map(item => (
                <li key={item.days} className="flex justify-between">
                  <span>{item.days}:</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-md font-semibold text-foreground mt-4 mb-2">Emergency Contact</h4>
            <p className="text-sm flex items-center">
              <Phone className="h-5 w-5 mr-2 text-destructive flex-shrink-0" /> 
              <a href={`tel:${siteConfig.emergencyContact}`} className="hover:text-primary transition-colors">{siteConfig.emergencyContact}</a>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} D-Cure Dental Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
