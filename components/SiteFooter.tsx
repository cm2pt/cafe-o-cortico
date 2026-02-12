import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type SiteFooterProps = {
  lang: Lang;
};

export default function SiteFooter({ lang }: SiteFooterProps) {
  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-[var(--secondary)]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          {site.logo ? (
            <Image
              src={site.logo}
              alt="Logo Café O Cortiço – bee and honeycomb"
              width={180}
              height={72}
              className="h-12 w-auto object-contain"
            />
          ) : null}
          <p className="text-xl font-semibold text-[var(--accent)]">{site.name}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {t(ui.labels.heroSubheadline, lang)}
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-[var(--muted)]">
            <Link href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <span aria-hidden="true">•</span>
            <Link href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </Link>
          </div>
        </div>
        <div className="text-sm text-[var(--muted)]">
          <p className="font-semibold text-[var(--accent)]">
            {t(ui.labels.locationTitle, lang)}
          </p>
          <p className="mt-2">{site.address.line1}</p>
          <p>{site.address.postalCode} {site.address.line2}</p>
          <p>{site.address.line3}</p>
        </div>
        <div className="text-sm text-[var(--muted)]">
          <p className="font-semibold text-[var(--accent)]">
            {t(ui.labels.servicesTitle, lang)}
          </p>
          <ul className="mt-2 grid gap-1">
            {site.services.map((service) => (
              <li key={service.key}>{t(service.label, lang)}</li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
