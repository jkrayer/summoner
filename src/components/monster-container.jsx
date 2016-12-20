import { connect } from 'react-redux';
import Monster from './monster';
import {
  SET_MODAL_VISABILITY,
  SET_MONSTER_PANE_VISABILITY
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    data: state.selectedMonster,
    show: state.monsterPaneIsVisable
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddWindow: () => {
      dispatch({
        type: SET_MODAL_VISABILITY,
        data: true
      });
    },
    handleClosePane: () => {
      dispatch({
        type: SET_MONSTER_PANE_VISABILITY,
        data: false
      });
    }
  };
}

const MonsterContainer = connect(mapStateToProps, mapDispatchToProps)(Monster);

export default MonsterContainer;
