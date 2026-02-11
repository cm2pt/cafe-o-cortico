import Image from "next/image";
import Link from "next/link";
import { gallery, site } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { t, ui } from "@/lib/i18n";

export default function InstagramPreview({ lang }: { lang: Lang }) {
  const preview = gallery.images.slice(0, 6);

  return (
    <section className="rounded-3xl border border-[#e4d8cc] bg-white/90 p-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
          {t(ui.labels.latestSocial, lang)}
        </p>
        <h3 className="text-2xl font-semibold text-[#2d1d14]">
          {t(ui.labels.followInstagram, lang)}
        </h3>
        <p className="text-sm text-[#6f5a4d]">
          {t(ui.labels.followInstagramCopy, lang)}
        </p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {preview.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-2xl border border-[#efe2d5]">
            <Image
              src={image.src}
              alt={t(image.alt, lang)}
              width={400}
              height={400}
              className="h-36 w-full object-cover"
            />
          </div>
        ))}
      </div>
      <Link
        href={site.social.instagram}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full border border-[#d8c8bb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1d14] transition hover:border-transparent hover:bg-[#efe2d5]"
      >
        {t(ui.cta.instagram, lang)}
      </Link>
    </section>
  );
}
