import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/products";

const productPrograms = [
  {
    title: "Whole Spices",
    description:
      "Core export portfolio including cumin, coriander, fennel, fenugreek, turmeric, chilli, black pepper, and cardamom.",
  },
  {
    title: "Ground Spices",
    description:
      "Program-based support for buyer-defined powder specifications through approved processing pathways.",
  },
  {
    title: "Organic Spices",
    description:
      "Requirement-led sourcing through certified organic channels depending on product and destination market.",
  },
  {
    title: "Custom Blends",
    description:
      "Custom seasoning and spice blend development support for qualified volume programs.",
  },
  {
    title: "Private Label Products",
    description:
      "Retail-ready and foodservice label programs with packaging and documentation alignment.",
  },
];

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore RD Naturals whole spice catalog including cumin, coriander, fennel, fenugreek, turmeric, chilli, black pepper, and cardamom.",
  keywords: [
    "Indian whole spices exporter",
    "bulk spice supplier India",
    "private label spices",
    "ground spices export India",
    "organic spices India export",
  ],
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <section className="section-shell py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Product Catalog"
            title="Export-ready whole spices for international buyers."
            description="Browse our core spice portfolio and open each product for detailed export information, available grades, packaging options, and inquiry support."
          />
        </Reveal>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Product Programs"
              title="Category support for importers, distributors, and private labels."
              description="Beyond listed SKUs, we support specification-led sourcing and processing programs based on buyer requirements."
              align="center"
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productPrograms.map((program, index) => (
              <Reveal key={program.title} delayMs={Math.min(index * 60, 260)}>
                <article className="card-panel h-full p-5">
                  <h3 className="text-lg font-black text-[var(--color-forest)]">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/85">
                    {program.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <article className="card-panel border-[var(--color-forest)]/20 bg-white p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-forest-soft)]">
              Bulk and private label inquiries
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight [text-wrap:balance] text-[var(--color-forest)] sm:text-3xl">
              Need a tailored quotation for multiple products?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-slate)]/85">
              Share your destination market, expected order volume, and preferred grades. Our team
              will prepare a detailed export quotation.
            </p>
            <div className="mt-6 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link
                href="/#inquiry"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-forest)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-forest-soft)] sm:w-auto sm:text-sm"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-forest)]/35 px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)] transition hover:bg-[var(--color-forest)] hover:text-white sm:w-auto sm:text-sm"
              >
                Contact Team
              </Link>
            </div>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
