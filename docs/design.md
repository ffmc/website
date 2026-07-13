---
version: alpha
name: Warm Grotesk
description: A warm, confident personal-portfolio system — near-black type and an amber accent on temperature-tinted off-white, set entirely in Space Grotesk.
theme: light-only          # dark is intentionally out of scope for this portfolio
colors:                    # single-theme (light) semantic roles
  accent:        "#FFB343"   # the one expressive hue — amber
  onAccent:      "#3D3A34"   # warm dark ink for text/icons on amber (AA on accent)
  primary:       "#1C1B19"   # warm near-black — primary action surface + primary text
  onPrimary:     "#FFFFFF"
  surface:       "#F3F1EA"   # warm off-white page background
  surfaceRaised: "#FBFAF6"   # solid warm-white for lifted surfaces (nav, cards)
  surfaceSunken: "#E9E6DD"   # warm placeholder / media backing
  textPrimary:   "#1C1B19"
  textSecondary: "#4A463F"   # warm gray — body/bio
  textMuted:     "#66625A"   # warm gray — captions, idle nav, small labels (AA at ≥13px)
  textFaint:     "#A6A199"   # warm gray — DECORATIVE only (idle icons), never body text
  border:        "#E5E2D9"   # warm hairline
  focusRing:     "#FFB343"   # accent
  scrim:         "rgba(28,27,25,0.86)"  # solid warm-dark caption scrim (replaces glass)
  overlay:       "rgba(28,27,25,0.10)"  # subtle warm hover wash on media
  success:       "#3F8F63"
  warning:       "#C9821F"
  danger:        "#C24A38"
  info:          "#3C6F9E"
typography:
  fontFamily: { display: "Space Grotesk", body: "Space Grotesk" }   # single face, weight does the work
  ratio: "1.25 (majorThird)"
  scale:
    xs:   { size: "0.75rem",  lineHeight: 1.5,  weight: 600, letterSpacing: "0.01em",  family: body }    # 12px — pills, captions, copy-note
    sm:   { size: "0.8125rem",lineHeight: 1.55, weight: 500, letterSpacing: "0",        family: body }    # 13px — nav links, work descriptions
    base: { size: "0.9375rem",lineHeight: 1.6,  weight: 500, letterSpacing: "0",        family: body }    # 15px — UI text: nav name, work titles
    body: { size: "1.0625rem",lineHeight: 1.75, weight: 400, letterSpacing: "0",        family: body }    # 17px — running bio text
    lg:   { size: "1.25rem",  lineHeight: 1.3,  weight: 700, letterSpacing: "0.04em",   family: display }  # 20px — UPPERCASE section labels
    xl:   { size: "1.5rem",   lineHeight: 1.25, weight: 700, letterSpacing: "-0.02em",  family: display }  # 24px
    2xl:  { size: "2rem",     lineHeight: 1.15, weight: 700, letterSpacing: "-0.025em", family: display }  # 32px
    3xl:  { size: "2.75rem",  lineHeight: 1.08, weight: 700, letterSpacing: "-0.03em",  family: display }  # 44px
    4xl:  { size: "clamp(2.375rem, 5.5vw, 4.5rem)", lineHeight: 1.05, weight: 700, letterSpacing: "-0.03em", family: display }  # display — contact heading
spacing:                   # 4px base
  2xs: "4px"
  xs:  "8px"
  sm:  "12px"
  md:  "16px"
  lg:  "24px"
  xl:  "36px"
  2xl: "52px"
  3xl: "72px"
  4xl: "100px"
radius:                    # varies by element class
  xs:   "4px"   # focus outline
  sm:   "8px"   # media inside a card
  md:   "16px"  # work cards
  lg:   "24px"  # portrait frame
  full: "999px" # pills, nav, buttons
elevation:                 # warm-neutral-tinted shadows only — no colored glows
  sm: "0 2px 8px rgba(38,34,26,0.06)"
  md: "0 4px 16px rgba(38,34,26,0.08)"
  lg: "0 20px 48px rgba(38,34,26,0.14)"
