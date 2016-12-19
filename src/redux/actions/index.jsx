// Actions
export const SET_SELECTED_MONSTER = 'SET_SELECTED_MONSTER';
export const SET_MONSTER_PANE_VISABILITY = 'SET_MONSTER_PANE_VISABILITY';

export function setSelectedMonster(monster) {
  return {
    type: SET_SELECTED_MONSTER,
    monster
  };
}

export function setMonsterPaneVisability(monsterPaneIsVisable) {
  return {
    type: SET_MONSTER_PANE_VISABILITY,
    monsterPaneIsVisable
  };
}


// Bound Action Creator
// Const boundAddTodo = (text) => dispatch(addTodo(text));
