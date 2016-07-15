'use strict';

import { LOAD_DATA, SHOW_MONSTER, HIDE_MONSTER, USE_MONSTER, REMOVE_MONSTER } from './actions';

const initialState = {
  monsters: [],
  visibleStatBlock: null,
  visibleStatBlockId: -1,
  usedMonsters: []
};

function getById (array, id) {
  let i = 0;
  let length = array.length;
  for (i; i < length; i++) {
    if (array[i].id === id) { return array[i]; }
  }
  return null;
}

function deleteById (array, id) {
  let i = 0;
  let length = array.length;
  let newArray = [];
  for (i; i < length; i++) {
    if (array[i].id === id) { continue; }
    newArray.push(array[i]);
  }
  return newArray;
}

function summonerApp(state = initialState, action) {
  var usedMonsters;
  switch(action.type) {
    case LOAD_DATA:
      return Object.assign({}, state, { monsters: action.monsters });
    break;
    case SHOW_MONSTER:
      return Object.assign({}, state, { visibleStatBlock: action.visibleStatBlock, visibleStatBlockId: action.visibleStatBlockId });
    break;
    case USE_MONSTER:
      usedMonsters = state.usedMonsters.concat([action.monster]);
      return Object.assign({}, state, {usedMonsters: usedMonsters});
    break;
    case REMOVE_MONSTER:
      usedMonsters = deleteById(state.usedMonsters, action.id);
      return Object.assign({}, state, {usedMonsters: usedMonsters});
    break;
    default:
      return state;
    break;
  };
}

export default summonerApp;
