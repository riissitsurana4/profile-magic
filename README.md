# Magical Profile Page
Made for Siege week 6; Theme:Magic 
(Disclaimer: Readme is made with the help of Ai)

A personal portfolio and demo site with a magical theme. Built with Next.js, Tailwind CSS and Prisma (Postgres). The site includes:

- A polished homepage and animated About page
- Projects listing (spell book) with reusable project cards
- A contact form that persists submissions to a PostgreSQL database via Prisma
- A simple admin panel to view, update (read/replied) and delete contact submissions (protected by an admin key)

This README documents how to set up and run the project locally (Windows PowerShell), where to find key files, and how to test the contact/admin flows.

---

## Quick links

- Home page: `/`
- Projects: `/projects`
- About: `/about`
- Contact form: `/contact`
- Admin panel: `/admin` (requires admin key)

---

## Requirements

- Node.js (16+ recommended)
- npm
- PostgreSQL (local or hosted)
- Git (optional)

---

## Setup (Windows PowerShell)

1. Clone the repo and open the project folder.

2. Install dependencies:

```powershell
npm install
```

3. Create an environment file at the project root. You can use `.env` (the project reads from `.env`):

Create a file named `.env` with at least the following values (replace placeholders):

```text
DATABASE_URL="postgresql://<DB_USER>:<DB_PASS>@<DB_HOST>:<DB_PORT>/<DB_NAME>?schema=public"
ADMIN_KEY=replace_this_with_a_long_random_secret
```

4. Prisma: generate client and apply migrations (development)

```powershell
npx prisma generate
npx prisma migrate dev --name init
# optional: open the GUI to inspect data
npx prisma studio
```

If you prefer not to create a migration during early development, you can push the schema directly:

```powershell
npx prisma db push
```

5. Start the development server

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Environment variables

- `DATABASE_URL` — PostgreSQL connection string used by Prisma
- `ADMIN_KEY` — Demo admin key for accessing admin endpoints. Keep this secret. For demo purposes the key is stored in browser localStorage when you login at `/admin`.


---

## Project structure (important files)

- `app/` – Next.js app routes and pages
	- `app/page.js` – Home page
	- `app/about/page.js` – About page (animated)
	- `app/projects/*` – Projects listing and data
	- `app/contact/page.js` – Contact page (frontend)
	- `app/api/contact/route.js` – API endpoint for contact submissions (POST + optional GET)
	- `app/api/admin/*` – Admin endpoints (list, update status, delete)

- `lib/prisma.js` – Prisma client singleton wrapper
- `prisma/schema.prisma` – Prisma schema (Contact model)
- `public/` – Static assets (profile picture, project images)

---
## License

MIT — feel free to adapt the project for demos and learning.

---
