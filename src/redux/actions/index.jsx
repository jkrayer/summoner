// Actions
export const MONSTER_TOGGLE_PANE = 'MONSTER_TOGGLE_PANE';

export function monsterTogglePane(monster) {
  return {
    type: MONSTER_TOGGLE_PANE,
    monster
  };
}

// Bound Action Creator
// Const boundAddTodo = (text) => dispatch(addTodo(text));
