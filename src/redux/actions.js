export const SHOW_MONSTER = 'SHOW_MONSTER';
export const USE_MONSTER = 'USE_MONSTER';

export function showMonster(object) {
  return { type: SHOW_MONSTER, object };
}

export function useMonster(object) {
  return { type: USE_MONSTER, object };
}
