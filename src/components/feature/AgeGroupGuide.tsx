import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, Info } from 'lucide-react';
import type { OralHealthGuide as OralHealthGuideType } from '@/lib/data';

interface AgeGroupGuideProps {
  guide: OralHealthGuideType;
}

export default function AgeGroupGuide({ guide }: AgeGroupGuideProps) {
  return (
    <Card className="w-full shadow-lg rounded-lg mb-12">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-semibold text-primary font-headline">{guide.ageGroup}</CardTitle>
        <CardDescription className="text-md md:text-lg">{guide.title}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {guide.sections.map((section, index) => (
          <div key={index} className="p-4 border border-border/50 rounded-md bg-muted/20">
            <h3 className="text-xl font-medium text-foreground mb-3 flex items-center">
              <Info className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
              {section.subtitle}
            </h3>
            {section.imageUrl && (
              <div className="relative w-full h-40 sm:h-48 rounded-md overflow-hidden my-4">
                <Image
                  src={section.imageUrl}
                  alt={section.subtitle}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={section.imageHint || 'oral health illustration'}
                />
              </div>
            )}
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside pl-2">
              {section.content.map((point, pIndex) => (
                <li key={pIndex}>{point}</li>
              ))}
            </ul>
            {section.checklist && section.checklist.length > 0 && (
              <div className="mt-4 pt-3 border-t border-border/30">
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <CheckSquare className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                  Quick Checklist:
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {section.checklist.map((item, cIndex) => (
                    <li key={cIndex} className="flex items-start">
                      <CheckSquare className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
