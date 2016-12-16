import { initialState } from '../state';
import { MONSTER_TOGGLE_PANE, monsterTogglePane } from '../actions';

export default function appData(state = initialState, action) {
  switch (action.type) {
    case MONSTER_TOGGLE_PANE:
      return Object.assign({}, state, { monsterInPane: action.monster });
      break;
    default:
      return state;
      break;
  }
}
