import React from 'react';
import App from './app.jsx';
import { connect } from 'react-redux';
import InitialData from './../data/initial-data.json';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSampleData = this.handleSampleData.bind(this);
  }
  // on mounting check localData and use
  handleSampleData() {
    this.props.dispatch({
      type: 'LOAD_DATA',
      monsters: InitialData
    });
  }
  render() {
    const { monsters } = this.props;
    let app;
    if (monsters.length > 0) {
      app = (<App {...this.props} />);
    } else {
      // options use sample data
      // load local data - <button type="button" className="btn btn-primary"
      // onClick={this.handleLoadData}>{"Load Local Data"}</button>
      app = (
        <div className="">
          <button
            className="btn"
            onClick={this.handleSampleData}
            type="button"
          >{"Use Sample Data"}
          </button>
        </div>
      );
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
