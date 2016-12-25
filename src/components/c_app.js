import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    monsters: state.monsters
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
