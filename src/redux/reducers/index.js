import { initialState } from '../state';
import { SET_SELECTED_MONSTER,
         setSelectedMonster
        } from '../actions';

export default function appData(state = initialState, action) {
  switch (action.type) {
      case SET_SELECTED_MONSTER:
        return Object.assign({}, state, { selectedMonster: action.monster });
        break;
    default:
      return state;
      break;
  }
}
