# Clerk Authentication Requirements

This project uses Clerk for all authentication. Do not introduce or use any other auth method.

## Required behavior

- All auth flows must use Clerk.
- The `/dashboard` page is a protected route and must require the user to be signed in before access is allowed.
- If a signed-in user visits `/`, redirect them to `/dashboard`.
- Sign-in and sign-up flows must launch as Clerk modal flows instead of full-page auth screens.
- Any auth-related UI or route protection should follow Clerk conventions and session checks.

## Constraints

- Do not build custom login/signup logic.
- Do not use alternative auth providers or session systems.
- Keep auth behavior consistent with Clerk's modal-based experience.

## Protected server routes

- In an App Router server page, import `auth` from `@clerk/nextjs/server` and call `await auth.protect()` before rendering protected content.
- Keep `clerkMiddleware()` configured in the root `proxy.ts` so Clerk's request context is available to routes.
- When investigating an error at `auth.protect()`, check the complete error message and stack trace. A code-frame caret identifies the failing line but does not, by itself, explain the cause.
