import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExportInquiryForm } from "@/components/export-inquiry-form";
import { Reveal } from "@/components/reveal";
import { getProductBySlug, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: `${product.name} export from India. ${product.shortDescription}`,
    keywords: [
      `${product.name} exporter`,
      `${product.name} wholesale supplier`,
      `${product.name} export from India`,
      "Indian spice exporter",
      "bulk spice supply",
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.overview,
    image: `https://rdnaturals.in${product.image}`,
    brand: {
      "@type": "Brand",
      name: "RD Naturals",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Origin",
        value: product.origin,
      },
      {
        "@type": "PropertyValue",
        name: "Packaging Options",
        value: product.packagingOptions.join(", "),
      },
    ],
    category: "Whole Spices",
    url: `https://rdnaturals.in/products/${product.slug}`,
  };

  return (
    <main className="flex-1">
      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="card-panel overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={90}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-forest-soft)]">
              Product Overview
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight [text-wrap:balance] text-[var(--color-forest)] sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--color-slate)]/85">{product.overview}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article className="card-panel p-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]">
                  Origin
                </h2>
                <p className="mt-2 text-sm text-[var(--color-slate)]/85">{product.origin}</p>
              </article>
              <article className="card-panel p-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]">
                  Available Grades
                </h2>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-slate)]/85">
                  {product.availableGrades.map((grade) => (
                    <li key={grade}>{grade}</li>
                  ))}
                </ul>
              </article>
              <article className="card-panel p-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]">
                  Packaging Options
                </h2>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-slate)]/85">
                  {product.packagingOptions.map((packaging) => (
                    <li key={packaging}>{packaging}</li>
                  ))}
                </ul>
              </article>
              <article className="card-panel p-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-forest)]">
                  Applications
                </h2>
                <ul className="mt-2 space-y-1 text-sm text-[var(--color-slate)]/85">
                  {product.applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70 py-16">
        <div className="section-shell">
          <Reveal>
            <article className="card-panel p-6 sm:p-8">
              <h2 className="text-2xl font-black text-[var(--color-forest)]">Export Information</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-slate)]/85">
                {product.exportInformation.map((item) => (
                  <li key={item} className="rounded-xl border border-[var(--color-forest)]/10 bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-16">
        <Reveal>
          <h2 className="text-2xl font-black [text-wrap:balance] text-[var(--color-forest)] sm:text-3xl">
            Request Quote for {product.name}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-slate)]/85">
            Share your required quantity and destination market. Our export team will send a tailored
            quotation with packaging and shipment details.
          </p>
        </Reveal>
        <Reveal className="mt-8" delayMs={90}>
          <ExportInquiryForm defaultProduct={product.name} />
        </Reveal>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </main>
  );
}
