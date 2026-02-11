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
    description: site.shortDescription,
    url: siteUrl,
    telephone: site.phone || undefined,
    email: site.email || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.line1,
      addressCountry: site.address.line2,
      streetAddress: site.address.line3 || undefined
    },
    sameAs: [site.instagramUrl, site.facebookUrl],
    openingHoursSpecification:
      openingHoursSpecification.length > 0 ? openingHoursSpecification : undefined
  };
};
