import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import {
  CollectionBanner,
  EverydayLiving,
  LifestyleFeature,
  SecondaryStory,
} from "@/components/homepage/editorial-features";
import { BestSellers } from "@/components/homepage/best-sellers";
import { AboutSection } from "@/components/homepage/about-section";
import { FeaturesRow } from "@/components/homepage/features-row";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      <FeaturedCollection />
      <PromotionalBanner />
      <DealsOfTheDay />
      <NewArrivals />
      <LifestyleFeature />
      <EverydayLiving />
      <BestSellers />
      <SecondaryStory />
      <CollectionBanner />
      <AboutSection />
      <FeaturesRow />
      <Newsletter />
    </>
  );
}
