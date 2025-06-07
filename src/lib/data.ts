export interface Service {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: "bridges-dentures",
    title: "Bridges and Partial Dentures",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "dental bridge illustration",
    description: "Restore your smile and chewing ability with custom-fitted bridges or partial dentures, filling gaps left by missing teeth.",
    benefits: ["Improved appearance", "Better chewing and speaking", "Prevents remaining teeth from shifting"],
  },
  {
    id: "cracked-teeth",
    title: "Cracked Teeth Repair",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "tooth repair procedure",
    description: "Expert repair for cracked or chipped teeth to alleviate pain and prevent further damage, often using bonding or crowns.",
    benefits: ["Pain relief", "Restored tooth function", "Prevention of tooth loss"],
  },
  {
    id: "crowns",
    title: "Crowns",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "dental crown types",
    description: "Dental crowns are caps placed over damaged teeth to restore their shape, size, strength, and appearance.",
    benefits: ["Strengthens weak teeth", "Protects damaged teeth", "Improves tooth aesthetics"],
  },
  {
    id: "dentures",
    title: "Dentures",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "full dentures set",
    description: "Full dentures replace all teeth in an arch, providing a natural-looking smile and restoring oral functions.",
    benefits: ["Restored smile and facial aesthetics", "Improved ability to eat and speak", "Support for facial structure"],
  },
  {
    id: "orthodontic",
    title: "Orthodontic Treatment",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "braces aligners comparison",
    description: "Straighten your teeth and correct bite issues with modern orthodontic solutions like braces or clear aligners.",
    benefits: ["Straighter teeth and improved smile", "Better oral hygiene", "Corrected bite problems"],
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "root canal diagram",
    description: "Save an infected or badly decayed tooth with root canal therapy, which cleans the inside of the tooth and seals it.",
    benefits: ["Saves natural tooth", "Relieves severe toothache", "Prevents spread of infection"],
  },
  {
    id: "scaling-polishing",
    title: "Scaling & Polishing",
    imageUrl: "https://placehold.co/400x300.png",
    imageHint: "dental cleaning tools",
    description: "Professional dental cleaning to remove plaque and tartar buildup, followed by polishing for a smooth, bright finish.",
    benefits: ["Prevents gum disease", "Removes stains and freshens breath", "Maintains overall oral health"],
  },
];

export interface OralHealthGuide {
  id: string;
  ageGroup: 'Children (3–12 years)' | 'Adults (20–50 years)' | 'Older Adults (60+)';
  title: string;
  sections: {
    subtitle: string;
    content: string[];
    imageUrl?: string;
    imageHint?: string;
    checklist?: string[];
  }[];
}

export const oralHealthGuidesData: OralHealthGuide[] = [
  {
    id: "children",
    ageGroup: "Children (3–12 years)",
    title: "Tips for Young Smiles",
    sections: [
      {
        subtitle: "Importance of Brushing Habits",
        content: [
          "Start early: Clean baby's gums with a soft cloth even before teeth appear.",
          "Use fluoride toothpaste: A pea-sized amount for children aged 3-6.",
          "Brush twice a day for two minutes each time.",
          "Supervise brushing until they are around 7-8 years old.",
        ],
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "child brushing teeth",
        checklist: ["Brush morning and night", "Use fluoride toothpaste", "Brush for 2 minutes", "Visit dentist regularly"],
      },
      {
        subtitle: "First Dental Visit Tips",
        content: [
          "Schedule the first visit by their first birthday or when the first tooth appears.",
          "Keep it positive: Talk about the dentist in a friendly way.",
          "The first visit is often short and mainly for introduction.",
        ],
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "child at dentist",
      },
    ],
  },
  {
    id: "adults",
    ageGroup: "Adults (20–50 years)",
    title: "Maintaining Adult Oral Health",
    sections: [
      {
        subtitle: "Managing Cavities and Gum Health",
        content: [
          "Brush twice daily with fluoride toothpaste and floss once a day.",
          "Limit sugary snacks and drinks.",
          "Watch for signs of gum disease: red, swollen, or bleeding gums.",
          "Regular dental check-ups are key for early detection.",
        ],
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "healthy gums illustration",
      },
      {
        subtitle: "Dental Cleaning Frequency",
        content: [
          "Most adults benefit from a professional cleaning every 6 months.",
          "Your dentist may recommend more frequent visits based on your oral health.",
        ],
        checklist: ["Brush 2x daily, Floss 1x daily", "Balanced diet", "Regular dental visits (every 6 months)", "Avoid tobacco products"],
      },
    ],
  },
  {
    id: "older-adults",
    ageGroup: "Older Adults (60+)",
    title: "Oral Care for Seniors",
    sections: [
      {
        subtitle: "Denture Care",
        content: [
          "Clean dentures daily with a denture brush and cleanser.",
          "Remove dentures at night to give gums a rest.",
          "Store dentures in water or a denture solution when not worn.",
          "Visit your dentist regularly for denture fit and oral health checks.",
        ],
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "denture care products",
      },
      {
        subtitle: "Bone Loss and Receding Gums",
        content: [
          "Dry mouth can be common; stay hydrated and discuss with your dentist.",
          "Receding gums can expose roots, making them prone to decay. Use fluoride.",
          "Osteoporosis can affect jaw bone density; discuss any concerns.",
          "Gentle but thorough brushing is important.",
        ],
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "senior smiling healthy",
        checklist: ["Proper denture care (if applicable)", "Stay hydrated", "Use fluoride toothpaste", "Regular dental check-ups"],
      },
    ],
  },
];
