import Link from "next/link";
import { mapsDirectionsUrl, site } from "@/lib/data";

export default function MapEmbed() {
  return (
    <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#2d1d14]">Find us</h3>
        <p className="text-sm text-[#6f5a4d]">
          {site.address.line1}, {site.address.line2}
        </p>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-[#efe2d5]">
        <iframe
          title="Café O Cortiço map"
          src={mapsDirectionsUrl}
          className="h-64 w-full"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <Link
          href={mapsDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#2d1d14] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
        >
          Get directions
        </Link>
        <span className="text-xs text-[#6f5a4d]">Tap to open in Maps</span>
      </div>
    </div>
  );
}
