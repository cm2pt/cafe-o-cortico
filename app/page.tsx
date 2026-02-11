import Image from "next/image";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
import HoursBlock from "@/components/HoursBlock";
import MapEmbed from "@/components/MapEmbed";
import SocialProof from "@/components/SocialProof";
import MobileStickyBar from "@/components/MobileStickyBar";
import BestSellers from "@/components/BestSellers";
import ServicesGrid from "@/components/ServicesGrid";
import CateringCallout from "@/components/CateringCallout";
import InstagramPreview from "@/components/InstagramPreview";
import { site } from "@/lib/data";
import { buildLocalBusinessSchema } from "@/lib/structuredData";
import { resolveLang, t, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Café O Cortiço | Torres Novas",
  description: "Café com esplanada, takeaway e estacionamento gratuito em Torres Novas."
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
              {t(ui.labels.heroTitle, lang)}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#2d1d14] md:text-5xl">
              {t(ui.labels.heroSubtitle, lang)}
            </h1>
            <p className="text-base text-[#6f5a4d] md:text-lg">
              {site.address.line1}, {site.address.postalCode} {site.address.line2}
            </p>
            <CtaButtons lang={lang} />
            <HoursBlock lang={lang} showCloseTime />
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
      </section>

      <section className="py-16">
        <Container className="grid gap-8">
          <BestSellers lang={lang} />
          <ServicesGrid lang={lang} />
        </Container>
      </section>

      <section className="border-y border-[#e4d8cc] bg-[#fbf7f2] py-16">
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
