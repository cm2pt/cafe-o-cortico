import Link from "next/link";
import { testimonials } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type SocialProofProps = {
  lang: Lang;
};

export default function SocialProof({ lang }: SocialProofProps) {
  return (
    <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <h3 className="text-lg font-semibold text-[#2d1d14]">
        {t(ui.labels.socialProofTitle, lang)}
      </h3>
      <p className="mt-2 text-sm text-[#6f5a4d]">
        {t(ui.labels.socialProofCopy, lang)}
      </p>
      <div className="mt-4 grid gap-4 text-sm text-[#6f5a4d]">
        {testimonials.items.map((item) => (
          <div key={t(item.quote, lang)} className="rounded-2xl border border-[#efe2d5] bg-white p-4">
            <p>“{t(item.quote, lang)}”</p>
            <Link
              href={item.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7768]"
            >
              {item.sourceLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
