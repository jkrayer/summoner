import { connect } from 'react-redux';
import TocWrapper from '../components/toc-wrapper';
import { SET_MONSTER_PANE_VISABILITY, SET_SELECTED_MONSTER } from '../redux/actions/action-constants';

function mapStateToProps(state) {
  return {
    monsters: state.monsters
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    setSelectedMonster: (monster) => {
      dispatch({
        type: SET_SELECTED_MONSTER,
        data: monster || null
      });
      dispatch({
        type: SET_MONSTER_PANE_VISABILITY,
        data: true
      });
    }
  };
}

const TocContainer = connect(mapStateToProps, mapDispatchToProps)(TocWrapper);

export default TocContainer;
