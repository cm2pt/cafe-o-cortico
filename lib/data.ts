import siteJson from "@/content/site.json";
import menuJson from "@/content/menu.json";
import promosJson from "@/content/promos.json";
import galleryJson from "@/content/gallery.json";
import type { SiteData, MenuData, PromosData, GalleryData } from "@/lib/types";

export const site = siteJson as SiteData;
export const menu = menuJson as MenuData;
export const promos = promosJson as PromosData;
export const gallery = galleryJson as GalleryData;

const addressQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`.trim()
);

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
