tmusic â€” Monorepo (Next.js + PNPM)

ConteÃºdo

- Apps: `apps/web` (Next.js 14 â€” App Router)
- Pacotes: `packages/shared` (tipos/validaÃ§Ãµes â€” a preencher)
- Infra: `infra/docker-compose.yml` (Postgres)

PrÃ©â€‘requisitos

- Node.js >= 18.17
- PNPM >= 8

InstalaÃ§Ã£o

- `pnpm i`

Executar (dev)

- `pnpm --filter @tmusic/web dev`
- App em `http://localhost:3000`

Build/Start (prod)

- `pnpm --filter @tmusic/web build`
- `pnpm --filter @tmusic/web start`

Lint/Format

- `pnpm --filter @tmusic/web lint`

Estrutura (web)

- `app/` â€” pÃ¡ginas (App Router)
  - `page.tsx` â€” Home com Top 10 por categoria (MÃºsicas, Bandas, DJs, IA)
  - `rankings/[category]/page.tsx` â€” pÃ¡ginas por categoria
  - `api/v1/*` â€” rotas BFF (rankings, tracks, votes)
- `components/` â€” UI (RankCard, RankSection, Filters, CategoryTabs, VoteToggle)
- `lib/` â€” dados e mocks (rankings, tracks)

API (BFF)

- `GET /api/v1/rankings?category&scope&platform&timeframe` â€” Top 10 por categoria (mock)
- `GET /api/v1/tracks/[id]` â€” detalhe de faixa (mock)
- `POST /api/v1/votes` â€” registra voto (gostei/neutral/detestei) [MVP]

PrÃ³ximos Passos

- Prisma + Postgres para rankings reais e votos persistentes
- PÃ¡ginas de perfil para Bandas/DJs
- Testes (unit/integration/e2e) + CI


Deploy
- Produção: https://t-music-web.vercel.app
- CI: GitHub Actions (lint/build) em .github/workflows/ci.yml
- Vercel: Root apps/web, Install pnpm i, Build pnpm --filter @tmusic/web build, Output .next

SEO
- metadataBase configurado para a URL pública
- OG image gerada em runtime (app/opengraph-image.tsx)
