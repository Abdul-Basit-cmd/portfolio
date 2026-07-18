# Abdul Basit — Portfolio

Single-page developer portfolio built with React + Vite + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Setting up the contact form (EmailJS)

The Contact section sends messages straight to your inbox using EmailJS — frontend only, no backend needed.

1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** (Gmail works fine) — note the **Service ID**
3. Add an **Email Template** with these variables in the template body: `{{from_name}}`, `{{from_email}}`, `{{message}}` — note the **Template ID**
4. Go to Account → General and copy your **Public Key**
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart `npm run dev` after adding `.env` so Vite picks up the new variables.

**Deploying:** add the same three `VITE_EMAILJS_*` variables in your Netlify/Vercel project's environment variable settings — `.env` itself isn't deployed (it's gitignored).

## Editing content

All copy, links, project data, nav links, and social links live in a single file:

```
src/data/assets.js
```

Edit that file to update anything — no need to touch component JSX for copy changes.

## Structure

- `src/components/` — one component per section (Navbar, Hero, TechStrip, About, Experience, Projects, OpenSource, Goals, Faq, Footer)
- `src/data/assets.js` — all content
- `src/assets/img/` — placeholder portrait image (swap `portrait-placeholder.svg` for your real photo)

## Deploying

Works on Netlify or Vercel out of the box — same flow you've used for your other projects (build command `npm run build`, output dir `dist`).
