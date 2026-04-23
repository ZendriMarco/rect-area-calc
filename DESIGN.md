# Design Brief

## Concept
**Precision Tool** — Minimal, distraction-free rectangle area calculator. Clean functional UI focused on accuracy and immediate result feedback.

## Tone & Direction
Utilitarian minimalism inspired by Linear, Figma, Vercel. No decoration. Pure functionality. Button states must be visually distinct.

## Color Palette

| Token              | Light OKLCH    | Dark OKLCH     | Purpose                     |
|--------------------|----------------|----------------|-----------------------------|
| background         | 0.98 0 0       | 0.12 0 0       | Page background             |
| foreground         | 0.15 0 0       | 0.96 0 0       | Body text                   |
| card               | 1.0 0 0        | 0.16 0 0       | Input container, result box |
| primary (blue)     | 0.54 0.13 237  | 0.68 0.15 237  | Calculate button, active state |
| muted              | 0.91 0.01 0    | 0.2 0 0        | Disabled button background  |
| muted-foreground   | 0.5 0 0        | 0.6 0 0        | Disabled text               |
| border             | 0.88 0.01 0    | 0.26 0 0       | Input borders, dividers     |
| destructive        | 0.55 0.22 25   | 0.65 0.19 22   | Clear button (warm red)     |

## Typography
- **Display & Body**: General Sans (400, 700)
- **Mono**: Geist Mono (code contexts)
- **Scale**: 14px body, 16px labels, 20px result heading, 32px result value

## Structural Zones

| Zone         | Background          | Treatment                      |
|--------------|---------------------|--------------------------------|
| Header       | `bg-background`     | Title only, no border          |
| Content      | `bg-background`     | Centered card `bg-card`        |
| Input Fields | `bg-card`           | Subtle border, 4px radius      |
| Result       | `bg-muted/10`       | Elevated card, scale animation |
| Footer       | `bg-background`     | Optional hint text, muted      |

## Component Patterns
- **Inputs**: Subtle border, light background on light mode. Clear focus ring (primary blue).
- **Buttons**: Prominent primary (blue, full width on mobile), destructive (warm red, secondary size).
- **Result**: Large bold value, animated entry (scale + fade), card-style elevation.
- **Disabled State**: Muted grey, no cursor, opacity reduction.

## Spacing & Rhythm
- Gap between inputs: 16px
- Gap input to button: 24px
- Button height: 44px (touch-friendly)
- Card padding: 32px on desktop, 24px on mobile
- Result margin-top: 24px

## Motion & Interaction
- Button hover: 0.3s smooth opacity + scale (98%)
- Result entry: 0.3s spring (cubic-bezier 0.34, 1.56, 0.64, 1) — scale 95% → 100% + fade
- Input focus: 2px primary ring
- Disabled state: immediate (no transition)

## Constraints
- Max width: 400px (card centered on large screens)
- Mobile-first, responsive `sm:` breakpoints
- No gradients, no decorative elements
- High contrast maintained in both light and dark modes
- No animations longer than 0.3s

## Signature Detail
Result animates in with a subtle spring-ease scale-up, giving tactile feedback that the calculation completed. No excessive motion — feels precise and purposeful.
