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

Dark mode is the default (`:root`). Light mode is toggled via the `.light` class on `<html>` (`:root.light` overrides the CSS variables).

## Navbar (`app/components/Navbar.tsx`)

- Sticky header with backdrop blur
- Logo on the left, nav links centered, actions (theme toggle + resume download) on the right
- Active link has a text-width underline bar
- Mobile: hamburger menu with animated X toggle, stacked vertical links, compact resume button
- Uses `next/link` for SPA navigation and `usePathname()` for active link detection

## Dark/Light Mode

- `app/components/ThemeToggle.tsx` — sun/moon toggle button
- Persists preference in `localStorage('theme')`
- Flash-prevention inline script in `app/layout.tsx` applies the saved class before React hydrates

## Adding New Pages

Create a folder under `app/` with a `page.tsx`:

```
app/
├── about/
│   └── page.tsx
├── projects/
│   └── page.tsx
├── contact/
│   └── page.tsx
```

Then add the route to the `navLinks` array in `app/components/Navbar.tsx`.

## Resume Download

The Resume button links to `/resume.pdf`. Place the file at `public/resume.pdf`.
