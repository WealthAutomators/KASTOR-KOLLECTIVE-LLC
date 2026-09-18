import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewMoreLink?: string;
  viewMoreText?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  viewMoreLink,
  viewMoreText = "View all",
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
        centered && "text-center sm:flex-col sm:items-center",
        className
      )}
    >
      <div>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      </div>
      {viewMoreLink && (
        <Button variant="link" asChild className="text-[0.7rem] font-medium uppercase tracking-[0.16em]">
          <Link href={viewMoreLink}>{viewMoreText}</Link>
        </Button>
      )}
    </div>
  );
}
