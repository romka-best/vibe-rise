# VibeRise — Modern Landing Page, Built 100% with Prompts in v0

Live production: https://v0-vibe-rise-87wa748gc-me-romandanilovs-projects.vercel.app

VibeRise is a high‑polish, performant landing page crafted entirely via natural language prompts in v0 — Vercel’s AI pair programmer. No hand-written boilerplate, no scaffolding CLIs — just prompts, previews, and deploys. [^4]

---

## ✨ Highlights

- Next.js App Router with React Server Components and Tailwind CSS
- shadcn/ui components with a custom tech aesthetic
- Animated hero, problem/solution narrative, “How it works,” audience, and FAQ
- Real waitlist UX (frontend) with built-in validation and success state
- Responsive, accessible, and mobile‑first design
- Brand color token and subtle neon/glow accents

---

## 🧰 Tech Stack

- Framework: Next.js (App Router, Server Components)
- UI: React, Tailwind CSS, shadcn/ui
- Motion: Framer Motion (section reveals, micro‑interactions)
- Images/Assets: Next static assets in `public/`
- Built with: v0 (prompt‑driven code and UI) [^4]

---

## 🚀 Quick Start

1) Clone and install

```
git clone <your-fork-or-repo-url>
cd viberise-landing
pnpm i   # or npm i / yarn
```

2) Run the dev server

```
pnpm dev   # or npm run dev / yarn dev
```

3) Open http://localhost:3000

You should see the VibeRise landing page with the animated hero, sections, and waitlist UI.

---

## 🔐 Environment (optional, for a “real” waitlist backend)

If you want to persist waitlist signups to a database/KV store, provision a backend (e.g., Upstash KV/Redis on Vercel) and expose environment variables. On Vercel, adding the integration will create and inject the variables automatically for your project on deploy.

Common variables (example):
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

Deploy first to confirm the UI flow works. Then set the variables and redeploy to make the waitlist fully persistent.

---

## 📱 PWA, Icons, and Metadata

- PWA: Create a web app manifest at `app/manifest.ts` or `app/manifest.json` to enable install prompts and app‑like behavior. Next.js supports static or dynamic manifests out of the box. [^1][^2]

- Favicons & Icons: You can add `favicon.ico` at `app/` and route‑specific icons with the `icon`/ `apple-icon` file conventions. Next.js automatically injects the correct `<link>` tags. [^5]

- SEO & OG Images: Define static or generated metadata in layouts/pages using the Metadata API, and add static `opengraph-image.png` per route for rich social sharing. [^3]

---

## 🧭 Project Structure (high level)

```
app/
  page.tsx              # Landing page composition
  layout.tsx            # Root layout (theme providers, global UI)
  error.tsx             # Global error UI
  not-found.tsx         # 404 UI
  loading.tsx           # App-level loading fallback
components/
  viberise/
    components/
      sections/         # Hero, Problem, Solution, How it works, Audience, FAQ, Waitlist
      visuals/          # Market chart, floating coins, neon background, logo variants
      layout/           # Header, Footer
      styles/           # Global styles, motion provider
      feedback/         # Section spinner, progress, back-to-top
    landing-page.tsx    # Section assembly and props
public/
  brand/                # Brand marks
  *.png / *.jpg         # Demo images and placeholders
```

---

## 🧪 Development Tips

- Componentization: Sections are broken into small, reusable atoms and molecules for easy maintenance and iteration.
- Motion Tuning: Framer Motion variants and reveal hooks are isolated to keep markup clean and responsive.
- Accessibility: Semantic HTML, ARIA labels, and focus states are included; verify changes with keyboard-only testing.
- Performance: Optimize images, keep animations subtle, and leverage Server Components where possible.

---

## 📦 Deploying

- Using Vercel: Push to your repo and deploy, or click “Deploy” in the v0 interface. Your project is already structured for zero‑config deployments on Vercel.
- Custom Domain: Attach a custom domain in your Vercel dashboard after your first successful deploy.
- Production Link: https://v0-vibe-rise-hx2azfpo3-me-romandanilovs-projects.vercel.app/

---

## 🧑‍🎨 Branding

- Primary brand color: `#CCFF11` (light green accent)
- Logo: Stored in `public/brand`. For favicons and app icons, follow the Next.js file conventions and/or generate icons via code where needed. [^5]

---

## 🧠 Built 100% with Prompts in v0

This project was created and iterated entirely through prompts in v0 — from layout and architecture to styling, motion, and UX tweaks. v0 generates real, editable Next.js code you can run locally, deploy to Vercel, and continue to refine with more prompts or manual edits. [^4]

---

## 📋 Roadmap Ideas

- Persist waitlist to a real datastore (KV/Redis/DB) and export CSV
- Add analytics events for “Join the Rise”
- Expand charts (volume bars, live tick mode, tooltips)
- PWA install banner and richer app icons
- A/B test hero headline and CTA micro‑interactions

---

## 🙌 Acknowledgements

- Next.js App Router docs for PWA, metadata, and icon conventions [^1][^2][^3][^5]
- v0 for prompt‑driven development workflows [^4]

---

## License

All rights reserved unless a license is added. Please open an issue if you need a specific license.

---

## Sources

- [^1]: Next.js — Configuring Progressive Web Applications (PWA)
- [^2]: Next.js — How to build a Progressive Web Application (PWA)
- [^3]: Next.js — Metadata and OG images
- [^4]: v0 — Build code and UI with prompts
- [^5]: Next.js — App icons (favicon, icon, apple-icon)
```
