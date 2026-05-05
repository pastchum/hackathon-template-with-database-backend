# Hackathon Starter — Next.js + Supabase

A batteries-included starter template for hackathons.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS · Supabase (Auth + Database)

---

## Features

- ✅ **Next.js App Router** with TypeScript and Tailwind CSS
- ✅ **Supabase Auth** — magic-link sign-in out of the box
- ✅ **Server & Client Supabase clients** — correctly configured for SSR
- ✅ **Protected routes** via Next.js middleware
- ✅ **Example API route** (`/api/example`) querying Supabase
- ✅ **Auth callback handler** for OAuth / magic-link flows

---

## Quick Start

### 1. Clone & install

```bash
git clone <your-repo-url>
cd <your-repo>
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Copy your **Project URL** and **anon key** from  
   *Settings → API*.
3. Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

### 3. Configure the auth redirect URL

In your Supabase dashboard go to  
**Authentication → URL Configuration** and add:

```
http://localhost:3000/auth/callback
```

(Add your production URL when you deploy.)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── example/route.ts   # Example Supabase API route
│   ├── auth/
│   │   └── callback/route.ts  # OAuth / magic-link callback
│   ├── dashboard/page.tsx     # Protected dashboard page
│   ├── login/page.tsx         # Magic-link sign-in page
│   └── page.tsx               # Home page
├── lib/
│   └── supabase/
│       ├── client.ts          # Browser Supabase client
│       ├── server.ts          # Server Supabase client (SSR)
│       └── middleware.ts      # Session refresh helper
└── proxy.ts                   # Route protection proxy
```

---

## Auth Flow

1. User visits `/login` and enters their email.
2. Supabase sends a magic link.
3. User clicks the link → redirected to `/auth/callback`.
4. Callback exchanges the code for a session and redirects to `/dashboard`.
5. All routes except `/login` and `/auth/**` require authentication (enforced in middleware).

---

## Customizing

| What | Where |
|------|-------|
| Add database queries | `src/app/api/example/route.ts` |
| Change protected routes | `src/proxy.ts` |
| Add OAuth providers | `src/app/login/page.tsx` |
| Add new pages | `src/app/<name>/page.tsx` |

---

## Deploying to Vercel

```bash
npx vercel
```

Set the same environment variables in *Vercel → Project → Settings → Environment Variables* and add your production URL to Supabase's allowed redirect URLs.

