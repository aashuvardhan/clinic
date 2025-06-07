
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Instagram, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[500px] sm:min-h-[600px] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Smiling patient at D-Cure dental clinic"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="dental clinic smile"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6">
            {siteConfig.clinicName}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 font-headline">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-3 text-lg">
              <Link href="/contact?reason=appointment">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/20 hover:bg-white/30 rounded-lg px-8 py-3 text-lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-headline">Welcome to D-Cure</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At D-Cure, we are dedicated to providing you and your family with top-quality dental care in a modern, comfortable, and friendly environment. Our mission is to help you achieve and maintain optimal oral health, ensuring your smile is healthy and bright for years to come. We leverage the latest dental technologies and techniques to offer a comprehensive range of services tailored to your individual needs.
          </p>
        </div>
      </section>

      {/* Contact Info Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-headline">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-primary">
                  <MapPin className="h-6 w-6 mr-3" /> Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{siteConfig.address}</p>
                <a 
                  href="https://www.google.com/maps/place/D-CURE+A+Multispeciality+Dental+Clinic+%7C+Best+dental+Clinic+in+Saguna+More,+Patna+%7C+Best+Root+Canal+Treatment+%7C+Top+Dentist/@25.6153604,85.0485459,17z/data=!4m15!1m8!3m7!1s0x39ed565cb06863e9:0x2c1e5e75b9b0aad2!2sRaghunath+Path,+Kaliket+Nagar,+Patna,+Danapur,+Bihar+801503!3b1!8m2!3d25.6153604!4d85.0485459!16s%2Fg%2F12hls6pgb!3m5!1s0x67913eac02a54fed:0x4a13f80cb023450c!8m2!3d25.6168654!4d85.0484306!16s%2Fg%2F11vm0nl7mz?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-primary">
                  <Phone className="h-6 w-6 mr-3" /> Phone & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Call: <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
                </p>
                <a 
                  href={siteConfig.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 inline-flex items-center text-primary hover:underline"
                >
                  <MessageSquare className="h-5 w-5 mr-2"/> Chat on WhatsApp
                </a>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-primary">
                  <Instagram className="h-6 w-6 mr-3" /> Social Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={siteConfig.instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Follow us on Instagram
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-lg">
              <Link href="/contact">More Contact Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
