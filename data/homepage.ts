import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Objects worth bringing home.",
    description: "A considered selection of modern essentials for the way you live.",
    ctaText: "Explore the collection",
    ctaLink: "/shop",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Thoughtful delivery",
    description: "Complimentary shipping on orders over $75.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure checkout",
    description: "Encrypted payment for a quiet, confident purchase.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "Considered returns",
    description: "Thirty days to live with a piece and decide.",
  },
  {
    id: "4",
    icon: "star",
    title: "Edited assortment",
    description: "Every object is chosen, not merely listed.",
  },
];

export const dealsEndTime = "2026-09-18T12:00:00.000Z";

export const homepageDealsSlugs = [
  "washed-linen-bedding",
  "canvas-weekender",
  "everyday-ceramic-mug",
  "wool-throw-blanket",
  "arc-floor-lamp",
  "turkish-bath-towels",
] as const;

export const homepageBestsellerSlugs = [
  "everyday-ceramic-mug",
  "canvas-weekender",
  "washed-linen-bedding",
  "wool-throw-blanket",
  "cork-yoga-mat",
  "scented-soy-candle",
  "leather-belt",
  "cast-iron-skillet",
] as const;

export const homepageFeaturedSlugs = [
  "washed-linen-bedding",
  "canvas-weekender",
  "everyday-ceramic-mug",
  "wool-throw-blanket",
  "arc-floor-lamp",
  "ceramic-vessel",
  "felt-brim-hat",
  "stovetop-tea-kettle",
] as const;

export const homepageNewArrivalSlugs = [
  "arc-floor-lamp",
  "forest-flannel-overshirt",
  "plant-ladder-shelf",
  "porcelain-teapot",
  "compact-crossbody",
  "pour-over-set",
] as const;

export const homepageEssentialsSlugs = [
  "hardcover-notebook",
  "turkish-bath-towels",
  "brass-candle-holder",
  "glass-bud-vase",
  "slim-leather-wallet",
  "insulated-flask",
  "weekly-planner",
  "stoneware-planter",
] as const;

export const homepageEverydaySlugs = [
  "organic-cotton-tee",
  "desk-pen-cup",
  "botanical-soap-set",
  "stemmed-wine-glass",
  "round-wall-mirror",
  "garden-watering-can",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "The home collection",
  description:
    "Textiles, lighting, and objects chosen for rooms that are actually lived in.",
  buttonText: "Shop Home",
  buttonLink: "/categories/home",
  image: "/banners/editorial-living.jpg",
};

export const aboutSection = {
  title: "A collective, not a catalog.",
  description:
    "KASTOR KOLLECTIVE gathers contemporary objects with a point of view — useful, considered, and made to belong in modern life. We edit rather than accumulate, so the assortment stays coherent without becoming precious.",
  checklist: [
    "Curated across home, table, travel, and daily ritual",
    "Editorial merchandising over marketplace noise",
    "Objects chosen for material, form, and everyday use",
    "A contemporary identity with room to discover",
  ],
  buttonText: "The brand story",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured collection",
  description: "Pieces currently at the center of the edit.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home",
};

export const editorialStories = {
  dining: {
    label: "At the table",
    title: "Designed for the way you live.",
    body: "Stoneware, copper, and glass for meals that do not need a special occasion. The kitchen as a room, not a utility closet.",
    image: "/banners/editorial-dining.jpg",
    ctaText: "Kitchen & Dining",
    ctaLink: "/categories/kitchen-dining",
  },
  travel: {
    label: "Leaving well",
    title: "Packed with intention.",
    body: "Canvas, leather, and the small goods that make a departure feel considered. Travel as part of living, not a separate category of noise.",
    image: "/banners/editorial-travel.jpg",
    ctaText: "Shop Travel",
    ctaLink: "/categories/travel",
  },
  objects: {
    label: "Still life",
    title: "A quieter kind of abundance.",
    body: "Desks, vessels, and the objects that hold a room together when no one is looking. Composition over clutter.",
    image: "/banners/editorial-objects.jpg",
    ctaText: "Shop Decor",
    ctaLink: "/categories/decor",
  },
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen-dining" },
  { label: "Travel", slug: "travel" },
  { label: "Gifts", slug: "gifts" },
];

export const newsletter = {
  title: "Notes from the collective",
  description: "New arrivals, seasonal edits, and the occasional story. No noise.",
  placeholder: "Your email",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const announcement = "The current collection — objects for everyday living.";
