import Link from "next/link";
import { mapsDirectionsUrl, site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type CtaButtonsProps = {
  layout?: "row" | "stack";
  size?: "sm" | "md";
  lang: Lang;
};

export default function CtaButtons({
  layout = "row",
  size = "md",
  lang
}: CtaButtonsProps) {
  const hasPhone = site.phone.trim().length > 0;
  const buttonPadding = size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-3";
  const layoutClass = layout === "stack" ? "flex-col" : "flex-row";

  return (
    <div className={`flex flex-wrap gap-3 ${layoutClass}`}>
      <Link
        href={mapsDirectionsUrl}
        target="_blank"
        rel="noreferrer"
        className={`rounded-full bg-[var(--primary)] ${buttonPadding} text-sm font-semibold text-[var(--secondary)] shadow-md shadow-black/10 transition hover:bg-[var(--accent)]`}
      >
        {t(ui.cta.directions, lang)}
      </Link>
      {hasPhone ? (
        <Link
          href={`tel:${site.phone.replace(/\s+/g, "")}`}
          className={`rounded-full border border-[var(--line)] ${buttonPadding} text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--primary)] hover:bg-[var(--secondary)]`}
        >
          {t(ui.cta.call, lang)}
        </Link>
      ) : (
        <button
          type="button"
          className={`cursor-not-allowed rounded-full border border-[var(--line)] ${buttonPadding} text-sm font-semibold text-[#9b8a7c]`}
          aria-disabled
        >
          {t(ui.cta.call, lang)}
        </button>
      )}
    </div>
  );
}
