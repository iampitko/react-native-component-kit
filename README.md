# react-native-component-kit

**Agent-ready UI components for React Native + TypeScript.**

A small, dependency-free set of building blocks for booking, service and
small-business apps — the kind an agent can assemble into real screens:
a themed design system in one file, typed props on every component, and a
JSDoc `@example` in every file. Point your agent at
[`AGENTS.md`](AGENTS.md): it explains the stack, the theming rules, and
the composition patterns.

## How to use

1. Copy `src/theme.ts` into your project.
2. Copy the component files you need from `src/components/`.
3. Import and compose:

```tsx
import { Screen, Header, ListItem, Badge, Button } from "./components";
```

Rebrand the whole kit by editing `theme.ts` only — every color, spacing
value and radius flows from there.

## Components

| Component | What it does |
|---|---|
| `Screen` | Page scaffold: safe area, padding, optional scrolling |
| `Header` | Screen title, subtitle, back button, right action |
| `Button` | 4 variants, 3 sizes, loading state |
| `Input` | Labelled text input with error state |
| `Card` | Surface container for grouped content |
| `ListItem` | Tappable row with subtitle, right value, chevron |
| `Badge` | Status label with 5 tones |
| `Avatar` | Photo or initials fallback |
| `Modal` | Bottom-sheet modal, backdrop close |
| `Spinner` | Full-area loading state |

## Full screen example

[`docs/EXAMPLES.md`](docs/EXAMPLES.md) builds a bookings screen (the home
screen of a cleaning-service app) using only these components.

## Verified

Type-checked against the real React Native type definitions
(`npm run typecheck`, zero errors).

## License

MIT. Take the components, ship your app.
