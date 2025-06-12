# **Miles Shinmachi – Personal Portfolio**

Welcome to the comprehensive documentation for the **Miles Shinmachi Personal Portfolio**. This portfolio website is designed to showcase Miles's skills, projects, education, and experience in a clean, modern, and responsive interface. It is built using modern web technologies and is structured for easy maintenance and future expansion.

---

## **Table of Contents**

- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Styling and Design](#styling-and-design)
- [Component Breakdown](#component-breakdown)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

---

## **Tech Stack**

This portfolio leverages a carefully selected set of technologies to ensure a performant, maintainable, and scalable web application:

- **React**: A declarative, component-based JavaScript library for building user interfaces. React allows for reusable UI components, efficient rendering with a virtual DOM, and a rich ecosystem of tools and libraries.

- **Tailwind CSS**: A utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS. Tailwind enables rapid UI development with consistent styling and responsive design out of the box.

- **PostCSS & Autoprefixer**: PostCSS is a tool for transforming CSS with JavaScript plugins. Autoprefixer automatically adds vendor prefixes to CSS rules, ensuring compatibility across different browsers.

- **Node.js (Optional)**: While the current portfolio is a static React app, Node.js is included for potential backend integration, such as handling contact form submissions or serving dynamic content in the future.

- **React Router (Optional)**: For managing navigation and routing if the portfolio expands to multiple pages or dynamic routes.

---

## **File Structure**

The project is organized to separate concerns and facilitate scalability:

```
miles-portfolio/
│
├── public/                   # Static assets served directly
│   ├── index.html            # Main HTML file with root div
│   ├── resume.pdf            # Resume PDF for download
│   └── favicon.ico           # Site favicon
│
├── src/                      # Source code for the React app
│   ├── assets/               # Images, PDFs, and other static assets imported in code
│   │   ├── csulb-logo.png
│   │   ├── transcript.pdf
│   │   └── project images...
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Education.jsx     # Education section with expandable details
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── About.jsx         # About me section
│   │   ├── Contact.jsx       # Contact form and info
│   │   └── ...               # Other components
│   ├── App.jsx               # Root React component assembling the page
│   ├── index.js              # React DOM rendering entry point
│   └── index.css             # Global CSS including Tailwind imports
│
├── tailwind.config.js        # Tailwind CSS configuration file
├── postcss.config.js         # PostCSS configuration file
├── package.json              # Project metadata and dependencies
├── README.md                 # This documentation file
└── .gitignore                # Git ignore rules
```

---

## **Features**

- **Responsive Design**: The layout adapts seamlessly to different screen sizes, from mobile phones to large desktop monitors, ensuring usability and aesthetics on all devices.

- **Minimalist Dark Theme**: A modern, dark-themed design that emphasizes content clarity and reduces eye strain.

- **Expandable Sections**: Components like Education include "Show More/Less" toggles to reveal additional details without cluttering the interface.

- **Project Showcase**: Detailed project descriptions with images, technologies used, and links to live demos or repositories.

- **Downloadable Resume and Transcript**: Easy access to downloadable PDF files for quick sharing.

- **Contact Form**: (If implemented) Allows visitors to send messages directly through the site.

---

## **Getting Started**

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 14 or higher recommended). Download from [nodejs.org](https://nodejs.org/).

- **npm**: Comes bundled with Node.js, used for package management.

### Installation

1. **Clone the repository** (or create a new React app if starting fresh):

   ```bash
   git clone https://github.com/yourusername/miles-portfolio.git
   cd miles-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Tailwind CSS and related tools** (if not already installed):

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind** by editing `tailwind.config.js`:

   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. **Add Tailwind directives** to your `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Running Locally

Start the development server:

```bash
npm start
```

This will open the portfolio in your default browser at `http://localhost:3000`. The server supports hot reloading for instant updates.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `build/` directory, ready for deployment.

---

## **Styling and Design**

- **Tailwind CSS** is used extensively for styling. It provides utility classes for margins, padding, colors, typography, flexbox, grid, and more.

- The color palette is primarily dark with accent colors for highlights and buttons.

- Responsive utilities ensure components adjust layout and font sizes based on screen width.

- Components use flexbox and grid layouts for alignment and spacing.

- Custom fonts and icons can be added by extending Tailwind’s configuration.

---

## **Component Breakdown**

- **Navbar.jsx**: Contains the site navigation links, responsive hamburger menu for mobile, and smooth scrolling behavior.

- **Footer.jsx**: Displays copyright information and social media links.

- **Education.jsx**: Shows education history with a fixed logo and date column, expandable detailed content, and a download button for the transcript PDF.

- **Projects.jsx**: Lists projects with images, descriptions, and links to GitHub or live demos.

- **About.jsx**: Personal bio and skills overview.

- **Contact.jsx**: Contact form and contact details (email, LinkedIn).

- **App.jsx**: The root component that assembles all sections into a single-page layout.

---

## **Deployment**

You can deploy the production build to any static hosting service:

- **Netlify**: Drag and drop the `build/` folder or connect your GitHub repo for continuous deployment.

- **Vercel**: Supports React apps with zero configuration.

- **GitHub Pages**: Host your portfolio directly from your GitHub repository.

- **Custom Server**: Serve the static files using Nginx, Apache, or any static file server.

---

## **Troubleshooting**

- **Build errors**: Ensure all dependencies are installed and versions are compatible.

- **Tailwind not applying styles**: Verify `tailwind.config.js` content paths include all JSX files and `index.css` imports Tailwind directives.

- **Assets not loading**: Confirm images and PDFs are correctly imported or placed in the `public` folder for direct access.

- **Development server not starting**: Check for port conflicts or missing scripts in `package.json`.

---

## AboutCarousel Component Update

The AboutCarousel component was enhanced to include an auto-transition feature for the photos. Previously, users could manually navigate through the images using previous and next buttons. Now, the carousel automatically transitions to the next photo every 3 seconds, providing a smoother and more dynamic user experience.

This was achieved by adding a React useEffect hook with a setInterval that calls the nextSlide function every 3 seconds. The interval is cleared on component unmount to prevent memory leaks. The manual navigation buttons remain functional, allowing users to control the carousel if desired.

---

## **Contact**

For questions, feedback, or collaboration opportunities, please reach out via:

- **Email**: miles@example.com
- **LinkedIn**: [linkedin.com/in/mshinmachi](https://linkedin.com/in/mshinmachi)

---

Thank you for exploring the Miles Shinmachi Personal Portfolio!

---


