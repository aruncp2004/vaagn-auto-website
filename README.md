# Vaagn Auto — Official Website

> Pure HTML/CSS/JS website for Vaagn Auto Private Limited — Electric Commercial Vehicle manufacturer based in Sriperumbudur, Tamil Nadu.

**Live site:** [vaagnauto.com](https://vaagnauto.com)  
**Academy:** [academy.vaagnauto.com](https://academy.vaagnauto.com)  
**GitHub:** [aruncp2004/vaagn-auto-website](https://github.com/aruncp2004/vaagn-auto-website)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Pure HTML5, CSS3, Vanilla JS |
| Fonts | DM Sans, DM Serif Display, Space Grotesk (Google Fonts) |
| Hosting | Domain India (Crystal Registry) — cPanel shared hosting |
| Deployment | GitHub → cPanel Git Version Control → `.cpanel.yml` |
| Forms | Google Sheets via Apps Script (GET endpoint) |
| Analytics | Google Analytics 4 (GA4) |
| Tag Manager | Google Tag Manager (GTM) |
| Heatmaps | Microsoft Clarity |
| Version Control | Git + GitHub (public repo) |

---

## Vehicles (11 Models)

| Vehicle | Category | Price |
|---|---|---|
| Beast MX | Cargo | ₹4.45L |
| Beast SX | Cargo | ₹4.12L |
| Beast LX Tipper DD | Tipper | ₹5.10L |
| Beast LX Tipper ND | Tipper | ₹4.60L |
| Beast LX Closed Cart | Cargo | ₹4.70L |
| Beast LX Open Cart | Cargo | ₹4.47L |
| Titan EC Cart | Cargo | ₹2.23L |
| Titan Cargo Intercart | Cargo | ₹1.60L |
| Titan Cargo Closed Cart | Cargo | ₹2.64L |
| Titan Cargo Open Cart | Cargo | ₹2.49L |
| Titan Passenger | Passenger | ₹2.64L |

---

## Project Structure

```
VaagnWebsite/
├── index.html                    # Homepage
├── about.html                    # About page
├── become-a-dealer.html          # Dealership page
├── contact.html                  # Contact page
├── careers.html                  # Careers page
├── dealer-portal.html            # Dealer portal
├── privacy-policy.html           # Privacy policy
├── terms-and-conditions.html     # Terms page
├── sitemap.xml                   # XML sitemap
├── robots.txt                    # Search engine rules
├── .htaccess                     # Redirects, security headers, gzip
├── .cpanel.yml                   # cPanel deployment config
├── .gitignore                    # Git ignore rules
│
├── beast-mx/                     # Beast MX landing page
├── beast-sx/                     # Beast SX landing page
├── beast-lx-tipper-dd/           # Beast LX Tipper DD landing page
├── beast-lx-tipper-nd/           # Beast LX Tipper ND landing page
├── beast-lx-closed-cart/         # Beast LX Closed Cart landing page
├── beast-lx-open-cart/           # Beast LX Open Cart landing page
├── titan-ec-cart/                # Titan EC Cart landing page
├── titan-cargo-intercart/        # Titan Cargo Intercart landing page
├── titan-cargo-closed-cart/      # Titan Cargo Closed Cart landing page
├── titan-cargo-open-cart/        # Titan Cargo Open Cart landing page
├── titan-passenger/              # Titan Passenger landing page
│
├── css/
│   └── main.css                  # Global stylesheet
├── js/
│   ├── main.js                   # Global JS (nav, popup, slider)
│   └── components.js             # Shared components (nav, footer)
├── images/                       # All site images
│   ├── hero-images/              # Hero slider images
│   ├── beast-mx/
│   ├── beast-sx/
│   └── ...                       # Per-vehicle image folders
└── testimonial/                  # Customer photos
```

---

## Deployment

### How it works
```
Local (VS Code) → git push → GitHub → cPanel pulls → deploys to server
```

### Steps to deploy
```bash
git add .
git commit -m "your message"
git push
```

Then in cPanel:
1. Git Version Control → Manage
2. Pull or Deploy → Update from Remote
3. Deploy HEAD Commit

### `.cpanel.yml`
```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/velevmot/public_html/vaagnauto.com
    - /bin/cp -r $HOME/repositories/vaagn-auto-website/* $DEPLOYPATH
```

### Important deployment notes
- Repo must be **public** on GitHub (SSH doesn't work on Domain India shared hosting)
- Clone URL used: `https://github.com/aruncp2004/vaagn-auto-website.git`
- cPanel username: `velevmot`
- Server path: `/home/velevmot/public_html/vaagnauto.com/`

---

## How to Run Locally

1. Clone the repo:
```bash
git clone https://github.com/aruncp2004/vaagn-auto-website.git
```
2. Open in VS Code
3. Install Live Server extension
4. Right-click `index.html` → Open with Live Server

No build step, no dependencies, no package.json.

---

## Tracking IDs

| Tool | ID |
|---|---|
| Google Analytics 4 | `GT-MJKRTXTJ` |
| Google Tag Manager | `GTM-MT5RPV5B` |
| Microsoft Clarity | `no0i1j7frr` |

---

## Form Backend

All quote/enquiry forms submit to Google Sheets via Apps Script:

```
https://script.google.com/macros/s/AKfycbwzxRKP8thz4Rjj1cEckPWc2HyWR4qw_3HfaxkHNF31IVHrbPonCHZpVhTYWqpctmgm/exec
```

Method: GET with URL parameters (`name`, `phone`, `city`, `vehicle`, `source`, `timestamp`)

---

## Contact

**Vaagn Auto Private Limited**  
S.NO: 417/1B1, 419, A-Block, Sriperumbudur, Tamil Nadu 602105  
Phone: +91 96008 09197 | +91 93840 31395  
Email: info@vaagnauto.com