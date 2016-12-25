import monsters from '../../data/5e-SRD-Monsters';

export const initialState = {
  encounter: [],
  modalIsVisible: false,
  monsterPaneIsVisable: false,
  monsters,
  selectedMonster: null,
  slidePanelVisable: false
};
