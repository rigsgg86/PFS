# Prime Fleet Portal

Production-ready fleet management dashboard built with Next.js 15, TypeScript, Tailwind CSS, NextAuth credentials authentication, and Supabase PostgreSQL deployment support.

## Features

- Secure admin login with NextAuth middleware-protected portal routes
- Executive dashboard with KPI cards and service reminders
- Vehicle management seeded with:
  - 2022 Mercedes-Benz Sprinter 2500
  - 2021 Mercedes-Benz Sprinter 2500
- Maintenance, mileage, fuel, document, gallery-count, reminder, search/filter-ready UI patterns
- Black, gold, and white responsive enterprise theme
- Supabase SQL schema and REST-based seed script
- Vercel-ready environment configuration

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` before using authentication.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.
4. Seed vehicles:

```bash
npm run db:seed
```

## Vercel deployment

1. Import this repository into Vercel.
2. Configure the environment variables from `.env.example`.
3. Deploy with the default Next.js build command: `npm run build`.

Never expose `SUPABASE_SERVICE_ROLE_KEY` to client components.
