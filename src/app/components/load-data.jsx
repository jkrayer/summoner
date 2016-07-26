import React from 'react';
import InitialData from './../data/initial-data.json';

export default class LoadData extends React.Component {
  constructor(props) {
    super(props);
    this.handleSampleData = this.handleSampleData.bind(this);
    this.handleLoadFile = this.handleLoadFile.bind(this);
  }
  handleSampleData() {
    this.props.dispatch({
      type: 'LOAD_DATA',
      monsters: InitialData
    });
  }
  handleLoadFile(event) {
    const { dispatch } = this.props;
    const files = event.target.files;
    const file = files[0];
    const reader = new FileReader();

    reader.onload = function onload() {
      dispatch({
        type: 'LOAD_DATA',
        monsters: JSON.parse(this.result)
      });
    };
    reader.readAsText(file);
  }
  render() {
    return (
      <span>
        <button
          className="btn"
          onClick={this.handleSampleData}
          type="button"
        >{"Use Sample Data"}</button>
        <input
          onChange={this.handleLoadFile}
          type="file"
        />
      </span>
    );
  }
}

LoadData.propTypes = {
  dispatch: React.PropTypes.func
};
