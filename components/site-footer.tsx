import Link from "next/link";
import { companyProfile, socialLinks } from "@/lib/company";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-forest)]/10 bg-[var(--color-forest)] text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
            {companyProfile.tagline}
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.08em]">
            {companyProfile.name}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/85">
            Trusted supplier of premium whole spices for importers, wholesalers, distributors, food
            manufacturers, spice traders, and private label buyers worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-gold-soft)]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--color-gold-soft)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-gold-soft)]">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            <li>
              <span className="font-semibold">Email:</span> {companyProfile.email}
            </li>
            <li>
              <span className="font-semibold">Phone:</span> {companyProfile.phone}
            </li>
            <li>
              <span className="font-semibold">Address:</span> {companyProfile.address}
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] transition hover:border-[var(--color-gold-soft)] hover:text-[var(--color-gold-soft)]"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
        Copyright {new Date().getFullYear()} {companyProfile.name}. All rights reserved.
      </div>
    </footer>
  );
}
