import { initialState } from '../state';
import { SET_SELECTED_MONSTER,
         SET_MODAL_VISABILITY,
         SET_MONSTER_PANE_VISABILITY,
         SET_SLIDE_PANE_VISABILITY,
         ADD_ENCOUNTER_MONSTER,
         DELETE_FROM_ENCOUNTER,
         UPDATE_ENCOUNTER_MONSTER
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
      return Object.assign({}, state, {encounter: state.encounter.filter(e => e.monster.arrayIndex !== action.data.monster.arrayIndex) });
      break;
    case UPDATE_ENCOUNTER_MONSTER:
      return Object.assign({}, state, { encounter: action.data });
      break;
    default:
      return state;
      break;
  }
}
