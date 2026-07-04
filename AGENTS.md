<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio v4 — Project Conventions

## Tailwind Theme

Custom colors defined in `app/globals.css` via `@theme inline`:

| Token            | Dark        | Light       |
|------------------|-------------|-------------|
| `bg-background`  | `#09090B`   | `#FAFAFA`   |
| `bg-surface`     | `#111113`   | `#F4F4F5`   |
| `border-border`  | `#27272A`   | `#E4E4E7`   |
| `text-text`      | `#FAFAFA`   | `#18181B`   |
| `text-muted`     | `#A1A1AA`   | `#71717A`   |
| `text-primary` / `bg-primary` | `#8B5CF6` | `#8B5CF6` |
| `bg-primary-hover` | `#7C3AED` | `#7C3AED` |
| `bg-blue` / `text-blue` | `#3B82F6` | `#3B82F6` |
| `bg-success` / `text-success` | `#22C55E` | `#22C55E` |

Dark mode is the default (`:root`). Light mode toggles via JS inline styles (setProperty) on `<html>`, persisted in `localStorage('theme')`.

## Navbar (`app/components/Navbar.tsx`)

- Sticky header with backdrop blur
- Logo on the left, nav links centered, actions (theme toggle + resume download) on the right
- Active section is detected via `IntersectionObserver` with a 40%/55% root margin
- Clicking a nav link calls `scrollIntoView({ behavior: 'smooth' })`
- Active link has a text-width underline bar
- Mobile: hamburger menu with animated X toggle, stacked vertical links, compact resume button
- Uses native `<a>` tags with fragment URLs (`/#about`, `/#projects`, `/#contact`)

## Dark/Light Mode

- `app/components/ThemeToggle.tsx` — sun/moon toggle button
- Color variables are set as inline styles on `<html>` via `style.setProperty()`
- Persists preference in `localStorage('theme')`
- Flash-prevention inline script in `app/layout.tsx` applies before React hydrates

## Single-Page Layout

The portfolio is a single page (`app/page.tsx`) with scrollable sections:

- **Hero** (`#home`) — full-viewport left/right split
- **About** (`#about`) — centered bio
- **Projects** (`#projects`) — responsive card grid
- **Contact** (`#contact`) — email + GitHub links

Each section uses `scroll-mt-20` to offset for the sticky navbar height.

## Resume Download

The Resume button links to `/resume.pdf`. Place the file at `public/resume.pdf`.
