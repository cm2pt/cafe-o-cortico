import { site } from "@/lib/data";
import { getOpenStatus } from "@/lib/time";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type OpenStatusProps = {
  lang: Lang;
};

export default function OpenStatus({ lang }: OpenStatusProps) {
  const status = getOpenStatus(site.hours.weekSchedule, site.hours.timezone, lang);

  return (
    <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
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
      {status.isOpen !== null ? (
        <span>
          {status.isOpen ? (
            <>
              {t(ui.labels.closesAt, lang)} {status.closesAt}
            </>
          ) : status.nextOpenDay && status.nextOpenAt ? (
            <>
              {t(ui.labels.opensOnAt, lang)}{" "}
              {t(
                ui.days[status.nextOpenDay as keyof typeof ui.days] ??
                  status.nextOpenDay,
                lang
              )} {lang === "pt" ? "às" : "at"} {status.nextOpenAt}
            </>
          ) : status.nextOpenAt ? (
            <>
              {t(ui.labels.opensAt, lang)} {status.nextOpenAt}
            </>
          ) : null}
        </span>
      ) : null}
    </div>
  );
}
