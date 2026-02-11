import { site } from "@/lib/data";
import type { HoursEntry } from "@/lib/types";

const toOpeningHoursSpecification = (weekSchedule: HoursEntry[]) =>
  weekSchedule
    .filter((entry) => entry.open && entry.close)
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.open,
      closes: entry.close
    }));

export const buildLocalBusinessSchema = (siteUrl: string) => {
  const openingHoursSpecification = toOpeningHoursSpecification(
    site.hours.weekSchedule
  );

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    url: siteUrl,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      postalCode: site.address.postalCode,
      addressLocality: site.address.line2,
      addressCountry: site.address.line3
    },
    geo:
      site.coordinates.lat && site.coordinates.lng
        ? {
            "@type": "GeoCoordinates",
            latitude: site.coordinates.lat,
            longitude: site.coordinates.lng
          }
        : undefined,
    sameAs: [site.social.instagram, site.social.facebook],
    openingHoursSpecification:
      openingHoursSpecification.length > 0 ? openingHoursSpecification : undefined
  };
};
