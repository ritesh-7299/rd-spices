export const companyProfile = {
  name: "RD Naturals",
  tagline: "Premium Indian Spices Exporter from India",
  domain: "rdnaturals.in",
  email: "exports@rdnaturals.in",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: "Spice Trade Hub, Navi Mumbai, Maharashtra, India",
  intro:
    "RD Naturals is an India-based export company specializing in sourcing and supplying premium-quality whole spices to international buyers. We work with trusted suppliers and agricultural networks to ensure consistent quality and dependable delivery.",
};

export const trustElements = [
  "IEC Registered",
  "Export Ready",
  "Quality Inspection",
  "Global Supply Capability",
  "GST Number: Available on request",
  "IEC Number: Available on request",
  "Certifications: Available on request",
];

export const whyChooseUs = [
  "Premium Quality",
  "Competitive Pricing",
  "Timely Shipment",
  "Trusted Suppliers",
  "Export Documentation Support",
  "Global Reach",
];

export const exportMarkets = [
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "United Kingdom",
  "Canada",
  "United States",
];

export const industriesServed = [
  "Importers and Distributors",
  "Food Manufacturers",
  "Seasoning and Blend Producers",
  "Retail and Supermarket Private Labels",
  "HORECA and Foodservice Supply Chains",
  "Ethnic Grocery Wholesalers",
];

export const exportCapabilityHighlights = [
  "Bulk and private label programs",
  "Buyer-specific quality and grading alignment",
  "Flexible packaging formats for wholesale and retail",
  "Destination-ready export documentation support",
  "Container planning for repeat monthly programs",
  "Dedicated communication from inquiry to dispatch",
];

export const moqGuidance = [
  "Container programs: typically from 1 x 20 ft container",
  "Mixed SKU consolidation: available for qualified buyers",
  "Trial quantities: available for strategic market validation",
];

export const incotermSupport = [
  "FOB (Nhava Sheva / Mundra / destination-feasible ports)",
  "CFR to destination seaport",
  "CIF to destination seaport",
  "Ex-Works for buyer-nominated freight partners",
];

export const packagingCapabilities = [
  "25 kg and 50 kg PP/jute export bags for bulk movement",
  "Food-grade liner options for sensitive products",
  "10 kg and custom carton formats for selected items",
  "Retail/private-label pouch support through approved partners",
  "Palletized and non-palletized load plans as per destination norms",
];

export const logisticsSupport = [
  "20 ft and 40 ft container loading plans",
  "Shipment scheduling aligned to buyer ETA commitments",
  "Pre-shipment sample confirmation workflow",
  "Coordination with buyer forwarders and destination agents",
  "Dispatch updates with milestone communication",
];

export const documentationSupport = [
  "Commercial Invoice",
  "Packing List",
  "Certificate of Origin",
  "Phytosanitary Certificate (as applicable)",
  "Fumigation Certificate (as applicable)",
  "Bill of Lading / Airway Bill",
  "Insurance and third-party inspection support (program-based)",
];

export type CertificationProfile = {
  name: string;
  scope: string;
  buyerValue: string;
  status: string;
};

