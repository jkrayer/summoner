'use strict';

export const LOAD_DATA = 'LOAD_DATA';
export const SHOW_MONSTER = 'SHOW_MONSTER';
export const USE_MONSTER = 'USE_MONSTER';
export const REMOVE_MONSTER = 'REMOVE_MONSTER';

export function loadData(object) {
  return { type: LOAD_DATA, object };
}

export function showMonster(object) {
  return { type: SHOW_MONSTER, object };
}

export function useMonster(object) {
  return { type: USE_MONSTER, object };
}

export function removeMonster(id) {
  return { type: REMOVE_MONSTER, id };
}
