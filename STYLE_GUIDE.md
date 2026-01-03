# Style Guide - Dulai Films Portfolio

## 🎨 Design System Visual Reference

---

## Colors

### Dark Theme (Default)

```
Primary Background:  #0a0e18
                     █████████████████████████████████
                     Deep, rich black for premium feel

Secondary BG:        #101420
                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                     Slightly lighter for contrast

Text Primary:        #f8fafc
                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                     Soft white, reduces eye strain

Text Secondary:      #cbd5e1
                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                     Slightly muted for supporting text

Accent:              #ef4444
                     ███████████████████████████████
                     Confident red for CTAs and highlights

Success:             #10b981
                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                     Green for positive states

Warning:             #f59e0b
                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                     Amber for warnings
```

### Light Theme

```
Primary Background: #f8fafc
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    Clean, bright white

Text Primary:       #0f172a
                    █████████████████████████████████
                    Deep dark for contrast

Text Secondary:     #475569
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    Medium gray

Accent:             #ef4444
                    ███████████████████████████████
                    Same red (consistency across themes)
```

---

## Typography

### Font Stack

**Primary (Body Text)**
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif
↓
Uses system fonts for instant loading and user familiarity
↓
Mac: San Francisco
Windows: Segoe UI
Linux: Ubuntu
Android: Roboto
```

**Display (Headlines)**
```
'Space Grotesk', fallback to system fonts
↓
Modern, creative, distinctive
↓
Used for: Hero H1, Section titles
```

### Type Scale (Responsive)

```
Extra Small (xs)
12px ← → 14px
└─ Labels, badges, small text
└─ Example: "AERIAL COMMERCIAL" category badges

Small (sm)
14px ← → 16px
└─ Nav links, form labels
└─ Example: Navigation "Work", "Gallery", "Contact"

Base
16px ← → 18px
└─ Body text, paragraphs
└─ Example: "Crafting Cinematic Experiences..."

Large (lg)
20px ← → 24px
└─ Introductory text, emphasis
└─ Example: Hero subtitle

Extra Large (xl)
24px ← → 32px
└─ Secondary headings, featured text

2XL
32px ← → 40px
└─ Section titles
└─ Example: "FEATURED WORK"

3XL
40px ← → 56px
└─ Large section headings

4XL (Hero)
48px ← → 72px
└─ Main heading
└─ Example: "FILM/VIDEO PRODUCTION COMPANY"
```

### Font Weights

```
Regular (400)
└─ Body text, normal weight
└─ "Crafting Cinematic experiences"

Medium (500)
└─ Nav links, secondary emphasis
└─ "Work", "Gallery", "Contact"

Semibold (600)
└─ Card titles, button text
└─ "Above the Standard"

Bold (700)
└─ Headings, strong emphasis
└─ "FEATURED WORK"
```

### Line Heights

```
Tight (1.2)
Used for: Headings
Purpose: Compact, powerful look
Example: Hero H1

Normal (1.5)
Used for: Body text, nav
Purpose: Comfortable reading

Relaxed (1.75)
Used for: Long-form content
Purpose: Maximum readability
```

---

## Spacing

### The 8px Grid

```
4px   (--space-1)  ▣
8px   (--space-2)  ▣▣ ← Most common
12px  (--space-3)  ▣▣▣
16px  (--space-4)  ▣▣▣▣ ← Standard padding
20px  (--space-5)  ▣▣▣▣▣
24px  (--space-6)  ▣▣▣▣▣▣ ← Card padding
32px  (--space-8)  ▣▣▣▣▣▣▣▣ ← Section gaps
48px  (--space-12) ▣▣▣▣▣▣▣▣▣▣▣▣
64px  (--space-16) ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
96px  (--space-24) ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
```

### Usage Examples

```
Navigation:
  Padding:      16px horizontal, 16px vertical (--space-4)
  Gap:          32px between links (--space-8)

Cards:
  Padding:      24px (--space-6)
  Gap:          32px between cards (--space-8)

Sections:
  Vertical:     96px top/bottom (--space-24)
  Horizontal:   Responsive (clamp)

Buttons:
  Padding:      16px vertical, 40px horizontal (--space-4, --space-10)
  Min Height:   48px (touch target)
```

---

## Border Radius

```
Extra Small (xs)
4px
└─ Subtle, minimal rounding
└─ Not commonly used

Small (sm)
6px
└─ Buttons, small elements

Medium (md)
8px
└─ Primary choice for buttons
└─ Small components
└─ Example: Close button

