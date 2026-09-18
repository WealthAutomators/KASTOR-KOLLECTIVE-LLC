import { Truck, RotateCcw, Shield, Star } from "lucide-react";
import { features } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap = {
  truck: Truck,
  shield: Shield,
  rotate: RotateCcw,
  headphones: Star,
  star: Star,
};

export function FeaturesRow() {
  return (
    <section className="border-y border-border py-12 md:py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Truck;
            return (
              <div key={feature.id} className="text-center lg:text-left">
                <Icon className="mx-auto h-4 w-4 text-primary lg:mx-0" strokeWidth={1.5} />
                <h3 className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.16em]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
