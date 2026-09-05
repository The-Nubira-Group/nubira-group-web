export interface TargetAudience {
  title: string;
  description: string;
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryShort: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  targetAudience: TargetAudience[];
  externalUrl: string;
  brandColor: string;
  logo: string;
  banner: string;
  screenshot: string;
  screenshotCaption: string;
  subClarification?: string;
  customSecondaryCta?: {
    label: string;
    href: string;
  };
}

export interface HeroBanner {
  id: string;
  industry: string;
  sectorTag: string;
  tagline: string;
  subhead: string;
  image: string;
  targetBusinessSlug: string;
  accentColor: string;
}

export const HERO_BANNERS: HeroBanner[] = [
  {
    id: "b2b-commerce",
    industry: "Wholesale Trade & B2B Commerce",
    sectorTag: "Commerce & Distribution",
    tagline: "Powering India's Wholesale Backbone",
    subhead: "Connecting verified wholesalers, manufacturers, and retailers for direct bulk commerce across 10,000+ pin codes.",
    image: "/banners/banner_b2b_commerce.webp",
    targetBusinessSlug: "anga9",
    accentColor: "#2563EB",
  },
  {
    id: "urban-mobility",
    industry: "Urban Mobility & Fleet Transit",
    sectorTag: "Mobility & Clean Transit",
    tagline: "Connecting Millions of Daily Commutes",
    subhead: "Zero-commission electric mobility for auto-rickshaws and urban cabs, empowering drivers and passengers across India.",
    image: "/banners/banner_urban_mobility.webp",
    targetBusinessSlug: "riksho",
    accentColor: "#3B3FE0",
  },
  {
    id: "manufacturing-tech",
    industry: "Smart Apparel Manufacturing & MES",
    sectorTag: "Industrial Technology",
    tagline: "Digitizing Industrial Shopfloors",
    subhead: "Real-time MES software connecting inward fabric lots, cutting tables, 3-stage QC tracking, and buyer dispatch.",
    image: "/banners/banner_smart_manufacturing.webp",
    targetBusinessSlug: "zigza",
    accentColor: "#3E2C63",
  },
  {
    id: "heritage-craft",
    industry: "Artisanal Handloom & Luxury Craft",
    sectorTag: "Heritage Luxury & Atelier",
    tagline: "Sustaining Centuries of Indian Craft",
    subhead: "Master handloom weavers creating bespoke sarees and heirloom couture, shipped nationally and internationally.",
    image: "/banners/banner_heritage_craft.webp",
    targetBusinessSlug: "house-of-gargi",
    accentColor: "#7A1F1F",
  },
];

