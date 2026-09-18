import { company } from "./company";

export const faqItems = [
  {
    question: "What does KASTOR KOLLECTIVE sell?",
    answer:
      "A curated assortment of contemporary lifestyle objects — home, kitchen, workspace, travel, apparel, accessories, wellness, lighting, decor, and gifts. The edit is broad enough to feel like a collective, and tight enough to keep a point of view.",
  },
  {
    question: "Do you offer complimentary shipping?",
    answer:
      "Yes. Complimentary standard shipping is included on orders over $75 within the contiguous United States. Orders under $75 have a flat rate of $9.99. Express shipping is available at checkout for $14.99.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically arrives in 3–5 business days. Express shipping arrives in 1–2 business days. You will receive a tracking number once an order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Most items may be returned within 30 days of delivery, unused and in original packaging. Visit the Returns page for step-by-step instructions, or use the contact form if you need help.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Once an order ships, a tracking number is provided. You can also use the Track Order page with your order number.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently we ship within the United States, including Alaska and Hawaii. Sign up for notes from the collective if you would like to hear when that changes.",
  },
  {
    question: "How are products selected?",
    answer:
      "Each piece is chosen for material, form, and everyday usefulness. We prefer a considered object over a crowded shelf.",
  },
  {
    question: "How do I use a coupon code?",
    answer:
      "Enter your code in the coupon field on the cart page and apply it. Valid codes update the total immediately. One code per order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Visa, Mastercard, American Express, PayPal, and Apple Pay. Checkout on this site is a demonstration experience.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Use the contact form on the website. We do not list additional contact details at this time.",
  },
];

export const shippingPolicy = {
  title: "Shipping Policy",
  description: "How KASTOR KOLLECTIVE LLC delivers orders.",
  sections: [
    {
      title: "Processing Time",
      content:
        "Orders are typically processed within 1–2 business days. Weekend and holiday orders ship the next business day.",
    },
    {
      title: "Shipping Methods & Rates",
      content: "",
      list: [
        "Standard Shipping (3–5 business days): $9.99 — complimentary on orders over $75",
        "Express Shipping (1–2 business days): $14.99",
        "Alaska & Hawaii: Standard rates apply; delivery may take 5–7 business days",
      ],
    },
    {
      title: "Order Tracking",
      content:
        "Once an order ships, a confirmation with a tracking number is provided. You can also use the Track Order page.",
    },
    {
      title: "Shipping Restrictions",
      content:
        "We currently ship to all 50 US states. Express orders may not ship to PO boxes. Oversized items may require additional time.",
    },
    {
      title: "Lost or Damaged Packages",
      content:
        "If a package arrives damaged or does not arrive within 10 business days of the estimated date, use the contact form and include your order number. We will work with the carrier to resolve it.",
    },
  ],
};

export const returnPolicy = {
  title: "Return Policy",
  description: "A considered window to live with a piece and decide.",
  sections: [
    {
      title: "30-Day Return Window",
      content:
        "Most items may be returned within 30 days of delivery for a refund or exchange. Items should be unused and in original packaging.",
    },
    {
      title: "How to Start a Return",
      content: "",
      list: [
        "Use the contact form with your order number and reason for return",
        "A return label is typically issued within one business day",
        "Pack items securely in original packaging and attach the label",
        "Drop off at any authorized shipping location",
        "Refunds are processed within 5–7 business days of receiving the return",
      ],
    },
    {
      title: "Non-Returnable Items",
      content: "",
      list: [
        "Items marked as final sale",
        "Used or altered products",
        "Items without original packaging",
        "Gift cards",
      ],
    },
    {
      title: "Exchanges",
      content:
        "Need a different size or color? Use the contact form and we will arrange an exchange where stock allows.",
    },
  ],
};

export const refundPolicy = {
  title: "Refund Policy",
  description: "How refunds are handled for KASTOR KOLLECTIVE LLC orders.",
  sections: [
    {
      title: "Refund Eligibility",
      content:
        "Refunds are available for items returned within 30 days of delivery in unused condition with original packaging. Sale items are eligible unless marked as final sale.",
    },
    {
      title: "Refund Processing Time",
      content:
        "Once a return is received and inspected, refunds are processed within 5–7 business days to the original payment method. Banks may take an additional 3–5 business days to reflect the credit.",
    },
    {
      title: "Partial Refunds",
      content: "",
      list: [
        "Items with obvious signs of use may receive a partial refund",
        "Items returned without original packaging may incur a 15% restocking fee",
        "Shipping costs are non-refundable unless the return is due to our error",
      ],
    },
    {
      title: "Defective or Wrong Items",
      content:
        "If you receive a defective or incorrect item, use the contact form immediately. A prepaid return label and a full refund — including original shipping — or a replacement can be arranged.",
    },
    {
      title: "Questions",
      content: "Questions about refunds can be sent through the contact form.",
    },
  ],
};

export const privacyPolicy = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses, and protects information.`,
  sections: [
    {
      title: "Information We Collect",
      content:
        "When you visit the website, create an account, or place an order, we may collect your name, email address, shipping address, phone number, and payment information. We also collect browsing data through cookies to improve the shopping experience.",
    },
    {
      title: "How We Use Your Information",
      content: "",
      list: [
        "Process and fulfill orders",
        "Send order confirmations and shipping updates",
        "Respond to customer service requests",
        "Send editorial notes if you subscribe",
        "Improve the website and assortment",
        "Prevent fraud and ensure security",
      ],
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell personal information. Data is shared only with trusted service providers who help operate the business — such as shipping carriers and payment processors — and only to the extent necessary.",
    },
    {
      title: "Cookies",
      content:
        "Cookies remember your cart, wishlist, and preferences. You can disable cookies in your browser, though some features may not function properly.",
    },
    {
      title: "Your Rights",
      content:
        "You may request access to, correction of, or deletion of your personal data through the contact form.",
    },
    {
      title: "Contact",
      content: `Privacy-related inquiries can be sent through the contact form on this website. This policy applies to ${company.name}.`,
    },
  ],
};

export const termsPolicy = {
  title: "Terms & Conditions",
  description: `Please read these terms carefully before using the ${company.name} website.`,
  sections: [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using the ${company.name} website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the website.`,
    },
    {
      title: "Products & Pricing",
      content:
        "We strive to display accurate descriptions, images, and pricing. Errors may occur. We reserve the right to correct errors and to update information without prior notice. Prices are in US dollars.",
    },
    {
      title: "Orders & Payment",
      content:
        "Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order. Checkout on this site is a demonstration experience.",
    },
    {
      title: "Intellectual Property",
      content: `All content on this website — including text, images, logos, and design — is the property of ${company.name} and protected by copyright and trademark laws.`,
    },
    {
      title: "Limitation of Liability",
      content: `${company.name} shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or products. Total liability shall not exceed the amount paid for the product in question.`,
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of the United States. Any disputes shall be resolved in accordance with applicable law.",
    },
  ],
};
