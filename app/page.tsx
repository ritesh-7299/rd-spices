import Image from "next/image";
import Link from "next/link";
import { ExportInquiryForm } from "@/components/export-inquiry-form";
import { ProductGrid } from "@/components/product-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  aboutImage,
  companyProfile,
  exportMarkets,
  heroImage,
  processSteps,
  trustElements,
  whyChooseUs,
} from "@/lib/company";
import { products } from "@/lib/products";

const heroHighlights = ["Export Worldwide", "Quality Assured", "Reliable Supply Chain"];
const heroTrustStrip = trustElements.slice(0, 4);

export default function HomePage() {
  return (
    <main className="flex-1">
      <section id="home" className="relative isolate scroll-mt-32 overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 -z-20">
          <Image
            src={heroImage}
            alt="Premium Indian spices assortment"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,33,24,0.86),rgba(7,33,24,0.48),rgba(7,33,24,0.68))]" />
        </div>

        <div className="section-shell py-20 md:py-24 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold-soft)]">
              Premium export quality from India
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Premium Indian Spices Exporter from India
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/92 sm:text-lg">
              Supplying Quality Whole Spices to Global Markets with Reliability, Consistency, and
              Competitive Pricing.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#inquiry"
                className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)] transition hover:bg-[var(--color-gold-soft)] sm:text-sm"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--color-gold-soft)]/90 bg-white/12 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-[var(--color-gold-soft)] sm:text-sm"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal className="mt-10 grid gap-3 sm:max-w-2xl sm:grid-cols-3" delayMs={120}>
            {heroHighlights.map((item) => (
              <p
                key={item}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur sm:text-sm"
              >
                {item}
              </p>
            ))}
          </Reveal>

          <Reveal className="mt-4 flex flex-wrap gap-2 sm:max-w-3xl" delayMs={180}>
            {heroTrustStrip.map((item) => (
              <p
                key={item}
                className="rounded-full border border-[var(--color-gold-soft)]/70 bg-[rgba(230,211,159,0.12)] px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-[var(--color-gold-soft)]"
              >
                {item}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="about" className="section-shell scroll-mt-32 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="About RD Naturals"
              title="Consistent sourcing and dependable spice exports for global buyers."
              description={companyProfile.intro}
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <p className="card-panel px-4 py-3 text-sm font-semibold text-[var(--color-forest)]">
                Reliable Supplier Network
              </p>
              <p className="card-panel px-4 py-3 text-sm font-semibold text-[var(--color-forest)]">
                Quality Focused
              </p>
              <p className="card-panel px-4 py-3 text-sm font-semibold text-[var(--color-forest)]">
                Competitive Pricing
              </p>
              <p className="card-panel px-4 py-3 text-sm font-semibold text-[var(--color-forest)]">
                Global Export Support
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="card-panel overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={aboutImage}
                  alt="Spice sourcing and quality checks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-14">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Trust Elements"
              title="Built for international B2B sourcing confidence."
              description="Our operations are structured for compliant export handling, quality control, and dependable global deliveries."
              align="center"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {trustElements.map((item) => (
                <p
                  key={item}
                  className="rounded-full border border-[var(--color-forest)]/20 bg-[var(--color-forest)]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="products" className="section-shell scroll-mt-32 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="Whole spice catalog for importers, distributors, and private label buyers."
            description="Each product lot is selected and packed for export performance, quality consistency, and competitive global trade."
          />
        </Reveal>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="soft-grid border-y border-black/10 py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Focused on reliability, quality, and long-term trade partnerships."
              align="center"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point, index) => (
              <Reveal key={point} delayMs={Math.min(index * 60, 300)}>
                <article className="card-panel flex h-full items-start gap-4 p-5">
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-[var(--color-slate)]">{point}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="section-shell scroll-mt-32 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Export Markets"
            title="Serving importers and distributors across global markets."
            description="Current focus markets across the Middle East, United Kingdom, Canada, and the United States."
            align="center"
          />
        </Reveal>

        <Reveal className="mt-10 card-panel overflow-hidden" delayMs={80}>
          <div className="relative aspect-[16/9] min-h-[260px] bg-[var(--color-mist)] sm:min-h-[320px]">
            <Image
              src="/world-map.svg"
              alt="World map highlighting RD Naturals export markets"
              fill
              className="object-contain p-4 sm:p-6"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 80rem"
            />
          </div>
          <div className="border-t border-black/10 p-5">
            <div className="flex flex-wrap gap-2">
              {exportMarkets.map((market) => (
                <span
                  key={market}
                  className="rounded-full border border-[var(--color-forest)]/20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-forest)]"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-black/10 bg-white/65 py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="Clear and transparent export workflow from inquiry to delivery."
              align="center"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={`${step.title}-${index}`} delayMs={Math.min(index * 70, 260)}>
                <article className="card-panel h-full p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-forest-soft)]/80">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[var(--color-forest)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-shell scroll-mt-32 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Inquiry Form"
            title="Request your export quotation."
            description="Share your target product, quantity, and destination details. Our export team will respond with a tailored quotation."
          />
        </Reveal>
        <Reveal className="mt-10" delayMs={80}>
          <ExportInquiryForm />
        </Reveal>
      </section>
    </main>
  );
}
