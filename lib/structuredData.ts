import { site } from "@/lib/data";
import type { HoursEntry } from "@/lib/types";

const toOpeningHoursSpecification = (weekSchedule: HoursEntry[]) => {
  return weekSchedule
    .filter((entry) => entry.open && entry.close)
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.open,
      closes: entry.close
    }));
};

export const buildLocalBusinessSchema = (siteUrl: string) => {
  const openingHoursSpecification = toOpeningHoursSpecification(
    site.hours.weekSchedule
  );

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    description: site.shortDescription.pt,
    url: siteUrl,
    telephone: site.phone || undefined,
    email: site.email || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.line2,
      addressCountry: site.address.line3 || undefined
    },
    sameAs: [site.instagramUrl, site.facebookUrl],
    openingHoursSpecification:
      openingHoursSpecification.length > 0 ? openingHoursSpecification : undefined
  };
};
