import { SHOW_MONSTER } from './actions';
import Data from '../../../data/monsters';

const initialState = {
  allMonsters: Data,
  visibleStatBlock: null
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
  switch(action.type) {
    case SHOW_MONSTER:
      return Object.assign({}, state, {visibleStatBlock: getById(state.allMonsters, action.id)});
    break;
    default:
      return state;
    break;
  };
}

export default summonerApp;
