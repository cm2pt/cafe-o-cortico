import Image from "next/image";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
import PromoStrip from "@/components/PromoStrip";
import FeaturedItems from "@/components/FeaturedItems";
import MenuPreview from "@/components/MenuPreview";
import HoursBlock from "@/components/HoursBlock";
import MapEmbed from "@/components/MapEmbed";
import SocialProof from "@/components/SocialProof";
import SocialFeeds from "@/components/SocialFeeds";
import MobileStickyBar from "@/components/MobileStickyBar";
import { site, promos } from "@/lib/data";
import { buildLocalBusinessSchema } from "@/lib/structuredData";
import { resolveLang, t, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: `${site.name} | Coffee & Pastries in Torres Novas`,
  description: site.shortDescription.pt
};

export default async function Home() {
  const lang = resolveLang((await cookies()).get("lang")?.value);
  const schema = buildLocalBusinessSchema(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cafeocortico.local"
  );

  return (
    <main className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="border-b border-[#e4d8cc] bg-[#fbf7f2]">
        <Container className="grid gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
              {t(ui.labels.heroLocation, lang)}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#2d1d14] md:text-5xl">
              {t(site.tagline, lang)}
            </h1>
            <p className="text-base text-[#6f5a4d] md:text-lg">
              {t(site.shortDescription, lang)}
            </p>
            <CtaButtons lang={lang} />
            <p className="text-xs text-[#8b7768]">
              {t(ui.labels.heroNote, lang)}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#e6d4c5] blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white shadow-lg">
              <Image
                src="/gallery/gallery-01.jpg"
                alt="Café O Cortiço"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </Container>
        <PromoStrip lang={lang} />
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
                {t(ui.labels.featured, lang)}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1d14]">
                {t(ui.labels.whatYouCanGet, lang)}
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#6f5a4d]">
              {t(ui.labels.featuredCopy, lang)}
            </p>
          </div>
          <div className="mt-10">
            <FeaturedItems lang={lang} />
          </div>
        </Container>
      </section>

      <section className="border-y border-[#e4d8cc] bg-[#fbf7f2] py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
                {t(ui.labels.menuHighlights, lang)}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1d14]">
                {t(ui.labels.simpleMenu, lang)}
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#6f5a4d]">
              {t(ui.labels.menuHighlightsCopy, lang)}
            </p>
          </div>
          <div className="mt-10">
            <MenuPreview lang={lang} />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
                {t(ui.labels.whatsNew, lang)}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1d14]">
                {t(promos.happyHour.title, lang)}
              </h2>
              <p className="mt-3 text-sm text-[#6f5a4d]">
                {t(promos.happyHour.description, lang)}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7768]">
                {t(promos.happyHour.hoursNote, lang)}
              </p>
              <div className="mt-6">
                <CtaButtons showInstagram={false} lang={lang} />
              </div>
              <p className="mt-4 text-xs text-[#8b7768]">
                {t(promos.seasonalNote, lang)}
              </p>
            </div>
            <SocialProof lang={lang} />
            <SocialFeeds lang={lang} />
          </div>
          <div className="space-y-6">
            <HoursBlock lang={lang} />
            <MapEmbed lang={lang} />
          </div>
        </Container>
      </section>

      <MobileStickyBar lang={lang} />
    </main>
  );
}
