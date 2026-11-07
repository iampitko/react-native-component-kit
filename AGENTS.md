# AGENTS.md — how to work in this repository

This kit is built so that an AI agent (or a developer) can assemble a
React Native app screen without inventing UI from scratch.

## Stack

- React Native (0.76+, also verified against newer) + React
- TypeScript, strict mode
- Built-in `StyleSheet` styling only — no UI libraries, no styled-components
- All design tokens live in `src/theme.ts`

## Rules

1. **Copy, don't import.** Copy `src/theme.ts` and the component files you
   need into the target project. The kit is a source, not an npm package.
2. **Never hardcode colors, spacing or radii in a component.** Use the
   tokens from `theme.ts` (`colors`, `spacing`, `radius`, `typography`).
   To rebrand an app, edit the theme file only.
3. **Props are the API.** Every component exports a typed `*Props`
   interface. Extend props instead of forking internals.
4. **Touch targets stay usable.** Buttons are at least 36pt tall (48 by
   default); tappable rows use `Pressable` with a pressed state and an
   `accessibilityRole`.
5. **Screens are built on `Screen`.** It owns safe-area insets, page
   padding and scrolling. Don't re-implement that per screen.
6. **Lists use `ListItem`, states use `Badge`, loading uses `Spinner`,
   confirmations use `Modal`.** Compose, don't reinvent.

## Adding a new component

- One component per file in `src/components/`, PascalCase name.
- Style with `StyleSheet.create` at the bottom of the file, tokens from
  the theme.
- Export the component and its `*Props` type from `src/components/index.ts`.
- Add a JSDoc comment with an `@example` — agents read these first.
- Document it in `README.md` and run `npm run typecheck` (zero errors)
  before committing.
