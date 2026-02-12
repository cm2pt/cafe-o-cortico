import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

export default function CateringCallout({ lang }: { lang: Lang }) {
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-[var(--secondary)] p-6">
      <h3 className="text-2xl font-semibold text-[var(--accent)]">
        {t(ui.labels.cateringTitle, lang)}
      </h3>
      <p className="mt-3 text-sm text-[var(--muted)]">
        {t(ui.labels.cateringCopy, lang)}
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition hover:border-transparent hover:bg-white"
      >
        {t(ui.labels.cateringCta, lang)}
      </Link>
    </div>
  );
}
