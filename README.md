# Flow Dashboard

A modern, responsive financial dashboard built with React, TypeScript, and Vite.  
Designed from a Figma UI and implemented using scalable frontend architecture.

Live Demo: https://flow-dashboard-omega.vercel.app/

---

## 📌 Project Overview

Flow Dashboard is a web-based financial management interface that displays user cards, transactions, analytics, and profile settings.  
It follows modern UI/UX patterns used in fintech applications and is fully responsive across devices.

---

## 🚀 Tech Stack

- React (Vite)
- TypeScript (Strict Mode)
- React Router DOM
- React Query (Server State Management)
- Zustand (Global State Management)
- TailwindCSS (Styling)
- Material UI (UI Components)
- Axios (HTTP Requests)
- React Hot Toast (Notifications)
- Vercel (Deployment)

---

## ✨ Features

### Dashboard
- Credit cards display (horizontal scroll on mobile)
- Recent transactions list
- Weekly activity chart
- Expense statistics
- Quick transfer section
- Balance history

### Settings Page
- Editable user profile form
- API simulation with React Query
- Loading and error handling
- Toast notifications

### Global Functionality
- Centralized API handling
- Global error management
- Responsive navigation
- Mobile sidebar drawer
- Strict TypeScript typing

---

## 🧠 Architecture

- Modular and scalable folder structure
- Reusable UI components
- Feature-based separation
- Type-safe API services
- Global state via Zustand
- Cached server state via React Query

---

## 📁 Project Structure

src/
├ components/
│ ├ layout/
│ ├ dashboard/
│ ├ settings/
│ └ ui/
│
├ pages/
│ ├ auth/
│ ├ dashboard/
│ └ settings/
│
├ hooks/
├ services/
├ store/
├ types/
├ lib/
└ main.tsx


---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/mayeDave/flow-dashboard.git
cd flow-dashboard


2. Install Dependencies
npm install

3. Run Development Server
npm run dev


Application will be available at:

http://localhost:5173

🏗️ Build for Production
npm run build


Preview build locally:

npm run preview

🌍 Deployment

This project is deployed on Vercel.

Deployment Steps

Push project to GitHub

Import repository on Vercel

Configure build settings:

Build Command: npm run build
Output Directory: dist


Add SPA rewrite configuration:

Create vercel.json:

{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

🔄 API & Data Handling

Axios instance with interceptors

Global error handling

React Query for caching and retries

Mock API for profile update

📱 Responsiveness

Optimized for:

Mobile devices

Tablets

Desktop screens

Uses Tailwind breakpoints and adaptive layouts.

🎯 Future Enhancements

Authentication system

Dark mode toggle

Backend integration

Unit testing

Performance optimization

👤 Author

Developed by David Olorunmaye

GitHub: https://github.com/mayeDave


---

## 📝 License
