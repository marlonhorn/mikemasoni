import { Reveal } from "@/components/reveal";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:px-12">
      <Reveal className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs tracking-[0.35em] text-white/60 uppercase">Services</p>
        <h2 className="mb-10 max-w-2xl text-3xl font-light text-white md:text-5xl">Creative services for brands, publications, and personal stories.</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-md border border-white/15 bg-white/[0.02] p-8 transition hover:border-white/35 hover:bg-white/[0.05]">
              <h3 className="mb-3 text-xl font-light text-white">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
