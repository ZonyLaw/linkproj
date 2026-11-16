import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <ProtectedDashboard />
    </Suspense>
  );
}

async function ProtectedDashboard() {
  await auth.protect({ unauthenticatedUrl: "/sign-in" });

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          You&apos;re signed in.
        </p>
      </section>
    </main>
  );
}

function DashboardLoading() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Loading dashboard...
      </p>
    </main>
  );
}