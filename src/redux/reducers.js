import { SHOW_MONSTER } from './actions';
import Data from '../../../data/monsters';

const initialState = {
  allMonsters: Data,
  visibleStatBlock: null
};

function summonerApp(state = initialState, action) {
  switch(action.type) {
    case SHOW_MONSTER:
      return Object.assign({}, state, {visibleStatBlock: state.allMonsters[action.key]});
    break;
    default:
      return state;
    break;
  };
}

export default summonerApp;