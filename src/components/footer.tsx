export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs tracking-[0.25em] text-white/45 uppercase md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Mike Masoni</span>
        <span>Photography / Videography / Direction</span>
      </div>
    </footer>
  );
}