export const certificationProfiles: CertificationProfile[] = [
  {
    name: "IEC (Importer Exporter Code)",
    scope: "Core export registration for international trade documentation.",
    buyerValue: "Ensures legal export transaction processing from India.",
    status: "Available for buyer onboarding documentation.",
  },
  {
    name: "APEDA Registration",
    scope: "Agricultural export ecosystem participation and compliance alignment.",
    buyerValue: "Supports confidence in export-oriented operating structure.",
    status: "Shared during qualification where required.",
  },
  {
    name: "Spice Board Registration",
    scope: "Alignment with India spice export trade framework.",
    buyerValue: "Strengthens traceability and category credibility for buyers.",
    status: "Details can be provided in due diligence stage.",
  },
  {
    name: "FSSAI Compliance",
    scope: "Indian food safety regulatory framework for handling and processing.",
    buyerValue: "Adds baseline confidence in food safety governance.",
    status: "Documentation path provided as per shipment program.",
  },
  {
    name: "ISO / HACCP / GMP Programs",
    scope: "Program-based supply through certified processing infrastructure.",
    buyerValue: "Supports buyer audits requiring process discipline controls.",
    status: "Available based on selected product and processing route.",
  },
  {
    name: "Halal / Kosher / Organic Programs",
    scope: "Requirement-led sourcing and processing support through approved channels.",
    buyerValue: "Helps importers serve regulated and faith-based consumer segments.",
    status: "Arranged against confirmed buyer specification and volume plan.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Which countries do you currently supply?",
    answer:
      "We currently support buyers across the Middle East, the United Kingdom, Canada, and the United States, and we can evaluate additional markets based on product and compliance requirements.",
  },
  {
    question: "Can you handle private label or customized packaging?",
    answer:
      "Yes. We support private label and customized packaging programs through approved packaging partners, subject to MOQ, artwork approval, and destination compliance norms.",
  },
  {
    question: "What are your usual export terms?",
    answer:
      "We support FOB, CFR, CIF, and Ex-Works structures depending on buyer preference, destination route, and shipment planning.",
  },
  {
    question: "How do you ensure consistent quality in repeat shipments?",
    answer:
      "Every lot follows a structured workflow including sourcing validation, cleaning/sortex processing, quality checks, and pre-dispatch verification aligned to buyer specifications.",
  },
  {
    question: "Do you provide export documents and compliance support?",
    answer:
      "Yes. We coordinate core export documents such as invoice, packing list, certificate of origin, and shipment-related certificates as applicable to destination requirements.",
  },
  {
    question: "How quickly can you share a quotation?",
    answer:
      "For qualified inquiries with clear product, quantity, and destination details, we typically provide a structured quote within 24 business hours.",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
  checkpoints: string[];
};

export const processSteps = [
  {
    title: "Direct Sourcing from Farmers",
    description:
      "We procure whole spices through verified farmer networks and trusted mandis to maintain origin consistency.",
    checkpoints: ["Verified sourcing partners", "Lot traceability maintained"],
  },
  {
    title: "Cleaning and Sortex Processing",
    description:
      "Raw material is machine-cleaned and sortex processed to remove foreign matter and improve uniformity.",
    checkpoints: ["Dust and stones removed", "Uniform visual grading"],
  },
  {
    title: "Lab Testing and Quality Checks",
    description:
      "Each lot is checked for moisture, purity, and buyer-critical quality parameters before approval.",
    checkpoints: ["Moisture and purity checks", "Contamination risk screening"],
  },
  {
    title: "Batch Standardization",
    description:
      "Approved lots are matched against buyer specifications for size, color, and grade consistency.",
    checkpoints: ["Spec-aligned lot selection", "Pre-shipment sample confirmation"],
  },
  {
    title: "Hygienic Packaging",
    description:
      "Spices are packed in export-grade, food-safe packaging to preserve freshness and reduce transit risk.",
    checkpoints: ["Food-grade packing materials", "Tamper-evident sealing"],
  },
  {
    title: "Documentation and Shipment",
    description:
      "We prepare export documentation and coordinate dispatch from Indian ports with shipment updates.",
    checkpoints: ["Export docs support", "Timely dispatch and tracking"],
  },
] satisfies ProcessStep[];

export const coreValues = [
  "Integrity in every business commitment",
  "Quality consistency across every shipment",
  "Transparent communication with global buyers",
  "Long-term partnerships over short-term transactions",
];

export const buyersTrustPoints = [
  "Strict quality control with pre-shipment checks",
  "Dependable supplier and sourcing network",
  "Clear documentation support for export transactions",
  "Responsive communication from inquiry to delivery",
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
  },
];

export const heroImage = "/images/site/hero-spices.jpg";

export const aboutImage = "/images/site/about-sourcing.jpg";
