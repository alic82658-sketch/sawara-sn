# Handoff: Sawara Entreprise — Hero section

## Overview

Recreate the **hero** (header + hero block + credibility card) of the Sawara Entreprise homepage in the live codebase. Goal: a premium, sober positioning that establishes Sawara as a recognized expert in **désinsectisation, dératisation, désinfection and the sale of anti-nuisibles solutions**, with strong upfront Google proof.

The rest of the homepage (services, products, CTA banner, footer) is out of scope for this handoff.

---

## About the design files

The files in `reference/` are **design references created in HTML/CSS/JS** — a working prototype showing intended look and behavior, **not production code to copy as-is**.

The task is to **recreate this design inside the existing site's environment** (React, Vue, Astro, plain HTML — whatever the codebase uses), reusing existing layout primitives, fonts, and design tokens where possible. If no environment exists yet, plain HTML + a single CSS file + a tiny JS module is appropriate (this is what the reference uses).

The `snippets/` folder ships clean, copy-pasteable HTML / CSS / JS that can be inlined directly if the target stack is plain HTML.

## Fidelity

**High-fidelity** (hifi). All colors, spacing, type sizes, animation timings, and copy in this handoff are final. Reproduce pixel-faithfully.

---

## Screens / Views

This handoff covers **one composition**, the home page hero, made of two screen-spanning elements:

### Screen 1 — Sticky Header (`<header class="site">`)

- **Purpose**: Brand identification, top-level navigation, primary contact CTA on every page.
- **Layout**: Single horizontal flex row, 84 px tall. Sticky to top. Translucent ivory background with `backdrop-filter: blur(14px) saturate(180%)` and a 1-px bottom border (`rgba(15,46,32,.06)`).
- **Components**:
  - **Brand (left)** — circle logo mark (54 × 54, white bg, 1-px line inset shadow) + wordmark stack: `Sawara` (Bricolage Grotesque 700, 21 px, color `--green-900`) with eyebrow `ENTREPRISE` underneath (Manrope 500, 10.5 px, uppercase, letter-spacing 0.16em, color `--ink-3`).
  - **Primary nav (center, ≥1000 px)** — 5 pill links: `Services`, `Produits`, `Pourquoi nous`, `Références`, `Contact`. Manrope 500, 14 px. Hover: color `--green-800` + 16-px green underline animated in below the text.
  - **Phone number (right, ≥1200 px)** — Manrope 500, 13 px, color `--ink-3`, with a green phone icon `--green-700`. Plain text, not a link.
  - **WhatsApp button (right, always)** — `.wa-btn`: solid `--whatsapp` (`#25D366`), white text 14 px / 700, padding 11/18, fully rounded, drop shadow `0 6px 16px rgba(37,211,102,.32)`. Label switches to `Devis WhatsApp` at ≥520 px, `WhatsApp` below.
- **Hover/focus**: brand link plain; nav links underline animation; WhatsApp button lifts 1 px and deepens its shadow.

### Screen 2 — Hero block (`<section class="hero">`)

