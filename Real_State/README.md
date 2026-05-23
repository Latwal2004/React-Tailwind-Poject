# 🏠 Real Estate Website

A modern and fully responsive **Real Estate Web Application** built using **React.js**, **Tailwind CSS**, and **Vite**.  
This project provides users with an elegant interface to explore properties, services, testimonials, and contact information with smooth animations and dark mode support.

---

# 🚀 Features

- 🌙 Dark Mode Support
- 📱 Fully Responsive Design
- 🏡 Property Listing Cards
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast Performance using Vite
- ✨ Smooth Scroll Navigation
- 🎥 AOS Scroll Animations
- 📍 Property Location Section
- 💬 Client Testimonials
- 📧 Contact Form UI
- 🔝 Scroll-to-Top Button
- 🧩 Reusable React Components

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend Framework |
| Tailwind CSS | Styling |
| Vite | Build Tool |
| React Icons | Icons |
| AOS | Scroll Animations |
| React Scroll | Smooth Navigation |

---

# 📂 Project Structure

```bash
src/
│
├── assets/
│   └── images/
│
├── components/
│   ├── DarkModeContext.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── export.js
│
├── sections/
│   ├── About.jsx
│   ├── Client.jsx
│   ├── Contact.jsx
│   ├── Hero.jsx
│   ├── PopularAreas.jsx
│   ├── Properties.jsx
│   └── Services.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🎯 Main Sections

## 🏡 Hero Section
- Attractive hero banner
- Property search form
- Responsive typography
- Background image with overlay

---

## 👨‍💼 About Section
- Company introduction
- Modern responsive layout
- CTA button

---

## 🌍 Popular Areas
- Featured property locations
- Image grid layout
- Statistics section

---

## 🏠 Properties Section
- Dynamic property cards
- Property details
- Interactive action buttons
- Hover animations

---

## 🛎️ Services Section
- Real estate services
- Dynamic icons using React Icons
- Responsive service cards

---

## 💬 Testimonials Section
- Client feedback cards
- Ratings display
- Animated transitions

---

## 📞 Contact Section
- Modern contact form
- Dark mode support
- Responsive design

---

## 🦶 Footer Section
- Social media links
- Contact information
- Latest properties showcase
- Scroll-to-top button

---

# 🌙 Dark Mode

Dark mode is implemented using:

```jsx
useContext + Tailwind CSS dark classes
```

The application uses a custom `DarkModeContext` for global theme management.

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/real-estate-website.git
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd real-estate-website
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

---

# 📦 Dependencies Used

```bash
npm install react-icons
npm install react-scroll
npm install aos
npm install tailwindcss @tailwindcss/vite
```

---

# 🎨 Tailwind CSS Setup

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

---

# 📸 Animations

AOS (Animate On Scroll) is used for smooth scrolling animations.

Example:

```jsx
data-aos="zoom-in"
```

---

# 🧠 Concepts Used

- React Functional Components
- Props
- Context API
- useState
- useEffect
- Conditional Rendering
- Dynamic Rendering with `.map()`
- Responsive Tailwind Design
- Dark Mode Implementation

---

# 📱 Responsive Design

The website is fully responsive for:

- Mobile Devices
- Tablets
- Laptops
- Large Screens

---

# ✨ Future Improvements

- Backend Integration
- Authentication System
- Real Property Search API
- Database Connectivity
- Payment Integration
- Admin Dashboard
- Property Filters
- Favorites System

---

# 👨‍💻 Author

**Harish Singh Latwal**

Frontend Developer | React Enthusiast

---

# 📄 License

This project is created for educational and portfolio purposes.

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.