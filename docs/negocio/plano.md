# Plano de Negócio — tMusic

## Proposta de Valor
- Ranking unificado e confiável do que as pessoas realmente ouvem (Spotify, YouTube, Apple, Deezer).
- Insights por recorte: país/região, gênero, período (24h/7d), origem (IA x humano), plataforma.
- Discovery com contexto: tendências, virais emergentes, quedas, momentum cross‑platform.

## Públicos & Problemas
- Fãs/ouvintes: descobrir o que está subindo agora por cena/plataforma.
- Artistas/selos: medir tração e campanhas, identificar “breakouts”.
- Mídia/radios/festivais: pautas, curadoria, previsões.
- Marcas/agências: planejamento e patrocínio com dados.

## Diferenciais (Moat)
- Agregação multi‑fonte quase em tempo real (inclui Apple/Deezer além de Spotify/YouTube).
- Normalização + score próprio (posição, views, likes, growth rate) e antifraude básico.
- Sinais IA (origem/gerado por IA), tendências por microrregião e nicho.
- Parcerias e reputação (badge “tMusic Charted”, imprensa, creators).

## Monetização
- B2C
  - Freemium (com ads) e Premium (R$ 14,90/mês): filtros avançados, playlists, alertas.
  - Afiliados: deep links (Spotify/YouTube/Apple) + tickets/merch.
- B2B
  - Dashboard Pro (R$ 199–999/mês): analytics, export, alertas, API rate maior.
  - Data/API Licensing: endpoints para mídia, rádios, apps.
  - White‑label charts para portais/radios/festivais.
- Patrocínio/Ads: sessões “Trending by X”, branded leaderboards, slots de destaque.

## Go‑to‑Market (90 dias)
- Fase 1 (0–30d): MVP BR + SEO
  - Fontes sem chave (Apple/Deezer) + Spotify/YouTube (client credentials).
  - Páginas por categoria/gênero/região; metadados/OG; páginas artista/track.
  - Conteúdo editorial: weekly “Top 10 virais BR”, Twitter/Threads, TikTok.
- Fase 2 (31–60d): Prova social + Parcerias
  - Badges “tMusic Charted”; newsletter; parcerias com rádios/portais.
  - Trials do Dashboard Pro p/ selos/mídias (depoimentos/feedback).
- Fase 3 (61–90d): Monetização e PR
  - Lançar Premium e Dashboard Pro; imprensa; collabs com creators.
  - Pilotos white‑label e campanhas patrocinadas.

## Produto & Roadmap
- MVP: rankings multi‑fonte, filtros por fonte/plataforma, páginas públicas, BFF cacheado, coleta horária.
- v1: contas/assinaturas, alertas, playlists automáticas, API pública, painel Pro.
- v2: IA de insights (previsões), segmentação geográfica/scene, antifraude, export avançado.

## Operação & Compliance
- Tech: Next.js + ISR; coleta em cron; observabilidade (logs/alertas).
- Legal: respeitar ToS das APIs; linkar às plataformas; termos/privacidade; LGPD.
- Pagamentos: Pix/cartão; faturamento B2B.

## KPIs
- MAU/DAU, retenção 7/30, CTR para plataformas, Premium subs, ARPU, LTV/CAC.
- B2B: trials → conversão, uso de API, churn.

## Finanças (esboço)
- Custos: Vercel/infra, quotas APIs, domínio, e‑mail, design/marketing.
- Receitas: Premium, B2B Pro/API, ads/patrocínio, afiliados.
- Meta 6–12 meses: 5–10k Premium + 50–100 B2B Pro + 2–3 white‑label.

## Plano Técnico (resumo)
- Fontes & BFF
  - Fetchers: `apps/web/lib/sources/{spotify,youtube,apple,deezer}.ts`.
  - Agregador: `apps/web/lib/aggregator.ts` (score/dedup/filters por fonte/plataforma/timeframe).
  - API: `GET /api/v1/rankings?category&timeframe&source&platform`.
  - Cache: `revalidate` (ISR) + fallback; Cron opcional para revalidate.
- Dados (fase 2)
  - Prisma + Postgres: `Track`, `SourceMeasurement`, `RankingEntry`, `Vote`.
  - Coletas agendadas (Vercel Cron) + histórico e export.

## Credenciais necessárias (fase Spotify/YouTube)
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`
- `YOUTUBE_API_KEY`

## Próximos Passos
- Implementar filtros “Fontes” (UI) e `source=` no BFF.
- Conectar Spotify/YouTube com envs e playlists alvo (Top 50 BR).
- Landing “Sobre os dados” (créditos e metodologia) e página “Pro” (waitlist).
