// Actions
import { SET_SELECTED_MONSTER,
         SET_MODAL_VISABILITY,
         SET_MONSTER_PANE_VISABILITY,
         SET_SLIDE_PANE_VISABILITY,
         ADD_ENCOUNTER_MONSTER,
         DELETE_FROM_ENCOUNTER,
         UPDATE_ENCOUNTER_MONSTER
       } from '../actions/action-constants';

export function setSelectedMonster(monster) {
  return {
    type: SET_SELECTED_MONSTER,
    monster
  };
}

export function setModalVisability(modalIsVisible) {
  return {
    type: SET_MODAL_VISABILITY,
    modalIsVisible
  };
}

export function setMonsterPaneVisability(monsterPaneIsVisable) {
  return {
    type: SET_MONSTER_PANE_VISABILITY,
    monsterPaneIsVisable
  };
}

export function addEncounterMonster(monster) {
  return {
    type: SET_MONSTER_PANE_VISABILITY,
    monster
  };
}

export function addEncounterMonster(data) {
  return {
    type: SET_SLIDE_PANE_VISABILITY,
    data
  };
}

export function deleteFromEncounter(data) {
  return {
    type: DELETE_FROM_ENCOUNTER,
    data
  };
}

export function updateEncounterMonster(data) {
  return {
    type: UPDATE_ENCOUNTER_MONSTER,
    data
  };
}

//export function delEncounterMonster(monster) {
//  return {
//    type: DEL_MONSTER_PANE_VISABILITY,
//    monster
//  };
//}
