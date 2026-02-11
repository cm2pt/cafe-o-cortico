import Link from "next/link";
import { mapsDirectionsUrl, site } from "@/lib/data";

type CtaButtonsProps = {
  layout?: "row" | "stack";
  size?: "sm" | "md";
  showInstagram?: boolean;
};

export default function CtaButtons({
  layout = "row",
  size = "md",
  showInstagram = true
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
        className={`rounded-full bg-[#2d1d14] ${buttonPadding} text-sm font-semibold text-white shadow-md shadow-black/10 transition hover:bg-[#3a261b]`}
      >
        Get directions
      </Link>
      {hasPhone ? (
        <Link
          href={`tel:${site.phone}`}
          className={`rounded-full border border-[#d8c8bb] ${buttonPadding} text-sm font-semibold text-[#2d1d14] transition hover:border-transparent hover:bg-[#efe2d5]`}
        >
          Call
        </Link>
      ) : (
        <button
          type="button"
          className={`cursor-not-allowed rounded-full border border-[#e2d5c9] ${buttonPadding} text-sm font-semibold text-[#9b8a7c]`}
          aria-disabled
        >
          Call
        </button>
      )}
      {showInstagram && (
        <Link
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full border border-[#d8c8bb] ${buttonPadding} text-sm font-semibold text-[#2d1d14] transition hover:border-transparent hover:bg-[#efe2d5]`}
        >
          Instagram DM
        </Link>
      )}
    </div>
  );
}
