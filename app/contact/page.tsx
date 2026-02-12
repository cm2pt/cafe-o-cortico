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
  title: "Contacto | Café O Cortiço",
  description: "Morada, horário e contactos do Café O Cortiço em Torres Novas."
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            {t(ui.nav.contact, lang)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--accent)]">
            {t(ui.labels.locationTitle, lang)}
          </h1>
          <p className="mt-4 text-base text-[var(--muted)]">
            {site.address.line1}, {site.address.postalCode} {site.address.line2}
          </p>

          <div className="mt-6">
            <CtaButtons layout="stack" lang={lang} />
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-[var(--line)] bg-white/90 p-5">
              <p className="text-sm font-semibold text-[var(--accent)]">
                {t(ui.labels.servicesTitle, lang)}
              </p>
              <ul className="mt-2 grid gap-1 text-sm text-[var(--muted)]">
                {site.services.map((service) => (
                  <li key={service.key}>{t(service.label, lang)}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white/90 p-5">
              <p className="text-sm font-semibold text-[var(--accent)]">Telefone</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{site.phone}</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white/90 p-5">
              <p className="text-sm font-semibold text-[var(--accent)]">Redes sociais</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                <a href={site.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href={site.social.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href={site.googleMapsUrl} target="_blank" rel="noreferrer">
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <HoursBlock lang={lang} showCloseTime />
          <MapEmbed lang={lang} />
        </div>
      </Container>
    </main>
  );
}
