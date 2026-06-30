# Vaagn Auto — Internal Project Documentation

> Detailed technical reference for developers working on vaagnauto.com.  
> Last updated: June 2026 | Developer: Arun (sole developer)

---

## Table of Contents

1. [Project Context](#1-project-context)
2. [CSS Architecture](#2-css-architecture)
3. [Navigation System](#3-navigation-system)
4. [Hero Slider](#4-hero-slider)
5. [Vehicle Cards](#5-vehicle-cards)
6. [Popup / Lead Form](#6-popup--lead-form)
7. [Sticky Bar](#7-sticky-bar)
8. [Image System](#8-image-system)
9. [Deployment Pipeline](#9-deployment-pipeline)
10. [Key Decisions & Why](#10-key-decisions--why)
11. [Known Issues & Fixes](#11-known-issues--fixes)
12. [Tracking & Analytics](#13-tracking--analytics)

---

## 1. Project Context

Vaagn Auto is an EV commercial vehicle startup in Sriperumbudur, Tamil Nadu. This website replaced a WordPress/Elementor site. Built as pure HTML/CSS/JS — no frameworks, no build tools.

**Why no framework:**
- Shared hosting (no Node.js runtime)
- Faster load times
- Full control over every line
- Portfolio project demonstrating core web skills

**Developer:** Arun — sole developer  
**Local path:** `D:\VaagnWebsite\`

---

## 2. CSS Architecture

### File: `css/main.css`

Single CSS file for the entire site. No preprocessors.

### CSS Variables (`:root`)
```css
--navy: #0a1628      /* Primary dark — headings, buttons */
--blue: #1a3ed4      /* Accent blue — links, hover states */
--blue-l: #e8edff    /* Light blue — icon backgrounds */
--cream: #f4f5f7     /* Light background — sections */
--white: #ffffff
--border: #e0e0e0
--muted: #6b6b6b     /* Secondary text */
--dark: #1a1a1a
--orange: #e85d00    /* CTA accent */
--F: 'Space Grotesk'     /* UI font — labels, buttons, prices */
--FD: 'DM Serif Display' /* Display font — headings, vehicle names */
--FB: 'DM Sans'          /* Body font — paragraphs, descriptions */
```

### Breakpoints
```
max-width: 1100px  → 3-col vehicle grid
max-width: 1024px  → tablet adjustments
max-width: 860px   → tablet portrait
max-width: 768px   → mobile (main breakpoint)
max-width: 480px   → small phones (hero override)
max-width: 400px   → very small phones
```

### Rule Order in main.css
1. `:root` variables
2. Reset (`*, body`)
3. Nav + Mega Menu
4. Mega Drawer (mobile nav)
5. Hero slider
6. Ticker band
7. Sections (`.section`, `.s-eyebrow`, `.s-title`)
8. Vehicle grid + cards
9. About band
10. Dealer section
11. Districts section
12. Community section
13. Footer
14. Sticky bar
15. Popup
16. Fade-up animation
17. Media queries (tablet → mobile → small phone)

---

## 3. Navigation System

### Desktop Nav
- Fixed position, floats above page: `top: 12px; left: 16px; right: 16px`
- Pill shape: `border-radius: 12px`
- On scroll: `nav.show` class adds via JS

### Mega Menu (Desktop)
- Triggered by hovering `.nav-links > li` (Vehicles item)
- Shows vehicle cards with image, name, price, Get a Quote + Explore buttons
- `data-pos` on each card controls layout
- Hidden on mobile: `@media(max-width:768px){ .mega-menu { display: none !important; } }`

### Mega Drawer (Mobile)
- Triggered by hamburger button
- Full screen overlay sliding from top
- Two columns: vehicle grid left, links right
- Close via X button, overlay click, or link click

### Nav Links (Desktop)
```
Vehicles → #all-vehicles (mega menu trigger)
About → /about.html
Dealership → /become-a-dealer.html
Contact → openPopup('Contact')
Dealer's Portal → /dealer-portal.html
Viem Academy → https://academy.vaagnauto.com (target="_blank")
```

---

## 4. Hero Slider

### Structure
```html
<div class="hero-wrap">
  <div class="hero-slide" data-slide="0" data-color="grey" data-pos="bottom-right2">
    <div class="hero-bg"></div>       <!-- gradient background -->
    <div class="hero-content">        <!-- text content -->
    <div class="hero-right">          <!-- full-bleed image -->
  </div>
  <!-- more slides -->
  <div class="slide-arrow arrow-prev">
  <div class="slide-arrow arrow-next">
  <div class="slide-dots">
  <div class="slide-counter">
</div>
```

### `data-pos` Values
Controls where text content appears on the slide:
```
top-left        top-right
center-left     center-right
bottom-left     bottom-center    bottom-right
bottom-right1   bottom-right2    bottom-center1  (custom paddings)
left-center     (vertically centered, left aligned)
```

### `data-color` Values
Controls the `.hero-bg` gradient behind the image:
```
grey    → grey-blue gradient (default)
green   → green gradient
yellow  → warm yellow gradient
teal    → teal gradient
```

### Image Positioning Per Slide
Use `object-position` to shift the vehicle image:
```css
.hero-slide[data-slide="1"] .hero-right img {
  object-position: 60% center; /* shift right */
}
```
- `0%` = far left of image visible
- `50%` = centered (default)
- `100%` = far right of image visible

### Mobile Hero Override
All desktop `data-pos` layouts are overridden on mobile at `max-width: 480px`:
- Content always bottom-left
- Specs row forced horizontal (`flex-direction: row !important`)
- Buttons made visible (`display: flex !important`)
- Key fix: avoid nesting `@media` inside `@media` — browsers silently ignore it

### Auto-play
5 second interval. Pauses on mouse enter, resumes on mouse leave.

---

## 5. Vehicle Cards

### Grid
```css
.vehicles-grid {
  grid-template-columns: repeat(4,1fr); /* desktop */
  /* 3 col at 1100px, 2 col at 768px, 1 col at 400px */
}
```

### Card Structure
```html
<a href="/beast-mx" class="vehicle-card fade-up">
  <div class="card-img"><img src="..."></div>
  <div class="card-body">
    <span class="card-cat">Cargo</span>
    <div class="card-name">Beast MX</div>
    <div class="card-price">₹4.45L · White, Green, Blue</div>
  </div>
  <div class="card-actions">
    <span class="card-btn-q" onclick="event.preventDefault();openPopup('Beast MX')">Get a Quote</span>
    <a href="/beast-mx" class="card-btn-e" onclick="event.stopPropagation()">Explore →</a>
  </div>
</a>
```

### Button Logic
- `card-btn-q`: `event.preventDefault()` stops parent `<a>` from navigating, opens popup
- `card-btn-e`: `event.stopPropagation()` navigates independently to vehicle page

---

## 6. Popup / Lead Form

### Trigger
- Auto-opens 3 seconds after page load
- Also triggered by: Get a Quote buttons, district cards, sticky bar
- `openPopup(vehicleName)` sets the vehicle field and subtitle

### Form Submission
```javascript
// GET request to Google Apps Script
const p = new URLSearchParams({
  name, phone: '+91' + phone, city, vehicle, source: 'Homepage',
  timestamp: new Date().toISOString()
});
await fetch('APPS_SCRIPT_URL?' + p.toString());
```

### LocalStorage
`vaagn_pv` key tracks page view count for popup delay logic.

### Fields
- Name (required)
- Phone — 10 digits, +91 prefix added automatically (required)
- City (optional)
- Vehicle (hidden, set by `openPopup()`)

---

## 7. Sticky Bar

Fixed bottom bar with 3 items:
```
CALL US | WHATSAPP | GET A QUOTE
```
- Height: 52px desktop, 50px mobile
- `body { padding-bottom: 52px }` prevents content from hiding behind it
- WhatsApp opens `https://wa.me/919600809197`
- GET A QUOTE calls `openPopup('General')`

---

## 8. Image System

### Folder Structure
```
images/
├── vaagnBglogo.png              # Nav logo
├── hero-images/                 # Hero slider images (img1.jpeg ... img15.jpeg)
├── beast-mx/                    # beast-mx-white.jpeg, beast-mx-green.jpeg etc.
├── beast-sx/
├── beast-lx-tipper-dd/
├── beast-lx-tipper-nd/
├── beast-lx-closed-cart/
├── beast-lx-open-cart/
├── titan-ec-cart/
├── titan-cargo-intercart/
├── titan-cargo-closed-cart/
├── titan-cargo-open-cart/
├── titan-passenger/
└── Vaagn/                       # Optimized vehicle images for homepage cards
```

### Critical Rule: Always Use Absolute Paths
```html
<!-- CORRECT -->
<img src="/images/Vaagn/beast-frontLight.jpeg">

<!-- WRONG — breaks on subpages -->
<img src="images/Vaagn/beast-frontLight.jpeg">
```
Relative paths break when page is in a subfolder (e.g., `/beast-mx/index.html`).

### Image Optimization
- Bulk compressed using Python/Pillow
- 82% size reduction (144MB → 25MB)
- 37 PNGs converted to JPEG
- All HTML/CSS/JS references auto-updated by script

### Git & Images
Images were excluded from `.gitignore` initially — caused all live 404s.  
Fixed in commit `d5ceaa9` — 151 image files pushed (22.5MB).  
**Never add `images/` to `.gitignore` again.**

---

## 9. Deployment Pipeline

```
D:\VaagnWebsite\ (local)
        ↓ git push
github.com/aruncp2004/vaagn-auto-website (public repo, HTTPS)
        ↓ cPanel pulls
/home/velevmot/repositories/vaagn-auto-website/
        ↓ .cpanel.yml runs cp -r
/home/velevmot/public_html/vaagnauto.com/
```

### `.cpanel.yml`
```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/velevmot/public_html/vaagnauto.com
    - /bin/cp -r $HOME/repositories/vaagn-auto-website/* $DEPLOYPATH
```

### Why HTTPS Not SSH
Domain India shared hosting doesn't correctly pass SSH keys to Git.  
Solution: make repo public + use HTTPS clone URL.  
`https://github.com/aruncp2004/vaagn-auto-website.git`

### Staging
Test at `vaagnauto.com/new-website/` before promoting to root.

---

## 10. Key Decisions & Why

| Decision | Why |
|---|---|
| Pure HTML/CSS/JS, no framework | Shared hosting, no runtime, faster load |
| Public GitHub repo | SSH fails on Domain India cPanel — HTTPS needs public repo |
| Absolute image paths (`/images/...`) | Relative paths break from subfolder pages |
| Google Sheets as form backend | No server-side code needed, free, data in spreadsheet |
| Single `main.css` | Simple project, no build step needed |
| `padding-bottom: 52px` on body | Prevents sticky bar from covering page content |
| `!important` in mobile hero overrides | Desktop `[data-pos]` rules have high specificity — need to force override |
| Avoid nested `@media` | Browsers silently ignore `@media` nested inside identical `@media` |
| `event.preventDefault()` on card quote button | Card is wrapped in `<a>` — must stop navigation to open popup |

---

## 11. Known Issues & Fixes

### `.htaccess` clean URL redirects not working
- **Cause:** Domain India likely has `AllowOverride None` at vhost level
- **Status:** Unresolved — needs hosting support escalation
- **Test:** Try a trivial unrelated `RewriteRule` to confirm `mod_rewrite` is active

### Hero specs bar stacking vertically on mobile
- **Cause:** `flex-wrap: wrap` at line 393 was never overridden — fix was inside nested `@media` which browsers ignore
- **Fix:** Remove inner `@media` wrapper, keep rules flat inside outer `@media(max-width:480px)`

### Images showing 404 on live site
- **Cause:** `images/` was in `.gitignore` — never pushed to GitHub
- **Fix:** Remove from `.gitignore`, commit all images (commit `d5ceaa9`)

### Hero slider duplicate `active` class
- **Cause:** Initial HTML had two slides with `active` class
- **Fix:** Only first slide gets `active` in HTML; JS manages rest

---

## 12. Tracking & Analytics

### Google Tag Manager
ID: `GTM-MT5RPV5B`  
Paste in `<head>` and `<body>` of every page.

### Google Analytics 4
ID: `GT-MJKRTXTJ`  
Fired via GTM.

### Microsoft Clarity
ID: `no0i1j7frr`  
Session recordings and heatmaps.

### Schema Markup
LocalBusiness + Product schema added to all pages for SEO.

---

## Phone Numbers
```
+91 96008 09197  (primary)
+91 93840 31395  (secondary)
```

## Email
```
info@vaagnauto.com
```

## Server
```
Hosting: Domain India (Crystal Registry)
cPanel user: velevmot
Server IP: 144.76.114.186
Public HTML: /home/velevmot/public_html/vaagnauto.com/
```