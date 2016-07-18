import React from 'react';
import App from './app.jsx';
import LoadData from './load-data.jsx';
import { connect } from 'react-redux';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch, monsters } = this.props;
    let app;
    if (monsters.length > 0) {
      app = (<App {...this.props} />);
    } else {
      app = (<LoadData dispatch={dispatch} />);
    }
    return app;
  }
}

AppContainer.propTypes = {
  dispatch: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(React.PropTypes.shape({}))
};

// export default AppContainer;
function select(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AppContainer);
