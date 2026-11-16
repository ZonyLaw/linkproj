"use client";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  return (
    <div className="flex w-full justify-center">
      <Show when="signed-out" treatPendingAsSignedOut={false}>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <SignInButton mode="modal" fallbackRedirectUrl="/">
            <Button type="button">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal" fallbackRedirectUrl="/">
            <Button variant="outline" type="button">
              Sign up
            </Button>
          </SignUpButton>
        </div>
      </Show>
      <Show when="signed-in" treatPendingAsSignedOut={false}>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            You&apos;re signed in
          </span>
          <Link
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <UserButton />
        </div>
      </Show>
    </div>
  );
}