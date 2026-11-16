import { Suspense } from "react";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12">
      <Suspense fallback={<p className="text-sm text-zinc-600">Loading sign up...</p>}>
        <SignUp
          fallbackRedirectUrl="/dashboard"
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
        />
      </Suspense>
    </main>
  );
}