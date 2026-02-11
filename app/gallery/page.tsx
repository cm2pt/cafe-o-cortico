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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
            {t(ui.nav.gallery, lang)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#2d1d14]">
            {t(ui.labels.galleryTitle, lang)}
          </h1>
          <p className="mt-4 text-base text-[#6f5a4d]">
            {t(ui.labels.gallerySubtitle, lang)}
          </p>
        </div>
      </Container>

      <div className="mt-10">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 pt-4">
          {gallery.images.map((image, index) => (
            <figure
              key={image.src}
              className="min-w-[260px] flex-1 snap-start overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white/90 shadow-sm md:min-w-[360px]"
            >
              <div className="relative h-72 w-full bg-[#f2e8de]">
                <Image
                  src={image.src}
                  alt={t(image.alt, lang)}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      <Container>
        <div className="mt-10">
          <InstagramPreview lang={lang} />
        </div>
      </Container>
    </main>
  );
}
