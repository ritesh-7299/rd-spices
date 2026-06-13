# RD Naturals Website

Premium B2B export website for RD Naturals, an Indian whole spice exporter.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Nodemailer (form email notifications)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
copy .env.example .env.local
```

3. Update SMTP values in `.env.local`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=exports@rdnaturals.in
SMTP_PASS=your_smtp_password
INQUIRY_RECEIVER_EMAIL=exports@rdnaturals.in
EMAIL_FROM=RD Naturals <exports@rdnaturals.in>
```

4. Start development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and Lint

```bash
npm run lint
npm run build
```

## Implemented Pages

- `/` Home page with hero, about, products, trust elements, markets, process, and inquiry form
- `/about` Company profile, mission, vision, values, trust, process, and CTA
- `/products` Product catalog
- `/products/[slug]` Individual product pages for all 8 spice products
- `/contact` Contact form, map embed, and WhatsApp CTA

## Forms and Spam Protection

- API endpoint: `/api/inquiry`
- Email notifications through SMTP (Nodemailer)
- Honeypot field + minimum fill-time check
- In-memory rate limiting by requester IP
