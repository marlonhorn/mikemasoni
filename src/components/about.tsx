import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-12">
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[460px] overflow-hidden rounded-md border border-white/10">
          <Image src="/media/about.svg" alt="Mike Masoni portrait" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <p className="mb-4 text-xs tracking-[0.35em] text-white/60 uppercase">About</p>
          <h2 className="mb-7 text-3xl font-light text-white md:text-5xl">Mike Masoni</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Mike is a photographer and videographer crafting visual narratives with fashion-inspired composition and cinematic rhythm. His work blends raw emotion, precision lighting, and timeless minimalism.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
