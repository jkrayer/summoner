import { initialState } from '../state';
import { SET_SELECTED_MONSTER,
         SET_MODAL_VISABILITY,
         SET_MONSTER_PANE_VISABILITY,
         SET_SLIDE_PANE_VISABILITY,
         ADD_ENCOUNTER_MONSTER,
         DELETE_FROM_ENCOUNTER
       } from '../actions/action-constants';

export default function appData(state = initialState, action) {
  var encounter;
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
    case ADD_ENCOUNTER_MONSTER:
      encounter = [].concat(state.encounter, [action.data]);
      return Object.assign({}, state, {encounter});
      break;
    case SET_SLIDE_PANE_VISABILITY:
      return Object.assign({}, state, { slidePanelVisable: action.data });
      break;
    case DELETE_FROM_ENCOUNTER:
      return Object.assign({}, state, {encounter: state.encounter.filter(e => e.arrayIndex !== action.monster.arrayIndex) });
      break;
//    case DEL_MONSTER_PANE_VISABILITY:
//      encounter = state.encounter.slice(index, 1);
//      return Object.assign({}, state, {encounter});
//      break;
    default:
      return state;
      break;
  }
}
