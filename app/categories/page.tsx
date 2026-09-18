import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  return (
    <Container className="py-8 md:py-12">
      <h1 className="font-display text-3xl font-medium tracking-tight md:text-5xl">Collections</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">The current edit, organised by how objects live.</p>
      <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group overflow-hidden bg-card"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-parchment">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl group-hover:text-primary">{category.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
              <p className="mt-2 text-xs text-muted-foreground">{category.productCount} products</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
