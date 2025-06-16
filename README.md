A Twitter‑style feed and social app built with Next.js, React, NextAuth, Mongoose, MongoDB and Tailwind CSS—developed as part of ReDI School’s Fullstack Development Bootcamp curriculum.

Live Demo: https://anothertwitter.vercel.app/

## 🚀 Features

* **User Authentication** via NextAuth (email/password credentials)
* **Create, Read & List Tweets**
* **User Profiles** with their own tweet feeds
* **Responsive UI** using Tailwind CSS
* **Server‑side API routes** in Next.js
* **Database ORM** powered by Prisma

## 🛠️ Tech Stack

| Layer          | Technology                  |
| -------------- | --------------------------- |
| Framework      | Next.js 14 (App Router)     |
| Styling        | Tailwind CSS                |
| Authentication | NextAuth.js                 |
| ORM / Database | Prisma (SQLite or Postgres) |
| Language       | TypeScript / JavaScript     |
| Deployment     | Vercel                      |

## 📦 Installation

1. **Fork & clone** this repo:

   ```bash
   git clone https://github.com/priyoarman/anothertwitter.git
   cd anothertwitter
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or yarn install
   # or pnpm install
   ```

3. **Environment variables**
   Create a `.env.local` file at the project root and add:

   ```env
   DATABASE_URL="file:./dev.db"         # or your Postgres URL
   NEXTAUTH_SECRET="a-long-random-string"
   NEXTAUTH_URL="http://localhost:3000"
   ```

   If you use OAuth providers (e.g. GitHub, Google), also add:

   ```env
   GITHUB_ID="…"
   GITHUB_SECRET="…"
   ```

4. **Run Prisma migrations** (if using SQLite/Postgres):

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the dev server**:

   ```bash
   npm run dev
   # then open http://localhost:3000 in your browser
   ```

## 🗂️ Project Structure

```
/app
  ├─ layout.tsx       # Root layout & global styles
  ├─ page.tsx         # Home / feed page
  ├─ profile/
  │   └─ page.tsx     # User profile page
  └─ api/
      ├─ auth/[...nextauth].ts   # NextAuth config
      └─ tweets/…                # Tweet CRUD API routes

/lib
  └─ prisma.ts         # Prisma client instance

/models
  └─ tweet.ts          # TypeScript interfaces / Zod schemas

/public
  └─ images/           # Static assets

/middleware.js         # Route protection

/next.config.js        # Next.js config
```

## 🧪 Scripts

| Command          | Description                 |
| ---------------- | --------------------------- |
| `npm run dev`    | Run in development mode     |
| `npm run build`  | Build for production        |
| `npm run start`  | Start the production server |
| `npm run lint`   | Run ESLint                  |
| `npm run format` | Run Prettier                |

## 📈 Deploy

This app deploys seamlessly to **Vercel**:

1. Push your code to GitHub.
2. Import the repo in Vercel.
3. Add the same environment variables in Vercel’s dashboard.
4. Deploy!

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) (if you add one) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more info.

---

*Built with ❤️ for ReDI School*
