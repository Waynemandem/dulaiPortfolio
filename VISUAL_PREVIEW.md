# Contact Section - Visual Preview & Code Examples

## 🎨 Visual Layout

### Desktop View (>968px)
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│         LET'S CREATE SOMETHING REMARKABLE                │
│    Have a project in mind? I'd love to hear about...     │
│                                                            │
│              CONNECT WITH US                              │
│          [📷]  [▶️]  [Ⓥ]  [𝕏]                          │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                  SEND US A MESSAGE                        │
│        Share your vision, timeline, and budget            │
│                                                            │
│  ┌──────────────────────────────────┐                    │
│  │ Your Name                         │                    │
│  │ John Doe                          │ (Placeholder)      │
│  └──────────────────────────────────┘                    │
│                                                            │
│  ┌──────────────────────────────────┐                    │
│  │ Email Address                     │                    │
│  │ your@email.com                    │                    │
│  └──────────────────────────────────┘                    │
│                                                            │
│  ┌──────────────────────────────────┐                    │
│  │ Project Type                ▼    │                    │
│  │ Select a project type...          │                    │
│  └──────────────────────────────────┘                    │
│                                                            │
│  ┌──────────────────────────────────┐                    │
│  │ Tell Us About Your Project        │                    │
│  │ Share your vision, timeline...    │                    │
│  │                                  │                    │
│  │                                  │                    │
│  └──────────────────────────────────┘                    │
│                                                            │
│          ┌─────────────────────────┐                      │
│          │    SEND MESSAGE         │ (Red button)         │
│          └─────────────────────────┘                      │
│                                                            │
│          ✓ Message sent successfully!                     │
│            I'll get back to you soon.                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Tablet View (481-968px)
```
┌──────────────────────────────────┐
│  LET'S CREATE SOMETHING GREAT    │
│  Have a project in mind...       │
│                                  │
│  CONNECT WITH US                 │
│  [📷] [▶️] [Ⓥ] [𝕏]            │
│                                  │
├──────────────────────────────────┤
│                                  │
│   SEND US A MESSAGE              │
│   Share your vision...           │
│                                  │
│  ┌──────────────────────────┐   │
│  │ Your Name                │   │
│  └──────────────────────────┘   │
│  ┌──────────────────────────┐   │
│  │ Email Address            │   │
│  └──────────────────────────┘   │
│  ┌──────────────────────────┐   │
│  │ Project Type         ▼   │   │
│  └──────────────────────────┘   │
│  ┌──────────────────────────┐   │
│  │ Tell Us About Project    │   │
│  │                          │   │
│  └──────────────────────────┘   │
│                                  │
│  ┌──────────────────────────┐   │
│  │    SEND MESSAGE          │   │
│  └──────────────────────────┘   │
│                                  │
└──────────────────────────────────┘
```

### Mobile View (<480px)
```
┌──────────────────────┐
│  LET'S CREATE        │
│  SOMETHING GREAT     │
│                      │
│ Have a project...    │
│                      │
│ CONNECT WITH US      │
│ [📷] [▶️] [Ⓥ] [𝕏]  │
│                      │
├──────────────────────┤
│                      │
│  SEND US A MESSAGE   │
│  Share your vision   │
│                      │
│ ┌──────────────────┐ │
│ │ Your Name        │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │ Email Address    │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │ Project Type ▼   │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │ Tell Us About    │ │
│ │ Your Project     │ │
│ │                  │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │  SEND MESSAGE    │ │
│ └──────────────────┘ │
│                      │
│ ✓ Sent successfully! │
│                      │
└──────────────────────┘
```

## 🎨 Color States

### Default (Focus)
```
Input Border: Subtle gray
Input Background: Primary dark (#0a0e18)
Text Color: Light (#f8fafc)
Placeholder: Dim gray
```

### Hover
```
Input Border: Accent red (#ef4444)
Input Background: Slight glow
Shadow: Light red glow effect
Transition: Smooth 150ms
```

### Active/Filled
```
Input Border: Accent red (#ef4444)
Input Background: Primary dark
Text Color: Light (#f8fafc)
Cursor: Active
```

### Button Default
```
Background: Accent red (#ef4444)
Text: White
Border: None
Height: 48px
Width: 100%
```

### Button Hover
```
Background: Darker red (#dc2626)
Text: White
Transform: Lift up 2px
Shadow: Red glow
Transition: Smooth 150ms
```

### Button Active/Pressed
```
Background: Darker red (#dc2626)
Text: White
Transform: Back to normal
Shadow: Subtle
```

### Button Disabled (During Submission)
```
Background: Darker red (#dc2626)
Text: "Sending..."
Opacity: 0.8
Cursor: Not-allowed
Pointer-events: None
```

### Success Message
```
Background: Light green (10px padding)
Text: Green (#10b981)
Border: 1px green
Icon: ✓
Animation: Slide in 250ms
Auto-hide: After 5 seconds
```

### Error Message
```
Background: Light red (10px padding)
Text: Red (#ef4444)
Border: 1px red
Icon: ⚠️
Animation: Slide in 250ms
Stays visible: Until fixed
```

## 📐 Spacing Details

### Container Spacing
- Desktop padding: 96px top/bottom, 80px left/right (clamp)
- Tablet padding: 64px top/bottom, 20px left/right (clamp)
- Mobile padding: 48px top/bottom, 16px left/right (clamp)

### Form Group Spacing
- Margin-bottom: 32px (--space-8)
- Label margin-bottom: 8px (--space-2)
- Input height: 44px minimum
- Textarea height: 140px

### Section Gaps
- Between header and social: 20px clamp
- Between social and form: 20px clamp
- Between form title and fields: 48px (--space-12)

