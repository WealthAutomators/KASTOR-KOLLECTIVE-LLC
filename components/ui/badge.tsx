import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-none px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-ivory",
        secondary: "bg-parchment text-muted-foreground",
        sale: "bg-primary text-ivory",
        outline: "border border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
