import Image from "next/image";
import Link from "next/link";
import { menu } from "@/lib/data";

export default function MenuPreview() {
  const preview = menu.categories.slice(0, 3);

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {preview.map((category) => (
        <article
          key={category.title}
          className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#e4d8cc] bg-white/80"
        >
          {category.image ? (
            <div className="h-40 overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col gap-3 p-5">
            <h3 className="text-lg font-semibold text-[#2d1d14]">
              {category.title}
            </h3>
            {category.description ? (
              <p className="text-sm text-[#6f5a4d]">{category.description}</p>
            ) : null}
            <ul className="text-sm text-[#6f5a4d]">
              {category.items.slice(0, 3).map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
            <Link
              href="/menu"
              className="mt-auto text-sm font-semibold text-[#2d1d14] underline-offset-4 hover:underline"
            >
              See full menu
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
