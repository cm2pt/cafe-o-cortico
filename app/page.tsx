import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
import PromoStrip from "@/components/PromoStrip";
import FeaturedItems from "@/components/FeaturedItems";
import MenuPreview from "@/components/MenuPreview";
import HoursBlock from "@/components/HoursBlock";
import MapEmbed from "@/components/MapEmbed";
import SocialProof from "@/components/SocialProof";
import MobileStickyBar from "@/components/MobileStickyBar";
import { site, promos } from "@/lib/data";
import { buildLocalBusinessSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: `${site.name} | Coffee & Pastries in Torres Novas`,
  description: site.shortDescription
};

export default function Home() {
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
              Torres Novas · Portugal
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#2d1d14] md:text-5xl">
              {site.tagline}
            </h1>
            <p className="text-base text-[#6f5a4d] md:text-lg">
              {site.shortDescription}
            </p>
            <CtaButtons />
            <p className="text-xs text-[#8b7768]">
              Prefer DM? Reach us on Instagram for updates and quick replies.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#e6d4c5] blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white shadow-lg">
              <Image
                src="/hero.jpg"
                alt="Café O Cortiço interior"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </Container>
        <PromoStrip />
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
                Featured
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1d14]">
                What you can get
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#6f5a4d]">
              Espresso, pastries, and warm bites made for a relaxed pause.
            </p>
          </div>
          <div className="mt-10">
            <FeaturedItems />
          </div>
        </Container>
      </section>

      <section className="border-y border-[#e4d8cc] bg-[#fbf7f2] py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
                Menu highlights
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1d14]">
                A simple menu, done well
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#6f5a4d]">
              Categories that cover the essentials and a little something extra.
            </p>
          </div>
          <div className="mt-10">
            <MenuPreview />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
                What’s new
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1d14]">
                {promos.happyHour.title}
              </h2>
              <p className="mt-3 text-sm text-[#6f5a4d]">
                {promos.happyHour.description}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7768]">
                {promos.happyHour.hoursNote}
              </p>
              <div className="mt-6">
                <CtaButtons showInstagram={false} />
              </div>
              <p className="mt-4 text-xs text-[#8b7768]">
                {promos.seasonalNote}
              </p>
            </div>
            <SocialProof />
          </div>
          <div className="space-y-6">
            <HoursBlock />
            <MapEmbed />
          </div>
        </Container>
      </section>

      <MobileStickyBar />
    </main>
  );
}
