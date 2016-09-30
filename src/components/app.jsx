import React from 'react';
import TocContainer from './toc-container';
import Monster from './monster';
import style from '../style/global.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMonster: null };
    this.setSelectedMonster = this.setSelectedMonster.bind(this);
  }
  setSelectedMonster(key) {
    this.setState({
      selectedMonster: this.props.data[key] || null
    });
  }
  render() {
    const { data } = this.props;
    const { selectedMonster } = this.state;
    return (
      <div>
        <TocContainer
          buttonEvent={this.setSelectedMonster}
          data={data}
        />
        <Monster data={selectedMonster} />
      </div>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
