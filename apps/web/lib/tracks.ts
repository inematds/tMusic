export type Track = {
  id: string;
  title: string;
  artists: string[];
  isAiGenerated: boolean;
  links: { spotify?: string; youtube?: string };
};

export const MOCK_TRACKS: Record<string, Track> = {
  trk_1: {
    id: 'trk_1',
    title: 'Samba do Futuro',
    artists: ['DJ Aurora', 'MC Neo'],
    isAiGenerated: false,
    links: { spotify: 'https://open.spotify.com/track/mock1' }
  },
  trk_2: {
    id: 'trk_2',
    title: 'Brega AI (Remix)',
    artists: ['SunoBot', 'DJ Recife'],
    isAiGenerated: true,
    links: { youtube: 'https://youtube.com/watch?v=mock2' }
  },
  trk_3: { id: 'trk_3', title: 'Funk Neon', artists: ['MC Prisma'], isAiGenerated: false, links: { spotify: 'https://open.spotify.com/track/mock3' } },
  trk_4: { id: 'trk_4', title: 'Pagode 3000', artists: ['Grupo Aurora'], isAiGenerated: false, links: { youtube: 'https://youtube.com/watch?v=mock4' } },
  trk_5: { id: 'trk_5', title: 'Forró Cyborg', artists: ['DJ Sertão'], isAiGenerated: false, links: { spotify: 'https://open.spotify.com/track/mock5' } },
  trk_6: { id: 'trk_6', title: 'Trap da Aurora', artists: ['Auror4'], isAiGenerated: false, links: { youtube: 'https://youtube.com/watch?v=mock6' } },
  trk_7: { id: 'trk_7', title: 'BregaWave', artists: ['MC Pará'], isAiGenerated: false, links: { spotify: 'https://open.spotify.com/track/mock7' } },
  trk_8: { id: 'trk_8', title: 'Axé Quantum', artists: ['Bahia Beat'], isAiGenerated: false, links: { youtube: 'https://youtube.com/watch?v=mock8' } },
  trk_9: { id: 'trk_9', title: 'Drill Amazônia', artists: ['MC Norte'], isAiGenerated: false, links: { spotify: 'https://open.spotify.com/track/mock9' } },
  trk_10: { id: 'trk_10', title: 'Sertanejo Holográfico', artists: ['Dupla 5G'], isAiGenerated: false, links: { youtube: 'https://youtube.com/watch?v=mock10' } }
};

export function getTrackById(id: string): Track | null {
  return MOCK_TRACKS[id] ?? null;
}

