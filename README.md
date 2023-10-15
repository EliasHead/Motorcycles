# authetication with nextjs 13
## steps
01 - create repository github ✅
02 - config eslint rocketseat ✅
03 - prettier-plugin-tailwindcss(Automatic Class Sorting with Prettier)✅
04 - install prisma/@prisma/client ✅
05 - create database no supabase ✅
06 - install next-auth/prisma-adapter
components
  - user-login-auth.tsx
  - user-register-auth.tsx
  - auth-provider.tsx
  - client-component.tsx
  - server-component.tsx
  -
lib/
  - auth.ts
  - db.ts
  - session.ts
primsa/
  - schema.prisma
.env.local
  GITHUB_CLIENTID=
  GITHUB_SECRET=
  SECRET=quaquer
app/
  (web-motors)/
    login/
      page.tsx
    resgistrer/
      page.tsx
  api/
    auth/
      [...nextauth]/
        route.ts
    users/
      route.ts

tecnologias
  - next 13
  - typescript
  - nextauth
  - tailwind
  - postegress/supabase
  - shadcn ui
  - prisma
  - bcrypt
  - zod
