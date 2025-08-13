# Car E-Commerce 🚗

Hey everyone! This is an car e-commerce website I built using **Next.js 15**.  
The goal of this project is to provide a modern, fast, and interactive shopping experience for browsing, filtering, and purchasing cars online.  
It was a great opportunity to improve my skills with **Next.js App Router**, **server actions**, and **state management** using cookies & local storage.

---

## Project Features 🚀 :
- Fully responsive homepage with a Swiper carousel for featured cars
- Sections for **Recommended** and **Popularity** cars
- Shared layout across pages using `layout.js` and **nested layouts** for product filtering
- Client-side product filtering for a better browsing experience
- Local storage caching for products to avoid redundant API calls
- **About** page generated with **SSG** for fast load times
- **Contact** page with form validation and feedback using **React Hot Toast**
- Dynamic car detail pages using `slug`
- `generateStaticParams` to prebuild all car pages at build time
- `generateMetadata` for SEO-friendly metadata per page
- **Cart** and **Wishlist** pages powered by **server actions** & cookies for adding/removing cars
- Optimized for performance with Next.js 15 App Router

---

## Tools I Used 🛠️ :
- **Next.js 15** (App Router)
- **Tailwind CSS**
- **Swiper.js** (for carousels)
- **React Icons**
- **React Hot Toast**
- **Cookies API** (via `next/headers`)
- **Local Storage** (for caching products)

---

## Data Handling 🧠:
- Car data fetched from a remote API
- Local storage used to persist products after first load
- `generateStaticParams` for static generation of all product pages
- `generateMetadata` for SEO on product pages
- Cookies store cart and wishlist data, updated via server actions
- Form validation & feedback handled server-side with real-time toast notifications

---

## To Run Website
- download repo as zip file
- open termnal in repo folder
- run `npm run dev`

---

## LIVE DEMO :

👉 **[Preview Website](https://your-live-demo-link.com/)**

---

## Author 👨‍💻:

Made with ❤️ by **[Hady Mohamed]**
