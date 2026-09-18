"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <div className="min-h-[70vh] bg-background">
      {showError && (
        <div className="border-b border-primary/30 bg-parchment">
          <Container className="py-3">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <AlertCircle className="h-4 w-4 shrink-0 text-primary" />
              <p>
                <span className="font-medium">Unable to sign in.</span> Check the details and try again.
              </p>
            </div>
          </Container>
        </div>
      )}

      <Container className="py-16 md:py-20">
        <p className="editorial-label text-center">Account</p>
        <h1 className="font-display mt-3 text-center text-3xl font-medium tracking-tight md:text-5xl">
          Log in
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground">
          A demonstration account experience — no live credentials are required beyond this form.
        </p>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="border border-border bg-card p-6 md:p-10">
            <h2 className="font-display text-xl font-medium">Your account</h2>

            <form onSubmit={handleLogin} className="mt-6 space-y-5">
              <div>
                <Label htmlFor="login-email">Username or Email Address</Label>
                <Input
                  id="login-email"
                  name="email"
                  type="text"
                  autoComplete="username"
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="login-password">Password</Label>
                <div className="relative mt-1.5">
                  <Input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                  />
                  <Label htmlFor="remember-me" className="cursor-pointer font-normal">
                    Remember me
                  </Label>
                </div>
                <Link href="/contact" className="text-sm text-primary hover:underline">
                  Forgot your password?
                </Link>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Log in
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
