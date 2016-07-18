import React from 'react';
import InitialData from './../data/initial-data.json';

export default class LoadData extends React.Component {
  constructor(props) {
    super(props);
    this.handleSampleData = this.handleSampleData.bind(this);
  }
  handleSampleData() {
    this.props.dispatch({
      type: 'LOAD_DATA',
      monsters: InitialData
    });
  }
  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={this.handleSampleData}
          type="button"
        >{"Use Sample Data"}</button>
      </div>
    );
  }
}

LoadData.propTypes = {
  dispatch: React.PropTypes.func
};
