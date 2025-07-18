
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
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749312775/kv3xtvr6pnc41wfem42a.jpg",
    imageHint: "dental bridge",
    description: "Restore your smile and chewing ability with custom-fitted bridges or partial dentures, filling gaps left by missing teeth.",
    benefits: ["Improved appearance", "Better chewing and speaking", "Prevents remaining teeth from shifting"],
  },
  {
    id: "cracked-teeth",
    title: "Cracked Teeth Repair",
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749319427/rayz4s97niumpdt5kjlg.jpg",
    imageHint: "tooth repair procedure",
    description: "Expert repair for cracked or chipped teeth to alleviate pain and prevent further damage, often using bonding or crowns.",
    benefits: ["Pain relief", "Restored tooth function", "Prevention of tooth loss"],
  },
  {
    id: "crowns",
    title: "Crowns",
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749319503/ozmn6cyaej9mx1wem9sy.jpg",
    imageHint: "dental crown types",
    description: "Dental crowns are caps placed over damaged teeth to restore their shape, size, strength, and appearance.",
    benefits: ["Strengthens weak teeth", "Protects damaged teeth", "Improves tooth aesthetics"],
  },
  {
    id: "dentures",
    title: "Dentures",
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749319569/rb6bu1wodpmlybu8llob.png",
    imageHint: "full dentures set",
    description: "Full dentures replace all teeth in an arch, providing a natural-looking smile and restoring oral functions.",
    benefits: ["Restored smile and facial aesthetics", "Improved ability to eat and speak", "Support for facial structure"],
  },
  {
    id: "orthodontic",
    title: "Orthodontic Treatment",
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749319657/z48cmzx6gpjlwpq9zwev.jpg",
    imageHint: "braces aligners comparison",
    description: "Straighten your teeth and correct bite issues with modern orthodontic solutions like braces or clear aligners.",
    benefits: ["Straighter teeth and improved smile", "Better oral hygiene", "Corrected bite problems"],
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749319751/yicgustd7rgpadeoqgvp.jpg",
    imageHint: "root canal diagram",
    description: "Save an infected or badly decayed tooth with root canal therapy, which cleans the inside of the tooth and seals it.",
    benefits: ["Saves natural tooth", "Relieves severe toothache", "Prevents spread of infection"],
  },
  {
    id: "scaling-rootplanning",
    title: "Scaling & Root Planning",
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749319818/cu2pbkjbi1lhdrxnczfk.jpg",
    imageHint: "dental cleaning tools",
    description: "Professional dental cleaning to remove plaque and tartar buildup, followed by polishing for a smooth, bright finish.",
    benefits: ["Prevents gum disease", "Removes stains and freshens breath", "Maintains overall oral health"],
  },
  {
    id: "implant",
    title: "Dental Implants",
    imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749319818/qidqkrfzlnxm8ouqkdr8.jpg",
    imageHint: "dental implant",
    description: "A permanent solution for missing teeth, dental implants are titanium posts that act as artificial roots, providing a strong foundation for replacement teeth.",
    benefits: ["Permanent and durable solution", "Looks and feels like a natural tooth", "Prevents bone loss", "Restores full chewing power"],
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
        imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749320233/jbcs3phszgvjneaajbn0.jpg",
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
        imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749320272/fw4cf3escnhuvhqisz3t.jpg",
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
        imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749320525/nn3tnvlkmdyo6sbzb049.jpg",
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
        imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749320361/yvlicax936o8kvl5ktt0.jpg",
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
        imageUrl: "https://res.cloudinary.com/dbbox9eum/image/upload/v1749320402/kc1p6eumxci0fy5ctoym.jpg",
        imageHint: "senior smiling healthy",
        checklist: ["Proper denture care (if applicable)", "Stay hydrated", "Use fluoride toothpaste", "Regular dental check-ups"],
      },
    ],
  },
];

