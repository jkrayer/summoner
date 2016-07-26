import React from 'react';
import LoadData from './load-data.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class AppControlBar extends React.Component {
  constructor() {
    super();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const { dispatch } = this.props;
    return (
      <header className="app-control-bar">
        <nav>
          {'Data: '} <LoadData dispatch={dispatch} />
        </nav>
      </header>
    );
  }
}

AppControlBar.propTypes = {
  dispatch: React.PropTypes.func
};
