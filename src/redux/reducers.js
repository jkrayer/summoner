import { SHOW_MONSTER } from './actions';
import { USE_MONSTER } from './actions';
import Data from '../../../data/monsters';

const initialState = {
  allMonsters: Data,
  visibleStatBlock: null,
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

function summonerApp(state = initialState, action) {
  var usedMonsters;
  switch(action.type) {
    case SHOW_MONSTER:
      return Object.assign({}, state, {visibleStatBlock: getById(state.allMonsters, action.id)});
    break;
    case USE_MONSTER:
      usedMonsters = state.usedMonsters.concat([getById(state.allMonsters, action.id)]);
      return Object.assign({}, state, {usedMonsters: usedMonsters});
    break;
    default:
      return state;
    break;
  };
}

export default summonerApp;