- **Purpose**: Communicate Sawara's expertise on first paint, surface Google proof (4.9 / 5 on 100+ reviews) immediately, drive to WhatsApp.
- **Layout** (desktop ≥1000 px): 2-column grid inside `.container` (max-width 1280 px). `grid-template-columns: 1.05fr .95fr; gap: 48px; align-items: center;` 60 px top / 40 px bottom padding.
- **Layout** (mobile <1000 px): single column, text on top, credibility card below. 28 px gap.
- **Left column (`.hero-text`)**:
  1. **4 pill badges** in a flex-wrap row (gap 8 px). Each: white background, 1-px `--line` border, `--shadow-sm`, padding 7/14, font 12.5 px / 500, `white-space: nowrap`. First badge has an 8-px `--green-500` dot with `--green-100` halo. Fourth badge wraps "Produits anti-nuisibles disponibles" in `<strong>` (color `--ink`).
     - Order: `Disponible 6j/7` (with dot) · `Devis rapide` · `Intervention à Dakar et au-delà` · **`Produits anti-nuisibles disponibles`**.
  2. **H1** — Bricolage Grotesque 700, color `--green-900`, `clamp(30px, 3.9vw, 50px)`, line-height 1.05, `text-wrap: balance`. Three lines via two manual `<br>`:
     - `Experts en désinsectisation,`
     - `dératisation, désinfection`
     - `& traitement des [ROTATING WORD].`
     - The rotating word is rendered through `<span class="rot"><span class="rot-word">…</span></span>` (color `--green-500`, italic, thin underline). See **Interactions** below.
  3. **Subtitle** (`p.lede`) — Manrope 400, color `--ink-2`, font 17 px (mobile) / 18.5 px (desktop), line-height 1.55, max-width 560 px, margin-top 22 px.
     > Sawara Entreprise accompagne les **particuliers, entreprises et institutions** pour le traitement des nuisibles, la désinfection, la dératisation, le nettoyage professionnel et la **vente de solutions anti-nuisibles**. Intervention à Dakar et au-delà selon les besoins.
  4. **CTA row** (flex, gap 12 px, margin-top 28 px):
     - `.btn-primary` — WhatsApp green pill, label `Devis rapide sur WhatsApp`, WhatsApp icon. Targets `https://wa.me/221775526419`.
     - `.btn-ghost` — white pill with 1-px `--line` border, label `Découvrir nos solutions`, arrow icon. Targets `#produits`.
- **Right column (`.hero-visual`)** — single `.cred-card` (white, `--r-xl` 44-px corners, large soft shadow). Three regions:
  1. **`.cred-head`** — dark green panel (`--green-800`) with subtle radial decor. Eyebrow `SAWARA ENTREPRISE · CRÉDIBILITÉ` (Manrope 600, 11 px, uppercase, letter-spacing 0.18em, color `--green-400`, prefixed with a thin horizontal line). H3 `Une entreprise déjà recommandée, expérimentée et reconnue.` — Bricolage 700, 22 px, color white, "recommandée" wrapped in `<b>` colored `--green-400`.
  2. **`.cred-body`** — padded 18/22/14, gap 14 px:
     - **`.cred-google`** — visually dominant block. Background `linear-gradient(135deg, --green-100, --green-50)`, 1-px `--green-200` border, `--r-md` radius, subtle radial decor in top right.
       - Left "rating" stack — `4,9 / 5` (Bricolage 700, **40 px**, `--green-900`, with the `/5` smaller at 18 px in `--green-700`) above 5 gold `--star` stars; separated from the rest by a 1-px `--green-200` vertical line.
       - Right "info" stack — eyebrow `✓ +100 AVIS VÉRIFIÉS SUR GOOGLE` (the `✓` is a 14-px circular `--green-500` chip with a white checkmark); then h4 `Note moyenne 4,9 / 5` (Bricolage 700, 19 px, `--green-900`); then `Particuliers · Entreprises · Institutions` (12 px, `--ink-3`).
     - **Three `.cred-item` rows**, each with 38-px rounded green-100 icon tile, title (Bricolage 700, 15 px), subtitle (12.5 px, `--ink-3`), and optional right-side meta number. 1-px `--line` divider between rows; last row has no divider.
       1. Icon "refresh-circle" · `+6 ans d'expérience` / `À Dakar et au-delà selon les besoins` / meta `6+` (Bricolage 700, 20 px, `--green-700`).
       2. Icon "shield-check" · `Eiffage · ONG danoise · Ambassades` / `Références institutionnelles vérifiables`.
       3. Icon "document" · `Références professionnelles` / `Lettres de recommandation disponibles sur demande`.
  3. **`.cred-foot`** — pale green strip (`--green-50`), 1-px `--line` top border. Left: uppercase label `SÉNÉGAL · INTERVENTION SELON LES BESOINS` (11.5 px, `--ink-3`). Right: link `Devis rapide →` to WhatsApp (13 px, 700, `--green-700`, hover `--green-900`).

