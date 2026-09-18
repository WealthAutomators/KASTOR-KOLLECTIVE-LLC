/**
 * Semantically pick KASTOR KOLLECTIVE product images from the shared library.
 * Randomises only among matching assets. Copies into public/.
 */
import { copyFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pick, absolutePath } from "/Users/solomon/Documents/Ecommerce-Product-Library/scripts/select-image.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");

const STYLES = ["editorial", "lifestyle", "minimal", "modern", "neutral", "premium"];

const PRODUCTS = [
  { slug: "hearth-linen-cushion", query: "linen cushion", category: "home" },
  { slug: "wool-throw-blanket", query: "knit throw blanket", category: "home" },
  { slug: "woven-storage-basket", query: "woven storage basket", category: "home" },
  { slug: "cedar-side-table", query: "wooden side table", category: "home" },
  { slug: "stoneware-planter", query: "ceramic plant pot", category: "home" },
  { slug: "handwoven-area-rug", query: "woven area rug", category: "home" },
  { slug: "washed-linen-bedding", query: "linen bedding set", category: "home" },
  { slug: "entry-doormat", query: "doormat", category: "home" },

  { slug: "stoneware-dinner-plate", query: "stoneware dinner plate", category: "kitchen-dining" },
  { slug: "everyday-ceramic-mug", query: "ceramic mug", category: "kitchen-dining" },
  { slug: "walnut-cutting-board", query: "wooden cutting board", category: "kitchen-dining" },
  { slug: "stovetop-tea-kettle", query: "tea kettle", category: "kitchen-dining" },
  { slug: "stemmed-wine-glass", query: "wine glass", category: "kitchen-dining" },
  { slug: "ceramic-serving-bowl", query: "serving bowl", category: "kitchen-dining" },
  { slug: "porcelain-teapot", query: "teapot", category: "kitchen-dining" },
  { slug: "conical-coffee-grinder", query: "coffee grinder", category: "kitchen-dining" },
  { slug: "cast-iron-skillet", query: "cast iron skillet", category: "kitchen-dining" },
  { slug: "glass-storage-jar", query: "glass storage jar", category: "kitchen-dining" },

  { slug: "hardcover-notebook", query: "hardcover notebook", category: "workspace" },
  { slug: "fountain-pen", query: "fountain pen", category: "workspace" },
  { slug: "aluminium-laptop-stand", query: "laptop stand", category: "workspace" },
  { slug: "weekly-planner", query: "weekly planner", category: "workspace" },
  { slug: "desk-pen-cup", query: "pen holder", category: "workspace" },
  { slug: "graphite-pencil-set", query: "pencil set", category: "workspace" },

  { slug: "canvas-weekender", query: "canvas weekender bag", category: "travel" },
  { slug: "leather-daypack", query: "leather backpack", category: "travel" },
  { slug: "passport-folio", query: "passport holder", category: "travel" },
  { slug: "leather-luggage-tag", query: "luggage tag", category: "travel" },
  { slug: "compact-crossbody", query: "crossbody bag", category: "travel" },
  { slug: "minimalist-daypack", query: "minimalist daypack", category: "travel" },

  { slug: "picnic-blanket", query: "picnic blanket", category: "outdoor" },
  { slug: "insulated-flask", query: "insulated outdoor bottle", category: "outdoor" },
  { slug: "camping-lantern", query: "camping lantern", category: "outdoor" },
  { slug: "outdoor-hammock", query: "camping hammock", category: "outdoor" },
  { slug: "wicker-picnic-basket", query: "picnic basket", category: "outdoor" },
  { slug: "garden-watering-can", query: "watering can", category: "outdoor" },

  { slug: "merino-knit-sweater", query: "knit sweater", category: "apparel" },
  { slug: "organic-cotton-tee", query: "cotton tshirt", category: "apparel" },
  { slug: "twill-overshirt", query: "casual overshirt", category: "apparel" },
  { slug: "tailored-chinos", query: "chino trousers", category: "apparel" },
  { slug: "ribbed-beanie", query: "knit beanie", category: "apparel" },

  { slug: "slim-leather-wallet", query: "leather wallet", category: "accessories" },
  { slug: "acetate-sunglasses", query: "sunglasses", category: "accessories" },
  { slug: "leather-belt", query: "leather belt", category: "accessories" },
  { slug: "wool-scarf", query: "wool scarf", category: "accessories" },
  { slug: "field-wristwatch", query: "wristwatch", category: "accessories" },
  { slug: "felt-brim-hat", query: "felt hat", category: "accessories" },

  { slug: "botanical-soap-set", query: "soap bar set", category: "personal" },
  { slug: "grooming-kit", query: "grooming kit", category: "personal" },
  { slug: "turkish-bath-towels", query: "bath towel set", category: "personal" },
  { slug: "safety-razor", query: "safety razor", category: "personal" },

  { slug: "cork-yoga-mat", query: "yoga mat", category: "wellness" },
  { slug: "recovery-foam-roller", query: "foam roller", category: "wellness" },
  { slug: "essential-oil-collection", query: "essential oil set", category: "wellness" },
  { slug: "yoga-block", query: "yoga block", category: "wellness" },

  { slug: "ceramic-table-lamp", query: "ceramic table lamp", category: "lighting" },
  { slug: "arc-floor-lamp", query: "arc floor lamp", category: "lighting" },
  { slug: "clip-desk-light", query: "clip desk light", category: "lighting" },

  { slug: "ceramic-vessel", query: "ceramic vase", category: "decor" },
  { slug: "framed-art-print", query: "wall art print", category: "decor" },
  { slug: "decorative-bowl", query: "decorative bowl", category: "decor" },
  { slug: "round-wall-mirror", query: "round wall mirror", category: "decor" },
  { slug: "brass-candle-holder", query: "brass candle holder", category: "decor" },
  { slug: "glass-bud-vase", query: "glass bud vase", category: "decor" },

  { slug: "wrapped-gift-box", query: "gift box", category: "gifts" },
  { slug: "linen-playing-cards", query: "playing cards", category: "gifts" },
  { slug: "loose-leaf-tea-set", query: "tea gift set", category: "gifts" },
  { slug: "wooden-chess-set", query: "wooden board game", category: "gifts" },
  { slug: "scented-soy-candle", query: "scented candle", category: "gifts" },
  { slug: "pour-over-set", query: "pour over coffee set", category: "gifts" },
];

