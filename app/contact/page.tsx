import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { companyProfile } from "@/lib/company";

const inquiryChecklist = [
  "Product(s) required and preferred grade",
  "Target quantity and buying frequency",
  "Destination country and port",
  "Preferred commercial term (FOB/CFR/CIF)",
  "Packaging preference and compliance requirements",
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RD Naturals for export inquiries, bulk quotations, and global spice supply discussions.",
  keywords: [
    "contact Indian spice exporter",
    "request spice export quote",
    "bulk spice inquiry India",
    "spice import supplier contact",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="section-shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Connect with RD Naturals export team."
            description="Send your requirement through the contact form and we will respond with the right product and pricing details for your market."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delayMs={100}>
            <aside className="space-y-5">
              <article className="card-panel p-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-forest)]">
                  Contact Details
                </h2>
                <ul className="mt-4 space-y-3 break-words text-sm leading-6 text-[var(--color-slate)]/85">
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
                <Link
                  href={`https://wa.me/${companyProfile.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-forest)] px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-forest-soft)] sm:w-auto"
                >
                  WhatsApp Us
                </Link>
              </article>
              <article className="card-panel overflow-hidden">
                <iframe
                  title="RD Naturals location map"
                  src="https://www.google.com/maps?q=Navi+Mumbai,+Maharashtra,+India&output=embed"
                  className="h-64 w-full border-0 sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </article>
            </aside>
          </Reveal>
        </div>

        <Reveal className="mt-10" delayMs={130}>
          <article className="card-panel p-6 sm:p-8">
            <h2 className="text-lg font-black text-[var(--color-forest)]">
              To receive an accurate export quotation quickly
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">
              Including these details helps our team provide a structured and faster response.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {inquiryChecklist.map((item) => (
                <p
                  key={item}
                  className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3 text-sm font-semibold text-[var(--color-slate)]"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
