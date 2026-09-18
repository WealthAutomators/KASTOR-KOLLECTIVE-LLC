import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center">
          <p className="editorial-label">Notes</p>
          <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-4xl">From the rooms they live in</h2>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t) => (
            <div key={t.id} className="bg-background p-8">
              <StarRating rating={t.rating} showCount={false} size="sm" />
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-6 text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
