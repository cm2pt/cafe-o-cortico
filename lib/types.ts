export type HoursEntry = {
  day: string;
  open: string | null;
  close: string | null;
};

export type SiteData = {
  name: string;
  tagline: string;
  shortDescription: string;
  phone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
  };
  googleMapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  hours: {
    timezone: string;
    hoursNote: string;
    weekSchedule: HoursEntry[];
  };
};

export type MenuItem = {
  name: string;
  description: string;
  price: string | null;
  badges?: string[];
};

export type MenuCategory = {
  title: string;
  description?: string;
  image?: string;
  items: MenuItem[];
};

export type MenuData = {
  categories: MenuCategory[];
};

export type PromoStripItem = {
  label: string;
  text: string;
};

export type FeaturedItem = {
  name: string;
  description: string;
  badge?: string;
  image: string;
};

export type PromosData = {
  promoStrip: PromoStripItem[];
  featuredItems: FeaturedItem[];
  happyHour: {
    title: string;
    description: string;
    hoursNote: string;
    ctaLabel: string;
  };
  seasonalNote: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  credit?: string;
};

export type GalleryData = {
  images: GalleryImage[];
};
