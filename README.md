# Cleaner in Manchester (0161) Ltd — Website Concept

> **Demonstration Notice:** This repository contains an independent, modern, high-converting website concept for **Cleaner in Manchester (0161) Ltd** (Manchester, United Kingdom). It is designed to demonstrate conversion optimization, local Manchester SEO architecture, and a modern British editorial service business aesthetic.

---

## 🌟 Key Features

- **Apple/Mac-Style Aesthetics & Motion:**
  - Frosted acrylic glass navigation (`backdrop-filter: blur(20px) saturate(180%)`)
  - Animated spring tab indicators
  - Masked headline reveals using Apple easing (`cubic-bezier(0.16, 1, 0.3, 1)`)
  - Smooth card elevation and image hover physics
  - Smooth route cross-fades with Framer Motion `AnimatePresence`
  - Fluid FAQ accordion height transitions

- **Complete Service Architecture (6 Dedicated Pages):**
  - **Regular Home Cleaning** (`/services/regular-home-cleaning`)
  - **Apartment Cleaning** (`/services/apartment-cleaning`)
  - **Deep Cleaning** (`/services/deep-cleaning`)
  - **End-of-Tenancy Cleaning** (`/services/end-of-tenancy-cleaning`)
  - **Office Cleaning** (`/services/office-cleaning`)
  - **End-of-Construction Cleaning** (`/services/end-of-construction-cleaning`)

- **High-Converting Quote Request System:**
  - 10-field property enquiry system with client-side validation
  - UK phone & Manchester postcode formatting helpers
  - Invisible honeypot spam protection
  - Safe session recording in `localStorage` for demo inspection
  - Built-in QA test toggle to simulate network failures & verify field preservation
  - Environment variable hook (`VITE_QUOTE_API_ENDPOINT`) for production email dispatch

- **Local Manchester SEO & Accessibility:**
  - Semantic HTML5 structure
  - Schema.org structured data (`HomeAndConstructionBusiness`) with verified details
  - `robots.txt` and `sitemap.xml`
  - Unobtrusive floating mobile call button (`0161 710 4789`)
  - Full `@media (prefers-reduced-motion: reduce)` support

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, Vite 8
- **Styling:** Tailwind CSS v4
- **Animation & Motion:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v7
- **Linter:** Oxlint

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Riteshparmar15/Cleaner-in-Manchester-0161-Ltd-demo.git

# Navigate to the project directory
cd Cleaner-in-Manchester-0161-Ltd-demo

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Production Build & Linting

```bash
# Run static analysis
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚙️ Environment Variables

For live production quote delivery (e.g., via Resend, SendGrid, or a custom webhook), configure:

```env
VITE_QUOTE_API_ENDPOINT=https://your-api-domain.com/api/quote-dispatch
```

---

## 📄 License & Disclaimer

Independent concept website. Business name, location, and verified contact numbers are used for representational purposes.