---

## Interactions & Behavior

### Rotating word
- Inside the H1, the trailing nuisible word cycles through **six values** in this exact order:
  1. `cafards`
  2. `fourmis`
  3. `punaises de lit`
  4. `rongeurs`
  5. `moustiques`
  6. `termites`
- **Dwell time per word**: 2000 ms.
- **Transition duration**: 280 ms.
- **Effect**: current word fades out + slides up `0.45em`. Simultaneously, the container width animates to fit the next word in `cubic-bezier(.4, 0, .2, 1)` over 450 ms. After 280 ms, swap text and fade the new word in from `+0.45em` to `0`. The static text around (`& traitement des … .`) never reflows.
- The underline beneath the rotating word is part of `.rot` (`::after` thin green bar).
- Implementation: `snippets/rotator.js` (vanilla JS, no deps). Mount once after the H1 is in the DOM.
- **Reduced motion**: when `prefers-reduced-motion: reduce` matches, transitions are dropped — the word still rotates but instantly.
- Recomputes width on `resize` and after `document.fonts.ready` so initial paint with the fallback font doesn't desync.

### Hover & focus states
- Nav primary links: text color shifts to `--green-800`; a 16-px green underline animates in below.
- WhatsApp buttons (header, hero CTA, cred footer): `translateY(-1px)` lift + deeper green shadow.
- `.btn-ghost`: border color → `--green-500`, background → `--green-50`.
- `.cred-foot a`: color → `--green-900`.
- Focus: project should add `:focus-visible { outline: 2px solid var(--green-500); outline-offset: 2px; }` globally for links/buttons. Not in the snippets.

### Responsive behavior
- `≥1200 px`: phone number appears in header.
- `≥1000 px`: nav primary visible; hero becomes 2-column; H1 caps at 50 px.
- `≥900 px`: container padding 40 px (was 20 px).
- `≥560 px`: trust-row (not used in this hero anymore but kept in tokens) becomes 4-column.
- `≥520 px`: WhatsApp button shows long label `Devis WhatsApp`.
- `<1000 px`: hero stacks vertically; nav primary hidden; H1 shrinks via clamp.
- `<520 px`: WhatsApp button label shrinks to just `WhatsApp`.

---

## State management

None required. The rotating word is a self-contained DOM module; everything else is static markup.

If the target framework wants idiomatic state:
- `useState(0)` for current index, `useEffect` for the 2-s interval, ref to the span for width measurement. Be sure to clean up the interval on unmount.

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--green-900` | `#0F2E20` | H1 text, footer bg, primary text on light |
| `--green-800` | `#143A2A` | Credibility card header bg |
| `--green-700` | `#1C4D38` | Icon strokes, "big-num" meta, footer link |
| `--green-500` | `#7BC042` | **Brand accent**, rotating-word color, dot/check chips |
| `--green-400` | `#92CE5C` | Eyebrow on dark green bg, `<b>` highlight |
| `--green-200` | `#D6ECC1` | Google block border |
| `--green-100` | `#EEF6E8` | Icon tile bg, Google block gradient start |
| `--green-50`  | `#F6FBF1` | Card footer bg, Google block gradient end |
| `--ivory`     | `#FAFAF7` | Page background |
| `--paper`     | `#FFFFFF` | Cards |
| `--ink`       | `#0B1F16` | Strong body text |
| `--ink-2`     | `#3A4A41` | Body text |
| `--ink-3`     | `#6B7A72` | Tertiary text, labels |
| `--line`      | `#E7EDE5` | Hairline borders, dividers |
| `--whatsapp`  | `#25D366` | WhatsApp button fill |
| `--star`      | `#F5B423` | Gold review stars |

### Radii
| Token | Value |
|---|---|
| `--r-sm` | 14 px |
| `--r-md` | 22 px |
| `--r-lg` | 32 px |
| `--r-xl` | 44 px |