const SURFACES = [
  { dest: "hero/hero-1.jpg", query: "accent armchair", style: "lifestyle" },
  { dest: "banners/featured.jpg", query: "linen bedding set", style: "editorial" },
  { dest: "banners/about.jpg", query: "decorative serving tray", style: "lifestyle" },
  { dest: "banners/editorial-dining.jpg", query: "stoneware dinner plate", style: "editorial" },
  { dest: "banners/editorial-workspace.jpg", query: "hardcover notebook", style: "editorial" },
  { dest: "banners/editorial-travel.jpg", query: "canvas weekender bag", style: "lifestyle" },
  { dest: "banners/editorial-living.jpg", query: "knit throw blanket", style: "lifestyle" },
  { dest: "og/og-image.jpg", query: "ceramic vase", style: "editorial" },
];

const CATEGORY_IMAGES = [
  { slug: "home", query: "woven storage basket" },
  { slug: "kitchen-dining", query: "stoneware dinner plate" },
  { slug: "workspace", query: "hardcover notebook" },
  { slug: "travel", query: "canvas weekender bag" },
  { slug: "outdoor", query: "picnic blanket" },
  { slug: "apparel", query: "knit sweater" },
  { slug: "accessories", query: "leather wallet" },
  { slug: "personal-essentials", query: "bath towel set" },
  { slug: "wellness", query: "yoga mat" },
  { slug: "lighting", query: "ceramic table lamp" },
  { slug: "decor", query: "ceramic vase" },
  { slug: "gifts", query: "gift box" },
];

function pickBest(query, avoid, preferredStyle) {
  const styles = preferredStyle ? [preferredStyle, ...STYLES] : STYLES;
  for (const style of styles) {
    const asset = pick(query, { style, avoid, seed: 17 });
    if (asset) return asset;
  }
  return pick(query, { avoid, seed: 17 });
}

const avoid = [];
const mapping = { products: [], surfaces: [], categories: [], failures: [] };

mkdirSync(join(PUBLIC, "products"), { recursive: true });
mkdirSync(join(PUBLIC, "categories"), { recursive: true });
mkdirSync(join(PUBLIC, "hero"), { recursive: true });
mkdirSync(join(PUBLIC, "banners"), { recursive: true });
mkdirSync(join(PUBLIC, "og"), { recursive: true });

for (const item of PRODUCTS) {
  const asset = pickBest(item.query, avoid, "editorial");
  if (!asset) {
    mapping.failures.push({ ...item, reason: "no match" });
    console.error("NO MATCH", item.slug, item.query);
    continue;
  }
  avoid.push(asset.id);
  const destRel = `products/${item.slug}-1.jpg`;
  const dest = join(PUBLIC, destRel);
  copyFileSync(absolutePath(asset), dest);
  mapping.products.push({
    slug: item.slug,
    query: item.query,
    category: item.category,
    dest: `/${destRel}`,
    id: asset.id,
    name: asset.name,
    productType: asset.productType,
    libraryCategory: asset.category,
    path: asset.path,
    description: asset.description,
    visualDescription: asset.visualDescription,
    designTags: asset.designTags,
    width: asset.width,
    height: asset.height,
  });
  console.log("OK", item.slug, "←", asset.id, asset.path);
}

for (const surface of SURFACES) {
  const asset = pickBest(surface.query, [], surface.style);
  if (!asset) {
    mapping.failures.push({ ...surface, reason: "no match" });
    console.error("NO MATCH SURFACE", surface.dest, surface.query);
    continue;
  }
  const dest = join(PUBLIC, surface.dest);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(absolutePath(asset), dest);
  mapping.surfaces.push({
    dest: `/${surface.dest}`,
    query: surface.query,
    id: asset.id,
    name: asset.name,
    path: asset.path,
  });
  console.log("SURFACE", surface.dest, "←", asset.id, asset.path);
}

for (const cat of CATEGORY_IMAGES) {
  const asset = pickBest(cat.query, [], "editorial");
  if (!asset) {
    mapping.failures.push({ ...cat, reason: "no match" });
    continue;
  }
  const destRel = `categories/${cat.slug}.jpg`;
  copyFileSync(absolutePath(asset), join(PUBLIC, destRel));
  mapping.categories.push({
    slug: cat.slug,
    dest: `/${destRel}`,
    id: asset.id,
    name: asset.name,
    path: asset.path,
  });
  console.log("CATEGORY", cat.slug, "←", asset.id, asset.path);
}

writeFileSync(join(ROOT, "scripts/kastor-image-map.json"), JSON.stringify(mapping, null, 2));
console.log("\nProducts:", mapping.products.length);
console.log("Failures:", mapping.failures.length);
console.log("Avoided reuse count:", avoid.length);
