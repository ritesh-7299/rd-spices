export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  origin: string;
  availableGrades: string[];
  packagingOptions: string[];
  applications: string[];
  exportInformation: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    shortDescription:
      "Aromatic whole cumin seeds with strong flavor and high volatile oil.",
    overview:
      "Our cumin seeds are selected from trusted growing regions and processed for uniform color, aroma, and purity. Suitable for food processing and retail repacking.",
    origin: "Gujarat and Rajasthan, India",
    availableGrades: [
      "Machine Clean",
      "Sortex Clean",
      "99% Purity",
      "Singapore Quality",
    ],
    packagingOptions: ["25 kg PP bags", "50 kg jute bags", "Custom private label packs"],
    applications: [
      "Spice blends and masalas",
      "Bakery and savory products",
      "Retail packs for supermarkets",
    ],
    exportInformation: [
      "Moisture and purity reports available on request",
      "Standard export documentation support",
      "Bulk container shipments and LCL dispatch available",
    ],
    image: "/images/products/cumin-seeds.jpg",
  },
  {
    slug: "coriander-seeds",
    name: "Coriander Seeds",
    shortDescription:
      "Clean, citrus-noted coriander seeds for seasoning and extraction use.",
    overview:
      "RD Naturals supplies coriander seeds in export-ready grades with controlled moisture and reliable supply continuity for importers and distributors.",
    origin: "Madhya Pradesh and Rajasthan, India",
    availableGrades: ["Eagle Quality", "Scooter Quality", "Machine Clean", "Sortex Clean"],
    packagingOptions: ["25 kg PP bags", "40 kg PP bags", "Custom packaging"],
    applications: ["Spice grinding", "Seasoning blends", "Food manufacturing"],
    exportInformation: [
      "Consistent grading for repeat orders",
      "Fumigation support as per destination norms",
      "Timely shipment coordination from Indian ports",
    ],
    image: "/images/products/coriander-seeds.jpg",
  },
  {
    slug: "fenugreek-seeds",
    name: "Fenugreek Seeds",
    shortDescription:
      "Uniform fenugreek seeds with natural bitterness and strong aroma.",
    overview:
      "Our fenugreek seeds are sourced from premium clusters and cleaned to meet international buyer requirements for food-grade spice applications.",
    origin: "Rajasthan and Gujarat, India",
    availableGrades: ["Machine Clean", "Sortex Clean", "Bold Quality"],
    packagingOptions: ["25 kg PP bags", "50 kg PP bags"],
    applications: ["Pickle preparation", "Spice blends", "Traditional food products"],
    exportInformation: [
      "Shipment-ready lots with quality inspection",
      "Flexible volume commitments for wholesale buyers",
      "Export documents prepared with every order",
    ],
    image: "/images/products/fenugreek-seeds.jpg",
  },
  {
    slug: "fennel-seeds",
    name: "Fennel Seeds",
    shortDescription:
      "Sweet, green fennel seeds suitable for culinary and mouth-freshener use.",
    overview:
      "We export selected fennel seeds known for freshness, vibrant color, and flavor consistency. Ideal for processors, traders, and private label programs.",
    origin: "Gujarat and Rajasthan, India",
    availableGrades: ["FAQ", "Sortex Green", "Premium Green", "Europe Quality"],
    packagingOptions: ["25 kg PP bags", "40 kg PP bags", "Customized retail pouches"],
    applications: ["Food processing", "Tea and infusions", "Retail repacking"],
    exportInformation: [
      "Uniform appearance and strong aroma profile",
      "Batch-wise inspection support",
      "Suitable for high-volume export programs",
    ],
    image: "/images/products/fennel-seeds.jpg",
  },
  {
    slug: "turmeric-fingers",
    name: "Turmeric Fingers",
    shortDescription:
      "Natural turmeric fingers with bright color and strong curcumin profile.",
    overview:
      "RD Naturals offers turmeric fingers from established farming belts. Lots are selected for color, density, and processing suitability for grinding and extraction.",
    origin: "Maharashtra, Telangana, and Tamil Nadu, India",
    availableGrades: ["Nizam Grade", "Rajapuri Grade", "Salem Grade"],
    packagingOptions: ["25 kg jute bags", "50 kg jute bags", "Bulk export packaging"],
    applications: ["Grinding and powder production", "Food industry", "Nutraceutical use"],
    exportInformation: [
      "Curcumin range guidance available",
      "Container load planning support",
      "Standard phytosanitary and shipping documents provided",
    ],
    image: "/images/products/turmeric-fingers.jpg",
  },
  {
    slug: "dry-red-chilli",
    name: "Dry Red Chilli",
    shortDescription:
      "Whole dry red chilli with vibrant color and controlled pungency range.",
    overview:
      "Our dry red chilli range is sourced, graded, and packed for export buyers seeking dependable color value, heat level, and supply consistency.",
    origin: "Andhra Pradesh and Karnataka, India",
    availableGrades: ["Teja", "Sannam", "Byadgi", "334 Variant"],
    packagingOptions: ["10 kg cartons", "25 kg PP bags", "Customized bulk packing"],
    applications: ["Grinding and flakes", "Sauce manufacturing", "Spice blends"],
    exportInformation: [
      "Heat level and color preference aligned with buyer requirements",
      "Pre-shipment sampling and lot confirmation",
      "Export documentation for smooth customs processing",
    ],
    image: "/images/products/dry-red-chilli.jpg",
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    shortDescription:
      "Export-grade whole black pepper with rich aroma and consistent density.",
    overview:
      "We supply whole black pepper in calibrated grades for global buyers looking for stable supply and verified quality from India.",
    origin: "Kerala and Karnataka, India",
    availableGrades: ["500 GL", "550 GL", "FAQ", "Steam Sterilized (on request)"],
    packagingOptions: ["25 kg PP bags", "50 kg PP bags", "Vacuum export packs on request"],
    applications: ["Seasoning and spice mixes", "Food processing", "Retail packaging"],
    exportInformation: [
      "Bulk and private label compatible supply",
      "Inspection and packing supervision support",
      "Reliable dispatch windows for repeat importers",
    ],
    image: "/images/products/black-pepper.jpg",
  },
  {
    slug: "cardamom",
    name: "Cardamom",
    shortDescription:
      "Premium green cardamom pods with high aroma and clean appearance.",
    overview:
      "RD Naturals exports selected cardamom lots suitable for high-end retail and bulk food applications, with careful handling to preserve aroma.",
    origin: "Kerala and Tamil Nadu, India",
    availableGrades: ["6 mm+", "7 mm+", "8 mm+", "Bold Green"],
    packagingOptions: ["5 kg vacuum packs", "10 kg cartons", "Custom value packs"],
    applications: ["Tea blends", "Desserts and confectionery", "Premium spice retail"],
    exportInformation: [
      "Color and size-focused grading options",
      "Premium packing to retain freshness",
      "Support for destination-specific compliance documents",
    ],
    image: "/images/products/cardamom.jpg",
  },
];

export const productNameList = products.map((product) => product.name);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
