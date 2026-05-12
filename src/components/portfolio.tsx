"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryFilters, galleryItems, type GalleryItem, type GalleryCategory } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () =>
      activeFilter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="portfolio" className="px-6 py-24 lg:px-12">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs tracking-[0.35em] text-white/60 uppercase">Portfolio</p>
            <h2 className="max-w-2xl text-3xl font-light text-white md:text-5xl">
              A curated archive of editorial moments, portraits, and cinematic frames.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {galleryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-4 py-2 text-xs tracking-[0.25em] uppercase transition ${
                  activeFilter === filter.value
                    ? "border-white bg-white text-black"
                    : "border-white/25 text-white/70 hover:border-white/60 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group relative overflow-hidden rounded-md border border-white/10 bg-black text-left ${item.colSpan ?? ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-xs tracking-[0.28em] text-white/80 uppercase">{item.title}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {selected && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-6" role="dialog" aria-modal="true">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-xs tracking-[0.32em] text-white uppercase"
          >
            Close
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              priority
              sizes="100vw"
              className="rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
