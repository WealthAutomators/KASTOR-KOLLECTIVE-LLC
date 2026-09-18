"use client";

import { homepageEssentialsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function DealsOfTheDay() {
  const products = getProductsBySlugs(homepageEssentialsSlugs);

  return (
    <section className="bg-parchment/40 py-16 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label">The edit</p>
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Curated essentials
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              A short list of objects that earn their place — useful, quiet, and worth living with.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
          >
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
