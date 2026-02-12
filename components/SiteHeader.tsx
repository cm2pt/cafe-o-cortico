import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { mapsDirectionsUrl } from "@/lib/data";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type SiteHeaderProps = {
  lang: Lang;
};

export default function SiteHeader({ lang }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--secondary)]/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label="Home">
          {site.logo ? (
            <div className="flex items-center justify-center">
              <Image
                src={site.logo}
                alt="Logo Café O Cortiço – bee and honeycomb"
                width={260}
                height={72}
                className="h-12 w-auto object-contain md:h-[72px]"
                priority
              />
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-sm font-semibold">
              CO
            </div>
          )}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--primary)] md:flex">
          <Link href="/" className="transition hover:text-[var(--accent)]">
            {t(ui.nav.home, lang)}
          </Link>
          <Link href="/menu" className="transition hover:text-[var(--accent)]">
            {t(ui.nav.menu, lang)}
          </Link>
          <Link href="/gallery" className="transition hover:text-[var(--accent)]">
            {t(ui.nav.gallery, lang)}
          </Link>
          <Link href="/contact" className="transition hover:text-[var(--accent)]">
            {t(ui.nav.contact, lang)}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />
          <Link
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary)] transition hover:bg-[var(--accent)] md:inline-flex"
          >
            {t(ui.cta.directions, lang)}
          </Link>
        </div>
      </Container>
    </header>
  );
}
