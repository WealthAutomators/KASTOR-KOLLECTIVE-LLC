"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="border-y border-border py-16 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="editorial-label">Just in</p>
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl">New arrivals</h2>
          </div>
          <Link
            href="/new-arrivals"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
          >
            View all
          </Link>
        </div>
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
