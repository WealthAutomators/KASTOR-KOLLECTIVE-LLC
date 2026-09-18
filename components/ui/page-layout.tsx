import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title?: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <div className="border-b border-border bg-parchment/40">
      <Container className="py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 shrink-0" />
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {title && (
          <h1 className="font-display text-3xl font-medium tracking-tight md:text-5xl">{title}</h1>
        )}
        {description && (
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{description}</p>
        )}
      </Container>
    </div>
  );
}

interface PageSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function PageSection({ title, children, className }: PageSectionProps) {
  return (
    <section className={cn("py-8 md:py-10", className)}>
      {title && <h2 className="font-display mb-4 text-2xl font-medium md:text-3xl">{title}</h2>}
      <div className="prose-store text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

interface PolicyListProps {
  items: string[];
}

export function PolicyList({ items }: PolicyListProps) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm md:text-base">
          <span className="mt-2 h-px w-4 shrink-0 bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
