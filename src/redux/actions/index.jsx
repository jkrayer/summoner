// Actions
export const SET_SELECTED_MONSTER = 'SET_SELECTED_MONSTER';

export function setSelectedMonster(monster) {
  return {
    type: SET_SELECTED_MONSTER,
    monster
  };
}
// Bound Action Creator
// Const boundAddTodo = (text) => dispatch(addTodo(text));
