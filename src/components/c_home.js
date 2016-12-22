import { connect } from 'react-redux';
import Home from './home';

function mapStateToProps(state) {
  return {
    modalIsVisible: state.modalIsVisible
  };
}

function mapDispatchToProps(dispatch) {
  return {}
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
