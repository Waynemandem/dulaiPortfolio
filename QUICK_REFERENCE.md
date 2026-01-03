# Quick Reference Guide - Dulai Films Portfolio

## 🚀 Quick Start

1. **View the site**: Open `dulai.html` or `index.html` in a browser
2. **Test responsiveness**: Resize browser or use DevTools device emulation
3. **Test dark/light**: Click theme toggle button in nav
4. **Test mobile menu**: Resize to < 968px to see hamburger menu
5. **Test lightbox**: Click any work section image

---

## 🎨 Design System Quick Reference

### Colors

**Dark Theme (Default)**
```
Primary BG:    #0a0e18
Secondary BG:  #101420
Text Primary:  #f8fafc
Text Secondary: #cbd5e1
Accent:        #ef4444 (red)
Border:        rgba(255, 255, 255, 0.08)
```

**Light Theme**
```
Primary BG:    #f8fafc
Text Primary:  #0f172a
Text Secondary: #475569
Border:        rgba(0, 0, 0, 0.08)
```

### Spacing Scale (8px Base)

```
--space-1: 4px
--space-2: 8px    ← Most buttons/gaps
--space-3: 12px
--space-4: 16px   ← Standard padding
--space-6: 24px
--space-8: 32px   ← Section gaps
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px  ← Hero padding
```

### Typography Sizes

```
--font-size-xs:   12-14px
--font-size-sm:   14-16px   ← Nav links
--font-size-base: 16-18px
--font-size-lg:   20-24px   ← Body text
--font-size-xl:   24-32px
--font-size-2xl:  32-40px   ← Section titles
--font-size-3xl:  40-56px
--font-size-4xl:  48-72px   ← Hero H1
```

All use `clamp()` for fluid scaling!

### Border Radius

```
--radius-xs:   4px   (subtle)
--radius-md:   8px   (buttons)
--radius-lg:   12px  (cards)
--radius-full: 9999px (circles/pills)
```

### Transitions

```
--transition-fast:  150ms cubic-bezier(0.4, 0, 0.2, 1)  (hover effects)
--transition-base:  250ms cubic-bezier(0.4, 0, 0.2, 1)  (default)
--transition-slow:  400ms cubic-bezier(0.4, 0, 0.2, 1)  (modals)
```

### Z-Index Stack

```
--z-dropdown:  100  (nav dropdown)
--z-sticky:    200  (sticky elements)
--z-fixed:     300  (fixed nav)
--z-modal-bg:  400  (modal backdrop)
--z-modal:     500  (modal content)
```

---

## 📐 Responsive Breakpoints

```
Desktop:  100% width → 968px (full experience)
Tablet:   968px → 481px (hamburger menu, 2-col grid)
Mobile:   < 480px (1-col grid, optimized)
```

Media queries in CSS:
```css
@media (max-width: 968px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

---

## 🔧 Common Customizations

### Change Accent Color
In `dulai.css`, line ~80:
```css
--color-accent: #ef4444;        /* Change this */
--color-accent-hover: #dc2626;  /* And this */
```

### Change Font Stack
Line ~24:
```css
--font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Adjust Card Sizes
Line ~340 (video-grid):
```css
grid-template-columns: repeat(auto-fit, minmax(clamp(300px, 40vw, 450px), 1fr));
/* Adjust 300px (min) or 450px (max) */
```

### Change Spacing Globally
Modify `--space-4` which is the 16px base:
```css
--space-4: 1.25rem;  /* Now all spacing scales up */
```

### Adjust Hero Height
Line ~280 (.hero):
```css
height: 100vh;  /* Change to 80vh, 120vh, etc */
```

---

## 📋 CSS Structure Overview

**File Organization** (806 lines total):

```
1. Reset & Foundations (Lines 1-25)
2. Design System Variables (Lines 27-180)
3. Body & Global Styles (Lines 182-198)
4. Navigation (Lines 200-310)
5. Hero Section (Lines 312-380)
6. Work Section (Lines 382-460)
7. Gallery Section (Lines 462-530)
8. Footer (Lines 532-550)
9. Modals & Lightboxes (Lines 552-710)
10. Animations (Lines 712-740)
11. Responsive Design (Lines 742-806)
```

