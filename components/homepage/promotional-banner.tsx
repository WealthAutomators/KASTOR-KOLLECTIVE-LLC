import Image from "next/image";
import Link from "next/link";
import { editorialStories } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  const story = editorialStories.dining;

  return (
    <section className="py-0">
      <div className="grid min-h-[70vh] lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden bg-muted">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-card px-8 py-16 md:px-16 lg:px-20">
          <p className="editorial-label">{story.label}</p>
          <h2 className="font-display mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            {story.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">{story.body}</p>
          <Button asChild size="lg" variant="outline" className="mt-10 w-fit">
            <Link href={story.ctaLink}>{story.ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
