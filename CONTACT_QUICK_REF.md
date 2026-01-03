# Contact Section - Quick Reference

## Visual Layout

```
┌─────────────────────────────────────┐
│     CONTACT SECTION                 │
├─────────────────────────────────────┤
│                                     │
│   Let's Create Something Remarkable │
│   Have a project in mind? I'd...    │
│                                     │
│   Connect With Us                   │
│   [📷] [▶️] [Ⓥ] [𝕏]             │
│                                     │
├─────────────────────────────────────┤
│         SEND US A MESSAGE           │
│                                     │
│  [Your Name      ]                  │
│  [your@email.com ]                  │
│  [Select Type    ▼]                 │
│  [Your message   ]                  │
│                                     │
│     [SEND MESSAGE]                  │
│                                     │
│  ✓ Message sent successfully!       │
│                                     │
└─────────────────────────────────────┘
```

## Responsive Behavior

| Size | Layout | Changes |
|------|--------|---------|
| **Desktop** | Full width container, max-width 600px form | 6px gap between social icons |
| **Tablet** | 100% form width with padding | 5px gap between social icons |
| **Mobile** | Full viewport width, optimized padding | 4px gap, smaller font sizes |

## Color Palette

### Dark Theme (Default)
| Element | Color | Hex |
|---------|-------|-----|
| Background | Primary bg | #0a0e18 |
| Form bg | Secondary bg | Lighter |
| Text | Primary | #f8fafc |
| Accent (hover) | Red | #ef4444 |
| Borders | Subtle | Thin line |

### Light Theme
- All text inverts
- Backgrounds lighter
- Accents remain consistent
- Borders adjust for readability

## Form Fields

```
1. Name
   - Type: text input
   - Placeholder: "John Doe"
   - Validation: Required, non-empty
   - Height: 44px minimum

2. Email
   - Type: email input
   - Placeholder: "your@email.com"
   - Validation: Required, valid email format
   - Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   - Height: 44px minimum

3. Project Type
   - Type: select dropdown
   - Default: "Select a project type..."
   - Options: (7 options)
     - Aerial Commercial
     - Real Estate Aerials
     - Event Coverage
     - Corporate Video
     - Documentary
     - Tourism / Travel Film
     - Other
   - Validation: Required

4. Message
   - Type: textarea
   - Placeholder: "Share your vision, timeline, budget..."
   - Height: 140px minimum
   - Max-height: unlimited resize
   - Validation: Required, non-empty
```

## Interaction States

### Input Fields
- **Default**: Border = subtle, bg = primary
- **Hover**: Border = accent red, bg glow = light red
- **Focus**: Border = accent red, outline = none, glow effect
- **Valid**: No special state (normal focus)
- **Invalid**: Error message shown, form doesn't submit

### Social Links
- **Default**: Circular border, icon color = text color
- **Hover**: 
  - Border color → accent red
  - Background → light red
  - Icon color → accent red
  - Transform: translateY(-2px)
  - Transition: 150ms
- **Focus**: Box-shadow with glow effect
- **Active**: (none - links are external)

### Submit Button
- **Default**: 
  - Background = accent red
  - Text = white
  - Height = 48px
  - Width = 100%