---

## 🎬 Interactive Features

### Theme Toggle
- **File**: `dulai.html` (lines 336-385)
- **CSS**: `.theme-toggle` class
- **JS**: `toggleTheme()` function
- **Storage**: Saves to localStorage as 'theme'

### Mobile Menu
- **Trigger**: `.hamburger` button
- **Target**: `.nav-links` dropdown
- **JS**: Click handler on hamburger
- **Auto-closes**: When a link is clicked

### Image Lightbox
- **Trigger**: Click work section images
- **Modal**: `.work-image-modal`
- **JS**: Event delegation on `.work` section
- **Close**: Click backdrop, button, or Escape key

---

## ✅ Accessibility Features

### Keyboard Support
- **Tab**: Navigate links and buttons
- **Enter/Space**: Activate buttons
- **Escape**: Close modals
- **All interactive elements**: Have focus-visible styles

### Screen Reader Support
- **aria-label**: On icon buttons (hamburger, theme toggle)
- **aria-expanded**: Menu state
- **aria-pressed**: Theme toggle state
- **aria-hidden**: Modal (when not active)
- **role="dialog"**: Modal accessibility

### Color Contrast
- Text: 4.5:1 minimum (WCAG AA)
- Interactive: 3:1 minimum
- Borders: Subtle but visible

---

## 🐛 Troubleshooting

### Theme not persisting?
- Check localStorage is enabled in browser
- Check DevTools console for JS errors
- Verify `localStorage.setItem('theme', ...)` is working

### Mobile menu not closing?
- Check hamburger click handler in JS
- Verify nav-links has `.active` class toggle
- Check z-index isn't causing click issues

### Images not showing?
- Verify asset paths: `assets/filename.jpg`
- Check file extensions match
- Inspect in DevTools to see actual path requested

### Responsive not working?
- Clear browser cache (Ctrl+Shift+R)
- Check meta viewport tag exists
- Verify breakpoints in @media queries

### Animations janky?
- Check GPU acceleration (use `transform` not `left/top`)
- Verify transition timing values
- Disable browser extensions that might interfere

---

## 📚 CSS Classes Reference

### Layout
- `.work` - Featured work section
- `.video-grid` - Grid container for work cards
- `.gallery` - Video gallery section
- `.gallery-grid` - Grid for gallery items
- `.footer` - Footer section

### Cards & Items
- `.video-card` - Work portfolio item
- `.video-overlay` - Text overlay on cards
- `.gallery-item` - Gallery video embed

### Text
- `.section-title` - Section headings
- `.video-title` - Card title text
- `.video-category` - Category badge

### Modals
- `.work-image-modal` - Lightbox modal
- `.work-image-modal-backdrop` - Semi-transparent bg
- `.work-image-modal-close` - Close button

### Navigation
- `.logo` - Branding/logo link
- `.nav-links` - Navigation links container
- `.hamburger` - Mobile menu button
- `.theme-toggle` - Dark/light toggle

---

## 🚀 Performance Tips

### To improve further:
1. **Optimize images**: Use WebP with PNG fallbacks
2. **Lazy load images**: Add `loading="lazy"`
3. **Minify CSS**: Run through minifier before deployment
4. **Add Service Worker**: For offline support
5. **Use srcset**: For responsive images
6. **Add preload**: For critical resources

### Current optimizations:
- ✅ Hardware-accelerated animations (transform/opacity)
- ✅ No unused CSS
- ✅ Efficient selectors
- ✅ CSS variables (no repetition)
- ✅ Smooth 60fps animations

---

## 🔗 File Links

```
dulai.html      ← Main homepage
works.html      ← Works/portfolio page
index.html      ← Redirect landing page
dulai.css       ← Main stylesheet (YOU ARE HERE)
DESIGN_SYSTEM.md    ← Full documentation
REDESIGN_SUMMARY.md ← What changed & why
```

---

## 💬 Comments in Code

CSS is well-commented with section headers:
```css
/* ============================================================================
   5. HERO SECTION
   ============================================================================ */
```

Look for these section dividers to find what you need!

---

**That's it! You now have everything you need to maintain and extend this portfolio. 🎬**
