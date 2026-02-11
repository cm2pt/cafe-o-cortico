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
    <header className="sticky top-0 z-40 border-b border-[#e4d8cc] bg-[#fbf7f2]/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2d5c9] bg-white text-sm font-semibold">
            CO
          </div>
          <div>
            <span className="block text-lg font-semibold tracking-tight text-[#2d1d14]">
              {site.name}
            </span>
            <span className="block text-xs uppercase tracking-[0.3em] text-[#8b7768]">
              {site.address.line2}
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#6f5a4d] md:flex">
          <Link href="/" className="transition hover:text-[#2d1d14]">
            {t(ui.nav.home, lang)}
          </Link>
          <Link href="/menu" className="transition hover:text-[#2d1d14]">
            {t(ui.nav.menu, lang)}
          </Link>
          <Link href="/gallery" className="transition hover:text-[#2d1d14]">
            {t(ui.nav.gallery, lang)}
          </Link>
          <Link href="/contact" className="transition hover:text-[#2d1d14]">
            {t(ui.nav.contact, lang)}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />
          <Link
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#c99a7a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1d14] transition hover:bg-[#b48769] md:inline-flex"
          >
            {t(ui.cta.directions, lang)}
          </Link>
        </div>
      </Container>
    </header>
  );
}
