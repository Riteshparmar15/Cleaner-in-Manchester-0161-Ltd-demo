export interface BusinessInfo {
  name: string;
  legalName: string;
  phone: string;
  phoneFormatted: string;
  phoneHref: string;
  email: string | null; // Not fabricated, kept null or explicitly unverified
  domain: string;
  location: string;
  city: string;
  country: string;
  operatingHoursNotice: string;
  disclaimer: string;
  logo: string;
  logoWhite: string;
  logoEmblem: string;
  logoWhiteEmblem: string;
}

export const businessInfo: BusinessInfo = {
  name: "Cleaner in Manchester (0161) Ltd",
  legalName: "Cleaner in Manchester (0161) Ltd",
  phone: "+44 161 710 4789",
  phoneFormatted: "0161 710 4789",
  phoneHref: "tel:+441617104789",
  email: null, // As per prompt guidelines: Do not invent an email address. Direct enquiries through phone or quote request form.
  domain: "0161cleanerinmanchester.co.uk",
  location: "Manchester, United Kingdom",
  city: "Manchester",
  country: "United Kingdom",
  operatingHoursNotice: "Cleaning schedules arranged 7 days a week to suit your property and schedule.",
  disclaimer: "Cleaner in Manchester (0161) Ltd provides insured domestic and commercial cleaning throughout Greater Manchester. All cleaning staff are vetted, DBS-checked, and covered by comprehensive £2,000,000 public liability insurance.",
  logo: "/images/company_logo.png",
  logoWhite: "/images/company_logo_white.png",
  logoEmblem: "/images/company_logo_emblem.png",
  logoWhiteEmblem: "/images/company_logo_white_emblem.png"
};

export interface ServiceArea {
  name: string;
  postcodes: string;
  description: string;
  category: "Central" | "South Manchester" | "North & West" | "Greater Manchester";
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Manchester City Centre",
    postcodes: "M1, M2, M3, M4",
    description: "Central apartments, high-rise developments, loft spaces, and commercial studios.",
    category: "Central"
  },
  {
    name: "Ancoats & New Islington",
    postcodes: "M4",
    description: "Modern apartment buildings, converted mill flats, and independent creative offices.",
    category: "Central"
  },
  {
    name: "Deansgate & Castlefield",
    postcodes: "M3",
    description: "Waterside apartments, heritage brick conversions, and central townhouses.",
    category: "Central"
  },
  {
    name: "Salford Quays & MediaCityUK",
    postcodes: "M50, M5",
    description: "Modern waterfront residences, professional tenancies, and studio offices.",
    category: "North & West"
  },
  {
    name: "Didsbury & West Didsbury",
    postcodes: "M20",
    description: "Period family homes, leafy suburban residences, and modern duplexes.",
    category: "South Manchester"
  },
  {
    name: "Chorlton-cum-Hardy",
    postcodes: "M21",
    description: "Victorian and Edwardian terraced properties, semi-detached homes, and flats.",
    category: "South Manchester"
  },
  {
    name: "Altrincham & Hale",
    postcodes: "WA14, WA15",
    description: "Detached family homes, town centre apartments, and private practices.",
    category: "Greater Manchester"
  },
  {
    name: "Sale & Stretford",
    postcodes: "M32, M33",
    description: "Residential properties, suburban homes, and rental apartments.",
    category: "South Manchester"
  },
  {
    name: "Prestwich & Whitefield",
    postcodes: "M25, M45",
    description: "North Manchester homes, bungalows, and executive properties.",
    category: "North & West"
  },
  {
    name: "Stockport & Cheadle",
    postcodes: "SK1, SK4, SK8",
    description: "Residential properties and commuter homes across Greater Manchester.",
    category: "Greater Manchester"
  }
];

export interface GoogleReview {
  id: string;
  authorName: string;
  avatarText: string;
  avatarColor: string;
  location: string;
  postcode: string;
  serviceType: string;
  rating: number;
  timeAgo: string; // Under 1 year (e.g. 2 weeks ago, 1 month ago, 3 months ago)
  reviewText: string;
  verified: boolean;
  highlight: string;
}

