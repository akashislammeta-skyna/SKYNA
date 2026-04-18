# Design Brief — SKY NA App Development Company

## Visual Direction
Modern tech-forward showcase with premium refinement. Bold typography, clean card-based layouts, strategic accent color for CTAs and highlights. Confident, trustworthy aesthetic for professional B2B services.

## Tone & Differentiation
Professional yet approachable. Deep indigo paired with vibrant emerald signals "serious tech company" without generic corporate feel. Emerald accent creates visual tension and excitement on CTAs, service cards, and interactive elements.

## Color Palette

| Token | Light | Dark | Usage |
|:---|:---|:---|:---|
| **Primary** | `0.45 0.15 255` | `0.65 0.18 255` | Buttons, links, primary interactive |
| **Accent** | `0.6 0.18 140` | `0.7 0.22 140` | CTAs, highlights, service card borders |
| **Neutral/BG** | `0.98 0.01 0` | `0.12 0 0` | Page backgrounds |
| **Card** | `0.99 0.01 0` | `0.16 0 0` | Card surfaces, elevated areas |
| **Border** | `0.88 0.01 0` | `0.25 0 0` | Dividers, subtle outlines |
| **Text** | `0.15 0 0` | `0.95 0 0` | Foreground text |

## Typography

| Tier | Font | Usage | Weight |
|:---|:---|:---|:---|
| **Display** | Bricolage Grotesque | Hero, section headers | 700 |
| **Body** | General Sans | Paragraph text, descriptions | 400–500 |
| **Mono** | JetBrains Mono | Code snippets, technical labels | 400 |

## Structural Zones

| Zone | Background | Border | Elevation |
|:---|:---|:---|:---|
| **Header** | `card` | `border-b` | `shadow-card` |
| **Hero Section** | `background` | none | Gradient accent text on headline |
| **Service Cards** | `card` | `accent` left-border | `shadow-card` |
| **Content Sections** | `background` | `border-b` | none |
| **Footer** | `muted/20` | `border-t` | none |

## Spacing & Rhythm
- Hero padding: `pt-24 pb-32` on mobile, `pt-32 pb-40` on desktop
- Service cards: `gap-6` in grid, `p-8` per card
- Footer: `py-12` with contained padding
- Consistent 0.75rem border-radius on all cards and buttons

## Component Patterns
- **Buttons**: Primary indigo with emerald hover accent. Secondary outlined style with accent color border.
- **Cards**: Subtle shadow, left-border accent (emerald) on interactive cards. Clean typography hierarchy within.
- **Section Headers**: Bold display font, potential text-gradient on key words.
- **Contact Details**: Flex layout with icons, structured typography for phone/email/address.

## Motion & Animation
- Fade-in on page load (0.4s ease-in-out)
- Slide-up on service cards (0.5s staggered)
- Smooth transition on button hover (0.3s cubic-bezier)
- No bounce or overshoot — premium restraint

## Constraints & Signature Detail
- Max 2–3 sections visible above fold on mobile
- Maintain AA+ contrast in both light and dark modes
- Accent color reserves for CTAs and highlights only; no background fills
- Premium feel through clean spacing, refined shadows, and typography weight contrast
- Signature: Bold indigo-emerald contrast signals "modern tech company doing serious work"
