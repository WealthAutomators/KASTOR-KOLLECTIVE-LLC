import Link from "next/link";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-ivory">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl tracking-[0.16em]">KASTOR</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.38em] text-primary">Kollective LLC</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">{company.description}</p>
          </div>

          <div>
            <h3 className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ivory/50">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-5 mt-8 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ivory/50">Collections</h3>
            <ul className="space-y-2.5">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ivory/50">Customer Care</h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-5 mt-8 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ivory/50">About</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ivory/50">Policies</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-ivory/10" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs tracking-wide text-ivory/50">{company.copyright}</p>
        <div className="flex items-center gap-2 opacity-80">
          {paymentMethods.map((method) => (
            <Image key={method.name} src={method.icon} alt={method.name} width={40} height={28} className="h-7 w-auto" />
          ))}
        </div>
      </Container>
    </footer>
  );
}
