# Product Requirements Document (PRD)
## e-MAS Portal — Concept Demo

**Author:** Daniel Hakim  
**Date:** January 14, 2026  
**Version:** 1.0  
**Project Type:** Job Interview Demo Project  

---

## 1. Executive Summary

### 1.1 Purpose
Create a professional front-end demo website to showcase technical skills and business understanding for the **Front End Developer** position at **EXIMIUS MEDICAL ADMINISTRATION SOLUTIONS SDN BHD (e-MAS)**.

### 1.2 Background
- Received phone call from e-MAS regarding application
- Interview scheduled: Wednesday (online)
- Goal: Demonstrate eagerness, technical competence, and understanding of healthcare TPA industry
- Approach: Build a concept portal that shows production-ready skills without copying their actual website

### 1.3 Success Criteria
- Impress hiring team with modern, professional UI
- Demonstrate understanding of healthcare claims workflows
- Show ability to work with Next.js, TypeScript, and Tailwind CSS (as per job requirements)
- Stand out from other candidates through initiative and business awareness

---

## 2. Company & Role Context

### 2.1 About e-MAS
- **Full Name:** Eximius Medical Administration Solution Sdn Bhd
- **Industry:** Medical Administration / Healthcare TPA (Third-Party Administrator)
- **Size:** 10-50 employees
- **Location:** Kuala Lumpur, Malaysia
- **Core Services:**
  - Medical claims administration
  - Cost control & treatment audit
  - Claims settlement
  - Corporate & patient portals

### 2.2 Job Requirements (From Job Description)
| Requirement | Priority |
|-------------|----------|
| Next.js (React) | Must Have |
| TypeScript | Must Have |
| Tailwind CSS | Must Have |
| REST API Integration | Must Have |
| GitHub Version Control | Must Have |
| Responsive UI | Must Have |
| Clean, Maintainable Code | Must Have |

### 2.3 e-MAS Current Website Features
Based on analysis of https://corporate.emastpa.com.my:
- Hero messaging: "Medical claims processes redefined"
- Services: Outpatient, Hospitalization, Wellness, Medical Bill Audit
- Patient Mobile App promotion
- Corporate Information Portal
- Contact forms and CTAs

---

## 3. Competitor Analysis Summary

### 3.1 Key Competitors in Malaysian Healthcare TPA Space

| Competitor | Positioning | Digital Presence |
|------------|-------------|------------------|
| **CompuMed Services** | 25+ years, ISO-certified, "CHAMPS" platform | Corporate, text-rich, trust-focused |
| **ASP Medical Group** | ISO-27001 certified MCO/TPA | Professional, content-heavy |
| **PMCare Sdn Bhd** | Pioneer MCO/TPA, 26+ years, 4,000+ providers | 100% digital platform focus |
| **Integrated Health Plans (IHP)** | Data-driven benefit solutions | Modern, clean, responsive |
| **MiCare/MiyaCare** | Zuellig-backed, ~10M members | Scale-focused messaging |
| **G-Flex** | Insurtech, transparent pricing | Bright, user-centric, modern JS |
| **HealthMetrics** | Cloud TPA, 15,000+ providers, AI tools | Highly polished, animated, mobile-first |
| **WECARE TPA** | Mobile-centric medical benefits | Mobile app focused |

### 3.2 Competitor UX Patterns to Adopt
- ✅ Clear CTAs ("Request Demo", "Book a Demo")
- ✅ Trust signals (ISO badges, certifications, years of experience)
- ✅ Mobile-first responsive design
- ✅ Clean layouts with icons and whitespace
- ✅ Data/analytics emphasis (dashboards, charts)
- ✅ Patient-centric language

### 3.3 Competitive Differentiation Opportunities
- Modern tech stack (Next.js App Router)
- Real-time data visualization
- Subtle micro-interactions (not flashy 3D)
- Accessibility compliance
- Enterprise-grade UX maturity

---

## 4. Technical Specifications

### 4.1 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **Recharts / Chart.js** | Data visualization |
| **Framer Motion** | Subtle animations (optional) |
| **Mock REST API** | Local JSON / API routes |
| **Vercel** | Deployment |
| **GitHub** | Version control |

