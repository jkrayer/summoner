import { initialState } from '../state';
import { SET_SELECTED_MONSTER,
         SET_MODAL_VISABILITY,
         SET_MONSTER_PANE_VISABILITY
       } from '../actions';

export default function appData(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_MONSTER:
      return Object.assign({}, state, { selectedMonster: action.data });
      break;
    case SET_MODAL_VISABILITY:
      return Object.assign({}, state, { modalIsVisible: action.data });
      break;
    case SET_MONSTER_PANE_VISABILITY:
      return Object.assign({}, state, { monsterPaneIsVisable: action.data });
      break;
    default:
      return state;
      break;
  }
}
