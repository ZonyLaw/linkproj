# Sign-In and Sign-Up Buttons

- Add sign-in and sign-up buttons to the public home page.
- Use Clerk's `SignInButton` and `SignUpButton` with modal mode; do not build custom authentication flows.
- Render auth buttons only for signed-out users; show Clerk's `UserButton` for signed-in users.
- Use the project's shadcn/ui `Button` component for both actions.
- Keep `/` as the main page for both signed-in and signed-out users, and return users to `/` after authentication.