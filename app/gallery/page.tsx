import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import Container from "@/components/Container";
import InstagramPreview from "@/components/InstagramPreview";
import { gallery } from "@/lib/data";
import { resolveLang, t, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Galeria | Café O Cortiço",
  description: "Fotos reais do Café O Cortiço em Torres Novas."
};

export default async function GalleryPage() {
  const lang = resolveLang((await cookies()).get("lang")?.value);

  return (
    <main className="pb-20 pt-12">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            {t(ui.nav.gallery, lang)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--accent)]">
            {t(ui.labels.galleryTitle, lang)}
          </h1>
          <p className="mt-4 text-base text-[var(--muted)]">
            {t(ui.labels.gallerySubtitle, lang)}
          </p>
        </div>
      </Container>

      <section className="mt-10">
        <Container>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {gallery.images.map((image) => (
              <figure
                key={image.src}
                className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-[var(--line)] bg-white/90"
              >
                <div className="relative w-full">
                  <Image
                    src={image.src}
                    alt={t(image.alt, lang)}
                    width={900}
                    height={700}
                    className="h-auto w-full object-cover"
                  />
                </div>
                {image.caption ? (
                  <figcaption className="px-4 py-3 text-xs text-[var(--primary)]">
                    {t(image.caption, lang)}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <div className="mt-10">
          <InstagramPreview lang={lang} />
        </div>
      </Container>
    </main>
  );
}
