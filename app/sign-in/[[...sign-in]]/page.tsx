import { Suspense } from "react";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12">
      <Suspense fallback={<p className="text-sm text-zinc-600">Loading sign in...</p>}>
        <SignIn
          fallbackRedirectUrl="/dashboard"
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
        />
      </Suspense>
    </main>
  );
}