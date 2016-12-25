import { connect } from 'react-redux';
import Home from './home';

import { SET_SLIDE_PANE_VISABILITY } from '../redux/actions/action-constants';

function mapStateToProps(state) {
  return {
    encounter: state.encounter,
    modalIsVisible: state.modalIsVisible,
    slidePanelVisable: state.slidePanelVisable
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeSlidePane: () => {
      dispatch({
        type: SET_SLIDE_PANE_VISABILITY,
        data: false
      });
    }
  };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
