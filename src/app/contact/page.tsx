
import Image from 'next/image';
import ContactForm from '@/components/feature/ContactForm';
import { siteConfig } from '@/lib/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, MessageSquare, Clock, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Contact Us | D-Cure Dental Clinic',
  description: 'Get in touch with D-Cure for appointments, inquiries, or emergency dental care. Find our address, phone, and clinic hours.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-headline">Contact D-Cure</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to help with all your dental needs. Reach out to us to schedule an appointment, ask a question, or in case of an emergency.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 font-headline">Contact Information</h2>
          <div className="space-y-6">
            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <MapPin className="h-6 w-6 mr-3" /> Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{siteConfig.address}</p>
                <div className="aspect-video w-full rounded-md overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11304.691315852262!2d85.04604033455216!3d25.617819992654663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67913eac02a54fed%3A0x4a13f80cb023450c!2sD-CURE%20A%20Multispeciality%20Dental%20Clinic%20%7C%20Best%20dental%20Clinic%20in%20Saguna%20More%2C%20Patna%20%7C%20Best%20Root%20Canal%20Treatment%20%7C%20Top%20Dentist!5e0!3m2!1sen!2sin!4v1749321191770!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  {/* Or use an iframe for a live map if preferred and API key is available
                  <iframe 
                    src={siteConfig.googleMapsEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-md"
                  ></iframe>
                  */}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <Clock className="h-6 w-6 mr-3" /> Clinic Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {siteConfig.clinicHours.map(item => (
                    <li key={item.days} className="flex justify-between">
                      <span>{item.days}:</span>
                      <span className="font-medium">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <Phone className="h-6 w-6 mr-3" /> Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p><strong>Phone:</strong> <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors">{siteConfig.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">{siteConfig.email}</a></p>
                <p className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-green-500" />
                  <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Chat on WhatsApp</a>
                </p>
                <p className="flex items-center">
                  <Instagram className="h-5 w-5 mr-2 text-pink-500" />
                  <a href={siteConfig.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Follow on Instagram</a>
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-lg shadow-md border-destructive bg-destructive/10">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-destructive">
                  <AlertTriangle className="h-6 w-6 mr-3" /> Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For dental emergencies, please call: <a href={`tel:${siteConfig.emergencyContact}`} className="font-bold hover:underline">{siteConfig.emergencyContact}</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
