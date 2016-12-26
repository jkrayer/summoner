import { connect } from 'react-redux';
import HpTrack from './hptrack';
import {
  SET_MODAL_VISABILITY,
  SET_MONSTER_PANE_VISABILITY
} from '../redux/actions/action-constants';

function mapStateToProps(state) {
  return {
    encounter: state.encounter
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const HpTrackContainer = connect(mapStateToProps, mapDispatchToProps)(HpTrack);

export default HpTrackContainer;
