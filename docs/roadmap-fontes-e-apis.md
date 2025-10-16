# Plano de Integração — Fontes, BFF e Filtros

## Objetivos
- Integrar fontes oficiais (Spotify, YouTube, Apple, Deezer) para Top Músicas/Bandas/DJs.
- Expor BFF estável com filtros por `source` (fonte) e `platform` (onde ouvir).
- Adicionar filtros de Fontes no topo da página (Todos, Spotify, YouTube, Apple, Deezer).
- Manter cache (ISR) e fallback quando APIs falharem.

## Arquitetura
- Coleta (fetchers): `apps/web/lib/sources/{spotify,youtube,apple,deezer}.ts`.
- Agregador: `apps/web/lib/aggregator.ts` (unifica, deduplica, rankeia, aplica score).
- BFF: `GET /api/v1/rankings?category&timeframe&source&platform`.
- Cache: `next: { revalidate: 3600 }` por fonte; fallback para mocks.
- Fase 2 (opcional): Postgres + Prisma para histórico e votos persistentes.

## Fontes e Credenciais
- Apple Music RSS (já): `https://rss.applemarketingtools.com/api/v2/br/music/most-played/50/songs.json`.
- Deezer Charts BR (já): `https://api.deezer.com/editorial/16/charts`.
- Spotify (requer chave): Client Credentials; envs `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`.
  - Ex.: Top 50 BR (playlist pública): `GET /playlists/{playlist_id}/tracks`.
- YouTube (requer chave): `YOUTUBE_API_KEY`; `videos.list?chart=mostPopular&regionCode=BR&videoCategoryId=10`.

## Back-end (BFF)
- `apps/web/app/api/v1/rankings/route.ts`
  - Ler `source` (all|spotify|youtube|apple|deezer) e `platform` (spotify|youtube|all).
  - Chamar `getItemsAsync(category, { source, platform })`.
- `apps/web/lib/aggregator.ts`
  - Assinatura: `getTopTracksExternal({ limit, source, platform, timeframe })`.
  - Score por fonte (ex.: Spotify 0.5, YouTube 0.3, Apple/Deezer 0.2) + posição/engajamento.
  - Dedup por `title+artist` e idealmente ISRC (via Spotify) quando disponível.
  - Cache por fonte; fallback em caso de erro.
- `apps/web/lib/sources/*.ts`
  - `spotify.ts`: token Client Credentials com TTL; playlists/tracks.
  - `youtube.ts`: vídeos populares em Música no BR.
  - `apple.ts`/`deezer.ts`: já implementados (ajustar se necessário).

## Front-end (Filtros de Fontes)
- `apps/web/components/Filters.tsx`
  - Adicionar chips “Fontes”: Todos, Spotify, YouTube, Apple, Deezer.
  - Incluir `source` no `makeHref()`.
- `apps/web/app/page.tsx` e `apps/web/app/rankings/[category]/page.tsx`
  - Ler `source` de `searchParams` e repassar a `getItemsAsync`.

## Dados Normalizados
```ts
type Item = {
  id: string;
  title: string;
  artists: string[];
  links?: { spotify?: string; youtube?: string; profile?: string };
  origin?: string; // Spotify | YouTube | Apple | Deezer
  stats?: { views?: number; likes?: number; popularity?: number };
};
```

## Variáveis de Ambiente (Vercel)
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `YOUTUBE_API_KEY`

## Cron (Opcional)
- Vercel Cron chamando rota admin para `revalidateTag('rankings')` 1x/h.

## Passos (Checklist)
1) Adicionar `source`/`platform` aos handlers do BFF.
2) Estender `aggregator.ts` para aceitar filtros e ponderação de score.
3) Implementar `sources/spotify.ts` e `sources/youtube.ts`.
4) Atualizar `Filters.tsx` com chips de Fontes; propagar `source` nas páginas.
5) Definir envs no Vercel; testar Preview/Production.
6) (Opcional) Prisma + Postgres para histórico e votos.

## Critérios de Aceite
- `GET /api/v1/rankings?category=musicas&source=spotify` retorna lista coerente com links Spotify.
- Filtros de Fontes no topo alteram o resultado.
- Cache respeitado; em erro de uma fonte, resposta segue com demais fontes.

