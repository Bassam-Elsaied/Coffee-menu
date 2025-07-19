# Coffe Bar

A visually rich, interactive web application built with [Next.js](https://nextjs.org/), featuring a modern coffee and cocktail bar experience. The app showcases a dynamic menu, animated hero section, and detailed information about drinks, all styled with custom CSS and enhanced with GSAP animations.

---

## Features

- **Animated Hero Section:** Eye-catching introduction with animated text and video background.
- **Dynamic Drinks Menu:** Browse through a selection of cocktails with smooth transitions and detailed recipes.
- **Hot & Cold Drinks Lists:** Separate sections for popular hot and cold drinks, each with descriptions and prices.
- **About Section:** Highlights the bar’s philosophy and customer satisfaction.
- **Art Section:** Showcases the craft and artistry behind each drink, with animated visual effects.
- **Responsive Navbar:** Fixed navigation for easy access to all sections.
- **GSAP Animations:** Smooth, scroll-based and interactive animations throughout the site.
- **Custom Styling:** Uses Tailwind CSS and custom fonts for a unique, modern look.

---

## File Structure

- `app/`
  - `layout.js` – Root layout with global styles and Navbar.
  - `page.js` – Main page rendering all sections.
  - `globals.css` – Global and component-specific styles.
- `component/`
  - `Navbar.jsx` – Navigation bar.
  - `Hero.jsx` – Animated hero section.
  - `Cocktails.jsx` – Hot and cold drinks lists.
  - `About.jsx` – About section with customer stats.
  - `Art.jsx` – Artistry and craft section.
  - `Menu.jsx` – Interactive cocktail menu.
- `data/index.jsx` – Centralized data for navigation, drinks, features, and contact info.
- `public/images/` – All images and icons used in the app.
- `public/videos/` – Video assets for the hero section.

---

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Customization

- **Add or Edit Drinks:** Update `data/index.jsx` to modify the drinks menu or add new items.
- **Images & Videos:** Place new assets in the `public/images/` or `public/videos/` directories and reference them in your components or data.
- **Styling:** Modify `app/globals.css` for global or component-specific styles.

---

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [GSAP](https://greensock.com/gsap/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

## Credits

- **Design & Development:** [Your Name or Team]
- **Images & Videos:** All assets are located in the `public/` directory.

---

## License

This project is for educational and demonstration purposes.