### Shadows
| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(15,46,32,.04), 0 2px 8px rgba(15,46,32,.04)` |
| `--shadow-md` | `0 6px 16px rgba(15,46,32,.06), 0 24px 48px -16px rgba(15,46,32,.10)` |
| `--shadow-lg` | `0 12px 32px rgba(15,46,32,.10), 0 40px 80px -24px rgba(15,46,32,.16)` |

Card-specific: `0 30px 60px -24px rgba(20,58,42,.22), 0 2px 6px rgba(20,58,42,.06)` (credibility card).
WhatsApp button: `0 6px 16px rgba(37,211,102,.32)` (header) / `0 10px 24px rgba(37,211,102,.30)` (primary CTA).

### Spacing (4/8-px scale)
- Container padding: 20 px mobile / 40 px desktop, max-width 1280 px.
- Header height: 84 px.
- Hero vertical padding: 36/24 (mobile) / 60/40 (desktop).
- Inter-column gap (hero grid): 28 px (stacked) / 48 px (2-col).
- Badge gap: 8 px. CTA gap: 12 px. Cred-body gap: 14 px.

### Typography
- **Display family**: `Bricolage Grotesque` (Google Fonts — weights 500, 600, 700, 800; variable opsz).
- **Body family**: `Manrope` (Google Fonts — weights 400, 500, 600, 700).
- **Mono** (placeholders, not used in hero): `JetBrains Mono`.

Sizes (final):
| Element | Size | Weight | LH | Tracking |
|---|---|---|---|---|
| Hero H1 | `clamp(30px, 3.9vw, 50px)` | 700 | 1.05 | -0.025em |
| Subtitle | 17–18.5 px | 400 | 1.55 | — |
| Badge | 12.5 px | 500 | — | — |
| Primary CTA | 15 px | 700 | — | — |
| Eyebrow (cred head, google lbl) | 11 px | 600/700 | — | 0.18em uppercase |
| Cred title h3 | 22 px | 700 | 1.15 | -0.01em |
| Google rating "4,9" | 40 px | 700 | 1 | -0.03em |
| Cred-item title | 15 px | 700 | 1.2 | -0.005em |

Google Fonts link to include in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Assets

| Asset | Path in handoff | Use in hero | Notes |
|---|---|---|---|
| Sawara icon (cropped from supplied logo) | `reference/assets/sawara-icon.png` | Header brand mark (54-px round) | 512 × 460 PNG, ~120 KB. Was generated from the client's full logo by cropping just the green-circle figure (excluding the bottom "SAWARA Entreprise" text) and inserting a small white plate at the bottom to hide overflow. **Replace with a properly transparent SVG if available.** |
| Sawara full logo (icon + wordmark) | `reference/assets/sawara-logo-full.png` | Not used in hero — kept for footer / favicon / OG image derivation | 800 × 768 PNG. |
| Inline SVG icons (refresh-circle, shield-check, document, WhatsApp, star, phone, arrow-right) | embedded in `snippets/hero.html` | Cred-card rows, header phone, CTAs | Plain inline `<svg>`. Replace with the codebase's icon library if one exists (lucide, heroicons, feather all map cleanly). |

No bitmap photos appear in the hero. If a real "équipe en intervention" photo is added later, the credibility card design is sized to remain dominant on the right.

---

## SEO / GEO (do not drop on integration)

These belong in `<head>` of the home page:

```html
<title>Sawara Entreprise — Désinsectisation, dératisation et nettoyage professionnel à Dakar</title>
<meta name="description" content="Sawara Entreprise, basée à Dakar : désinsectisation, désinfection, dératisation, nettoyage professionnel et vente de solutions anti-nuisibles (terre de diatomée, pièges à souris, seringues anti-cafards, insecticides anti-fourmis). 6+ ans d'expérience, 4,9/5 sur Google.">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sawara Entreprise",
  "image": "https://www.sawara-entreprise.com/assets/sawara-icon.png",
  "description": "Sawara Entreprise est une entreprise basée à Dakar spécialisée dans la désinsectisation, la désinfection, la dératisation, le nettoyage professionnel et la vente de solutions anti-nuisibles comme la terre de diatomée, les pièges à souris, les seringues anti-cafards et les insecticides anti-fourmis.",
  "address": {"@type": "PostalAddress", "addressLocality": "Dakar", "addressCountry": "SN"},
  "telephone": "+221775526419",
  "url": "https://www.sawara-entreprise.com",
  "areaServed": "Dakar et banlieue",
  "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "100"},
  "openingHours": "Mo-Sa 08:00-19:00"
}
</script>
```

The full `makesOffer[]` array (services + products) is present in `reference/home.html` and should be preserved if the products section is also being ported.

---

## Accessibility

- Logo `<img>`: `alt=""` (decorative, wordmark sits next to it).
- SVGs that are purely decorative: `aria-hidden="true"`.
- WhatsApp anchors: add `aria-label="Contacter Sawara sur WhatsApp"` (already in the snippet).
- Cred-card icons: `aria-hidden="true"`, the text label is the accessible name.
- Rotating word: stays in the live DOM (`<span class="rot-word">`). It is *not* announced live to screen readers (no `aria-live`) — intentional, to avoid noisy interruptions. The H1 is still readable end-to-end because the underlying text node is updated in place.
- Color contrast: `--green-900` on `--ivory` clears WCAG AAA. `--green-700` on `--green-50` and white meet AA for body sizes.
- Hit targets: every CTA is ≥ 44 px tall.
- Add `:focus-visible { outline: 2px solid var(--green-500); outline-offset: 2px; border-radius: 99px; }` for keyboard users in the host stylesheet.

---

## Factual data — do not modify

These appear on screen and must stay accurate:

- Phone: **+221 77 552 64 19** (`https://wa.me/221775526419`).
- Google rating: **4,9 / 5** on **100+** verified reviews.
- Experience: **6+ years**.
- References: **Eiffage · ONG danoise · Ambassades** (institutional only). No individual quote testimonials.
- Wording: "lettres de recommandation **disponibles sur demande**" — never published verbatim.
- Products positioning: never promise 100 % eradication. Use "solution adaptée", "traitement ciblé", "conseil & accompagnement".

