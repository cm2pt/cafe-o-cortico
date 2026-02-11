import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
import HoursBlock from "@/components/HoursBlock";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/lib/data";
import { buildLocalBusinessSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Contact | Café O Cortiço",
  description: "Plan your visit to Café O Cortiço in Torres Novas."
};

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#2d1d14]">
            Visit us in Torres Novas
          </h1>
          <p className="mt-4 text-base text-[#6f5a4d]">
            We’re ready to welcome you. Use the buttons below to call or open
            directions.
          </p>

          <div className="mt-6">
            <CtaButtons layout="stack" />
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-[#e4d8cc] bg-white/90 p-5">
              <p className="text-sm font-semibold text-[#2d1d14]">Address</p>
              <p className="mt-2 text-sm text-[#6f5a4d]">
                {site.address.line1}
              </p>
              <p className="text-sm text-[#6f5a4d]">{site.address.line2}</p>
              {site.address.line3 ? (
                <p className="text-sm text-[#6f5a4d]">{site.address.line3}</p>
              ) : null}
            </div>
            <div className="rounded-2xl border border-[#e4d8cc] bg-white/90 p-5">
              <p className="text-sm font-semibold text-[#2d1d14]">Updates</p>
              <p className="mt-2 text-sm text-[#6f5a4d]">
                For real-time hours and specials, DM us on Instagram.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <HoursBlock />
          <MapEmbed />
        </div>
      </Container>
    </main>
  );
}
