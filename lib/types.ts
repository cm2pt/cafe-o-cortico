import type { LocalizedString } from "@/lib/i18n";

export type HoursEntry = {
  day: string;
  open: string | null;
  close: string | null;
};

export type SiteData = {
  name: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    postalCode: string;
  };
  googleMapsUrl: string;
  coordinates: {
    lat: number | null;
    lng: number | null;
  };
  hours: {
    timezone: string;
    weekSchedule: HoursEntry[];
  };
  services: {
    key: string;
    label: LocalizedString;
  }[];
  social: {
    instagram: string;
    facebook: string;
  };
  seo: {
    title: LocalizedString;
    description: LocalizedString;
    ogImage: string;
  };
};

export type MenuItem = {
  name: LocalizedString;
  description: LocalizedString;
  price: LocalizedString;
  tags?: LocalizedString[];
  image?: string;
};

export type MenuCategory = {
  title: LocalizedString;
  description?: LocalizedString;
  image?: string;
  items: MenuItem[];
};

export type MenuData = {
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
  };
  categories: MenuCategory[];
  allergenNote: LocalizedString;
  vegetarianNote: LocalizedString;
};

export type PromoStripItem = {
  title: LocalizedString;
  text: LocalizedString;
};

export type PromosData = {
  promoStrip: PromoStripItem[];
  dailySpecial: {
    enabled: boolean;
    title: LocalizedString;
    description: LocalizedString;
  };
};

export type GalleryImage = {
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
  credit?: string;
};

export type GalleryData = {
  images: GalleryImage[];
};

export type TestimonialItem = {
  quote: LocalizedString;
  sourceLabel: string;
  sourceUrl: string;
};

export type TestimonialsData = {
  items: TestimonialItem[];
};
