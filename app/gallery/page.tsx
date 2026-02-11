import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import { gallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | Café O Cortiço",
  description: "A look inside Café O Cortiço in Torres Novas."
};

export default function GalleryPage() {
  return (
    <main className="pb-20 pt-12">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7768]">
            Gallery
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#2d1d14]">
            A calm corner in Torres Novas
          </h1>
          <p className="mt-4 text-base text-[#6f5a4d]">
            Placeholders today, real photography later.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {gallery.images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white/90"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={960}
                height={720}
                className="h-full w-full object-cover"
              />
              {image.credit ? (
                <figcaption className="px-4 py-2 text-xs text-[#8b7768]">
                  {image.credit}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </Container>
    </main>
  );
}
