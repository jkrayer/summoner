import { connect } from 'react-redux';
import Modal from './modal';

import { SET_MODAL_VISABILITY } from '../redux/actions/action-constants';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    closeEvent: () => {
      dispatch({
        type: SET_MODAL_VISABILITY,
        data: false
      });
    }
  };
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
