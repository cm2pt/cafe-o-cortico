import siteJson from "@/content/site.json";
import menuJson from "@/content/menu.json";
import galleryJson from "@/content/gallery.json";
import testimonialsJson from "@/content/testimonials.json";
import type {
  SiteData,
  MenuData,
  GalleryData,
  TestimonialsData
} from "@/lib/types";

export const site = siteJson as SiteData;
export const menu = menuJson as MenuData;
export const gallery = galleryJson as GalleryData;
export const testimonials = testimonialsJson as TestimonialsData;

const addressQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.postalCode} ${site.address.line2}, ${site.address.line3}`
);

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
