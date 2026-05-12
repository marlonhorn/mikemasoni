import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 lg:px-12">
      <div className="absolute inset-0 bg-[url('/media/hero.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
      <Reveal className="relative z-10 max-w-4xl">
        <p className="mb-5 text-xs tracking-[0.38em] text-white/70 uppercase">Photography + Direction</p>
        <h1 className="max-w-3xl text-4xl leading-tight font-light tracking-wide text-white md:text-6xl">
          Cinematic visual stories shaped with elegance, movement, and emotion.
        </h1>
      </Reveal>
    </section>
  );
}
