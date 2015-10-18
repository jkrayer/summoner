import { SHOW_MONSTER } from './actions';
import Data from '../../../data/monsters';

const initialState = {
  monsters: Data,
  visibleStatBlock: {}
};

function summonerApp(state = initialState, action) {
  switch(action.type) {
    case SHOW_MONSTER:
      return Object.assign({}, state, {visibleStatBlock: state.monsters[action.key]});
    break;
    default:
      return state;
    break;
  };
}

export default summonerApp;