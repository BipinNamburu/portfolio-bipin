# Bipin Namburu  Portfolio

An editorial-style Next.js 14 portfolio with TypeScript, Tailwind, Framer Motion, and a built-in AI assistant. Statically exported for GitHub Pages.

## Stack

- **Next.js 14** (App Router, static export)
- **TypeScript** + **Tailwind CSS**
- **Framer Motion** for staggered reveals and accordion transitions
- **Fraunces** (serif display) + **Inter** (sans body) + **JetBrains Mono**
- **Clearbit Logo API** for company logos
- **Simple Icons** CDN for tech stack icons
- **OpenAI GPT-4o-mini** for the portfolio chatbot

## Local development

```bash
npm install
cp .env.example .env.local   # add your OpenAI key
npm run dev
```

Visit `http://localhost:3000`.

## Deployment to GitHub Pages

### 1. Create the repo

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/BipinNamburu/portfolio.git
git push -u origin main
```

> If you name the repo something **other than `portfolio`**, open `next.config.js` and update the `repoName` constant on line 4 to match.

### 2. Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Build and deployment" → **Source**, pick **GitHub Actions**

### 3. Add the OpenAI secret

1. Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
2. Name: `OPENAI_API_KEY`
3. Value: your key (starting `sk-...`)

### 4. Push to trigger a deploy

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`. After it finishes (~2 min), the site will be live at:

```
https://bipinnamburu.github.io/portfolio/
```

The exact URL appears in the workflow's "deploy" job output under "Deploy to GitHub Pages".

## ⚠️ Important security note about the chatbot

GitHub Pages serves static files only  there's no server. That means **the OpenAI API key gets bundled into the client JavaScript and is visible to anyone who opens DevTools**. There is no way around this on a purely static host.

You have three options:

### Option A  Accept the exposure with strict limits (easiest)
On the OpenAI dashboard:
- Set a **monthly spend limit** (Settings → Limits → "Set monthly budget", e.g. $5)
- Create a **project-scoped key** with rate limits
- Restrict the key to `gpt-4o-mini` only
- Monitor usage; rotate the key if abuse appears

### Option B  Move the bot to a serverless function (recommended)
Deploy to **Vercel** or **Netlify** instead  both are free, both run Next.js out of the box, and both let you keep the key server-side. The included `app/api/chat/route.ts` pattern (which you'd add) keeps the key in `OPENAI_API_KEY` (no `NEXT_PUBLIC_` prefix). This is genuinely secure.

### Option C  Disable the bot
Remove `<Chatbot />` from `app/page.tsx`. Everything else still works.

## Customising

- **Resume content**: `app/data.ts`  every experience, project, skill, and stat
- **Colors**: `tailwind.config.js` and CSS variables in `app/globals.css`
- **Fonts**: `app/layout.tsx` (swap the Google Font imports)
- **Bot behaviour**: edit the `SYSTEM_PROMPT` in `app/components/Chatbot.tsx`

## File map

```
portfolio/
├── .github/workflows/deploy.yml    # auto-deploy pipeline
├── app/
│   ├── components/                  # Nav, Hero, Marquee, About,
│   │                                # Experience, Skills, Contact,
│   │                                # Footer, Chatbot
│   ├── data.ts                      # resume content
│   ├── globals.css                  # base styles + grain overlay
│   ├── layout.tsx                   # root layout, fonts, SEO meta
│   └── page.tsx                     # composition
├── next.config.js                   # static export + basePath
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## SEO

- Metadata is set in `app/layout.tsx` (title, description, Open Graph, Twitter card)
- `output: 'export'` produces fully pre-rendered HTML, so search crawlers see real content
- Static export = no SSR at runtime, but every page is pre-built HTML at deploy time

---

Built in an afternoon with Claude. Set in **Fraunces** & **Inter**.
