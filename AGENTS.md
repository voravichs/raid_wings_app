<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

# Project conventions

This project uses Next.js with the App Router.

## Component placement
- Keep components used by only one route in that route's `_components/` folder.
- Put generic, reusable UI in `src/components/ui/` and shared layout
  components in `src/components/layout/`.
- Keep components shared within one feature in `src/features/<feature>/components/`.
- Check for an existing component before creating a new one.

## Server and Client Components
- Prefer Server Components by default.
- Add `"use client"` only where client-side behavior is needed, such as
  event handlers, state, or browser APIs. Keep that boundary small.

<!-- END:nextjs-agent-rules -->
