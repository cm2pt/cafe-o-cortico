import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CtaButtons from "@/components/CtaButtons";
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
          {site.logo ? (
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#e2d5c9] bg-white">
              <Image
                src={site.logo}
                alt={site.name}
                width={40}
                height={40}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2d5c9] bg-white text-sm font-semibold">
              CO
            </div>
          )}
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
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher lang={lang} />
          <CtaButtons size="sm" lang={lang} />
        </div>
        <div className="md:hidden">
          <LanguageSwitcher lang={lang} />
        </div>
      </Container>
    </header>
  );
}
