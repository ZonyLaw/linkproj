"use client";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex w-full justify-center">
      <Show when="signed-out" treatPendingAsSignedOut={false}>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <SignInButton mode="modal" fallbackRedirectUrl="/">
            <button
              className="inline-flex h-11 min-w-36 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:opacity-85"
              type="button"
            >
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="modal" fallbackRedirectUrl="/">
            <button
              className="inline-flex h-11 min-w-36 items-center justify-center rounded-md border border-foreground/20 px-5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              type="button"
            >
              Sign up
            </button>
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