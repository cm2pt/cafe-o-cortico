import Link from "next/link";
import { site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

type SocialFeedsProps = {
  lang: Lang;
};

const facebookEmbedUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  site.facebookUrl
)}&tabs=timeline&width=500&height=520&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`;

export default function SocialFeeds({ lang }: SocialFeedsProps) {
  return (
    <section className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
          {t(ui.labels.latestSocial, lang)}
        </p>
        <h3 className="text-2xl font-semibold text-[#2d1d14]">
          {t(ui.labels.latestSocialTitle, lang)}
        </h3>
        <p className="text-sm text-[#6f5a4d]">
          {t(ui.labels.latestSocialCopy, lang)}
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-[#efe2d5] bg-white p-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[#2d1d14]">Facebook</p>
          <Link
            href={site.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f5a4d] underline-offset-4 hover:underline"
          >
            {t(ui.labels.openPage, lang)}
          </Link>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#efe2d5]">
          <iframe
            title="Facebook timeline"
            src={facebookEmbedUrl}
            width="100%"
            height="680"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </section>
  );
}
