# silent-prototype

> This repo was generated using a custom CLI tooling system by [builtbywill.dev](https://builtbywill.dev)

🛰️ Silent Prototype — SaaS Landing Pages

A terminal-themed, multi-product landing site for Silent Prototype.
Built with React, React Router, and TailwindCSS.

Features:

    🔀 Dynamic routing for product modules (Morpheus, Violet Collar, etc.)

    🎨 Reusable header with themed navigation

    🧠 Minimalist blacksite aesthetic

    ⚙️ Designed for scalability and documentation layering


🚀 Getting Started

npm install
npm run dev


📁 Structure

    app/components/ – shared UI elements

    app/routes/ – each page (e.g. /tools, /morpheus)

    app.css – global styling and themes

    routes.ts – all registered route configs

Silent Prototype is more than software —
it's the first OS for offline intelligence.


Powered by [BuiltByWill.dev](https://builtbywill.dev)  
Phase–Coded | Method–Signed | Terminal–Forged





# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