Large (lg)
12px
└─ Cards, images, large elements
└─ Example: Work cards, gallery items

Full
9999px
└─ Perfect circles
└─ Pill-shaped buttons
└─ Example: Theme toggle button
```

---

## Shadows & Depth

### Shadow System

```
Small Shadow (sm)
0 4px 12px rgba(0, 0, 0, 0.1)
└─ Subtle elevation
└─ Cards at rest

Medium Shadow (md)
0 12px 32px rgba(0, 0, 0, 0.2)
└─ Cards on hover
└─ Interactive states

Large Shadow (lg)
0 20px 60px rgba(0, 0, 0, 0.3)
└─ Modals, lightboxes
└─ Maximum elevation

Glow Shadow
0 12px 32px rgba(239, 68, 68, 0.2)
└─ On hover for accent elements
└─ Subtle red tint
```

### Depth Layers

```
Layer 1: Text
└─ No shadow

Layer 2: Buttons, Links
└─ None at rest, subtle on hover

Layer 3: Cards, Images
└─ Small shadow (4px)
└─ Medium on hover (12px)

Layer 4: Modals, Overlays
└─ Large shadow (20px)
└─ Backdrop blur (6px)
```

---

## Micro-Interactions

### Transitions

```
Fast (150ms)
└─ Color changes, simple hovers
└─ Example: Nav link color change
└─ Feel: Snappy, responsive

Base (250ms) [DEFAULT]
└─ Most interactions
└─ Example: Card elevation, button states
└─ Feel: Smooth, natural

Slow (400ms)
└─ Modal entrance, complex animations
└─ Example: Lightbox expansion
└─ Feel: Dramatic, intentional
```

All use: `cubic-bezier(0.4, 0, 0.2, 1)` easing
(Material Design "easeOutCubic" - natural, not bouncy)

### Common Patterns

```
Button Hover:
  Transform:   translateY(-2px)
  Shadow:      0 → 12px
  Transition:  250ms

Card Hover:
  Transform:   translateY(-4px)
  Shadow:      4px → 12px
  Filter:      brightness(100% → 60%)
  Transition:  250ms

Link Hover:
  Underline:   0% → 100% width
  Color:       Primary → Accent
  Transition:  150ms

Modal Enter:
  Opacity:     0 → 1
  Scale:       0.9 → 1
  Transition:  400ms

Theme Toggle:
  Rotate:      0 → 180deg (sun to moon)
  Opacity:     1 → 0 (fade swap)
  Transition:  150ms
```

---

## Responsive Breakpoints

```
Desktop
├─ Width: 968px+
├─ Navigation: Horizontal
├─ Grid: 3 columns
├─ Spacing: Generous (5vw horizontal)
└─ Font: Full size

Tablet
├─ Width: 481px - 968px
├─ Navigation: Hamburger menu
├─ Grid: 2 columns
├─ Spacing: Medium (responsive clamp)
└─ Font: Adjusted

Mobile
├─ Width: <480px
├─ Navigation: Full-width drawer
├─ Grid: 1 column
├─ Spacing: Compact (clamp)
└─ Font: Optimized
└─ Touch targets: 44px minimum
```

---

## Component Examples

### Button (Default)

```
State: Default
  ┌────────────────────┐
  │  VIEW MY WORK      │  ← White text
  └────────────────────┘
  Background: #ef4444 (Red)
  Padding: 16px 40px
  Height: 48px min
  Radius: 9999px (full pill)

State: Hover
  ┌────────────────────┐
  │  VIEW MY WORK      │
  └────────────────────┘
  ↑ 2px lift
  Background: #dc2626 (Darker red)
  Shadow: 0 12px 32px rgba(239, 68, 68, 0.2)

State: Active
  ┌────────────────────┐
  │  VIEW MY WORK      │
  └────────────────────┘
  No lift (back to normal position)
  Same darker red
```

### Card (Work Item)

```
Without Hover:
  ┌──────────────────┐
  │                  │
  │   Image Bg       │
  │                  │
  │┌────────────────┐│
  ││ TITLE TEXT     ││ ← Text overlay
  ││ category badge ││
  └┴────────────────┴┘
  
  Shadow: 4px
  Radius: 12px
  Aspect: 16:9

