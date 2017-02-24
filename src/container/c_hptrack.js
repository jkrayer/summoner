import { connect } from 'react-redux';
import HpTrack from './hptrack';
import {
  DELETE_FROM_ENCOUNTER,
  SET_SELECTED_MONSTER,
  SET_MONSTER_PANE_VISABILITY,
  UPDATE_ENCOUNTER_MONSTER
} from '../redux/actions/action-constants';

function mapStateToProps(state) {
  return {
    encounter: state.encounter
  };
}

function mapDispatchToProps(dispatch) {
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
    },
    deleteMonster: (monster) => {
      dispatch({
        type: DELETE_FROM_ENCOUNTER,
        data: monster
      });
    },
    updateEncounter: (encounter) => {
      dispatch({
        type: UPDATE_ENCOUNTER_MONSTER,
        data: encounter
      });
    }
  };
}

const HpTrackContainer = connect(mapStateToProps, mapDispatchToProps)(HpTrack);

export default HpTrackContainer;
