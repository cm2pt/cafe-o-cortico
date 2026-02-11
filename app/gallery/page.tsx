import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Gallery | Café O Cortiço",
  description: "A look inside Café O Cortiço in Torres Novas."
};

const galleryImages = [
  { src: "/gallery-1.svg", alt: "Coffee bar" },
  { src: "/gallery-2.svg", alt: "Pastry display" },
  { src: "/gallery-3.svg", alt: "Cozy seating" },
  { src: "/gallery-4.svg", alt: "Barista at work" },
  { src: "/gallery-5.svg", alt: "Afternoon light" },
  { src: "/gallery-6.svg", alt: "Shared table" }
];

export default function GalleryPage() {
  return (
    <main className="pb-20 pt-12">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Gallery
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
            A calm corner in Torres Novas
          </h1>
          <p className="mt-4 text-base text-muted">
            Sunlit textures, warm tones, and a welcoming place to pause.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-3xl border border-outline bg-card"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
