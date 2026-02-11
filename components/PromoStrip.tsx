import { promos } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type PromoStripProps = {
  lang: Lang;
};

export default function PromoStrip({ lang }: PromoStripProps) {
  return (
    <div className="rounded-3xl border border-[#e4d8cc] bg-[#f6ede4] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
        {t(ui.labels.promoTitle, lang)}
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {promos.promoStrip.map((item) => (
          <div
            key={t(item.title, lang)}
            className="rounded-2xl border border-[#efe2d5] bg-white px-4 py-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7768]">
              {t(item.title, lang)}
            </p>
            <p className="mt-2 text-sm text-[#6f5a4d]">
              {t(item.text, lang)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
