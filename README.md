# e-MAS Healthcare Portal

A modern, responsive healthcare administration portal demo built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates a comprehensive Third Party Administrator (TPA) web application for corporate health benefits management.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

## 🌟 Overview

This project simulates a real-world healthcare TPA portal that enables HR professionals and corporate clients to:

- Track and monitor medical claims in real-time
- Search and locate panel healthcare providers
- View comprehensive analytics and KPIs
- Manage employee health benefits efficiently

## ✨ Features

### 🏠 Landing Page
- Hero section with value proposition
- Animated statistics and metrics
- Service offerings showcase
- Feature highlights with visual indicators
- Call-to-action for demos

### 📊 Corporate Dashboard
- **Real-time KPIs**: Total claims, approval rates, cost savings
- **Interactive Charts**: 
  - Claims trend analysis (30-day view)
  - Status distribution pie chart
  - Top providers by cost (horizontal bar)
- **Claims Table**: Sortable, filterable with pagination
- **Claim Details Modal**: Complete claim information view
- **Business Insights**: AI-ready analytics section

### 🏥 Provider Finder
- **Search**: Find providers by name, address, or services
- **Filters**: Filter by type (Hospital/Clinic/Specialist) and location
- **Dual Views**: Toggle between grid and list layouts
- **Provider Cards**: Ratings, specialties, contact info, Google Maps integration
- **Real-time Stats**: Provider count by category

### 📬 Contact Page
- **Form Validation**: Client-side validation with error messages
- **Subject Categories**: General, Demo Request, Support, Partnership
- **Contact Information**: Office address, phone, email, business hours
- **FAQ Section**: Common questions answered
- **Toast Notifications**: Success/error feedback

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Recharts** | Data visualization |
| **Lucide React** | Modern icon library |

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── dashboard/
│   │   └── page.tsx      # Corporate dashboard
│   ├── providers/
│   │   └── page.tsx      # Provider finder
│   ├── contact/
│   │   └── page.tsx      # Contact form
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── loading.tsx       # Loading state
│   ├── error.tsx         # Error boundary
│   └── not-found.tsx     # 404 page
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   ├── Skeleton.tsx
│   │   └── index.ts
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── dashboard/        # Dashboard-specific components
│       ├── KPICard.tsx
│       ├── ClaimsTable.tsx
│       ├── StatusChart.tsx
│       ├── TrendChart.tsx
│       ├── TopProvidersChart.tsx
│       ├── ClaimDetailModal.tsx
│       └── index.ts
├── data/                 # Mock data
│   ├── claims.json
│   └── providers.json
├── lib/                  # Utilities
│   └── utils.ts
└── types/                # TypeScript definitions
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone or navigate to the project:
```bash
cd emas_website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Your app will be live in ~2 minutes

**Environment**: Production builds are optimized and pre-rendered for instant page loads.

## 📱 Responsive Design

The application is fully responsive across:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 Design System

### Colors
- **Primary**: Blue (#0066cc) - Trust, professionalism
- **Secondary**: Teal (#00a3a3) - Healthcare, wellness
- **Success**: Emerald - Approvals, positive metrics
- **Warning**: Amber - Pending items
- **Error**: Red - Rejections, alerts

### Typography
- Font: Inter (system fallback)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## 💼 Business Value

This portal demonstrates solutions for common TPA challenges:

| Challenge | Solution |
|-----------|----------|
| Manual claim processing | Real-time digital tracking |
| Lack of transparency | Dashboard with live KPIs |
| Provider discovery | Searchable provider network |
| Data silos | Centralized analytics platform |

## 🎯 Demo Purpose

This project was built as a technical demonstration for the **Front-End Developer** position at **EXIMIUS MEDICAL ADMINISTRATION SOLUTIONS SDN BHD (e-MAS)**. It showcases:

- Modern React development with Next.js 14 App Router
- TypeScript for enterprise-grade type safety
- Professional UI/UX with Tailwind CSS
- Data visualization expertise with Recharts
- Healthcare domain knowledge and TPA workflows
- Clean architecture and reusable component patterns

## 🔜 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] PDF claim exports
- [ ] Email notifications
- [ ] Multi-language support (BM/EN)
- [ ] Mobile app companion

## 📄 License

This is a demo project created for educational and demonstration purposes.

---

Built for modern healthcare administration
