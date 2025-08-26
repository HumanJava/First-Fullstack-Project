# First Project – React + Vite + Chakra UI

This is a simple full-stack starter project frontend built with **Vite**, **React**, and **Chakra UI**.  
It demonstrates routing, theming, and animated components using **React Router** and **Framer Motion**.

---

## 🚀 Tech Stack

- [Vite](https://vitejs.dev/) – fast development server & build tool
- [React](https://reactjs.org/) – component-based UI library
- [Chakra UI](https://chakra-ui.com/) – accessible component library
- [React Router](https://reactrouter.com/) – client-side routing
- [Framer Motion](https://www.framer.com/motion/) – animations
- [React Icons](https://react-icons.github.io/react-icons/) – icon set

---

## 📂 Project Structure

```
frontend/
├─ src/
│  ├─ components/
│  │  └─ Navbar.jsx         # Top navigation bar
│  ├─ pages/
│  │  ├─ HomePage.jsx       # Home route
│  │  └─ CreatePage.jsx     # /create route
│  ├─ App.jsx               # App routes
│  ├─ main.jsx              # Entry point, wraps with ChakraProvider + Router
│  └─ index.css
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## ✨ Features

- **Responsive Navbar** with:
  - Gradient logo linking to `/`
  - "New" button that navigates to `/create`
  - Light/Dark mode toggle with smooth fade between bulb icons
- **Routing** via React Router
- **Chakra UI theming** and accessible components
- **Animation** of icons using Framer Motion

---

## 🛠️ Installation & Setup

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd "First Project/frontend"
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```
   This starts Vite on [http://localhost:5173].

4. Build for production
   ```bash
   npm run build
   ```

---



## 🔮 Roadmap / Next Steps

- Add backend integration (Express + MongoDB planned)  
- Add product listing page  
- Connect "New" button to product creation form  


---


