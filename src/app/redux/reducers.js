import { LOAD_DATA, SHOW_MONSTER, USE_MONSTER, REMOVE_MONSTER, UPDATE_MONSTER } from './actions';

// better functional paradigm for these functions
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

function replaceById (array, monster) {
  const length = array.length;
  const newArray = [];
  for (let i = 0; i < length; i++) {
    if (array[i].id === monster.id) {
      newArray.push(monster);
    }
    newArray.push(array[i]);
  }
  return newArray;
}

function summonerApp(state, action) {
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
    case UPDATE_MONSTER:
      object.usedMonsters = replaceById(state.usedMonsters, action.monster);
      break;
    default:
      break;
  }
  return Object.assign({}, state, object);
}

export default summonerApp;