- **Hover**: 
  - Background → darker red (#dc2626)
  - Transform: translateY(-2px)
  - Shadow: glow effect
- **Active**: 
  - Transform: translateY(0)
- **Focus**: 
  - Outline: none
  - Box-shadow: glow effect
- **Disabled** (during submission):
  - Opacity: reduced
  - Cursor: not-allowed
  - Text: "Sending..."

### Form Messages
- **Success**:
  - Background: light green
  - Text: #10b981 (green)
  - Auto-hides: 5 seconds
  - Form clears
  - Success icon: ✓
  
- **Error**:
  - Background: light red
  - Text: accent red
  - Stays visible until fixed
  - No auto-hide

## Accessibility Features

✓ **ARIA Labels**
  - aria-required="true" on all form inputs
  - aria-label on social links

✓ **Semantic HTML**
  - `<form>` element for form
  - `<label>` associated with inputs via `for`
  - `<section>` for contact section
  - Proper heading hierarchy (h2, h3)

✓ **Keyboard Navigation**
  - Tab through all interactive elements
  - Enter to submit form
  - Escape to close any modals
  - All buttons focusable

✓ **Focus Management**
  - Visible focus states on all interactive elements
  - 3px glow outline
  - Focus ring color: accent with transparency

✓ **Color Contrast**
  - Text: 4.5:1 (WCAG AA)
  - Form labels: 5:1+
  - Links: 4.5:1

## CSS Classes

```css
.contact                    /* Main section container */
.contact-container         /* Max-width wrapper */
.contact-header            /* Title + intro area */
.contact-social            /* Social links section */
.social-label              /* "Connect With Us" text */
.social-links              /* Flex container for icons */
.social-link               /* Individual icon button */
.contact-form              /* Form container */
.form-header               /* Title + subtitle */
.form-title                /* Form main heading */
.form-subtitle             /* Form description */
.form-group                /* Label + input wrapper */
.form-group label          /* Input label */
.form-group input          /* Text/email inputs */
.form-group select         /* Dropdown */
.form-group textarea       /* Message textarea */
.submit-btn                /* Form submit button */
.form-message              /* Success/error message */
.form-message.show         /* Visible state */
.form-message.success      /* Green success state */
.form-message.error        /* Red error state */
```

## JavaScript Functions

```javascript
// Contact form submission handler
contactForm.addEventListener('submit', async function(e) {
  // Validate form
  // Show loading state
  // Simulate submission (1s delay)
  // Show success/error message
  // Clear form on success
  // Reset button state
});

// Show/hide form messages
showFormMessage(message, type) {
  // Types: 'success' or 'error'
  // Auto-hides success after 5 seconds
  // Error stays until user fixes
}

// Form validation
- checkEmptyFields()
- validateEmail(email)
- showErrorMessage()
- showSuccessMessage()
```

## Backend Integration Example

```javascript
// When ready to deploy, replace simulation with:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

const result = await response.json();
if (result.success) {
  showFormMessage('Message sent!', 'success');
}
```

## CSS Size Reference

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section padding | 48px 16px | 64px 20px | 96px 80px |
| Form max-width | 100% | 100% | 600px |
| Social icon size | 48px | 48px | 48px |
| Form padding | 32px | 48px | 48px |
| Input height | 44px | 44px | 44px |
| Textarea height | 140px | 140px | 140px |
| Button height | 48px | 48px | 48px |

## Spacing System (8px Grid)

```
--space-2  = 8px
--space-3  = 12px
--space-4  = 16px
--space-5  = 20px
--space-6  = 24px
--space-8  = 32px
--space-10 = 40px
--space-12 = 48px
```

## Common Tasks

### Change Accent Color
```css
/* Update in root */
--color-accent: #your-color;
--color-accent-hover: #darker-shade;
--color-accent-light: rgba(your-r, your-g, your-b, 0.1);
```

### Connect Real Form
```javascript
// In form submission handler
const response = await fetch('YOUR_FORM_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

### Update Social Links
```html
<!-- In HTML, change href URLs -->
<a href="https://instagram.com/yourprofile" target="_blank">
```

### Customize Project Types
```html
<!-- In form -->
<option value="your-type">Your Project Type</option>
```

## Performance Notes

- CSS: ~200 lines (minimal)
- JS: ~50 lines (form validation only)
- No external dependencies
- No heavy animations (uses transitions)
- Optimized SVG icons (inline)
- Form validation runs client-side (instant feedback)

## Browser Support

✓ Chrome 90+
✓ Firefox 88+
✓ Safari 14+
✓ Edge 90+
✓ Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

1. Form submission is simulated - needs backend integration
2. Email service not configured - set up SendGrid, Mailgun, etc.
3. File uploads not supported yet (feature for future)
4. reCAPTCHA not implemented (add if spam is issue)
