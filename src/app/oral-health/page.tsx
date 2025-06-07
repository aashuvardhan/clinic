
import AgeGroupGuide from '@/components/feature/AgeGroupGuide';
import DentalChatbot from '@/components/feature/DentalChatbot';
import { oralHealthGuidesData } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Oral Health & Hygiene Tips | D-Cure Dental Clinic',
  description: 'Learn about oral health best practices for every age group, from children to seniors, with D-Cure.',
};

export default function OralHealthPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-headline">Oral Health Tips</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Maintaining good oral hygiene is crucial at every stage of life. Discover tailored tips and advice to keep your smile healthy and bright, no matter your age.
        </p>
      </section>

      <section className="mb-12 md:mb-16">
        {oralHealthGuidesData.map((guide) => (
          <AgeGroupGuide key={guide.id} guide={guide} />
        ))}
      </section>

      <Separator className="my-12 md:my-16" />

      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 font-headline">Your Oral Health Questions Answered</h2>
        <DentalChatbot initialQuestion="Tell me about children's oral health."/>
      </section>
    </div>
  );
}

