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
  operatingHoursNotice: "Cleaning schedules arranged directly to suit your property and availability.",
  disclaimer: "Independent website concept for Cleaner in Manchester (0161) Ltd. This demonstration displays layout, conversion paths, and service structures. Business details, service coverage, and arrangements are subject to direct verification."
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

export interface VerifiedReviewPlaceholder {
  id: string;
  isDemoSample: boolean;
  authorLabel: string;
  location: string;
  serviceType: string;
  excerpt: string;
  note: string;
}

/**
 * Reviews Configuration Point:
 * In accordance with Phase 2 & Phase 4H:
 * "Do not fabricate customer names, review text, ratings, review dates, or customer photographs.
 * If approved review content is unavailable, use clearly labelled demo placeholders that cannot accidentally appear on the production website.
 * Provide a configuration point for approved reviews."
 */
export const reviewsConfig = {
  hasApprovedLiveReviews: false, // Set to true when verified customer permissions & API integrations (e.g. Google Reviews / Trustpilot) are configured
  placeholderNotice: "Review Showcase (Sample Structure) — Awaiting client authorisation of third-party verified reviews.",
  sampleItems: [
    {
      id: "demo-1",
      isDemoSample: true,
      authorLabel: "Homeowner Enquiry",
      location: "Didsbury, M20",
      serviceType: "Regular Home Cleaning",
      excerpt: "Sample review card structure: displays customer feedback once authorized by the business with verified credentials.",
      note: "Sample format for approved reviews"
    },
    {
      id: "demo-2",
      isDemoSample: true,
      authorLabel: "Tenant Moving Out",
      location: "Ancoats, M4",
      serviceType: "End-of-Tenancy Cleaning",
      excerpt: "Configuration hook ready for Google Places / Trustpilot verified feed integration.",
      note: "Sample format for approved reviews"
    },
    {
      id: "demo-3",
      isDemoSample: true,
      authorLabel: "Office Manager",
      location: "City Centre, M2",
      serviceType: "Office Cleaning",
      excerpt: "Demonstrates high-converting review typography and layout without misleading prospective customers.",
      note: "Sample format for approved reviews"
    }
  ]
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