### 4.2 Project Structure
```
emas_website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # Landing page
│   │   ├── dashboard/
│   │   │   └── page.tsx             # Corporate dashboard
│   │   ├── providers/
│   │   │   └── page.tsx             # Provider/panel finder
│   │   ├── patient/
│   │   │   └── page.tsx             # Patient quick view
│   │   └── contact/
│   │       └── page.tsx             # Contact form
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── dashboard/
│   │   │   ├── KPICard.tsx
│   │   │   ├── ClaimsTable.tsx
│   │   │   ├── StatusChart.tsx
│   │   │   └── TrendChart.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── api.ts                   # Mock API functions
│   │   └── utils.ts                 # Utility functions
│   ├── data/
│   │   ├── claims.json              # Mock claims data
│   │   └── providers.json           # Mock providers data
│   └── types/
│       └── index.ts                 # TypeScript interfaces
├── public/
│   └── assets/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. Feature Requirements

### 5.1 Page 1: Landing / Home Page (Priority: HIGH)

**Purpose:** Professional entry point showcasing e-MAS services concept

**Components:**
| Component | Description |
|-----------|-------------|
| Hero Section | Tagline: "Medical Claims Processes Redefined", subtitle, CTA button |
| Services Grid | Cards for: Outpatient, Hospitalization, Wellness, Claims Audit |
| Value Proposition | "Why Choose Us" section with icons |
| Trust Signals | Mock certification badges, statistics |
| CTA Section | "Request Demo" / "Contact Us" buttons |
| Footer | Links, contact info, copyright |

**Design Notes:**
- Healthcare color palette (blues, greens, whites)
- Clean typography (Inter or similar)
- Ample whitespace
- Mobile-responsive

---

### 5.2 Page 2: Corporate Dashboard (Priority: CRITICAL — Main Showpiece)

**Purpose:** Demonstrate ability to build data-driven internal systems

**KPI Cards:**
| Metric | Mock Value | Business Relevance |
|--------|------------|-------------------|
| Total Claims (30 days) | 1,250 | Volume signal |
| Approval Rate | 74% | Operational quality |
| Average Claim Value | RM 1,000 | Cost per claim |
| Estimated Audit Savings | RM 150,000 (12%) | Commercial value |

**Claims Table Features:**
- Columns: Claim ID, Patient Name, Provider, Amount, Date, Status
- Search by patient name or claim ID
- Filter by status (All, Pending, Approved, Rejected)
- Sortable columns
- Status badges with color coding:
  - Pending: Yellow
  - Approved: Green
  - Rejected: Red
- Row hover highlight
- Pagination
- Empty state ("No claims found")
- Loading skeleton

**Charts:**
| Chart | Type | Data |
|-------|------|------|
| Claims Status | Pie Chart | Approved: 925, Rejected: 200, Pending: 125 |
| Claims Trend | Line Chart | Last 30 days daily claims |
| Top Providers | Bar Chart | Top 5 providers by cost |

**Actions:**
- "Export" button (simulated)
- "View Details" modal on row click

---

### 5.3 Page 3: Provider / Panel Finder (Priority: MEDIUM)

**Purpose:** Show ability to build searchable interfaces

**Features:**
- Search input with debounce
- Filter by type (Hospital, Clinic, Specialist)
- Filter by location
- Results grid/list view
- Provider cards with:
  - Name
  - Type badge
  - Address
  - Contact
  - "View on Map" link (Google Maps)
- Empty state
- Loading state

---

### 5.4 Page 4: Patient Quick View (Priority: MEDIUM)

**Purpose:** Demonstrate mobile-responsive design skills

**Features (Mobile-First Mock):**
- Account overview card
- Recent claims list (last 5)
- Current balance display
- Quick actions:
  - Submit Claim
  - Find Provider
  - View History
- Notification badge

---

### 5.5 Page 5: Contact / Request Demo (Priority: MEDIUM)

**Purpose:** Show form handling and validation

**Form Fields:**
| Field | Type | Validation |
|-------|------|------------|
| Name | Text | Required |
| Email | Email | Required, format validation |
| Company | Text | Optional |
| Phone | Tel | Optional, format validation |
| Message | Textarea | Required, min 10 chars |

**Features:**
- Client-side validation
- Submit to mock API / console log
- Success toast notification
- Error handling

---

## 6. Design Specifications

### 6.1 Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | #0066CC | CTAs, links, primary actions |
| Secondary Teal | #00A3A3 | Accents, healthcare feel |
| Success Green | #22C55E | Approved status, success states |
| Warning Yellow | #F59E0B | Pending status |
| Error Red | #EF4444 | Rejected status, errors |
| Neutral Gray | #6B7280 | Text, borders |
| Background | #F9FAFB | Page backgrounds |
| White | #FFFFFF | Cards, content areas |

### 6.2 Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, sizes: 2xl, xl, lg
- **Body:** Regular, size: base (16px)
- **Small:** size: sm (14px)

### 6.3 Spacing System
- Use Tailwind default spacing scale
- Consistent padding: p-4, p-6, p-8
- Card gaps: gap-4, gap-6

### 6.4 Animation Guidelines (Subtle, Not Flashy)
| Element | Animation | Duration |
|---------|-----------|----------|
| Page transitions | Fade | 200ms |
| Button hover | Scale + shadow | 150ms |
| Card hover | Subtle lift | 200ms |
| Chart entrance | Fade in | 300ms |
| Table row hover | Background color | 100ms |
| Toast notification | Slide in | 200ms |

### 6.5 Responsive Breakpoints
| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1024px | Tablets |
| Desktop | > 1024px | Desktop |

---

## 7. Accessibility Requirements

### 7.1 WCAG 2.1 AA Compliance
- ✅ Color contrast ratio: minimum 4.5:1
- ✅ Focus indicators visible on all interactive elements
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ ARIA labels on icons and non-text elements
- ✅ Alt text on images
- ✅ Semantic HTML (proper heading hierarchy)
- ✅ Skip to content link
- ✅ Form labels associated with inputs

---

## 8. Mock Data Specifications

### 8.1 Claims Data Structure
```typescript
interface Claim {
  id: string;
  patientName: string;
  patientId: string;
  provider: string;
  providerType: 'Hospital' | 'Clinic' | 'Specialist';
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedDate: string;
  processedDate?: string;
  description: string;
}
```

### 8.2 Provider Data Structure
```typescript
interface Provider {
  id: string;
  name: string;
  type: 'Hospital' | 'Clinic' | 'Specialist';
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
```

### 8.3 Sample KPI Data
```typescript
interface DashboardKPIs {
  totalClaims: 1250;
  approvedClaims: 925;
  rejectedClaims: 200;
  pendingClaims: 125;
  totalClaimedAmount: 1250000;
  averageClaimValue: 1000;
  approvalRate: 74;
  estimatedSavings: 150000;
  savingsRate: 12;
}
```

---

## 9. Interview Presentation Strategy

### 9.1 Elevator Pitch (30 seconds)
> "I built a small concept demo to show how I'd approach e-MAS' digital portals. It focuses on the core workflows you likely care about: claims visibility, quick filtering for exceptions, and analytics that show immediate cost opportunities. I used Next.js, TypeScript and Tailwind so it's production-style code and easy to extend."

### 9.2 Demo Flow (3 minutes)
1. **Open Landing Page** → Point out business focus and CTA
2. **Navigate to Dashboard** → Highlight KPI cards and what each metric means
3. **Demo Claims Table** → Show search/filter functionality
4. **Open Provider Finder** → Mention panel management potential
5. **Show Mobile View** → Demonstrate responsive design
6. **Wrap Up** → Offer to extend with real API integration

### 9.3 Key Talking Points
- "I analyzed competitors like HealthMetrics and G-Flex; they highlight real-time analytics and demo CTAs."
- "I intentionally did not recreate your production site or use logos. This is a concept to show UI structure for operational use."
- "I use Copilot to speed up implementation, but I define the architecture, UX decisions, and business logic myself."

### 9.4 Anticipated Questions & Answers
| Question | Answer |
|----------|--------|
| "Why Next.js + TypeScript?" | "Fast server/client rendering, good for SEO and internal dashboards; TypeScript prevents runtime bugs." |
| "How would you handle large data?" | "Server-side pagination, virtualization (react-window), indexed API endpoints, memoized queries." |
| "How will you ensure security?" | "HTTPS, role-based auth, server-side checks, avoid exposing PII in frontend logs." |
| "Did you use AI tools?" | "Yes, I use Copilot for implementation speed, but I define architecture, UX, and business logic myself." |

---

## 10. Deliverables Checklist

### 10.1 Must Have (Before Interview)
- [ ] Next.js project initialized with TypeScript + Tailwind
- [ ] Landing page with hero, services, CTAs
- [ ] Corporate dashboard with KPIs, table, charts
- [ ] Provider finder page
- [ ] Contact form with validation
- [ ] Mobile responsive design
- [ ] Clean GitHub repository
- [ ] Professional README
- [ ] Deployed to Vercel
- [ ] Demo link in follow-up email

### 10.2 Nice to Have (If Time Permits)
- [ ] Patient quick view (mobile mock)
- [ ] Framer Motion page transitions
- [ ] Dark mode toggle
- [ ] Lighthouse accessibility report (90+ score)
- [ ] 60-90 second Loom walkthrough video
- [ ] Basic unit tests

---

## 11. Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Setup | 1 hour | Initialize project, configure Tailwind, setup structure |
| Landing Page | 2-3 hours | Hero, services, CTAs, footer |
| Dashboard | 4-5 hours | KPIs, claims table, charts, filters |
| Provider Finder | 2 hours | Search, filters, cards |
| Contact Form | 1 hour | Form, validation, submission |
| Polish | 2 hours | Responsive testing, accessibility, animations |
| Deployment | 30 min | Vercel deploy, README, final commits |
| **Total** | **~13 hours** | |

---

## 12. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Over-engineering with 3D/animations | Stick to subtle micro-interactions only |
| Using their real logo/branding | Use "Concept Demo" labeling, generic healthcare palette |
| Demo breaking during interview | Test thoroughly, have backup screenshots |
| Running out of time | Prioritize Dashboard > Landing > Others |
| Technical questions beyond knowledge | Admit honestly, show willingness to learn |

---

## 13. Post-Interview Follow-Up

### 13.1 Email Template (After Demo Complete)
> Subject: Front End Developer Interview — Demo Project Ready
>
> Dear Hiring Team at e-MAS,
>
> Thank you again for the opportunity to interview for the Front End Developer position.
>
> As discussed, I have prepared a concept demo to demonstrate my approach to building healthcare portal interfaces:
>
> 🔗 Live Demo: [Vercel Link]
> 💻 Source Code: [GitHub Link]
>
> The demo showcases:
> - Corporate claims dashboard with KPIs and analytics
> - Searchable provider directory
> - Responsive design for mobile and desktop
> - Clean TypeScript + Next.js codebase
>
> I am excited about the opportunity to contribute to e-MAS and would be happy to discuss how I can add value to your team.
>
> Kind regards,
> Daniel Hakim

---

## 14. Appendix

### A. Business Insights for Dashboard
- Approval rate of 74% suggests room for pre-authorization improvements
- Average claim RM 1,000; top 5 providers account for 42% of cost
- 12% estimated audit savings demonstrates financial impact potential

### B. Competitor Website References
- HealthMetrics: https://www.healthmetrics.com
- G-Flex: https://gflexbenefits.com
- IHP: https://ihp.com.my
- PMCare: https://pmcare.com.my

### C. Design Inspiration
- Enterprise dashboards (Linear, Vercel, Stripe)
- Healthcare UX patterns (subtle, accessible, data-dense)
- Modern SaaS interfaces (clean, professional, trustworthy)

---

**Document End**

*This PRD serves as a comprehensive guide for building a demo project that demonstrates front-end skills aligned with e-MAS's business needs and industry context.*
