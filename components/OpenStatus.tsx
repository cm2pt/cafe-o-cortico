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
    <div className="flex items-center gap-3 text-sm text-[#6f5a4d]">
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
      {status.isOpen !== null ? (
        <span>
          {t(ui.labels.closesAt, lang)} {status.closesAt}
        </span>
      ) : null}
    </div>
  );
}
