# 🚗 Rent-a-Ride

**Rent-a-Ride** — a simple yet powerful **car rental web application** built with **React + TypeScript**.  
Users can browse a catalog of cars, apply smart filters, view detailed information, and simulate bookings.  

---

## ✨ Features

- 🏠 **Home Page** — Engaging landing screen with CTA to explore the catalog  
- 🚘 **Catalog** — Full list of cars with pagination  
- 🎯 **Smart Filtering** — Filter by brand, price, mileage  
- 📄 **Car Details** — Car info, rental conditions, booking form  
- ⭐ **Favorites** — Save preferred cars in LocalStorage  
- 📅 **Booking Simulation** — Submit booking form + toast feedback  

---

## 🛠️ Tech Stack

- ⚛️ **Frontend**: React  
- 🟦 **Language**: TypeScript  
- 📦 **State Management**: Zustand  
- 🌍 **Routing**: React Router  
- 🌐 **API Client**: Axios  
- 🎨 **Styling**: Tailwind CSS  
- 📅 **Date Picker**: react-flatpickr / react-datepicker  
- 🔔 **Notifications**: react-hot-toast  
- ⚡ **Build Tool**: Vite  

---

## 📂 Project Structure

```plaintext
📁 rent-a-ride/
├─ 📁 public/                # Static files
│
├─ 📁 src/
│  ├─ 📁 assets/             # Images, icons
│  ├─ 📁 components/         # Reusable UI components
│  ├─ 📁 pages/              # App pages (React Router)
│  │  ├─ 🏠 Home.tsx         # Landing page
│  │  ├─ 🚘 Catalog.tsx      # Cars catalog
│  │  ├─ 📄 CarDetails.tsx   # Car details + booking
│  │  └─ ❌ NotFound.tsx     # 404 page
│  ├─ 📁 services/           # API calls (Axios)
│  ├─ 📁 store/              # Zustand store (state)
│  ├─ 📁 types/              # TypeScript types
│  ├─ ⚛️ App.tsx             # Root app
│  ├─ 🎨 index.css           # Global styles (Tailwind)
│  ├─ ⚡ main.tsx            # App entry point
│  └─ 📄 declarations.d.ts   # Type declarations
│
├─ 📄 index.html             # App root HTML
├─ 📄 eslint.config.js       # ESLint config
├─ 📄 package.json           # Dependencies
├─ 📄 package-lock.json      # Lock file
├─ 📄 README.md              # Documentation
└─ 📄 .gitignore             # Git ignore rules
```
🚀 Getting Started
Clone repo
```
git clone https://github.com/vitalii-cherukha/Rent-a-ride.git
cd rent-a-ride
```
Install dependencies
```
npm install
```
# or
```
yarn install
```

Run dev server

```
npm run dev
```
# or
```
yarn dev
```
The app will be available at 👉 http://localhost:5173

🌍 Live Demo
🔗 rent-a-ride-azure.vercel.app

👤 Author
Developed by Vitalii Cherukha 🚀
Pet project for practicing React, TypeScript & Zustand
