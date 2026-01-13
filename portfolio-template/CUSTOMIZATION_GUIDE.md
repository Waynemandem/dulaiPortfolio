# Quick Customization Guide

## 5-Minute Setup

### 1. Update Basic Info
In `index.html`, find and replace:

```html
<!-- BEFORE -->
<title>Creative Portfolio | Professional Services</title>

<!-- AFTER -->
<title>Your Name | Your Services</title>
```

```html
<!-- BEFORE -->
<meta name="description" content="Professional portfolio showcasing...">

<!-- AFTER -->
<meta name="description" content="Your company description here">
```

```html
<!-- BEFORE -->
<span class="logo-text">PORTFOLIO</span>

<!-- AFTER -->
<span class="logo-text">YOUR BRAND</span>
```

---

## Brand Colors (Most Important!)

### In `styles.css`, update `:root`:

```css
:root {
    /* YOUR MAIN ACCENT COLOR */
    --color-accent: #ef4444;           /* Change this to your brand color */
    --color-accent-hover: #dc2626;     /* Darker version for hover */
    --color-accent-light: rgba(239, 68, 68, 0.1);  /* Transparent version */
    
    /* OPTIONAL: Change background colors */
    --color-bg-primary: #0a0e18;       /* Main background */
    --color-bg-secondary: #111827;     /* Secondary background */
    
    /* OPTIONAL: Change text colors */
    --color-text-primary: #ffffff;     /* Main text */
    --color-text-secondary: #d1d5db;   /* Secondary text */
}
```

**Popular Brand Colors:**
- **Tech/Startup:** `#0066cc` (blue)
- **Eco/Sustainable:** `#10b981` (green)
- **Creative/Design:** `#7c3aed` (purple)
- **Energy/Startup:** `#f97316` (orange)
- **Luxury:** `#6366f1` (indigo)

---

## Hero Section

Find this in `index.html`:

```html
<h1 class="hero-headline">
    Bringing Ideas to Life
    <span class="highlight">with Excellence</span>
</h1>
<p class="hero-subtitle">
    We create compelling visual experiences that elevate your brand and drive meaningful results.
</p>
<a href="#contact" class="cta-primary">Start Your Project</a>
```

**Change to:**
```html
<h1 class="hero-headline">
    Your Main Headline
    <span class="highlight">Your Sub-Headline</span>
</h1>
<p class="hero-subtitle">
    Your value proposition in one sentence.
</p>
<a href="#contact" class="cta-primary">Your CTA Text</a>
```

---

## Services Section

Find this in `index.html`:

```html
<div class="service-card fade-in-up" style="--delay: 0s">
    <div class="service-icon">✦</div>
    <h3>Strategy & Planning</h3>
    <p>Develop clear direction and actionable plans to achieve your goals.</p>
</div>
```

**Change to:**
```html
<div class="service-card fade-in-up" style="--delay: 0s">
    <div class="service-icon">🎨</div>
    <h3>Your Service 1</h3>
    <p>What you do and the benefit to clients.</p>
</div>
```

**Tips:**
- Use emoji, icon, or SVG for service-icon
- Keep description under 15 words
- Focus on benefits, not features
- Duplicate card to add more services

---

## Projects Section

Find this in `index.html`:

```html
<div class="project-card fade-in-up">
    <div class="project-image-wrapper">
        <img 
            src="assets/project-1.jpg" 
            alt="Project 1 - Strategic Campaign"
            class="project-image"
            loading="lazy">
        <div class="project-overlay">
            <div class="project-details">
                <h3>Strategic Campaign</h3>
                <p>Digital marketing strategy that increased engagement by 150%</p>
                <a href="#" class="overlay-link">View Project →</a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Strategic Campaign</h3>
        <p class="project-category">Marketing</p>
    </div>
</div>
```

**Customize:**
1. Replace `assets/project-1.jpg` with your image
2. Update alt text with project description
3. Update overlay h3, p, and link
4. Update project-info h3 and category

**Best Practices:**
- Images should be ~1200px wide, 16:10 ratio
- Use high-quality photos/screenshots
- Optimize file size (< 500KB)
- Update hover text to match project

---

## About Section

Find in `index.html`:

```html
<h2>About Us</h2>
<p>
    We're a team of creative professionals dedicated to delivering exceptional results...
</p>
```

Replace with your company story (2-3 paragraphs).

**Stats Section:**
```html
<div class="stat">
    <div class="stat-number">50+</div>
    <div class="stat-label">Projects Completed</div>
</div>
```

Update numbers and labels to match your business.

---

## Contact Form

The form is already functional! You just need to set up the endpoint.

### Option 1: FormSubmit.co (Easiest, No Backend Needed)

In `main.js`, find this line:
```javascript
const response = await fetch('/api/contact', {
```

Replace with:
```javascript
const response = await fetch('https://formsubmit.co/YOUR_EMAIL@example.com', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

That's it! Form will now send emails to you.

### Option 2: Netlify Forms (If Deployed on Netlify)

Just add this to the form tag:
```html
<form class="contact-form" id="contactForm" method="POST" name="contact" netlify>
```

### Option 3: Your Own Backend

Keep it as-is and build an endpoint at `/api/contact`.

---

## Social Links

Find in `index.html`:

```html
<a href="#" class="social-link" aria-label="Twitter">
```

Replace `#` with your social media URLs:
```html
<a href="https://twitter.com/your_handle" class="social-link" aria-label="Twitter">
```

