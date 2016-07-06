'use strict';

import React from 'react';
import App from './app.jsx';
import InitialData from './../data/initial-data.json';

const AppContainer = React.createClass({
  getInitialState () {
    return {
      monsters: null
    };
  },
  getDefaultProps () {
    return {
      initialData: InitialData
    };
  },
  handleLoadData () {},
  handleSampleData () {
    this.setState({
      monsters: this.props.initialData
    });
  },
  render () {
    let app;
    let { monsters } = this.state;

    if (monsters) {
      app = (<App monsters={monsters} />);
    }
    else {
      // options use sample data
      // load local data - <button type="button" className="btn btn-primary" onClick={this.handleLoadData}>{"Load Local Data"}</button>
      app = (
        <div className="">
          <button type="button" className="btn" onClick={this.handleSampleData}>{"Use Sample Data"}</button>
        </div>
      );
    }

    return app;
  }
});

export default AppContainer;
