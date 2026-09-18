"use client";

import { useState } from "react";
import { bestSellerTabs, homepageBestsellerSlugs } from "@/data/homepage";
import { getBestsellerProducts, getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function BestSellers() {
  const [activeTab, setActiveTab] = useState("all");
  const curatedBestsellers = getProductsBySlugs(homepageBestsellerSlugs);
  const bestsellers = getBestsellerProducts();

  const filtered =
    activeTab === "all"
      ? curatedBestsellers
      : bestsellers.filter((p) => p.categorySlug === activeTab).slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label">Most lived with</p>
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl">Best sellers</h2>
          </div>
          <Link
            href="/best-sellers"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"
          >
            View all
          </Link>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {bestSellerTabs.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActiveTab(tab.slug)}
              className={cn(
                "px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors",
                activeTab === tab.slug
                  ? "bg-charcoal text-ivory"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
