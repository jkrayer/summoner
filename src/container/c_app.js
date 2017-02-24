import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    encounter: state.encounter
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
