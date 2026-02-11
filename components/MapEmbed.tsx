import Link from "next/link";
import { mapsDirectionsUrl, site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type MapEmbedProps = {
  lang: Lang;
};

export default function MapEmbed({ lang }: MapEmbedProps) {
  return (
    <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#2d1d14]">
          {t(ui.labels.findUs, lang)}
        </h3>
        <p className="text-sm text-[#6f5a4d]">
          {site.address.line1}, {site.address.line2}
        </p>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-[#efe2d5]">
        <iframe
          title="Café O Cortiço map"
          src={site.googleMapsUrl}
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
          className="rounded-full bg-[#c99a7a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1d14] transition hover:bg-[#b48769]"
        >
          {t(ui.cta.directions, lang)}
        </Link>
        <span className="text-xs text-[#6f5a4d]">
          {t(ui.labels.tapMaps, lang)}
        </span>
      </div>
    </div>
  );
}
