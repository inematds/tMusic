import fs from 'fs/promises';
import path from 'path';

export type AppConfig = {
  updateSchedule?: string; // cron-like, e.g. "0 3 * * *"
  apiBaseUrl?: string;
  db?: { urlEnv?: string };
  links?: { spotifyBase?: string; youtubeBase?: string };
};

const defaultConfig: AppConfig = {
  updateSchedule: '0 3 * * *',
  apiBaseUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  db: { urlEnv: 'DATABASE_URL' },
  links: { spotifyBase: 'https://open.spotify.com/track/', youtubeBase: 'https://youtube.com/watch?v=' }
};

export async function getConfig(): Promise<AppConfig> {
  try {
    const cfgPath = path.join(process.cwd(), 'apps', 'web', 'config', 'app-config.json');
    const raw = await fs.readFile(cfgPath, 'utf8');
    const parsed = JSON.parse(raw);
    return { ...defaultConfig, ...parsed };
  } catch {
    return defaultConfig;
  }
}

