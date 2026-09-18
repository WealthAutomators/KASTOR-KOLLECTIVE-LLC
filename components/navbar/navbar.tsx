"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar({
  searchOpen = false,
  onSearchToggle,
}: {
  searchOpen?: boolean;
  onSearchToggle?: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 lg:h-[4.5rem]">
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="inline-flex px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] border border-border bg-card py-3 shadow-none">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-parchment hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </Button>

          <Link href="/" className="justify-self-center text-center">
            <span className="font-display block text-[1.35rem] font-medium leading-none tracking-[0.18em] text-charcoal sm:text-[1.5rem]">
              KASTOR
            </span>
            <span className="mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.42em] text-primary">
              Kollective
            </span>
            <span className="sr-only">{company.name}</span>
          </Link>

          <div className="flex items-center justify-end gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={onSearchToggle}
              aria-label={searchOpen ? "Close search" : "Search"}
              aria-expanded={searchOpen}
            >
              {searchOpen ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Search className="h-4 w-4" strokeWidth={1.5} />}
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-9 w-9">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-4 w-4" strokeWidth={1.5} />
                {wishlist.length > 0 && (
                  <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <Link href="/profile" aria-label="Log in">
                <User className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-9 w-9">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center bg-charcoal px-1 text-[9px] font-medium text-ivory">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-1 py-2.5 text-sm font-medium uppercase tracking-[0.16em]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="mb-2 ml-3 space-y-0.5 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-1 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
