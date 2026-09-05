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
  screenshot: string;
  screenshotCaption: string;
  subClarification?: string;
  customSecondaryCta?: {
    label: string;
    href: string;
  };
}

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
      "Anga9 connects wholesalers and retailers directly for bulk buying and selling across categories, with built-in delivery and seller storefronts without the middleman markup.",
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
    screenshot: "/assets/anga9.png",
    screenshotCaption: "Anga9.com — homepage, festive collection banner",
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
    screenshot: "/assets/riksho.png",
    screenshotCaption: "Riksho.com — homepage",
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
    screenshot: "/assets/zigza.png",
    screenshotCaption: "Zigza.in — live factory dashboard and metrics",
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
    screenshot: "/assets/gargi.png",
    screenshotCaption: "Gargisaha.com — heritage handloom showcase",
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
    screenshot: "/assets/nubira-creation.png",
    screenshotCaption: "Nubiracreation.com — apparel manufacturing facility",
  },
];

export function getBusinessBySlug(slug: string): Business | undefined {
  return BUSINESSES.find((b) => b.slug === slug);
}

export function getSiblingBusinesses(slug: string): Business[] {
  return BUSINESSES.filter((b) => b.slug !== slug);
}
