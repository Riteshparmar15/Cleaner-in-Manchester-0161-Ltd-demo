export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTagline: string;
  heroDescription: string;
  image: string;
  targetAudience: string[];
  overview: string;
  highlights: string[];
  checklist: {
    category: string;
    items: string[];
  }[];
  practicalBenefits: ServiceFeature[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

import { getAssetUrl } from "../utils/assets";

export const servicesData: ServiceDetail[] = [
  {
    slug: "regular-home-cleaning",
    title: "Regular Home Cleaning",
    shortTagline: "Consistent, dependable domestic cleaning arranged around your weekly or fortnightly routine.",
    heroDescription: "Enjoy a consistently tidy, hygienic home without spending your weekends cleaning. Tailored to your household routines in Manchester.",
    image: getAssetUrl("/images/cleaner_vacuuming.jpg"),
    targetAudience: ["Busy professionals", "Busy families", "Homeowners", "Remote workers"],
    overview: "Our regular domestic cleaning service provides reliable, ongoing upkeep for houses and flats throughout Manchester. Whether you need weekly, fortnightly, or tailored frequency visits, our professional team follows a methodical routine to ensure your living spaces stay spotless.",
    highlights: [
      "Consistent schedule arranged to fit your family or work commitments",
      "Focus on high-traffic areas: kitchens, bathrooms, and living spaces",
      "Flexible task priorities—adjust instructions whenever your needs change",
      "Friendly, vetted cleaning professionals who respect your privacy"
    ],
    checklist: [
      {
        category: "Kitchen & Dining",
        items: [
          "Wiping and sanitising work surfaces and splashbacks",
          "Cleaning exterior of hob, oven front, microwave, and kettle",
          "Wiping cupboard fronts and handle touchpoints",
          "Washing and buffing sinks and chrome taps",
          "Emptying rubbish and recycling bins",
          "Vacuuming and mopping hard floor surfaces"
        ]
      },
      {
        category: "Bathrooms & En-suites",
        items: [
          "Scrubbing and disinfecting basins, taps, and vanity units",
          "Sanitising shower screens, trays, and bath surrounds",
          "Thorough disinfection and descaling of toilets and flush plates",
          "Polishing mirrors and chrome towel rails",
          "Wiping tiled splash areas and vacuuming/mopping bathroom floors"
        ]
      },
      {
        category: "Living Areas & Bedrooms",
        items: [
          "Dusting accessible surfaces, shelves, side tables, and ornaments",
          "Straightening cushions and making beds (linen change on request)",
          "Dusting skirting boards, picture frames, and window sills",
          "Vacuuming carpets, rugs, and soft furnishings",
          "Wiping light switches and high-touch door handles"
        ]
      }
    ],
    practicalBenefits: [
      {
        title: "Reclaim Your Free Time",
        description: "Spend your evenings and weekends enjoying Manchester instead of scrubbing bathrooms and vacuuming floors."
      },
      {
        title: "Consistent Household Standards",
        description: "Scheduled recurring visits prevent dust and grime buildup, preserving high hygiene standards year-round."
      },
      {
        title: "Direct & Clear Communication",
        description: "Easy coordination with our Manchester team to pause, adjust, or focus on specific rooms as life evolves."
      }
    ],
    faqs: [
      {
        question: "How frequently can I schedule regular cleaning?",
        answer: "We offer weekly, fortnightly, and bespoke interval cleaning depending on property size and your personal requirements."
      },
      {
        question: "Do I need to be at home during the cleaning?",
        answer: "No. Many clients provide safe key access or arrange concierge handover. You are welcome to be at home or carry on with your day."
      },
      {
        question: "Can I customise what gets cleaned each visit?",
        answer: "Yes. Simply notify us in advance if you want extra attention paid to particular rooms or specific domestic priorities."
      }
    ]
  },
  {
    slug: "apartment-cleaning",
    title: "Apartment Cleaning",
    shortTagline: "Tailored cleaning for modern city centre flats, duplexes, and residential developments.",
    heroDescription: "Specialised cleaning designed for Manchester apartment living—from compact studios to open-plan penthouses with concierge access.",
    image: getAssetUrl("/images/cleaner_apartment_action.jpg"),
    targetAudience: ["City centre flat residents", "Landlords", "Short-let hosts", "Young professionals"],
    overview: "Manchester's vibrant city centre and surrounding quarters are home to unique apartment developments, from converted Victorian cotton mills in Ancoats to sleek new towers on Deansgate. Our apartment cleaning service is tailored to modern urban layouts, hardwood flooring, large glass windows, and building access protocols.",
    highlights: [
      "Experienced with concierge check-in and apartment building access",
      "Careful handling of contemporary finishes, integrated appliances, and engineered wood",
      "Optimised workflows for compact and multi-level duplex layouts",
      "Flexible timing to accommodate hybrid and work-from-home schedules"
    ],
    checklist: [
      {
        category: "Open-Plan Living & Kitchen",
        items: [
          "Sanitising integrated quartz, granite, or laminate worktops",
          "Cleaning exterior of integrated fridges, dishwashers, and ovens",
          "Degreasing induction hobs and extractor hood housings",
          "Dusting media units, floating shelves, and entertainment consoles",
          "Spot-cleaning internal balcony glass doors and window sills",
          "Vacuuming modern rugs and mopping open-plan floor spaces"
        ]
      },
      {
        category: "Bedrooms & Mezzanines",
        items: [
          "Dusting bedside tables, headboards, and wardrobes",
          "Tidying and bed arrangement (linen change upon request)",
          "Dusting glass banisters, stair handrails, and mezzanine edges",
          "Thorough vacuuming under accessible furniture and along skirting"
        ]
      },
      {
        category: "En-Suite & Powder Rooms",
        items: [
          "Polishing glass shower cubicles and wiping water residue",
          "Deep sanitation of floating basins and wall-hung toilets",
          "Polishing chrome fixtures and heated towel radiators",
          "Hygienic mopping of non-slip tile floors"
        ]
      }
    ],
    practicalBenefits: [
      {
        title: "City Centre Ready",
        description: "We understand secure buzzer systems, parcel rooms, lift booking rules, and concierge coordination across Manchester."
      },
      {
        title: "Respect for Modern Finishes",
        description: "We use appropriate techniques for sensitive materials like quartz, composite floors, and architectural glass."
      },
      {
        title: "Hassle-Free Maintenance",
        description: "Keep your modern city home looking crisp and photogenic even during your busiest working weeks."
      }
    ],
    faqs: [
      {
        question: "Can cleaners collect keys from my building concierge?",
        answer: "Yes, we regularly coordinate key collection and return with building concierges across Manchester City Centre, Salford Quays, and surrounding developments."
      },
      {
        question: "Do you clean balconies and terrace areas?",
        answer: "We clean internal surfaces and glass access doors as standard. External sweeping or glass washing can be included upon request."
      }
    ]
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortTagline: "Intensive, methodical top-to-bottom sanitisation for properties needing an extensive refresh.",
    heroDescription: "A rigorous deep clean targeting embedded grime, limescale, grease, and neglected corners across your entire property.",
    image: getAssetUrl("/images/cleaner_bathroom.jpg"),
    targetAudience: ["Spring clean seekers", "New homeowners", "Post-renovation refresh", "Seasonal preparation"],
    overview: "When regular surface tidying isn't enough, our Manchester deep cleaning service delivers an exhaustive, intensive clean of your entire property. We get behind appliances, scrub stubborn tile grout, eradicate limescale, and refresh skirting boards and door frames to restore a pristine environment.",
    highlights: [
      "Top-to-bottom methodical scrubbing of kitchens and sanitary ware",
      "Detailed limescale removal from taps, shower heads, and tile grout",
      "Cleaning behind movable furniture and under accessible fixtures",
      "Degreasing kitchen extractor filters and cooker exteriors"
    ],
    checklist: [
      {
        category: "Intensive Kitchen Cleaning",
        items: [
          "Deep degreasing of cooker hoods, splashbacks, and hob surrounds",
          "Detailed scrubbing of sink basins, drainers, and limescale descaling",
          "Wiping down all kitchen cupboard exteriors, kickboards, and top edges",
          "Cleaning exterior and rubber seals of washing machines and dishwashers",
          "Spot cleaning wall marks and sanitising waste disposal zones"
        ]
      },
      {
        category: "Intensive Bathroom Restoration",
        items: [
          "Deep grout scrubbing to remove soap scum, mildew, and mineral buildup",
          "Heavy descaling of taps, shower valves, hoses, and shower heads",
          "Sanitising wall tiles from floor to ceiling height where accessible",
          "Polishing mirrors, glass screens, and sanitary hardware to a streak-free shine",
          "Floor scrubbing with sanitising disinfectant"
        ]
      },
      {
        category: "All Rooms & Hallways",
        items: [
          "Wiping down all woodwork: skirting boards, architraves, and door faces",
          "Dusting light fixtures, lampshades, and ceiling corners (cobweb removal)",
          "Cleaning radiator panels, behind accessible furniture, and window ledges",
          "Deep vacuuming with edging tool along all carpet perimeters and under beds"
        ]
      }
    ],
    practicalBenefits: [
      {
        title: "A Complete Clean Slate",
        description: "Transform an overcrowded, dusty space into a hygienic, welcoming sanctuary."
      },
      {
        title: "Removes Stubborn Buildup",
        description: "Targets years of limescale, grease, and dust that regular surface cleaning doesn't tackle."
      },
      {
        title: "Healthier Living Environment",
        description: "Drastically reduces household allergens, dust mites, and bacteria throughout your property."
      }
    ],
    faqs: [
      {
        question: "How long does a deep clean typically take?",
        answer: "Depending on the size and initial condition of your property, a deep clean typically takes between 4 to 8 hours with our dedicated cleaning team."
      },
      {
        question: "How often should a property have a deep clean?",
        answer: "Most Manchester homeowners arrange a deep clean once or twice a year, or as a foundational reset before initiating a regular cleaning schedule."
      }
    ]
  },
  {
    slug: "end-of-tenancy-cleaning",
    title: "End-of-Tenancy Cleaning",
    shortTagline: "Comprehensive, inventory-ready cleaning designed for tenant handovers and letting agent inspections.",
    heroDescription: "High-standard handover cleaning across Manchester designed to meet stringent check-out inventories and tenancy agreements.",
    image: getAssetUrl("/images/cleaner_tenancy_oven.jpg"),
    targetAudience: ["Moving tenants", "Letting agents", "Landlords", "Property managers"],
    overview: "Moving home is stressful enough without having to worry about deposit deductions due to cleaning oversights. Our Manchester end-of-tenancy cleaning is planned systematically against typical inventory check-out standards, covering inside kitchen appliances, internal cupboards, sanitised bathrooms, and spotless floors.",
    highlights: [
      "Rigorous cleaning designed for landlord and letting agent check-outs",
      "Full internal and external cupboard cleaning in kitchens and bedrooms",
      "Systematic descaling of bathrooms and sanitary ware",
      "Clear, line-by-line cleaning checklist followed throughout"
    ],
    checklist: [
      {
        category: "Kitchen Check-out Standard",
        items: [
          "Cleaning inside and outside of all kitchen cupboards, drawers, and shelving",
          "Deep cleaning fridge/freezer (defrosted prior to service)",
          "Degreasing extractor hood, filters, and cooker splashback",
          "Deep clean of microwave inside and out",
          "Descaling taps and polishing stainless steel sinks to inspection shine",
          "Wiping down all tiles, countertops, and waste bins"
        ]
      },
      {
        category: "Bathrooms & WC Standard",
        items: [
          "Complete descaling and polishing of bath, shower, taps, and shower screens",
          "Sanitising and bleaching toilet bowl, seat, hinge hardware, and cistern",
          "Polishing wall tiles, mirrors, and vanity storage cupboards (inside and out)",
          "Disinfecting floor surfaces and cleaning ventilation grills"
        ]
      },
      {
        category: "Bedrooms, Living Rooms & Corridors",
        items: [
          "Wiping internal fitted wardrobes, drawers, and shelving",
          "Wiping skirting boards, door frames, sockets, and switches",
          "Removing cobwebs and wiping window frames, sills, and internal glass",
          "Edge-to-edge vacuuming of carpets and mopping of all hard floors"
        ]
      }
    ],
    practicalBenefits: [
      {
        title: "Peace of Mind at Move-Out",
        description: "Hand over keys with confidence knowing your rental property has been cleaned with thorough care."
      },
      {
        title: "Faster Re-Letting for Landlords",
        description: "Present a pristine property to prospective tenants and avoid void rental periods."
      },
      {
        title: "Transparent & Detailed Process",
        description: "We follow an extensive checklist so you know exactly what is included in your quote."
      }
    ],
    faqs: [
      {
        question: "Does the property need to be empty for end-of-tenancy cleaning?",
        answer: "Yes, for the best outcome and complete access to all surfaces, cupboards, and floors, the property should be cleared of personal belongings."
      },
      {
        question: "Is oven cleaning included in end-of-tenancy cleans?",
        answer: "Internal appliance cleaning (such as ovens and fridges) can be included upon request in your quote. Please specify your appliance requirements when contacting us."
      }
    ]
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    shortTagline: "Flexible, discreet commercial cleaning for Manchester workplaces, studios, and small offices.",
    heroDescription: "Create a pristine, healthy, and professional environment for your team and clients with our tailored Manchester commercial cleaning.",
    image: getAssetUrl("/images/cleaner_office_action.jpg"),
    targetAudience: ["Small and medium offices", "Creative studios", "Consultancies", "Co-working spaces"],
    overview: "A clean office boosts morale, reduces sick days, and presents an impressive image to visiting clients. Cleaner in Manchester provides dependable commercial cleaning tailored to modern business routines. We offer early morning, evening, or daytime visits to suit your operational preferences.",
    highlights: [
      "Customised cleaning schedules: daily, multi-day, or weekly contracts",
      "Early morning or evening slots to prevent disturbance to your team",
      "Specialised care for communal kitchens, meeting rooms, and washrooms",
      "Reliable, discreet, and trustworthy cleaning personnel"
    ],
    checklist: [
      {
        category: "Workstations & Office Floor",
        items: [
          "Dusting and sanitising desktop surfaces and computer peripheries",
          "Emptying individual desk bins and central recycling stations",
          "Disinfecting high-touch areas: door handles, handrails, and entry buzzers",
          "Vacuuming commercial carpet tiles and spot cleaning entrance mats"
        ]
      },
      {
        category: "Boardrooms & Meeting Suites",
        items: [
          "Polishing conference tables and straightening meeting chairs",
          "Wiping glass partitions, whiteboard trays, and AV console surfaces",
          "Dusting display shelves and vacuuming meeting room flooring"
        ]
      },
      {
        category: "Staff Kitchen & Breakout Areas",
        items: [
          "Washing up or loading office dishwashers and sanitising sink areas",
          "Wiping microwave interiors, kettle exteriors, and coffee stations",
          "Sanitising breakout dining tables, bar stools, and kitchen worktops",
          "Hygienic floor mopping and recycling management"
        ]
      },
      {
        category: "Washroom Facilities",
        items: [
          "Replenishing hand soap, paper towels, and toilet tissue (client supplied)",
          "Full sanitation of cubicles, urinals, sinks, and vanity counters",
          "Disinfecting floor tiles and polishing chrome fittings"
        ]
      }
    ],
    practicalBenefits: [
      {
        title: "Productive Working Atmosphere",
        description: "Empower your team to do their best work in an orderly, dust-free, and inspiring workspace."
      },
      {
        title: "Presents High Standards to Clients",
        description: "Create an exceptional first impression whenever partners, investors, or clients visit your office."
      },
      {
        title: "Flexible Commercial Invoicing",
        description: "Straightforward monthly invoicing and transparent service records for simple accounting."
      }
    ],
    faqs: [
      {
        question: "Can cleaning take place outside of office working hours?",
        answer: "Yes, we offer early morning and evening schedules so our cleaning doesn't disrupt your daily business operations."
      },
      {
        question: "Do you supply cleaning products or use on-site materials?",
        answer: "We can provide professional cleaning products or utilize your preferred company-standard products as agreed during quote consultation."
      }
    ]
  },
  {
    slug: "end-of-construction-cleaning",
    title: "End-of-Construction Cleaning",
    shortTagline: "Specialised builders clean to eliminate plaster dust, paint specks, and residue after renovation.",
    heroDescription: "Detailed post-build sparkle clean transforming newly constructed or renovated Manchester properties into move-in ready spaces.",
    image: getAssetUrl("/images/cleaner_construction_action.jpg"),
    targetAudience: ["Property developers", "Interior designers", "Homeowners post-extension", "Shopfitters"],
    overview: "Renovation and building work inevitably leaves behind fine plaster dust, paint splatters, adhesive residue, and protective tape. Our end-of-construction cleaning tackles post-build dust at every level, polishing fixtures, washing woodwork, and removing residue from new installations so your property shines.",
    highlights: [
      "Removal of fine airborne dust from ceilings, walls, ledges, and joins",
      "Careful removal of paint spots, silicone smudges, and protective wrapping",
      "Polishing brand new sanitary ware, tiling, and glass installations",
      "Sparkle clean finish ready for client walkthrough or photography"
    ],
    checklist: [
      {
        category: "Dust Extraction & Surface Washing",
        items: [
          "Dry dusting and wiping walls, ceilings, and light fittings",
          "Cleaning fine plaster dust from radiator grills and skirting boards",
          "Detailed vacuuming using multi-stage HEPA filtration equipment",
          "Cleaning internal doors, door frames, architraves, and ironmongery"
        ]
      },
      {
        category: "New Fixtures & Glazing",
        items: [
          "Removing protective films and sticker residue from newly installed windows",
          "Washing window frames, tracks, and internal window panes",
          "Polishing new bathroom suites, taps, and shower screens without scratching",
          "Buffing kitchen cabinetry, stone worktops, and splashback panels"
        ]
      },
      {
        category: "Floor Care & Final Polish",
        items: [
          "Thorough vacuuming of newly laid carpets to lift building dust",
          "Multiple-stage washing and buffing of luxury vinyl tile (LVT), laminate, or porcelain floors",
          "Final walkthrough inspection to guarantee handover-ready presentation"
        ]
      }
    ],
    practicalBenefits: [
      {
        title: "Removes Tenacious Builder's Dust",
        description: "Fine construction dust settles for days without systematic multi-stage wiping and HEPA filtration."
      },
      {
        title: "Protects New Investments",
        description: "We use non-abrasive tools to protect delicate new surfaces, tiles, glass, and worktops."
      },
      {
        title: "Ready for Immediate Handover",
        description: "Enables landlords, developers, and homeowners to furnish and occupy properties without delay."
      }
    ],
    faqs: [
      {
        question: "When should the construction clean take place?",
        answer: "Ideally, after all contractors, decorators, and snaggers have completed their work and removed their equipment."
      },
      {
        question: "Can you provide a phased builders clean?",
        answer: "Yes, we can conduct an initial rough clean during finishing phases, followed by a final sparkle clean prior to handover."
      }
    ]
  }
];

export const allServicesSummary = servicesData.map((s) => ({
  slug: s.slug,
  title: s.title,
  tagline: s.shortTagline,
  image: s.image,
  highlights: s.highlights.slice(0, 2),
  target: s.targetAudience.slice(0, 2).join(", ")
}));
