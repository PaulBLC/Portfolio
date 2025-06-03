# Paul BLANC - Portfolio

Welcome to the GitHub repository for my personal portfolio website.

This project showcases my skills, experiences, and projects as a Full Stack Developer, built with modern web technologies.

## ✨ Features

- **Internationalization (i18n):** Supports English and French languages with easy switching via flags.
- **Responsive Design:** Optimized for various devices (mobile, tablet, desktop) using Tailwind CSS.
- **Interactive Sections:** Home, About, Experiences, Projects, and Contact sections to highlight different aspects of my profile.
- **Dynamic Content:** Utilizes translation keys for flexible and maintainable text.
- **Modern UI:** Styled with Tailwind CSS and DaisyUI components for a clean and modern look.
- **Contact Form:** Functional contact form using EmailJS.

## 🚀 Technology Stack

- **Frontend:**
  - React (v18+)
  - TypeScript
  - Tailwind CSS
  - DaisyUI
  - `react-i18next` & `i18next` (for i18n)
  - `lucide-react` (for icons)
  - Vite (for bundling)
- **Other Libraries:**
  - `sweetalert2` (for custom alerts)
  - `emailjs-browser` (for sending emails)

## ▶️ Installation and Local Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PaulBLC/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
   or
   ```bash
   pnpm install
   ```

3. **Set up environment variables (for EmailJS):**
   Create a `.env` file in the root directory and add your EmailJS service ID, template ID, and public key.
   ```env
   VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   or
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **GitHub:** [https://github.com/PaulBLC](https://github.com/PaulBLC)
- **LinkedIn:** [https://linkedin.com/in/paul-blanc-lyon](https://linkedin.com/in/paul-blanc-lyon) (Add your actual LinkedIn URL)

Feel free to explore the code and suggest improvements!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
