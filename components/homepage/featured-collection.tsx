"use client";

import { featuredCollection, homepageFeaturedSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";
import Image from "next/image";

export function FeaturedCollection() {
  const products = getProductsBySlugs(homepageFeaturedSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="editorial-label">Featured</p>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight md:text-5xl">
              {featuredCollection.title}
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">{featuredCollection.description}</p>
          </div>
          <Link href={`/categories/${featuredCollection.categorySlug}`} className="group relative hidden overflow-hidden lg:block">
            <div className="relative aspect-[4/3]">
              <Image
                src={featuredCollection.bannerImage}
                alt={featuredCollection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="40vw"
              />
            </div>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
