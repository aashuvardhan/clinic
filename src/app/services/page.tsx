import ServiceCard from '@/components/feature/ServiceCard';
import DentalChatbot from '@/components/feature/DentalChatbot';
import { servicesData } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Our Dental Services | D-Cure Dental Hub',
  description: 'Explore a wide range of dental services offered at D-Cure, from routine check-ups to advanced treatments.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-headline">Our Dental Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          At D-Cure, we offer a comprehensive suite of dental services to meet all your oral health needs. Our experienced team uses modern technology to ensure you receive the best care.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
      
      <Separator className="my-12 md:my-16" />

      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 font-headline">Have Questions? Ask Our AI Assistant!</h2>
        <DentalChatbot />
      </section>
    </div>
  );
}
