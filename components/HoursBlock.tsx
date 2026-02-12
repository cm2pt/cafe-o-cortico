import { site } from "@/lib/data";
import { formatHours, getOpenStatus } from "@/lib/time";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type HoursBlockProps = {
  lang: Lang;
  showCloseTime?: boolean;
};

export default function HoursBlock({ lang, showCloseTime = false }: HoursBlockProps) {
  const { weekSchedule, timezone } = site.hours;
  const status = getOpenStatus(weekSchedule, timezone, lang);

  return (
    <div className="rounded-3xl border border-[var(--line)] bg-white/90 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[var(--accent)]">
          {t(ui.labels.openNow, lang)}
        </h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
            status.isOpen === true
              ? "bg-[#dfe9d7] text-[#2c4a1f]"
              : status.isOpen === false
              ? "bg-[#f5e3dd] text-[#7f3d2b]"
              : "bg-[var(--line)] text-[var(--muted)]"
          }`}
        >
          {status.label}
        </span>
      </div>
      {showCloseTime && status.isOpen !== null ? (
        <p className="mt-2 text-sm text-[var(--muted)]">
          {t(ui.labels.closesAt, lang)} {status.closesAt}
        </p>
      ) : null}
      <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
        {weekSchedule.map((entry) => (
          <div
            key={entry.day}
            className="flex items-center justify-between border-b border-[var(--line)] pb-2 last:border-b-0"
          >
            <span>{t(ui.days[entry.day as keyof typeof ui.days] ?? entry.day, lang)}</span>
            <span className="font-semibold text-[var(--accent)]">
              {formatHours(entry)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
