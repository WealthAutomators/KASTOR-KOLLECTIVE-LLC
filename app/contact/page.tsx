"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact"
        description="Send a note about an order or the collection. We will be in touch."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Container className="pb-20">
        <div className="mx-auto max-w-xl py-12">
          <h2 className="font-display text-2xl font-medium">Write to us</h2>
          <p className="mt-2 text-muted-foreground">
            For order-related questions, include your order number if you have one.
          </p>

          <div className="mt-10 border border-border bg-card p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle className="h-10 w-10 text-primary" strokeWidth={1.5} />
                <p className="mt-4 text-lg font-medium">Message sent</p>
                <p className="mt-2 text-sm text-muted-foreground">Thank you for writing.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required className="mt-1.5 rounded-none" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1.5 rounded-none" placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required className="mt-1.5 rounded-none" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required className="mt-1.5 rounded-none" placeholder="Your note..." rows={5} />
                </div>
                <Button type="submit" size="lg">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
