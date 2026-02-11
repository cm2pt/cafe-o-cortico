import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type SiteFooterProps = {
  lang: Lang;
};

export default function SiteFooter({ lang }: SiteFooterProps) {
  return (
    <footer className="mt-16 border-t border-[#e4d8cc] bg-[#fbf7f2]">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-semibold text-[#2d1d14]">{site.name}</p>
          <p className="mt-2 text-sm text-[#6f5a4d]">
            {t(ui.labels.heroSubtitle, lang)}
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#6f5a4d]">
            <Link href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <span aria-hidden="true">•</span>
            <Link href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </Link>
          </div>
        </div>
        <div className="text-sm text-[#6f5a4d]">
          <p className="font-semibold text-[#2d1d14]">
            {t(ui.labels.locationTitle, lang)}
          </p>
          <p className="mt-2">{site.address.line1}</p>
          <p>{site.address.postalCode} {site.address.line2}</p>
          <p>{site.address.line3}</p>
        </div>
        <div className="text-sm text-[#6f5a4d]">
          <p className="font-semibold text-[#2d1d14]">
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
