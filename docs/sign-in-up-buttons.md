# Sign-In and Sign-Up Buttons

- Add sign-in and sign-up buttons to the public home page.
- Use Clerk's `SignInButton` and `SignUpButton` with modal mode; do not build custom authentication flows.
- Render auth buttons only for signed-out users; show Clerk's `UserButton` for signed-in users.
- Give signed-in users a link to the protected `/dashboard` page.
- Use the project's shadcn/ui `Button` component for both actions.
- Keep `/` as the main page for both signed-in and signed-out users; modal authentication from `/` returns users to `/`.
- When the dashboard redirects users to `/sign-in` or `/sign-up`, return them to `/dashboard` after authentication.