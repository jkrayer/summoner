import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import App from './app.jsx';
import AppControlBar from './app-control-bar.jsx';
import { connect } from 'react-redux';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <AppControlBar dispatch={dispatch} />
        <App {...this.props} />
      </div>
    );
  }
}

AppContainer.propTypes = {
  dispatch: React.PropTypes.func
};

// export default AppContainer;
function select(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AppContainer);