---

## Typography

### Change Fonts

In `styles.css`:
```css
:root {
    --font-family-primary: 'Your Font';    /* Main text */
    --font-family-display: 'Display Font'; /* Headings */
}
```

**Using Google Fonts:**
1. Go to fonts.google.com
2. Select fonts you like
3. Add link to `<head>` in HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```
4. Update CSS variable

---

## Images & Assets

### Directory Structure
```
portfolio-template/
├── index.html
├── styles.css
├── main.js
└── assets/
    ├── favicon.png         (your logo/icon)
    ├── project-1.jpg
    ├── project-2.jpg
    └── project-3.jpg
```

### Favicon
1. Create a 32x32px PNG of your logo
2. Save as `assets/favicon.png`
3. Already linked in HTML - no changes needed!

### Project Images
1. Create folder `assets/` if it doesn't exist
2. Add your project images as `project-1.jpg`, `project-2.jpg`, etc.
3. Update `src` and `alt` attributes in HTML

---

## Animations

### Speed
In `styles.css`:
```css
:root {
    --transition-fast: 150ms;   /* Quick reactions */
    --transition-base: 300ms;   /* Normal animations */
    --transition-slow: 500ms;   /* Entrance animations */
}
```

Change these values to speed up/slow down all animations.

### Disable Animations
If client prefers reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## Mobile Responsiveness

Test on actual devices:
- iPhone 12 (390px)
- iPad (768px)
- Android (412px)

**Chrome DevTools:**
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select device from dropdown
4. Test all sections

### Mobile Breakpoints (Already Optimized)
- **< 480px:** Single column, large text
- **480px - 768px:** 2 columns, adjusted spacing
- **> 768px:** Full desktop layout

---

## Theme Toggle

Already fully functional! Just works with one click.

**Customize themes in `styles.css`:**
```css
/* Dark theme (default) */
:root {
    --color-bg-primary: #0a0e18;
}

/* Light theme */
html[data-theme="light"] {
    --color-bg-primary: #ffffff;
}
```

---

## SEO Meta Tags

In `index.html` `<head>`, update:

```html
<title>Your Name | Your Services</title>

<meta name="description" content="Your business description (160 chars max)">

<meta property="og:title" content="Your Portfolio">
<meta property="og:description" content="What you do">
<meta property="og:image" content="https://yoursite.com/image.jpg">
```

---

## Form Fields

Want to add/remove form fields?

**Add a field:**
```html
<div class="form-group fade-in-up">
    <label for="phone">Phone Number</label>
    <input 
        type="tel" 
        id="phone" 
        name="phone" 
        placeholder="(123) 456-7890">
</div>
```

**Remove a field:**
Just delete the entire `<div class="form-group">` block.

---

## Useful CSS Classes

Use these for quick styling:

```html
<!-- Animation on load -->
<h2 class="fade-in">Title</h2>
<p class="fade-in-up">Text</p>

<!-- Centering -->
<div class="container">Content</div>

<!-- Spacing -->
<div style="margin-bottom: var(--space-8);">Text</div>
```

---

## Performance Tips

1. **Compress images** (TinyPNG.com)
2. **Minify CSS/JS** (cssminifier.com)
3. **Use WebP format** (better compression)
4. **Enable gzip** (server-side)
5. **Lazy load images** (already done!)

---

## Testing Checklist

- [ ] All links work
- [ ] Form submits successfully
- [ ] Mobile looks good
- [ ] Theme toggle works
- [ ] All images load
- [ ] Animations smooth
- [ ] Hamburger menu works on mobile
- [ ] No console errors (F12)
- [ ] Social links correct
- [ ] Favicon displays

---

## Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect to netlify.com
3. Auto-deploys on push
4. Custom domain in settings

### Vercel
1. Connect GitHub repo
2. Auto-deploys
3. Fast CDN
4. Easy domain setup

### Traditional Hosting
1. FTP to server
2. Ensure HTTPS enabled
3. Set root to portfolio-template folder

---

## Troubleshooting

### Colors not changing?
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS file is linked in HTML
- Try hard refresh (Ctrl+F5)

### Mobile menu not working?
- Check hamburger button has `id="hamburgerBtn"`
- Check navLinks has `id="navLinks"`
- Open console (F12) for errors

### Form not sending?
- Check endpoint URL is correct
- Try FormSubmit.co first (easiest)
- Check browser console for errors

### Images not showing?
- Check file paths are correct
- Images must be in `assets/` folder
- Use lowercase filenames
- Supported: JPG, PNG, WebP

---

## Common Changes by Client Type

### Service-Based (Agency)
- Services section: Prominent
- Project cards: Show case studies
- About: Build credibility
- CTA: "Schedule Consultation"

### Product-Based (SaaS)
- Hero: Product benefits
- Services: Features/plans
- Projects: Customer logos
- CTA: "Start Free Trial"

### Freelancer
- Hero: Your unique value
- Services: What you offer
- Projects: Your best work
- CTA: "Hire Me" or "Contact"

### Creative Studio
- Hero: Showcase your style
- Projects: High-quality visuals
- About: Team or story
- CTA: "View Our Work"

---

## Need More Help?

1. Check README.md for detailed guide
2. Review CSS comments for styling help
3. Read JS comments for functionality
4. Test in browser DevTools

---

**Remember:** Keep it simple, focus on benefits, and test everything before going live!
