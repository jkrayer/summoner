import { connect } from 'react-redux';
import AddMonster from './add-monster';

import { ADD_ENCOUNTER_MONSTER, SET_MODAL_VISABILITY } from '../redux/actions/action-constants';

function mapStateToProps(state) {
  return {
    monster: state.selectedMonster
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddMonster: (data) => {
      dispatch({
        type: ADD_ENCOUNTER_MONSTER,
        data
      });
      dispatch({
        type: SET_MODAL_VISABILITY,
        data: false
      });
    }
  };
}

const AddMonsterContainer = connect(mapStateToProps, mapDispatchToProps)(AddMonster);

export default AddMonsterContainer;
