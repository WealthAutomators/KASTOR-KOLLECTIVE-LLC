import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Quiet pieces for rooms that are lived in — textiles, tables, and objects with a point of view.",
    productCount: 6,
  },
  {
    id: "2",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Tableware and tools for slower mornings and unhurried meals.",
    productCount: 10,
  },
  {
    id: "3",
    slug: "workspace",
    name: "Workspace",
    image: "/categories/workspace.jpg",
    description: "Writing tools and desk companions for focused, analog days.",
    productCount: 5,
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Bags and small leather goods made for leaving — and returning.",
    productCount: 5,
  },
  {
    id: "5",
    slug: "outdoor",
    name: "Outdoor",
    image: "/categories/outdoor.jpg",
    description: "Gear for parks, porches, and the long way home.",
    productCount: 5,
  },
  {
    id: "6",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Straightforward clothing with a considered hand — layers for everyday wear.",
    productCount: 4,
  },
  {
    id: "7",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "The finishing pieces: leather, wool, and objects carried close.",
    productCount: 5,
  },
  {
    id: "8",
    slug: "personal-essentials",
    name: "Personal Essentials",
    image: "/categories/personal-essentials.jpg",
    description: "Bath, grooming, and daily rituals kept simple.",
    productCount: 3,
  },
  {
    id: "9",
    slug: "wellness",
    name: "Wellness",
    image: "/categories/wellness.jpg",
    description: "Movement, recovery, and quiet practices for the body.",
    productCount: 4,
  },
  {
    id: "10",
    slug: "lighting",
    name: "Lighting",
    image: "/categories/lighting.jpg",
    description: "Lamps that shape a room without asking for attention.",
    productCount: 3,
  },
  {
    id: "11",
    slug: "decor",
    name: "Decor",
    image: "/categories/decor.jpg",
    description: "Vessels, mirrors, and prints that give a room its character.",
    productCount: 5,
  },
  {
    id: "12",
    slug: "gifts",
    name: "Gifts",
    image: "/categories/gifts.jpg",
    description: "Objects worth giving — and keeping.",
    productCount: 5,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