export const BUSINESSES: Business[] = [
  {
    id: "anga9",
    slug: "anga9",
    name: "Anga9",
    category: "B2B Wholesale Marketplace",
    categoryShort: "Commerce",
    tagline: "B2B wholesale, without the middleman markup.",
    shortDescription: "A bulk buy-and-sell marketplace connecting wholesalers and retailers directly.",
    fullDescription:
      "Anga9 is an integrated digital marketplace connecting verified wholesalers, manufacturers, and retailers for direct bulk commerce across 10,000+ pin codes, featuring end-to-end freight, digital storefronts, and automated escrow.",
    features: [
      "Bulk buy & sell listings across categories",
      "Direct wholesaler-to-retailer transactions",
      "Seller storefronts (Sell on Anga9)",
      "Delivery & logistics built in",
    ],
    targetAudience: [
      {
        title: "Wholesalers",
        description: "List bulk inventory and reach verified retail buyers directly.",
      },
      {
        title: "Retailers",
        description: "Source direct factory inventory without distributor markups.",
      },
      {
        title: "Sellers & Brands",
        description: "Launch verified storefronts with integrated catalog and freight.",
      },
    ],
    externalUrl: "https://anga9.com",
    brandColor: "#2563EB",
    logo: "/logos/anga9.png",
    banner: "/banners/banner_b2b_commerce.webp",
    screenshot: "/banners/banner_b2b_commerce.webp",
    screenshotCaption: "Anga9 — B2B wholesale marketplace, trade network",
  },
  {
    id: "riksho",
    slug: "riksho",
    name: "Riksho",
    category: "Mobility & Delivery Platform",
    categoryShort: "Mobility & Delivery",
    tagline: "One ride away. One delivery ahead — commission-free for drivers.",
    shortDescription:
      "Cab, auto and bike rides on a subscription model — zero commission for drivers.",
    fullDescription:
      "Riksho is a ride-hailing and delivery platform covering cabs, bike taxis, intercity rides and business fleet integration. Unlike commission-based competitors, drivers and riders operate on a flat subscription model.",
    features: [
      "Cabs, bike taxis & intercity rides in one app",
      "Subscription model — no per-ride commission for drivers",
      "Delivery service on the same platform",
      "Fleet API/integration for business clients",
    ],
    targetAudience: [
      {
        title: "Riders",
        description: "Book reliable cabs, autos, and bikes at predictable fares.",
      },
      {
        title: "Drivers",
        description: "Earn without deductions, paying only a flat subscription.",
      },
      {
        title: "Businesses",
        description: "Integrate fleet and parcel delivery via Riksho API.",
      },
    ],
    externalUrl: "https://riksho.com",
    brandColor: "#3B3FE0",
    logo: "/logos/app_riksho_logo.png",
    banner: "/banners/banner_urban_mobility.webp",
    screenshot: "/banners/banner_urban_mobility.webp",
    screenshotCaption: "Riksho — urban mobility, zero-commission transit",
  },
  {
    id: "zigza",
    slug: "zigza",
    name: "Zigza",
    category: "Factory MES/ERP Platform",
    categoryShort: "Manufacturing Tech",
    tagline: "The manufacturing OS for modern garment factories.",
    shortDescription:
      "A production and workforce management system built for garment factory floors.",
    fullDescription:
      "Zigza connects fabric inward, cutting, piece-rate wage allocation, 3-stage QC and buyer dispatch into a single system for garment factory floors.",
    features: [
      "1-click Excel challan ingestion",
      "Android mobile floor companion app",
      "Automated piece-rate wage ledger",
      "Live 3-stage QC tracking",
      "Cutting lot size breakdown, auto-calculated ratios",
    ],
    targetAudience: [
      {
        title: "Factory Owners",
        description: "Real-time production visibility, margins, and order fulfillment.",
      },
      {
        title: "Floor Supervisors",
        description: "Live tracking of job work, cutting sets, and linemen active.",
      },
      {
        title: "Buyers",
        description: "End-to-end dispatch status, inspection reports, and challan tracking.",
      },
    ],
    externalUrl: "https://zigza.in",
    brandColor: "#3E2C63",
    logo: "/logos/zigza.png",
    banner: "/banners/banner_smart_manufacturing.webp",
    screenshot: "/banners/banner_smart_manufacturing.webp",
    screenshotCaption: "Zigza — manufacturing OS, digital factory floor",
  },
  {
    id: "house-of-gargi",
    slug: "house-of-gargi",
    name: "House of Gargi",
    category: "Luxury Handloom Fashion",
    categoryShort: "Luxury Fashion & Craft",
    tagline: "Handcrafted heritage, worn today.",
    shortDescription:
      "Handcrafted batik and handloom garments, shipped nationally and internationally.",
    fullDescription:
      "House of Gargi designs and sells luxury handmade Indian fashion — sarees, lehengas, kurta sets, and bespoke pieces — woven by hand and shipped nationally and internationally.",
    features: [
      "Sarees, lehengas, kurta sets, accessories",
      "Bespoke/made-to-order line",
      "International and domestic shipping",
      "Handloom & batik craftsmanship, sourced directly from artisans",
    ],
    targetAudience: [
      {
        title: "Individual Buyers",
        description: "Heirloom sarees, occasion wear, and bridal collections.",
      },
      {
        title: "International Customers",
        description: "Direct cross-border shipping for global Indian diaspora.",
      },
      {
        title: "Bespoke Clients",
        description: "Custom tailored silhouettes and private artisan commissions.",
      },
    ],
    externalUrl: "https://gargisaha.com",
    brandColor: "#7A1F1F",
    logo: "/logos/house_of_gargi.png",
    banner: "/banners/banner_heritage_craft.webp",
    screenshot: "/banners/banner_heritage_craft.webp",
    screenshotCaption: "House of Gargi — handcrafted heritage sarees and couture",
  },
  {
    id: "nubira-creation",
    slug: "nubira-creation",
    name: "Nubira Creation",
    category: "Bulk Garment Mfg.",
    categoryShort: "Garment Manufacturing (B2B / OEM)",
    tagline: "Quality apparel manufacturing, at bulk scale.",
    subClarification: "Nubira Creation is Nubira Group's in-house manufacturing unit.",
    shortDescription:
      "Bulk garment production from client-supplied designs, at factory scale.",
    fullDescription:
      "Nubira Creation is a bulk garment manufacturing facility — brands and companies supply their own designs and specifications, and Nubira Creation produces any garment type at factory scale.",
    features: [
      "Client-supplied design → bulk production",
      "Any garment category, factory-scale output",
      "Full production run management",
      "Quality apparel manufacturing standards",
    ],
    targetAudience: [
      {
        title: "Fashion Brands",
        description: "Outsource private label manufacturing with reliable delivery schedules.",
      },
      {
        title: "Corporate & Uniform Buyers",
        description: "Bulk uniform and corporate apparel production at scale.",
      },
      {
        title: "Retailers",
        description: "Direct-from-factory volume manufacturing tailored to exact specifications.",
      },
    ],
    customSecondaryCta: {
      label: "Get a manufacturing quote",
      href: "/contact?business=nubira-creation",
    },
    externalUrl: "https://nubiracreation.com",
    brandColor: "#18181B",
    logo: "/logos/nubiracreation.png",
    banner: "/banners/banner_smart_manufacturing.webp",
    screenshot: "/banners/banner_smart_manufacturing.webp",
    screenshotCaption: "Nubira Creation — apparel manufacturing facility",
  },
];

export function getBusinessBySlug(slug: string): Business | undefined {
  return BUSINESSES.find((b) => b.slug === slug);
}

export function getSiblingBusinesses(slug: string): Business[] {
  return BUSINESSES.filter((b) => b.slug !== slug);
}
