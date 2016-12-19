import Monster from './monster';
import { connect } from 'react-redux';
import { SET_MONSTER_PANE_VISABILITY } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    data: state.selectedMonster,
    show: state.monsterPaneIsVisable
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddWindow: () => {},
    handleClosePane: () => {
      dispatch({
        type: SET_MONSTER_PANE_VISABILITY,
        data: false
      });
    }
  };
};

const MonsterContainer = connect(mapStateToProps, mapDispatchToProps)(Monster);

export default MonsterContainer;
