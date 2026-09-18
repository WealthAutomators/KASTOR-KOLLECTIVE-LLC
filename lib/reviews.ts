import { ProductReview, RatingBreakdown } from "@/types";

const FIRST_NAMES = [
  "Sarah", "James", "Emily", "Michael", "Jessica", "David", "Amanda", "Robert",
  "Jennifer", "Chris", "Lauren", "Daniel", "Rachel", "Mark", "Ashley", "Brian",
  "Nicole", "Kevin", "Stephanie", "Jason", "Michelle", "Ryan", "Laura", "Eric",
  "Heather", "Matt", "Kimberly", "Andrew", "Lisa", "Thomas",
];

const LAST_INITIALS = "ABCDEFGHJKLMNPRSTW";

const REVIEW_PHOTOS = Array.from({ length: 8 }, (_, i) => `/reviews/review-${i + 1}.jpg`);

const REVIEW_TITLES_5 = [
  "Absolutely love this",
  "Best purchase I've made",
  "Exceeded my expectations",
  "Worth every penny",
  "Perfect quality",
  "Will buy again",
  "Highly recommend",
  "Exactly what I needed",
  "Outstanding product",
  "My new favorite",
  "Couldn't be happier",
  "Fantastic find",
  "Great value for the price",
  "Surpassed expectations",
  "Works perfectly",
];

const REVIEW_TITLES_4 = [
  "Very good, minor issue",
  "Great overall",
  "Almost perfect",
  "Good quality, slow shipping",
  "Really nice, slightly smaller than expected",
  "Solid purchase",
  "Happy with it",
  "Good but not perfect",
];

const REVIEW_TITLES_3 = [
  "Decent but expected more",
  "It's okay",
  "Average quality",
  "Mixed feelings",
  "Not bad, not great",
];

const BODIES_5 = [
  "Arrived well packed and exactly as described. The materials feel considered — the sort of object you actually leave out rather than put away.",
  "A quiet, well-made piece. Shipping was prompt and the object looks better in the room than it did on screen.",
  "Bought this as a gift and it was received with genuine pleasure. Thoughtful packaging, honest materials, nothing extra.",
  "This has become part of the daily rhythm at home. Solid construction, a calm design, and it does what it should.",
  "I was unsure about ordering unseen. It arrived quickly, felt right in the hand, and has earned its place.",
  "Third time ordering from the collective. Consistent quality and a coherent point of view. I keep coming back.",
  "Photographs understate it. The texture and weight are better in person — a considered object, not a generic listing.",
  "Exactly what I needed. Easy to live with, well made, and priced fairly for the quality.",
  "I read the description carefully and it holds up. Does what it promises without overselling.",
  "Fast delivery, careful packing, and a product that matches the edit. All three, which is rarer than it should be.",
  "Replaced something I had lived with for years. Better materials, a clearer form, and it looks at home here.",
  "Would have been happy at full price. Quality is measured, and it settled into the room immediately.",
];

const BODIES_4 = [
  "Really happy with this purchase overall. Product quality is great and it works as expected. Took an extra day to ship but arrived in good condition.",
  "Good product for the price. Does what it's supposed to do well. Only minor complaint is the instruction manual could be clearer, but setup was still manageable.",
  "Solid quality and fast delivery. Gave 4 stars instead of 5 because it's slightly smaller than I imagined from the photos, but functionally it's excellent.",
  "Very pleased with the purchase. Works great and looks good. One small cosmetic imperfection on arrival but nothing that affects performance.",
  "Good value and reliable performance. Would recommend to others. Shipping was a bit slower than the estimate but the product itself is worth the wait.",
  "Nice product that meets expectations. Quality materials and decent packaging. Lost one star because I wish there were more color options available.",
];

const BODIES_3 = [
  "It's fine for the price. Does the job but nothing particularly stood out. Shipping was quick which was a plus. Might look at alternatives next time.",
  "Average product — works but I expected a bit more given the reviews. Might improve with more use. Customer service was helpful when I had questions.",
  "Decent enough. Not bad quality but not amazing either. It serves its purpose. Would consider buying again if the price drops.",
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)];
}

function formatDate(daysAgo: number): string {
  const date = new Date(Date.UTC(2026, 8, 17));
  date.setUTCDate(date.getUTCDate() - daysAgo);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function generateReviewsForProduct(productId: string, productName: string): ProductReview[] {
  const seed = hashString(productId);
  const rand = seededRandom(seed);
  const count = 12 + Math.floor(rand() * 9);

  const reviews: ProductReview[] = [];

  const ratingDistribution: number[] = [];
  for (let i = 0; i < count; i++) {
    const r = rand();
    if (r < 0.62) ratingDistribution.push(5);
    else if (r < 0.85) ratingDistribution.push(4);
    else if (r < 0.95) ratingDistribution.push(3);
    else if (r < 0.98) ratingDistribution.push(2);
    else ratingDistribution.push(1);
  }

  ratingDistribution.sort((a, b) => b - a);

  for (let i = 0; i < count; i++) {
    const rating = ratingDistribution[i];
    const firstName = pick(FIRST_NAMES, rand);
    const lastInitial = LAST_INITIALS[Math.floor(rand() * LAST_INITIALS.length)];

    let title: string;
    let body: string;

    if (rating >= 5) {
      title = pick(REVIEW_TITLES_5, rand);
      body = pick(BODIES_5, rand);
    } else if (rating >= 4) {
      title = pick(REVIEW_TITLES_4, rand);
      body = pick(BODIES_4, rand);
    } else {
      title = pick(REVIEW_TITLES_3, rand);
      body = pick(BODIES_3, rand);
    }

    if (i === 0) {
      body = `${body.split(".")[0]}. The ${productName.toLowerCase()} specifically has been great — ${body.split(".").slice(1).join(".").trim()}`;
    }

    const daysAgo = Math.floor(rand() * 365) + 1;
    const hasImage = rating >= 4 && rand() > 0.75;

    reviews.push({
      id: `${productId}-review-${i}`,
      productId,
      name: `${firstName} ${lastInitial}.`,
      rating,
      title,
      body,
      date: formatDate(daysAgo),
      verified: rand() > 0.15,
      helpful: Math.floor(rand() * 48),
      image: hasImage ? REVIEW_PHOTOS[Math.floor(rand() * REVIEW_PHOTOS.length)] : undefined,
    });
  }

  return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRatingBreakdown(reviews: ProductReview[]): RatingBreakdown {
  const breakdown: RatingBreakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    const key = r.rating as keyof RatingBreakdown;
    if (key >= 1 && key <= 5) breakdown[key]++;
  });
  return breakdown;
}

export function getAverageRating(reviews: ProductReview[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

export function getReviewCount(reviews: ProductReview[]): number {
  return reviews.length;
}