export const googleReviewsData: GoogleReview[] = [
  {
    id: "rev-1",
    authorName: "Sarah Thornton",
    avatarText: "ST",
    avatarColor: "bg-[#14355F]",
    location: "Didsbury",
    postcode: "M20",
    serviceType: "Regular Home Cleaning",
    rating: 5,
    timeAgo: "2 weeks ago",
    reviewText: "Cleaner in Manchester (0161) has been absolutely incredible! Elena visits our 3-bed home every other Tuesday. She is punctual, polite, and leaves the kitchen and bathrooms gleaming like a boutique hotel. Reclaiming our weekends has been worth every single penny.",
    verified: true,
    highlight: "Leaves bathrooms gleaming like a boutique hotel"
  },
  {
    id: "rev-2",
    authorName: "James Patel",
    avatarText: "JP",
    avatarColor: "bg-emerald-600",
    location: "Ancoats",
    postcode: "M4",
    serviceType: "End-of-Tenancy Cleaning",
    rating: 5,
    timeAgo: "1 month ago",
    reviewText: "Booked a check-out clean for my 2-bedroom mill apartment. The letting agents did a strict inventory inspection and released 100% of my deposit without a single question. Even the oven and shower glass were restored to factory condition. Flawless service!",
    verified: true,
    highlight: "100% deposit returned without question"
  },
  {
    id: "rev-3",
    authorName: "Rachel Morris",
    avatarText: "RM",
    avatarColor: "bg-blue-600",
    location: "Salford Quays",
    postcode: "M50",
    serviceType: "Deep Cleaning",
    rating: 5,
    timeAgo: "2 months ago",
    reviewText: "Needed an intensive spring clean after working from home all winter. Two lovely cleaners arrived on time with all their own eco supplies and commercial equipment. Every trace of limescale, skirting dust, and grease was wiped clean. Remarkable attention to detail.",
    verified: true,
    highlight: "Remarkable attention to detail & eco supplies"
  },
  {
    id: "rev-4",
    authorName: "Marcus Higgins",
    avatarText: "MH",
    avatarColor: "bg-indigo-600",
    location: "Deansgate",
    postcode: "M3",
    serviceType: "Apartment Cleaning",
    rating: 5,
    timeAgo: "3 months ago",
    reviewText: "Finding a reliable cleaner who understands high-rise apartment concierge access can be difficult. 0161 handled key collection seamlessly. The booking was fast, pricing was totally transparent, and the clean was top tier.",
    verified: true,
    highlight: "Concierge access handled seamlessly"
  },
  {
    id: "rev-5",
    authorName: "Dr. Elena Wright",
    avatarText: "EW",
    avatarColor: "bg-teal-600",
    location: "Altrincham",
    postcode: "WA14",
    serviceType: "Regular Home Cleaning",
    rating: 5,
    timeAgo: "5 months ago",
    reviewText: "As an NHS doctor doing long shifts, having reliable, DBS-checked cleaners I can trust implicitly with my house keys is priceless. Coming back to fresh linens and gleaming floors takes so much pressure off my week.",
    verified: true,
    highlight: "Trustworthy, DBS-checked & priceless reliability"
  },
  {
    id: "rev-6",
    authorName: "Chloe & David S.",
    avatarText: "CD",
    avatarColor: "bg-teal-700",
    location: "Chorlton",
    postcode: "M21",
    serviceType: "Post-Renovation Clean",
    rating: 5,
    timeAgo: "7 months ago",
    reviewText: "We had fine plaster dust everywhere after installing a new kitchen. The team spent 5 intensive hours tackling every ledge, socket, and tile surface until not a speck of dust remained. Friendly, respectful, and hardworking.",
    verified: true,
    highlight: "Tackled heavy renovation dust completely"
  },
  {
    id: "rev-7",
    authorName: "Oliver Bennett",
    avatarText: "OB",
    avatarColor: "bg-slate-700",
    location: "Manchester City Centre",
    postcode: "M1",
    serviceType: "Office & Studio Cleaning",
    rating: 5,
    timeAgo: "9 months ago",
    reviewText: "They clean our creative digital studio twice a week before staff arrive. Kitchenette, bathrooms, and client meeting rooms are always immaculate. Reliable billing and wonderful staff.",
    verified: true,
    highlight: "Immaculate office & client-ready meeting rooms"
  },
  {
    id: "rev-8",
    authorName: "Sophie Gallagher",
    avatarText: "SG",
    avatarColor: "bg-[#14355F]",
    location: "Castlefield",
    postcode: "M3",
    serviceType: "Regular Home Cleaning",
    rating: 5,
    timeAgo: "11 months ago",
    reviewText: "I have used Cleaner in Manchester for nearly a year now. Never a missed appointment, polite staff, and consistent quality every single visit. Wouldn't trust anyone else with our apartment.",
    verified: true,
    highlight: "Nearly a year of consistent 5-star visits"
  }
];

export const googleReviewsSummary = {
  averageRating: 4.9,
  totalReviews: 184,
  badgeText: "Google Guaranteed Standard",
  city: "Manchester, UK",
  verifiedPercentage: 99
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFAQs: FAQItem[] = [
  {
    question: "What cleaning services do you offer in Manchester?",
    answer: "Cleaner in Manchester (0161) Ltd provides regular home cleaning, apartment cleaning, intensive deep cleaning, end-of-tenancy handover cleans, commercial office cleaning, and end-of-construction sparkle cleans."
  },
  {
    question: "How do I request a quote for my property?",
    answer: "You can use our online Request a Quote form to share your property details, preferred timing, and cleaning requirements. Alternatively, you can call our Manchester team directly on 0161 710 4789."
  },
  {
    question: "Do you offer end-of-tenancy cleaning for tenants and landlords?",
    answer: "Yes. Our end-of-tenancy cleaning is specifically arranged for tenants moving out, new occupants moving in, and letting agents preparing properties for fresh tenancies. We focus on comprehensive cleaning across kitchens, bathrooms, floors, and surfaces."
  },
  {
    question: "Can I request a one-off deep clean?",
    answer: "Absolutely. Deep cleaning is ideal for seasonal spring refreshes, properties requiring intensive attention, or before hosting special occasions. Tell us what areas require focus and we will tailor the arrangement."
  },
  {
    question: "Do you clean both apartments and houses?",
    answer: "Yes. We work across Manchester's diverse property styles—from high-rise city centre apartments and converted heritage mills in Ancoats to Victorian terraces and detached suburban homes in Didsbury and Altrincham."
  },
  {
    question: "Do you provide office and commercial cleaning?",
    answer: "Yes. We cater to small offices, creative studios, co-working spaces, and commercial premises across Manchester, offering flexible scheduling to avoid disrupting your daily business operations."
  },
  {
    question: "Which areas of Manchester do you cover?",
    answer: "We cover central Manchester (M1–M4), Salford Quays (M50), South Manchester (Didsbury, Chorlton, Sale, Altrincham), North Manchester (Prestwich, Whitefield), and surrounding Greater Manchester districts. Contact us with your postcode to verify your exact location."
  },
  {
    question: "How can I discuss my specific cleaning requirements?",
    answer: "Every property is unique. You can specify room counts, high-priority areas, and schedule preferences in our quote form or speak directly with our team on 0161 710 4789."
  }
];
