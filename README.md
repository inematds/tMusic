tmusic — Monorepo (Next.js + PNPM)

Conteúdo

- Apps: `apps/web` (Next.js 14 — App Router)
- Pacotes: `packages/shared` (tipos/validações — a preencher)
- Infra: `infra/docker-compose.yml` (Postgres)

Pré‑requisitos

- Node.js >= 18.17
- PNPM >= 8

Instalação

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

- `app/` — páginas (App Router)
  - `page.tsx` — Home com Top 10 por categoria (Músicas, Bandas, DJs, IA)
  - `rankings/[category]/page.tsx` — páginas por categoria
  - `api/v1/*` — rotas BFF (rankings, tracks, votes)
- `components/` — UI (RankCard, RankSection, Filters, CategoryTabs, VoteToggle)
- `lib/` — dados e mocks (rankings, tracks)

API (BFF)

- `GET /api/v1/rankings?category&scope&platform&timeframe` — Top 10 por categoria (mock)
- `GET /api/v1/tracks/[id]` — detalhe de faixa (mock)
- `POST /api/v1/votes` — registra voto (gostei/neutral/detestei) [MVP]

Próximos Passos

- Prisma + Postgres para rankings reais e votos persistentes
- Páginas de perfil para Bandas/DJs
- Testes (unit/integration/e2e) + CI

