import { promos } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type PromoStripProps = {
  lang: Lang;
};

export default function PromoStrip({ lang }: PromoStripProps) {
  return (
    <div className="border-y border-[#e4d8cc] bg-[#f4ece4]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm text-[#6f5a4d]">
        {promos.promoStrip.map((item) => (
          <div key={t(item.label, lang)} className="flex items-center gap-2">
            <span className="rounded-full border border-[#e2d5c9] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1d14]">
              {t(item.label, lang)}
            </span>
            <span>{t(item.text, lang)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
