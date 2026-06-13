import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  documentationSupport,
  exportCapabilityHighlights,
  exportMarkets,
  incotermSupport,
  industriesServed,
  logisticsSupport,
  moqGuidance,
  packagingCapabilities,
} from "@/lib/company";

export const metadata: Metadata = {
  title: "Export Capabilities",
  description:
    "Explore RD Naturals export capabilities including countries served, MOQ guidance, Incoterm support, documentation, packaging, and shipment planning.",
  keywords: [
    "spice export capabilities",
    "Indian spice exporter FOB CIF",
    "bulk spice shipment India",
    "private label spice export",
    "spice export documentation",
  ],
  alternates: {
    canonical: "/export-capabilities",
  },
};

export default function ExportCapabilitiesPage() {
  return (
    <main className="flex-1">
      <section className="section-shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Export Capabilities"
            title="Built for dependable container-scale spice supply."
            description="From commercial terms and packaging formats to documentation and dispatch coordination, our export system is structured for long-term importer programs."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exportCapabilityHighlights.map((item, index) => (
            <Reveal key={item} delayMs={Math.min(index * 60, 260)}>
              <article className="card-panel h-full p-5">
                <p className="text-sm font-semibold leading-6 text-[var(--color-slate)]">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-panel p-6 sm:p-8">
              <h2 className="text-xl font-black text-[var(--color-forest)]">Markets We Serve</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">
                Active buyer support across established import destinations with planning for repeat
                shipment cycles.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {exportMarkets.map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-[var(--color-forest)]/20 bg-[var(--color-forest)]/5 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={90}>
            <article className="card-panel p-6 sm:p-8">
              <h2 className="text-xl font-black text-[var(--color-forest)]">Industries We Support</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {industriesServed.map((industry) => (
                  <li key={industry} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {industry}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Commercial Structure"
            title="Flexible deal formats for professional buyers."
            description="We align shipment terms and execution with buyer risk preference, destination, and volume strategy."
          />
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-panel p-6 sm:p-8">
              <h3 className="text-lg font-black text-[var(--color-forest)]">Incoterm Support</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {incotermSupport.map((item) => (
                  <li key={item} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="card-panel p-6 sm:p-8">
              <h3 className="text-lg font-black text-[var(--color-forest)]">MOQ Guidance</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {moqGuidance.map((item) => (
                  <li key={item} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Execution and Compliance"
              title="Packaging, logistics, and documentation under one export workflow."
              align="center"
            />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="card-panel h-full p-6">
                <h3 className="text-base font-black text-[var(--color-forest)]">Packaging Capabilities</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-slate)]/85">
                  {packagingCapabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delayMs={70}>
              <article className="card-panel h-full p-6">
                <h3 className="text-base font-black text-[var(--color-forest)]">Logistics Support</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-slate)]/85">
                  {logisticsSupport.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delayMs={120}>
              <article className="card-panel h-full p-6">
                <h3 className="text-base font-black text-[var(--color-forest)]">Documentation Support</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-slate)]/85">
                  {documentationSupport.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 pb-20">
        <Reveal>
          <article className="card-panel bg-[var(--color-forest)] p-6 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Buyer CTA
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight [text-wrap:balance] sm:text-3xl">
              Planning a long-term spice import program?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
              Share your product list, target volumes, and destination port. We will structure a
              practical commercial and shipment proposal aligned to your buying cycle.
            </p>
            <div className="mt-7 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link
                href="/#inquiry"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)] transition hover:bg-[var(--color-gold-soft)] sm:w-auto sm:text-sm"
              >
                Request Quotation
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-[var(--color-gold-soft)] hover:text-[var(--color-gold-soft)] sm:w-auto sm:text-sm"
              >
                Speak to Export Team
              </Link>
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
