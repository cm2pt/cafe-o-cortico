import Link from "next/link";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type MapEmbedProps = {
  lang: Lang;
};

export default function MapEmbed({ lang }: MapEmbedProps) {
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-white/90 p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[var(--accent)]">
          {t(ui.labels.locationTitle, lang)}
        </h3>
        <p className="text-sm text-[var(--muted)]">
          {site.address.line1}, {site.address.postalCode} {site.address.line2}
        </p>
        <p className="text-xs text-[var(--primary)]">{t(ui.labels.parkingNote, lang)}</p>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--line)]">
        <iframe
          title="Café O Cortiço map"
          src={mapsEmbedUrl}
          className="h-64 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <Link
          href={mapsDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition hover:bg-[var(--accent)]"
        >
          {t(ui.cta.directions, lang)}
        </Link>
        <span className="text-xs text-[var(--primary)]">
          {t(ui.labels.mapTap, lang)}
        </span>
      </div>
    </div>
  );
}
