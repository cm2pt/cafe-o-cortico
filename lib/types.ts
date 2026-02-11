import type { LocalizedString } from "@/lib/i18n";

export type HoursEntry = {
  day: string;
  open: string | null;
  close: string | null;
};

export type SiteData = {
  name: string;
  tagline: LocalizedString;
  shortDescription: LocalizedString;
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
    hoursNote: LocalizedString;
    weekSchedule: HoursEntry[];
  };
};

export type MenuItem = {
  name: LocalizedString;
  description: LocalizedString;
  price: string | null;
  badges?: LocalizedString[];
};

export type MenuCategory = {
  title: LocalizedString;
  description?: LocalizedString;
  image?: string;
  items: MenuItem[];
};

export type MenuData = {
  categories: MenuCategory[];
};

export type PromoStripItem = {
  label: LocalizedString;
  text: LocalizedString;
};

export type FeaturedItem = {
  name: LocalizedString;
  description: LocalizedString;
  badge?: LocalizedString;
  image: string;
};

export type PromosData = {
  promoStrip: PromoStripItem[];
  featuredItems: FeaturedItem[];
  happyHour: {
    title: LocalizedString;
    description: LocalizedString;
    hoursNote: LocalizedString;
    ctaLabel: LocalizedString;
  };
  seasonalNote: LocalizedString;
};

export type GalleryImage = {
  src: string;
  alt: LocalizedString;
  credit?: string;
};

export type GalleryData = {
  images: GalleryImage[];
};
