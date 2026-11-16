# Clerk Authentication Requirements

This project uses Clerk for all authentication. Do not introduce or use any other auth method.

## Required behavior

- All auth flows must use Clerk.
- The `/` page is the main page and remains available to signed-in and signed-out users.
- Sign-in and sign-up flows must launch as Clerk modal flows and return to `/` after completion.
- Any auth-related UI or route protection should follow Clerk conventions and session checks.

## Constraints

- Do not build custom login/signup logic.
- Do not use alternative auth providers or session systems.
- Keep auth behavior consistent with Clerk's modal-based experience.

## Clerk middleware

- Keep `clerkMiddleware()` configured in the root `proxy.ts` so Clerk's request context is available to routes.
