<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Critical requirement: read the relevant documentation before writing code

Before generating, editing, or proposing any code in this project, read the relevant documentation and project instructions first. This is mandatory and is critical to avoiding incorrect assumptions, outdated patterns, and mismatches with the app's actual architecture.

For this project, the required review includes the relevant docs in the /docs folder and any framework-specific guidance such as the Next.js docs in `node_modules/next/dist/docs/` when applicable. Do not generate code until the relevant documentation has been read and understood.

## GitHub Customizations

This project follows the instructions and workflows specified in these Markdown files located in the /docs folder:

- [Instruction Generator agent](.github/agents/instructions-generator.agent.md)
- [Create instructions prompt](.github/prompts/create-instructions.prompt.md)
- [Sign-in and sign-up button instructions](docs/sign-in-up-buttons.md)