components:
  nav:
    variants: [rest, scrolled]
    states:   [rest]
    tokens: { background: "{colors.surfaceRaised}", border: "{colors.border}", radius: "{radius.full}", shadow: "{elevation.sm}" }
  navLink:
    variants: [default]
    states:   [rest, hover, active]
    tokens: { text: "{colors.textMuted}", hoverText: "{colors.textPrimary}", activeBackground: "{colors.accent}", activeText: "{colors.onAccent}", radius: "{radius.full}", font: "{typography.scale.sm}" }
  button:
    variants: [primary, accent, tonal]
    states:   [rest, hover, focusVisible, disabled]
    tokens: { primaryBg: "{colors.primary}", primaryText: "{colors.onPrimary}", primaryHoverBg: "{colors.accent}", primaryHoverText: "{colors.onAccent}", accentBg: "{colors.accent}", accentText: "{colors.onAccent}", tonalBg: "{colors.surfaceSunken}", tonalText: "{colors.textMuted}", radius: "{radius.full}", minHeight: "44px", font: "{typography.scale.base}", shadow: "{elevation.md}" }
  iconButton:
    variants: [ghost]
    states:   [rest, hover, focusVisible]
    tokens: { text: "{colors.textFaint}", hoverText: "{colors.onAccent}", hoverBackground: "{colors.overlay}", size: "44px", radius: "{radius.full}" }
  chip:
    variants: [accent]
    states:   [rest]
    tokens: { background: "{colors.accent}", text: "{colors.onAccent}", radius: "{radius.full}", font: "{typography.scale.xs}", minHeight: "34px" }
  workCard:
    variants: [image, video]
    states:   [rest, hover]
    tokens: { frame: "{colors.surfaceSunken}", radius: "{radius.md}", mediaRadius: "{radius.sm}", shadow: "{elevation.md}", hoverShadow: "{elevation.lg}", scrim: "{colors.scrim}", overlay: "{colors.overlay}", title: "{typography.scale.base}", caption: "{typography.scale.sm}" }
  sectionRule:
    variants: [default]
    states:   [rest]
    tokens: { label: "{typography.scale.lg}", labelColor: "{colors.accent}", line: "{colors.accent}" }
  photo:
    variants: [default]
    states:   [rest]
    tokens: { radius: "{radius.lg}", shadow: "{elevation.lg}" }
---

# Warm Grotesk Design System

## How to build with this
> Read this file before building any UI. `docs/design.md` is the single source of truth; `docs/design.html`
> and `tokens.css` are generated from it — edit this file, then regenerate them, never the reverse.
> Bind every visual value to a token (`var(--…)`); never hardcode a hex/px that has a token. Use only the
> variants and states listed per component — the lists are CLOSED. If a feature needs a token, variant, or
> component that isn't defined here, STOP and flag the user, then add it to this file deliberately — do not
> improvise it. This system is **single-theme (light)** by deliberate choice; there is no dark palette —
> if dark mode is ever wanted, it must be designed and added here, not inverted at runtime. Honor the Do's
> and Don'ts; avoid the named clichés.

## Overview
Warm Grotesk dresses a data-and-design consultant's personal site: a single scrolling page — intro, selected
work, contact. The reader should feel it is **crafted, warm, and quietly confident** — a portfolio that has
taste without shouting. The whole system runs on one typeface (Space Grotesk) and one expressive hue (amber),
so restraint is the point: color and weight carry hierarchy, not decoration. Anti-patterns it must never
become: a cold corporate template, or a site that reaches for a second accent color or a gradient to feel
"designed."

## Colors
The palette is deliberately narrow. **Amber `accent` `#FFB343`** is the only expressive hue — it marks the
brand, the active state, and the primary hover; it is never joined by a second color or a gradient. The
neutrals are the opinionated move: rather than the pure-gray `#F2F2F2` the site started from, every neutral is
**temperature-tinted warm** so the whole surface sits on the amber's side of the color wheel — `surface`
`#F3F1EA`, warm-white `surfaceRaised` for lifted elements, and a warm-gray text ramp (`textSecondary`
`#4A463F` → `textMuted` `#66625A`). Ink is a warm near-black `#1C1B19`, not `#000`. Contrast: `textPrimary`,
`textSecondary`, and `textMuted` all pass WCAG AA on `surface`; `onAccent` `#3D3A34` passes AA on amber;
`textFaint` fails text contrast **by design** and is reserved for decorative idle icons that darken on hover.
`scrim` and `overlay` are solid warm-dark washes for media — they replace the previous glass. Semantic
`success/warning/danger/info` are warm-leaning and defined for completeness (e.g. copy-confirmation), not
decoration.

## Typography
One face, **Space Grotesk**, across the whole system — its slightly mechanical, quirky grotesk character is
distinctive enough to carry display duty, so weight and size (not a second family) create hierarchy. Display
levels (`lg`–`4xl`) run at weight 700 with negative letter-spacing that tightens as size grows; `lg` is the
exception — an UPPERCASE, positively-tracked section label. Reading text (`body`, 17px) sits at weight 400 with
a generous 1.75 line-height and should be held to a comfortable measure. UI text (`base`/`sm`, 15/13px, weight
500) covers nav, titles and captions. The scale follows a **1.25 (major-third) ratio**; the `4xl` display uses
a `clamp()` so the contact headline scales fluidly.

