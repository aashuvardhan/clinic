import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { Service } from '@/lib/data';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={service.imageUrl}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={service.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold font-headline text-primary">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-4">{service.description}</CardDescription>
        <div>
          <h4 className="font-medium text-foreground mb-2">Benefits:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      {/* <CardFooter>
        Optional: Add a "Learn More" button or link here
      </CardFooter> */}
    </Card>
  );
}
