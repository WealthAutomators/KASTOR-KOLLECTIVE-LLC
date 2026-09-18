"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-charcoal md:min-h-[640px]">
      <Image
        src={slide.image}
        alt={slide.headline}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-end px-6 pb-16 pt-32 sm:px-10 md:px-16 lg:px-24 lg:pb-24">
        <motion.div
          className="max-w-3xl text-ivory"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ivory/70">
            The current collection
          </p>
          <h1 className="font-display mt-4 text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/80 sm:text-lg">
            {slide.description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-ivory text-charcoal hover:bg-primary hover:text-ivory"
          >
            <Link href={slide.ctaLink}>{slide.ctaText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
