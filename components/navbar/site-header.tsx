"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { SearchBar } from "@/components/navbar/search-bar";
import { announcement } from "@/data/homepage";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="border-b border-border/80 bg-charcoal text-ivory">
        <p className="px-4 py-2 text-center text-[0.625rem] font-medium uppercase tracking-[0.28em]">
          {announcement}
        </p>
      </div>
      <Navbar searchOpen={searchOpen} onSearchToggle={() => setSearchOpen((open) => !open)} />
      {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
    </div>
  );
}
