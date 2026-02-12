import Link from "next/link";
import { testimonials } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type SocialProofProps = {
  lang: Lang;
};

export default function SocialProof({ lang }: SocialProofProps) {
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-white/90 p-6">
      <h3 className="text-lg font-semibold text-[var(--accent)]">
        {t(ui.labels.socialProofTitle, lang)}
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {t(ui.labels.socialProofCopy, lang)}
      </p>
      <div className="mt-4 grid gap-4 text-sm text-[var(--muted)]">
        {testimonials.items.map((item) => (
          <div key={t(item.quote, lang)} className="rounded-2xl border border-[var(--line)] bg-white p-4">
            <p>“{t(item.quote, lang)}”</p>
            <Link
              href={item.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]"
            >
              {item.sourceLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
