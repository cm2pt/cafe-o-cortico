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
    <div className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#2d1d14]">
          {t(ui.labels.openNow, lang)}
        </h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
            status.isOpen === true
              ? "bg-[#dfe9d7] text-[#2c4a1f]"
              : status.isOpen === false
              ? "bg-[#f5e3dd] text-[#7f3d2b]"
              : "bg-[#efe2d5] text-[#6f5a4d]"
          }`}
        >
          {status.label}
        </span>
      </div>
      {showCloseTime && status.isOpen !== null ? (
        <p className="mt-2 text-sm text-[#6f5a4d]">
          {t(ui.labels.closesAt, lang)} {status.closesAt}
        </p>
      ) : null}
      <div className="mt-4 grid gap-3 text-sm text-[#6f5a4d]">
        {weekSchedule.map((entry) => (
          <div
            key={entry.day}
            className="flex items-center justify-between border-b border-[#efe2d5] pb-2 last:border-b-0"
          >
            <span>{t(ui.days[entry.day as keyof typeof ui.days] ?? entry.day, lang)}</span>
            <span className="font-semibold text-[#2d1d14]">
              {formatHours(entry)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
