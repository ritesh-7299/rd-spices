import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certificationProfiles } from "@/lib/company";

const buyerDocumentationFlow = [
  "Share requirement and destination market details",
  "Align product scope and compliance expectation",
  "Confirm applicable registration/certification path",
  "Provide relevant documentation during onboarding and shipment planning",
];

export const metadata: Metadata = {
  title: "Certifications and Compliance",
  description:
    "Review RD Naturals certification and compliance support including IEC, APEDA, Spice Board, FSSAI, and program-based ISO, HACCP, Halal, Kosher, and Organic options.",
  keywords: [
    "spice exporter certifications India",
    "IEC APEDA Spice Board exporter",
    "Halal Kosher organic spice export",
    "FSSAI HACCP spice exporter",
    "spice compliance documentation",
  ],
  alternates: {
    canonical: "/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <main className="flex-1">
      <section className="section-shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications and Compliance"
            title="Documentation clarity for importer confidence."
            description="Compliance requirements vary by market and buyer category. We support a practical documentation workflow so importers can evaluate and onboard with confidence."
          />
        </Reveal>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Certification Profiles"
              title="Aligned to buyer qualification and market requirements."
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {certificationProfiles.map((item, index) => (
              <Reveal key={item.name} delayMs={Math.min(index * 60, 260)}>
                <article className="card-panel h-full p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-forest-soft)]/80">
                    {item.name}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">{item.scope}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]">
                    <span className="font-semibold text-[var(--color-forest)]">Buyer value:</span>{" "}
                    {item.buyerValue}
                  </p>
                  <p className="mt-3 rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-forest-soft)]">
                    {item.status}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <Reveal>
          <article className="card-panel p-6 sm:p-8">
            <h2 className="text-xl font-black text-[var(--color-forest)]">Buyer Documentation Workflow</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">
              To maintain document integrity and relevance, we align the documentation package to
              product scope, destination market, and buyer onboarding requirements.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {buyerDocumentationFlow.map((step, index) => (
                <p
                  key={step}
                  className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3 text-sm font-semibold text-[var(--color-slate)]"
                >
                  Step {index + 1}: {step}
                </p>
              ))}
            </div>
          </article>
        </Reveal>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <article className="card-panel bg-[var(--color-forest)] p-6 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Compliance CTA
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight [text-wrap:balance] sm:text-3xl">
              Need a certification-fit supply proposal for your market?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
              Share your destination country, product list, and compliance checklist. Our team will
              map the right documentation and execution model for your program.
            </p>
            <div className="mt-7 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link
                href="/#inquiry"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)] transition hover:bg-[var(--color-gold-soft)] sm:w-auto sm:text-sm"
              >
                Request Compliance Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-[var(--color-gold-soft)] hover:text-[var(--color-gold-soft)] sm:w-auto sm:text-sm"
              >
                Contact Export Team
              </Link>
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
