import { LOAD_DATA, SHOW_MONSTER, USE_MONSTER, REMOVE_MONSTER } from './actions';

const initialState = {
  monsters: [],
  visibleStatBlock: null,
  visibleStatBlockId: -1,
  usedMonsters: []
};

function deleteById(array, id) {
  const length = array.length;
  const newArray = [];
  let i = 0;
  for (i; i < length; i++) {
    if (array[i].id === id) { continue; }
    newArray.push(array[i]);
  }
  return newArray;
}

function summonerApp(state = initialState, action) {
  const object = {};
  switch (action.type) {
    case LOAD_DATA:
      object.monsters = action.monsters;
      break;
    case SHOW_MONSTER:
      object.visibleStatBlock = action.visibleStatBlock;
      object.visibleStatBlockId = action.visibleStatBlockId;
      break;
    case USE_MONSTER:
      object.usedMonsters = state.usedMonsters.concat([action.monster]);
      break;
    case REMOVE_MONSTER:
      object.usedMonsters = deleteById(state.usedMonsters, action.id);
      break;
    default:
      break;
  }
  return Object.assign({}, state, object);
}

export default summonerApp;
