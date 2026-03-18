# Estudi Norai

Website for Estudi Norai, a music studio offering composition, production, mixing, mastering, and music education services.

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Vercel](https://vercel.com) — Deployment
- [Nodemailer](https://nodemailer.com) — Contact form emails

## Project Structure

```
/
├── public/
│   └── images/          # Static assets
├── src/
│   ├── components/      # Astro components
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   └── api/
│   │       └── contact.ts  # Contact form API
│   ├── scripts/
│   └── styles/
└── package.json
```

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## Deployment

The site is configured for deployment on Vercel. Push to your main branch to trigger a deploy.

## Contact Form

The contact form sends emails via the `/api/contact` endpoint. Set these environment variables for production:

| Variable | Description |
| :------- | :---------- |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port (default: 587) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `CONTACT_TO_EMAIL` | Recipient email (default: estudionorai@gmail.com) |