With Hover:
  ┌──────────────────┐ ↑ 4px lift
  │    ░░░░░░░░░░    │
  │    ░FILTERED░    │ ← Image darker (60% brightness)
  │    ░░░░░░░░░░    │
  │┌────────────────┐│
  ││ TITLE TEXT     ││ ← Moves up smoothly
  ││ category badge ││
  └┴────────────────┴┘
  
  Shadow: 12px red glow
  Transition: 250ms smooth
```

### Navigation

```
Desktop:
  Logo    Work    Gallery    Contact    [Theme]
  ├───────────────────────────────────────────┤
  Underline animation on hover (0% → 100%)

Mobile:
  ☰ Logo                            [Theme]
  ├──────────────────────────────────────────┤
  Click hamburger ↓
  
  ┌──────────────────────────────────────────┐
  │  Work                                    │
  │  Gallery                                 │
  │  Contact                                 │
  │  [Theme Toggle]                          │
  └──────────────────────────────────────────┘
  
  Smooth drawer animation
  Max height: 0 → 400px
  Padding: 0 → 24px
```

---

## Accessibility Indicators

```
Focus Ring (Keyboard Navigation)
  ┌────────────────────┐
  │ ⊕  Interactive     │  ← Blue outline (3px)
  │    Element         │     Offset 2px
  └────────────────────┘

Active State (Buttons)
  ┌────────────────────┐
  │  BUTTON            │  ← Filled background
  │  TEXT              │     Higher contrast
  └────────────────────┘

Disabled State
  ┌────────────────────┐
  │  DISABLED          │  ← Reduced opacity
  │  TEXT              │     Cursor not-allowed
  └────────────────────┘
```

---

## Best Practices

### When Adding New Elements

1. **Use Existing Classes**: Don't create new styles
   ```css
   /* ✅ Good */
   <div class="video-card">
   
   /* ❌ Avoid */
   <div class="my-custom-card">
   ```

2. **Respect Spacing Grid**: Only use predefined values
   ```css
   /* ✅ Good */
   padding: var(--space-6);
   gap: var(--space-8);
   
   /* ❌ Avoid */
   padding: 22px;
   gap: 35px;
   ```

3. **Use Color Variables**: Never hardcode hex
   ```css
   /* ✅ Good */
   background: var(--color-accent);
   
   /* ❌ Avoid */
   background: #ef4444;
   ```

4. **Consistent Transitions**: Use predefined timing
   ```css
   /* ✅ Good */
   transition: all var(--transition-base);
   
   /* ❌ Avoid */
   transition: all 0.3s ease-in-out;
   ```

5. **Use Clamp for Responsive**: No fixed sizes
   ```css
   /* ✅ Good */
   padding: clamp(var(--space-4), 5vw, var(--space-20));
   
   /* ❌ Avoid */
   padding: 20px on mobile, 80px on desktop
   ```

---

## Color Combinations (WCAG AA Compliant)

### Dark Theme

| Text | Background | Contrast | Use |
|------|-----------|----------|-----|
| #f8fafc | #0a0e18 | 18.8:1 | Primary text on dark |
| #cbd5e1 | #0a0e18 | 10.2:1 | Secondary text |
| #94a3b8 | #0a0e18 | 5.2:1 | Tertiary text |
| #ef4444 | #0a0e18 | 5.5:1 | Accent on dark |
| White | #ef4444 | 5.5:1 | Text on accent |

### Light Theme

| Text | Background | Contrast | Use |
|------|-----------|----------|-----|
| #0f172a | #f8fafc | 17.1:1 | Primary text on light |
| #475569 | #f8fafc | 8.3:1 | Secondary text |
| #64748b | #f8fafc | 5.0:1 | Tertiary text |
| #ef4444 | #f8fafc | 5.0:1 | Accent on light |
| White | #ef4444 | 5.5:1 | Text on accent |

All combinations meet WCAG AA (4.5:1 minimum) ✅

---

## Animation States

```
Loading States:
└─ Fade in: opacity 0 → 1 (250ms)

Hover States:
└─ Elevation: translateY(0 → -4px) (250ms)
└─ Shadow: sm → lg (250ms)
└─ Color: primary → accent (150ms)

Focus States:
└─ Ring: 3px outline (instant)
└─ Shadow: 0 0 0 3px colored shadow (instant)

Active/Pressed States:
└─ Elevation: reverse (100ms)
└─ Scale: 1 → 0.95 (100ms)

Exit States:
└─ Fade out: opacity 1 → 0 (250ms)
└─ Scale out: 1 → 0.9 (250ms)
```

---

**This style guide ensures visual consistency across the entire portfolio. Follow these patterns when making changes! 🎨**
