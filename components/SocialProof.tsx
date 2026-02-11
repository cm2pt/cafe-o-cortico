import Link from "next/link";
import { site, testimonials } from "@/lib/data";
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
      <div className="mt-4 grid gap-3 text-sm text-[#6f5a4d]">
        {testimonials.items.map((item) => (
          <p key={t(item.quote, lang)}>
            “{t(item.quote, lang)}”
          </p>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7768]">
        <Link href={site.googleMapsPlaceUrl} target="_blank" rel="noreferrer">
          Google Maps
        </Link>
        <Link href={site.social.facebook} target="_blank" rel="noreferrer">
          Facebook
        </Link>
        <Link href={site.social.instagram} target="_blank" rel="noreferrer">
          Instagram
        </Link>
      </div>
    </div>
  );
}
