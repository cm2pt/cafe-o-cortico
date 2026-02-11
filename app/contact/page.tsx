import type { Metadata } from "next";
import { cookies } from "next/headers";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
import HoursBlock from "@/components/HoursBlock";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/lib/data";
import { buildLocalBusinessSchema } from "@/lib/structuredData";
import { resolveLang, t, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact | Café O Cortiço",
  description: "Plan your visit to Café O Cortiço in Torres Novas."
};

export default async function ContactPage() {
  const lang = resolveLang((await cookies()).get("lang")?.value);
  const schema = buildLocalBusinessSchema(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cafeocortico.local"
  );

  return (
    <main className="pb-20 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container className="grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
            {t(ui.nav.contact, lang)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#2d1d14]">
            {t(ui.labels.contactTitle, lang)}
          </h1>
          <p className="mt-4 text-base text-[#6f5a4d]">
            {t(ui.labels.contactIntro, lang)}
          </p>

          <div className="mt-6">
            <CtaButtons layout="stack" lang={lang} />
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-[#e4d8cc] bg-white/90 p-5">
              <p className="text-sm font-semibold text-[#2d1d14]">
                {t(ui.labels.address, lang)}
              </p>
              <p className="mt-2 text-sm text-[#6f5a4d]">
                {site.address.line1}
              </p>
              <p className="text-sm text-[#6f5a4d]">{site.address.line2}</p>
              {site.address.line3 ? (
                <p className="text-sm text-[#6f5a4d]">{site.address.line3}</p>
              ) : null}
            </div>
            <div className="rounded-2xl border border-[#e4d8cc] bg-white/90 p-5">
              <p className="text-sm font-semibold text-[#2d1d14]">
                {t(ui.labels.updates, lang)}
              </p>
              <p className="mt-2 text-sm text-[#6f5a4d]">
                {t(ui.labels.updatesCopy, lang)}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <HoursBlock lang={lang} />
          <MapEmbed lang={lang} />
        </div>
      </Container>
    </main>
  );
}
