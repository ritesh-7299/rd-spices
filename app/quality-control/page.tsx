import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/company";

const qualityParameters = [
  "Moisture level by product category",
  "Foreign matter and cleanliness status",
  "Color and visual grade consistency",
  "Aroma profile and organoleptic checks",
  "Buyer-defined specification checkpoints",
];

const finalInspectionPoints = [
  "Lot coding and traceability references",
  "Packing integrity and labeling checks",
  "Dispatch approval against buyer-confirmed specification",
  "Pre-shipment sample matching for repeat programs",
];

export const metadata: Metadata = {
  title: "Quality Control",
  description:
    "Understand RD Naturals quality control workflow from sourcing and cleaning to testing, packaging, and final export inspection.",
  keywords: [
    "spice quality control India",
    "export spice inspection process",
    "sortex spice processing",
    "food safety spice exporter",
    "spice shipment quality assurance",
  ],
  alternates: {
    canonical: "/quality-control",
  },
};

export default function QualityControlPage() {
  return (
    <main className="flex-1">
      <section className="section-shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Quality Control"
            title="Process-driven quality assurance built for repeat global orders."
            description="Our quality framework is designed to reduce variability in commercial spice shipments and build confidence for long-term import programs."
          />
        </Reveal>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Farm to Dispatch Workflow"
              title="Structured checkpoints across sourcing, processing, and shipment."
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delayMs={Math.min(index * 65, 280)}>
                <article className="card-panel h-full p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-forest-soft)]/80">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[var(--color-forest)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">{step.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.checkpoints.map((checkpoint) => (
                      <span
                        key={checkpoint}
                        className="rounded-full border border-[var(--color-forest)]/20 bg-[var(--color-forest)]/5 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.08em] text-[var(--color-forest-soft)]"
                      >
                        {checkpoint}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-panel p-6 sm:p-8">
              <h2 className="text-xl font-black text-[var(--color-forest)]">Quality Parameters Monitored</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {qualityParameters.map((item) => (
                  <li key={item} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delayMs={90}>
            <article className="card-panel p-6 sm:p-8">
              <h2 className="text-xl font-black text-[var(--color-forest)]">Final Inspection and Dispatch</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {finalInspectionPoints.map((item) => (
                  <li key={item} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <article className="card-panel border-[var(--color-forest)]/20 bg-white p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-forest-soft)]">
              Quality CTA
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight [text-wrap:balance] text-[var(--color-forest)] sm:text-3xl">
              Need quality parameters aligned to your internal specs?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-slate)]/85">
              Share your product specification sheet, quality expectations, and destination market.
              We will recommend the most suitable supply workflow.
            </p>
            <div className="mt-7 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link
                href="/#inquiry"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-forest)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-forest-soft)] sm:w-auto sm:text-sm"
              >
                Share Requirement
              </Link>
              <Link
                href="/certifications"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-forest)]/35 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)] transition hover:bg-[var(--color-forest)] hover:text-white sm:w-auto sm:text-sm"
              >
                View Certifications
              </Link>
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
