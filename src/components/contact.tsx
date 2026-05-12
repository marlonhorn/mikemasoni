"use client";

import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-12">
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs tracking-[0.35em] text-white/60 uppercase">Contact</p>
          <h2 className="mb-5 text-3xl font-light text-white md:text-5xl">Let&apos;s create something unforgettable.</h2>
          <p className="mb-8 text-white/70">Available worldwide for editorial, commercial, and cinematic collaborations.</p>
          <a href="mailto:hello@mikemasoni.com" className="text-sm tracking-[0.25em] text-white uppercase hover:text-white/70">
            hello@mikemasoni.com
          </a>
          <div className="mt-6 flex gap-6 text-xs tracking-[0.25em] text-white/60 uppercase">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:text-white">Vimeo</a>
          </div>
        </div>

        <form className="grid gap-4 rounded-md border border-white/15 bg-white/[0.02] p-7" onSubmit={(event) => event.preventDefault()}>
          <input className="border-b border-white/20 bg-transparent px-1 py-3 text-white outline-none placeholder:text-white/40" placeholder="Name" aria-label="Name" name="name" />
          <input className="border-b border-white/20 bg-transparent px-1 py-3 text-white outline-none placeholder:text-white/40" placeholder="Email" aria-label="Email" name="email" type="email" />
          <textarea className="min-h-28 border-b border-white/20 bg-transparent px-1 py-3 text-white outline-none placeholder:text-white/40" placeholder="Project details" aria-label="Project details" name="message" />
          <button type="submit" className="mt-3 w-fit rounded-full border border-white px-5 py-2 text-xs tracking-[0.28em] text-white uppercase transition hover:bg-white hover:text-black">
            Send Inquiry
          </button>
        </form>
      </Reveal>
    </section>
  );
}