## Layout
Spacing is a **4px-based scale** (`2xs` 4 → `4xl` 100) with real rhythm: tight gaps within a group (`xs`–`md`),
generous gaps between sections (`3xl`–`4xl`). The page is a single centered column, `max-width` ~1120px, with
`2xl` (52px) side padding collapsing to `lg` on narrow screens. Running text carries a measure of ~62ch so bio
paragraphs never stretch full-width. The work gallery is a two-column grid at `md` (16px) gutters, collapsing
to one column under 860px.

## Elevation & Depth
Depth comes from **warm-neutral-tinted shadows only** — a three-step scale (`sm`/`md`/`lg`) tinted with the
warm near-black `rgba(38,34,26,…)`, never a colored glow or halo. Cards rest at `md` and lift to `lg` on hover
(paired with a small upward translate); the portrait frame uses `lg`. This is a deliberate correction from the
earlier amber-tinted glow shadows — elevation should read as light, not as brand color bleeding out of the box.

## Shapes
Radius **varies by element class**, which is the shape system's signal: fully-round `full` (999px) for every
pill-shaped interactive element (nav, buttons, chips) so the UI feels friendly and tactile; `md` (16px) for
work cards; `lg` (24px) for the portrait frame; `sm` (8px) for media nested inside a card; `xs` (4px) for the
focus outline. Sharp corners are not used anywhere — the language is soft throughout, but graduated.

## Components
- **nav** — floating centered pill bar. `rest`: a solid `surfaceRaised` menu pill with a hairline `border` and
  `elevation.sm` (no blur/glass). `scrolled`: same treatment, condensed padding. The brand name is an
  `button/accent`. Closed variants: `rest`, `scrolled`.
- **navLink** — text link in the menu. `rest` `textMuted`; `hover` `textPrimary` on a faint neutral wash;
  `active` amber background with `onAccent` text. Idle links use `textMuted` (not `textFaint`) so they meet AA.
- **button** — pill actions, ≥44px hit area. `primary`: warm-near-black bg, white text, **hovers to amber**
  with `onAccent` text and a small lift (`elevation.md`). `accent`: amber bg, `onAccent` text (brand name,
  active pills). `tonal`: warm `surfaceSunken` bg with `textMuted`, darkens on hover (social pills). All show
  a 2px amber `focusRing` on `focusVisible`; `disabled` drops to 45% opacity, no lift.
- **iconButton** — circular ghost, 44px, icon in `textFaint` that darkens to `onAccent` on a faint wash hover
  (footer socials).
- **chip** — static amber tag for skills. `accent` only; not interactive; ≥34px tall.
- **workCard** — gallery thumbnail. `image`: framed media on `surfaceSunken`, `radius.md` outer / `radius.sm`
  inner, `elevation.md` rest → `elevation.lg` hover with a `sm` upward translate and a slow (0.45s) image
  scale; a `scrim` caption band slides up on hover with `sm` white text. `video`: same frame, centered video.
  Closed variants: `image`, `video`. **No colored hover ring** — the lift and scale carry the affordance.
- **sectionRule** — an UPPERCASE `lg` amber label followed by a 1px amber line filling the row.
- **photo** — the portrait: `radius.lg` frame, `object-fit: cover`, `elevation.lg` (neutral, not amber).

## Do's and Don'ts
**Do**
- Keep amber as the *only* expressive color; let weight and warm neutrals do the rest.
- Temperature-tint every neutral warm — no pure grays, no `#000`, no `#F2F2F2`.
- Bind visual values to tokens (`var(--…)`); rationalize any new size onto the spacing/type scale.
- Give interactive pills a ≥44px hit area and a visible amber focus ring.
- Use `elevation.*` for all shadows; hold bio copy to its ~62ch measure.

**Don't**
- Don't add a second accent hue or any gradient — not on heroes, not on buttons.
- Don't reintroduce amber-tinted glow shadows or colored hover halos — elevation is neutral.
- Don't use glassmorphism (backdrop-blur translucent panels); lifted surfaces are solid `surfaceRaised`.
- Don't use `textFaint` for body or any essential text — decorative idle icons only.
- Don't invent a variant/state or hardcode a value that has a token — flag it and add it here first.
- Don't use emoji as icons or list markers, or bounce/overshoot easing (motion is ≤300ms ease-out).
