import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";
import { site } from "@/lib/data";

type TrustChipsProps = {
  lang: Lang;
  centered?: boolean;
};

export default function TrustChips({ lang, centered = false }: TrustChipsProps) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
        {t(ui.labels.trustChipsLabel, lang)}
      </p>
      <div
        className={`mt-3 flex flex-wrap gap-2 ${
          centered ? "justify-center" : undefined
        }`}
      >
        {site.services.map((service) => (
          <span
            key={service.key}
            className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            {t(service.label, lang)}
          </span>
        ))}
      </div>
    </div>
  );
}
