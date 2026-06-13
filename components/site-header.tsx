import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-forest)]/10 bg-[var(--color-ivory)]/95 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="group">
          <span className="block text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-forest)]/75">
            Indian Spice Exporter
          </span>
          <span className="block text-xl font-black uppercase tracking-[0.12em] text-[var(--color-forest)] transition group-hover:text-[var(--color-forest-soft)]">
            RD Naturals
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--color-slate)] transition hover:text-[var(--color-forest-soft)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#inquiry"
          className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[var(--color-forest)] shadow-[0_12px_24px_-14px_rgba(16,59,47,0.8)] transition hover:bg-[var(--color-gold-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/60 md:px-5 md:text-sm"
        >
          Request Quote
        </Link>
      </div>

      <div className="section-shell pb-3 md:hidden">
        <nav className="flex gap-2 overflow-x-auto pb-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--color-forest-soft)]">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-[var(--color-forest)]/15 bg-white/80 px-3 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
