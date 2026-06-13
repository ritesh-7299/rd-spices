import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  buyersTrustPoints,
  companyProfile,
  coreValues,
  processSteps,
  trustElements,
} from "@/lib/company";

const infrastructureHighlights = [
  "Sourcing network connected to key spice-growing regions across India.",
  "Processing workflow coordinated with cleaning, sortex, and grading capabilities.",
  "Packaging support for bulk export and private label program requirements.",
  "Documentation and dispatch coordination for repeat buyer programs.",
];

const teamCommitments = [
  "Dedicated export communication from inquiry to shipment closure.",
  "Specification alignment support before commercial confirmation.",
  "Structured order planning for seasonal and monthly buying cycles.",
  "Long-term partnership approach focused on consistency, not one-off trading.",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about RD Naturals, our mission, values, export process, and why global buyers trust us for premium Indian whole spices.",
  keywords: [
    "about Indian spice exporter",
    "spice export company profile",
    "Indian whole spices export partner",
    "bulk spice sourcing India",
    "private label spice supplier India",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="section-shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Company Introduction"
            title="RD Naturals is built for dependable international spice trade."
            description={companyProfile.intro}
          />
        </Reveal>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="card-panel h-full p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-forest-soft)]">
                Mission
              </p>
              <h2 className="mt-2 text-2xl font-black text-[var(--color-forest)]">
                Reliable spice exports with global quality consistency.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]/85">
                Our mission is to supply premium whole spices from India to global buyers through
                transparent sourcing, strict quality checks, and dependable shipping support.
              </p>
            </article>
          </Reveal>
          <Reveal delayMs={100}>
            <article className="card-panel h-full p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-forest-soft)]">
                Vision
              </p>
              <h2 className="mt-2 text-2xl font-black text-[var(--color-forest)]">
                A trusted long-term spice supply partner for global markets.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]/85">
                We aim to become the preferred Indian whole spice export partner for importers,
                distributors, food manufacturers, and private label buyers worldwide.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-16">
        <Reveal>
          <SectionHeading eyebrow="Core Values" title="How we operate every day." align="center" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {coreValues.map((value, index) => (
            <Reveal key={value} delayMs={Math.min(index * 70, 220)}>
              <article className="card-panel flex h-full gap-4 p-5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)] text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold leading-6 text-[var(--color-slate)]">{value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-panel p-6 sm:p-8">
              <SectionHeading
                eyebrow="Why Buyers Trust RD Naturals"
                title="Structured for confidence in every shipment."
              />
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {buyersTrustPoints.map((point) => (
                  <li key={point} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delayMs={110}>
            <article className="card-panel p-6 sm:p-8">
              <SectionHeading eyebrow="Trust Elements" title="Compliance-ready export operations." />
              <div className="mt-6 flex flex-wrap gap-2">
                {trustElements.map((item) => (
                  <p
                    key={item}
                    className="rounded-full border border-[var(--color-forest)]/20 bg-[var(--color-forest)]/5 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Export Process"
            title="Step-by-step quality process from farmer sourcing to shipment."
            description="We follow consistent export best practices so buyers get predictable quality and dependable supply."
            align="center"
          />
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delayMs={Math.min(index * 70, 280)}>
              <article className="card-panel h-full p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-forest-soft)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-[var(--color-forest)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">{step.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.checkpoints.map((checkpoint) => (
                    <span
                      key={checkpoint}
                      className="rounded-full border border-[var(--color-forest)]/20 bg-[var(--color-forest)]/5 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-[var(--color-forest-soft)]"
                    >
                      {checkpoint}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-panel p-6 sm:p-8">
              <SectionHeading
                eyebrow="Infrastructure"
                title="Operational setup built for export consistency."
              />
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {infrastructureHighlights.map((point) => (
                  <li key={point} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delayMs={110}>
            <article className="card-panel p-6 sm:p-8">
              <SectionHeading
                eyebrow="Team and Global Commitment"
                title="A partnership mindset for long-term importers."
              />
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {teamCommitments.map((point) => (
                  <li key={point} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <article className="card-panel bg-[var(--color-forest)] p-6 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Contact CTA
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight [text-wrap:balance] sm:text-3xl">
              Ready to discuss your spice import requirement?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
              Connect with our export team for product specifications, pricing, and shipping plans
              based on your market requirement.
            </p>
            <div className="mt-7 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)] transition hover:bg-[var(--color-gold-soft)] sm:w-auto sm:text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/#inquiry"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-[var(--color-gold-soft)] hover:text-[var(--color-gold-soft)] sm:w-auto sm:text-sm"
              >
                Request Export Quote
              </Link>
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
