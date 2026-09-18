"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";

const homepageCategorySlugs = [
  "home",
  "kitchen-dining",
  "workspace",
  "travel",
  "outdoor",
  "apparel",
  "accessories",
  "lighting",
];

export function CategoryCarousel() {
  const homepageCategories = categories.filter((c) => homepageCategorySlugs.includes(c.slug));

  return (
    <section className="border-b border-border py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-label">Browse</p>
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              The current collection
            </h2>
          </div>
          <Link
            href="/categories"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
          >
            All collections
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {homepageCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <span className="font-display text-lg text-ivory md:text-xl">{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
