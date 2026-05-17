# ✈️ VIAJIA & VIAJIA Lockers

### _Smart AI Travel Itineraries & Luggage Storage in Oviedo_

[![VIAJIA & VIAJIA Lockers Cover Photo](https://res.cloudinary.com/dknmebeee/image/upload/v1779027008/Screenshot_2026-05-17_at_8.09.15_PM_kfn7xr.png)](https://viajia.es/)

<div align="center">

🌐 **[Live Website: viajia.es](https://viajia.es/)** | 💼 **[Luggage Storage Location: Calle Uría 76, Oviedo](https://viajia.es/lockers)**

</div>

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.4.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GPT-4o](https://img.shields.io/badge/GPT--4o-Powered-412991?style=for-the-badge&logo=openai&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant_Design-v5.27.6-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)
![Leaflet Maps](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![i18n Localization](https://img.shields.io/badge/i18n-English%20%2F%20Spanish-FF6F61?style=for-the-badge)

</div>

---

## 🎯 Project Motive & Core Value

**VIAJIA** is an all-in-one modern travel technology platform serving two main purposes:

1. **🤖 AI-Powered Personal Travel Assistant (_Valeria AI_ powered by GPT-4o)**:
   Planning a trip can be overwhelming. Powered by OpenAI's advanced **GPT-4o** model, **Valeria AI** acts as a personal pocket assistant, engaging travelers in conversational planning to instantly map out real-time, personalized itineraries based on their destination, dates, budget, and travel preferences. From selecting the smartest flights and hotels to recommending curated local dining and unique experiences, VIAJIA coordinates it all in one interactive workspace.

2. **🧳 VIAJIA Lockers (Automated Luggage Storage in Oviedo)**:
   For travelers who want to explore **Oviedo, Spain** without carrying heavy baggage, **VIAJIA Lockers** offers secure, automated, and instant luggage storage. Strategically located inside **Le CBD Boutique (Calle Uría 76)**—directly opposite the Renfe train station and a 3-minute walk from the main bus station—this digital locker booking flow makes storing bags by the hour or day simple, transparent, and completely worry-free.

---

## ✨ Key Features

- **💬 Valeria AI Conversational Itineraries (powered by GPT-4o)**: Chat with Valeria to create rich travel paths, customized stays, and flights, complete with interactive UI suggestions (integrating budget sliders, Skyscanner flight cards, and booking widgets).
- **🔒 Oviedo Smart Lockers Booking Flow**: Real-time locker selection interface offering sizes:
  - **Medium (S/M)**: Ideal for carry-on suitcases.
  - **Large (L)**: Perfect for medium/large travel suitcases.
  - **Extra Large (XL)**: For large backpacks, sports gear, or multiple suitcases.
- **🗺️ Interactive Map Integration**: Built with Leaflet, showcasing the exact location of the smart storage facility in Oviedo, alongside active operating hours and direct support contacts.
- **🌍 Dynamic Internationalization (i18n)**: Highly responsive multi-lingual support, allowing users to toggle seamlessly between **English (en)** and **Spanish (es)**.
- **📱 Responsive Layout & Mobile Optimized**: Tailored for smooth navigation on web browsers, desktop monitors, tablets, and smartphones, with direct hooks for future App Store and Google Play downloads.
- **✨ Premium UI/UX**: Outfitted with a dark-mode neon theme, smooth transitions powered by **AOS (Animate On Scroll)**, sleek custom Tailwind utilities, and refined toast feedback using **Sonner**.

---

## 🛠️ Tech Stack & Key Libraries

- **Framework**: [Next.js 15.4.10](https://nextjs.org/) (App Router, Turbopack, and SSR rendering)
- **Engine**: [React 19.2.1](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS support for lightning-fast utilities.
- **UI Components**:
  - [Ant Design 5.27.6](https://ant.design/) for sophisticated modals, input fields, forms, and responsive grid layouts.
  - `@ant-design/nextjs-registry` for CSS-in-JS style hydration, avoiding layout flashes on SSR.
  - `@ant-design/v5-patch-for-react-19` for React 19 compatibility.
- **Maps**: [Leaflet 1.9.4](https://leafletjs.com/) and [React Leaflet 5.0.0](https://react-leaflet.js.org/) for beautiful, responsive spatial layouts.
- **Localization**: `i18next`, `react-i18next`, `next-i18next`, and language detection libraries.
- **Animations**: `aos` (Animate On Scroll) for scroll-triggered fades and premium layout transitions.
- **Notifications**: `sonner` for modern, elegant toast popups.
- **State & Utilities**: `js-cookie` for locale caching, Lucide Icons & React Icons for modern graphics.

---

## 📂 Project Architecture

The workspace utilizes Next.js App Router for optimal routing, route grouping, and modular styling:

```bash
viajia-frontend/
├── public/                 # Static assets, logos, and language translations
│   ├── locales/
│   │   ├── en/common.json  # English localization keys
│   │   └── es/common.json  # Spanish localization keys
│   └── Logo.png
├── src/
│   ├── app/
│   │   ├── (website)/      # Main public routes group
│   │   │   ├── (home)/     # Home/landing page with Valeria AI hooks
│   │   │   ├── lockers/    # Oviedo storage locker reservation page
│   │   │   ├── about/      # Vision and values
│   │   │   ├── privacy-policy/
│   │   │   └── terms-condition/
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global stylesheets and Tailwind configs
│   ├── components/
│   │   ├── shared/         # Common UI: Navbar, Footer, Buttons, Spinner
│   │   └── ui/             # Page-specific components
│   │       ├── home/       # Hero banner, FAQ, Testimonials
│   │       └── lockers/    # Locker sizes selection & pricing cards
│   ├── constants/          # Application configurations, navigation elements, variables
│   └── lib/                # Shared utilities and configurations
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

To get a local development instance of VIAJIA up and running, follow these steps:

### 1. Prerequisites

Ensure you have **Node.js** (v18.x or above) and **npm** installed on your system.

### 2. Install Dependencies

Clone the repository and run:

```bash
npm install
```

### 3. Run Development Server

Start the Next.js development server with Turbopack support:

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to see the result.

### 4. Build for Production

To build the application for standard production deployment:

```bash
npm run build
npm run start
```

---

## 📞 Support & Location Info

- **📍 Address**: Le CBD Boutique, Calle Uría 76, 33003 Oviedo, Asturias, Spain (opposite Renfe station).
- **⏰ Operating Hours**:
  - Monday - Friday: `09:00 - 14:00` / `16:00 - 20:30`
  - Saturday: `11:00 - 14:00` / `16:00 - 20:30`
  - Sundays & Holidays: Closed
- **🛠️ Technical Support (SAT)**: Available 08:00 - 20:00 every day.
- **✉️ Contact Email**: [contacto@viajia.es](mailto:contacto@viajia.es)

---
