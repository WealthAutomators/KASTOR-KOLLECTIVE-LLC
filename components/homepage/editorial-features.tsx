import Image from "next/image";
import Link from "next/link";
import { editorialStories, homepageEverydaySlugs, promotionalBanner } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export function LifestyleFeature() {
  return (
    <section>
      <div className="relative min-h-[70vh] overflow-hidden">
        <Image src="/banners/editorial-living.jpg" alt="Contemporary living" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className="relative flex min-h-[70vh] items-end px-6 py-16 sm:px-12 lg:px-20">
          <div className="max-w-xl text-ivory">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-ivory/70">Objects for everyday living</p>
            <h2 className="font-display mt-4 text-4xl font-medium md:text-6xl">Rooms, not racks.</h2>
            <p className="mt-4 text-ivory/80">A living collection of pieces chosen to be used, seen, and kept.</p>
            <Button asChild size="lg" className="mt-8 bg-ivory text-charcoal hover:bg-primary hover:text-ivory">
              <Link href="/categories/home">Shop Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EverydayLiving() {
  const products = getProductsBySlugs(homepageEverydaySlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <p className="editorial-label">Living</p>
        <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl">
          Objects for everyday living
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SecondaryStory() {
  const story = editorialStories.objects;

  return (
    <section className="py-0">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center bg-charcoal px-8 py-16 text-ivory md:px-16 lg:order-1 lg:px-20">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-ivory/55">{story.label}</p>
          <h2 className="font-display mt-4 max-w-md text-3xl font-medium md:text-5xl">{story.title}</h2>
          <p className="mt-6 max-w-md text-ivory/75">{story.body}</p>
          <Button asChild size="lg" className="mt-10 w-fit bg-ivory text-charcoal hover:bg-primary hover:text-ivory">
            <Link href={story.ctaLink}>{story.ctaText}</Link>
          </Button>
        </div>
        <div className="relative order-1 min-h-[420px] lg:order-2">
          <Image src={story.image} alt={story.title} fill className="object-cover" sizes="50vw" />
        </div>
      </div>
    </section>
  );
}

export function CollectionBanner() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden">
          <div className="relative min-h-[380px]">
            <Image
              src={promotionalBanner.image}
              alt={promotionalBanner.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-charcoal/40" />
            <div className="relative flex min-h-[380px] flex-col items-start justify-end p-8 md:p-14">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-ivory/70">Collection</p>
              <h2 className="font-display mt-3 max-w-lg text-3xl font-medium text-ivory md:text-5xl">
                {promotionalBanner.title}
              </h2>
              <p className="mt-4 max-w-md text-ivory/80">{promotionalBanner.description}</p>
              <Button asChild size="lg" className="mt-8 bg-ivory text-charcoal hover:bg-primary hover:text-ivory">
                <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