### Button Spacing
- Width: 100% (full form width)
- Height: 48px minimum
- Padding: 16px vertical (--space-4)

## 🎯 Interactive States

### Social Link Icon
```
Default:
  - Size: 48px × 48px
  - Border: 2px solid
  - Icon size: 20px
  - Border-radius: full (circle)

Hover:
  - Border color: #ef4444 (accent red)
  - Background: Light red glow
  - Transform: translateY(-2px) [lift]
  - Transition: 150ms ease

Focus:
  - Outline: None
  - Box-shadow: 0 0 0 3px glow
  - Border: accent red

Active (visited):
  - (external links, no active state)
```

### Form Input
```
Default:
  - Border: 1px solid (subtle)
  - Background: Primary (#0a0e18)
  - Border-radius: 8px
  - Font-size: 16px
  - Padding: 12px 16px

Hover:
  - Border color: #ef4444
  - Box-shadow: 0 0 0 3px light-red
  - Cursor: text

Focus:
  - Outline: None
  - Border color: #ef4444
  - Box-shadow: 0 0 0 3px light-red
  - Transition: 150ms

Filled:
  - Border: 1px solid (maintains)
  - Text: Light color (#f8fafc)
  - Background: Dark primary
```

### Select Dropdown
```
Default:
  - Appearance: None (custom styling)
  - Arrow icon: SVG (right side)
  - Padding: 12px 40px 12px 16px (room for arrow)
  - Border-radius: 8px

Hover:
  - Same as text input hover state

Focus:
  - Same as text input focus state

Open:
  - (Browser default with custom colors)
```

### Textarea
```
Default:
  - Min-height: 140px
  - Resize: Vertical only
  - Line-height: Relaxed (1.6)
  - Padding: 12px 16px
  - Border-radius: 8px

Hover/Focus:
  - Same as input fields

Filled:
  - Text wraps
  - Background adjusts
  - Scroll when overflow
```

## 📝 Typography Details

### Contact Section Header
```
Heading: "Let's Create Something Remarkable"
- Font: Space Grotesk
- Size: clamp(28px, 5vw, 48px) [responsive]
- Weight: Bold (700)
- Letter-spacing: -0.5px
- Color: Light text (#f8fafc)
- Margin-bottom: 24px

Intro Text:
- Font: System font stack
- Size: 18px (clamp)
- Weight: Normal (400)
- Line-height: Relaxed (1.6)
- Color: Secondary text
```

### Form Header
```
Form Title:
- Font: Space Grotesk
- Size: clamp(24px, 4vw, 32px)
- Weight: Bold (700)
- Letter-spacing: -0.5px
- Margin-bottom: 12px

Form Subtitle:
- Font: System font
- Size: 16px
- Weight: Normal (400)
- Line-height: Relaxed
- Color: Secondary text
```

### Form Labels
```
- Font: System font
- Size: 12px (uppercase)
- Weight: Semibold (600)
- Letter-spacing: 0.5px
- Text-transform: uppercase
- Color: Primary text
- Margin-bottom: 8px
```

### Form Input Placeholder
```
- Font: System font
- Size: 16px
- Weight: Normal (400)
- Color: Tertiary text (dim)
- Opacity: 0.6
```

### Form Input Text
```
- Font: System font
- Size: 16px
- Weight: Normal (400)
- Line-height: Normal (1.5)
- Color: Primary text (#f8fafc)
```

### Social Link Label
```
- Font: System font
- Size: 12px (uppercase)
- Weight: Semibold (600)
- Letter-spacing: 1px
- Color: Tertiary text
- Margin-bottom: 16px
```

## 🎨 Light Theme Colors

When light theme is enabled, all colors invert:
- Text: Dark instead of light
- Backgrounds: Light instead of dark
- Borders: Dark instead of subtle
- Accent: Red remains (or adjusted)

All handled automatically by CSS variable system.

## ✨ Animations & Transitions

### Form Field Transitions
```
Duration: 150ms
Easing: ease-out
Properties: border-color, box-shadow
```

### Button Transitions
```
Duration: 150ms
Easing: ease-out
Properties: background, transform, box-shadow
```

### Social Link Transitions
```
Duration: 150ms
Easing: ease-out
Properties: border-color, background, color, transform
```

### Message Animation
```
Type: Slide in (keyframe)
Duration: 250ms
Easing: ease-out
Direction: Down from -20px
```

### Focus Ring Animation
```
Type: Glow effect
Box-shadow: 0 0 0 3px glow-color
Smooth transition: 150ms
```

## 🔤 Form Validation Messages

### Error Message Example
```
"Please fill in all fields"
"Please enter a valid email address"

Display: Red (#ef4444)
Background: Light red rgba
Icon: None (or ⚠️)
Position: Below form button
Animation: Slide in
Persistence: Until fixed
```

### Success Message Example
```
"Thank you! Your message has been sent successfully. 
I'll get back to you soon."

Display: Green (#10b981)
Background: Light green rgba
Icon: ✓
Position: Below form button
Animation: Slide in
Auto-hide: 5 seconds
```

## 📱 Touch Targets

All interactive elements meet 44px minimum:
- Social link buttons: 48px × 48px ✓
- Form input fields: 44px height ✓
- Select dropdown: 44px height ✓
- Textarea: 140px height ✓
- Submit button: 48px height ✓

Mobile-friendly spacing between elements prevents accidental taps.

## 🎯 Focus Indicators

### Visible Focus Ring
```
Width: 3px
Color: Accent glow
Style: Outline (0 0 0 3px)
Contrast: 4.5:1 minimum
Visibility: Clear and obvious
```

All interactive elements have visible focus indicators for keyboard navigation.

---

This visual preview shows exactly how the Contact section looks and behaves across different screen sizes and interaction states.
