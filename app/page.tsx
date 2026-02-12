import Image from "next/image";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
import MapEmbed from "@/components/MapEmbed";
import SocialProof from "@/components/SocialProof";
import MobileStickyBar from "@/components/MobileStickyBar";
import BestSellers from "@/components/BestSellers";
import ServicesGrid from "@/components/ServicesGrid";
import CateringCallout from "@/components/CateringCallout";
import InstagramPreview from "@/components/InstagramPreview";
import PromoStrip from "@/components/PromoStrip";
import TrustChips from "@/components/TrustChips";
import OpenStatus from "@/components/OpenStatus";
import { site } from "@/lib/data";
import { buildLocalBusinessSchema } from "@/lib/structuredData";
import { resolveLang, t, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Café O Cortiço | Torres Novas",
  description: "Snack-bar com esplanada, takeaway e estacionamento gratuito em Torres Novas."
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
      <section className="border-b border-[var(--line)] bg-[var(--secondary)]">
        <Container className="relative py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[url('/honeycomb-pattern.svg')] bg-center bg-repeat opacity-[0.12]"
          />
          <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4 text-center md:text-left">
              {site.logo ? (
                <Image
                  src={site.logo}
                  alt="Logo Café O Cortiço – bee and honeycomb"
                  width={360}
                  height={140}
                  className="mx-auto h-20 w-auto object-contain md:mx-0 md:h-24"
                  priority
                />
              ) : null}
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
                {t(ui.labels.heroHeadline, lang)}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-[var(--accent)] md:text-5xl">
                Café O Cortiço
              </h1>
              <p className="text-lg text-[var(--primary)]">
                {t(ui.labels.heroSubheadline, lang)}
              </p>
              <p className="text-base text-[var(--muted)]">
                {site.address.line1}, {site.address.postalCode} {site.address.line2}
              </p>
              <div className="flex justify-center md:justify-start">
                <CtaButtons lang={lang} />
              </div>
              <div className="flex justify-center md:justify-start">
                <OpenStatus lang={lang} />
              </div>
              <TrustChips lang={lang} centered />
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[var(--primary)]/20 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white shadow-lg">
                <Image
                  src="/gallery/gallery-01.jpg"
                  alt="Café O Cortiço"
                  width={1200}
                  height={900}
                  className="h-56 w-full object-cover md:h-80"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <PromoStrip lang={lang} />
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-8">
          <BestSellers lang={lang} />
          <ServicesGrid lang={lang} />
        </Container>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--secondary)] py-16">
        <Container className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <CateringCallout lang={lang} />
            <SocialProof lang={lang} />
          </div>
          <div className="space-y-6">
            <MapEmbed lang={lang} />
            <InstagramPreview lang={lang} />
          </div>
        </Container>
      </section>

      <MobileStickyBar lang={lang} />
    </main>
  );
}
