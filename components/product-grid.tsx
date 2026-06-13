import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { Reveal } from "@/components/reveal";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Reveal key={product.slug} delayMs={Math.min(index * 70, 280)}>
          <article className="card-panel h-full overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black [text-wrap:balance] text-[var(--color-forest)] sm:text-xl">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-slate)]/80">
                {product.shortDescription}
              </p>
              <Link
                href={`/products/${product.slug}`}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[var(--color-forest)] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-forest)] transition hover:bg-[var(--color-forest)] hover:text-white sm:w-auto"
              >
                View Details
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
