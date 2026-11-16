import AuthButtons from "./auth-buttons";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <section className="flex w-full max-w-lg flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Welcome
        </h1>
        <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Sign in to your account or create one to continue.
        </p>
        <AuthButtons />
      </section>
    </main>
  );
}
