import { connect } from 'react-redux';
import HpTrack from './hptrack';
import {
  DELETE_FROM_ENCOUNTER,
  SET_SELECTED_MONSTER,
  SET_MONSTER_PANE_VISABILITY
} from '../redux/actions/action-constants';

function mapStateToProps(state) {
  return {
    encounter: state.encounter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //----------------------------------------
    setSelectedMonster: (monster) => {
      dispatch({
        type: SET_SELECTED_MONSTER,
        data: monster || null
      });
      dispatch({
        type: SET_MONSTER_PANE_VISABILITY,
        data: true
      });
    },
    //----------------------------------------
    deleteMonster: (monster) => {
      dispatch({
        type: DELETE_FROM_ENCOUNTER,
        monster
      });
    }
  };
}

const HpTrackContainer = connect(mapStateToProps, mapDispatchToProps)(HpTrack);

export default HpTrackContainer;
