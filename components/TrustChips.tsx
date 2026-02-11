import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";
import { site } from "@/lib/data";

export default function TrustChips({ lang }: { lang: Lang }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
        {t(ui.labels.trustChipsLabel, lang)}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {site.services.map((service) => (
          <span
            key={service.key}
            className="rounded-full border border-[#e2d5c9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1d14]"
          >
            {t(service.label, lang)}
          </span>
        ))}
      </div>
    </div>
  );
}
