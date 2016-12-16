import monsters from '../../data/5e-SRD-Monsters';

export const initialState = {
  encounter: [],
  modalShow: false,
  monsters,
  selectedFilter: 'Name',
  selectedMonster: false
};