---

## Files in this bundle

```
design_handoff_sawara_hero/
├── README.md                ← this file
├── SPEC-HERO.md             ← the original concise spec (reading order: this README first, SPEC for cross-reference)
├── snippets/
│   ├── hero.html            ← clean header + hero markup, ready to paste
│   ├── hero.css             ← tokens + reset + header + hero CSS, in section order
│   └── rotator.js           ← vanilla-JS rotator, no dependencies
└── reference/
    ├── home.html            ← full live homepage (hero in context — also includes the rest of the page)
    └── assets/
        ├── sawara-icon.png  ← circular brand mark (used in header)
        └── sawara-logo-full.png  ← full logo with wordmark
```

To preview the reference locally: open `reference/home.html` in a browser.

---

## Implementation checklist (for the developer)

1. [ ] Register Bricolage Grotesque + Manrope (via Google Fonts or self-hosted equivalent).
2. [ ] Add design tokens (`:root` block in `snippets/hero.css`) to the global stylesheet — match naming or remap to the codebase's existing token system.
3. [ ] Port the header — sticky, blurred ivory, 84 px tall, brand + nav + CTAs.
4. [ ] Drop in the hero section — 2-column grid with the badges / H1 / subtitle / CTAs on the left, credibility card on the right.
5. [ ] Wire the rotating word using `snippets/rotator.js` (or a framework-native equivalent).
6. [ ] Verify Google block dominance: `4,9 / 5` should be the largest number visible after the H1.
7. [ ] Test mobile (390 px), tablet (768 px), desktop (1440 px), wide (1600 px+).
8. [ ] Verify `prefers-reduced-motion` disables the rotator transitions.
9. [ ] Ship the `<title>`, `<meta name="description">`, and JSON-LD `LocalBusiness` block.
10. [ ] Set `:focus-visible` outline globally for keyboard accessibility.
