import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A collective of considered objects."
        description={company.description}
        breadcrumbs={[{ label: "About" }]}
      />

      <Container className="pb-20">
        <div className="grid items-center gap-12 py-12 md:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="The edit">
            <p>
              KASTOR KOLLECTIVE is built around a simple idea: that a store can have a point of view
              without becoming precious. We gather contemporary objects for modern living — pieces that
              are useful, visually considered, and worth bringing home.
            </p>
            <p className="mt-4">
              The word Kollective describes the merchandising philosophy. Home, table, travel, apparel,
              and daily ritual sit together as one edited identity rather than a marketplace of everything.
              Discovery matters here. Taste matters. The assortment is meant to feel like a collection,
              not a catalog.
            </p>
            <p className="mt-4">
              We do not invent a founding myth. The work is the edit: choosing objects that belong
              together, photographing them with care, and presenting them without noise.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Curation", desc: "Fewer, better pieces — chosen for material, form, and everyday use." },
            { title: "Modern living", desc: "Objects designed for rooms that are lived in, not staged once." },
            { title: "Discovery", desc: "A collective wide enough to wander, tight enough to stay coherent." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-background p-8">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="From the rooms they live in" className="mt-16">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-card p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-14 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Explore the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
